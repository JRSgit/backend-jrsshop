/* eslint-disable no-undef */
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./src/routes/routes')

const app = express()

app.use(express.json())



mongoose.connect('mongodb+srv://jrsprog:198320jrs@cluster0.a2p4w.mongodb.net/jrshoud')
  .then(() => console.log('Connect in Database '))
  .catch((err) => console.log('Error: ' + err))



app.use(cors({ origin: "*", allowedHeaders: '*' }))
app.use(routes)

module.exports = app
