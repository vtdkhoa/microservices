const express = require('express')
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')
const cors = require('cors')
const axios = require('axios')
const chalk = require('chalk')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const posts = {}

app.get('/posts', (req, res) => {
  res.status(200).send(posts)
})

app.post('/posts', async (req, res) => {
  const id = randomBytes(5).toString('hex')
  const { title, content } = req.body
  posts[id] = { id, title, content }

  await axios.post('http://localhost:4005/events', {
    type: 'PostCreated',
    data: { id, title, content }
  })

  res.status(201).send(posts[id])
})

app.post('/events', (req, res) => {
  console.log('Received Event', req.body.type)

  res.send({})
})

app.listen(4000, error => {
  if (error) {
    console.log(chalk.red('Server cannot run!'))
  }
  console.log(chalk.green('Listening on port 4000...'))
})