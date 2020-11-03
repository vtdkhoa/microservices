const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const chalk = require('chalk')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const posts = {}

app.get('/posts', (req, res) => {
  res.status(200).send(posts)
})

app.post('/events', (req, res) => {
  const { type, data } = req.body

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
    const { id, content, postId } = data
    const post = posts[postId]

    post.comments.push({ id, content })
  }

  res.send({})
})

app.listen(4002, error => {
  if (error) {
    console.log(chalk.red('Server cannot run!'))
  }
  console.log(chalk.green('Listening on port 4002...'))
})