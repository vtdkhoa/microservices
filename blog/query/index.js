const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')
const chalk = require('chalk')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const posts = {}

const handleEvent = (type, data) => {
  if (type === 'PostCreated') {
    const { id, title, content } = data
    posts[id] = {
      id,
      title,
      content,
      comments: []
    }
  }

  if (type === 'CommentCreated') {
    const { id, content, postId, status } = data
    const post = posts[postId]

    post.comments.push({ id, content, status })
  }

  if (type === 'CommentUpdated') {
    const { id, postId, status, content } = data

    const post = posts[postId]
    const comment = post.comments.find(comment => {
      return comment.id === id
    })

    comment.status = status
    comment.content = content
  }
}

app.get('/posts', (req, res) => {
  res.status(200).send(posts)
})

app.post('/events', (req, res) => {
  const { type, data } = req.body
  handleEvent(type, data)

  res.send({})
})

app.listen(4002, async error => {
  if (error) {
    console.log(chalk.red('Server cannot run!'))
  }
  console.log(chalk.green('Listening on port 4002...'))

  const response = await axios.get('http://localhost:4005/events')

  for (let event of response.data) {
    console.log('Processing event:', event.type)
    handleEvent(event.type, event.data)
  }
})