const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const chalk = require('chalk')

const app = express()
app.use(bodyParser.json())

// Store all incoming events
const events = []

app.post('/events', (req, res) => {
  const event = req.body

  events.push(event)

  axios.post('http://localhost:4000/events', event)
  axios.post('http://localhost:4001/events', event)
  axios.post('http://localhost:4002/events', event)
  axios.post('http://localhost:4003/events', event)

  res.send({ status: 'OK' })
})

app.get('/events', (req, res) => {
  res.status(200).send(events)
})

app.listen(4005, error => {
  if (error) {
    console.log(chalk.red('Server cannot run!'))
  }
  console.log(chalk.green('Listening on port 4005...'))
})