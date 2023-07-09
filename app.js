/* eslint-disable no-undef */
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./src/routes/routes')




const app = express()

app.use(express.json())

app.use(cors('*'))

mongoose.connect('mongodb+srv://jrsprog:jrsprog2023@cluster0.a2p4w.mongodb.net/jrshoud')
  .then(() => console.log('Connect in Database'))
  .catch((err) => console.log('Error: ' + err))

app.use(routes)

module.exports = app
