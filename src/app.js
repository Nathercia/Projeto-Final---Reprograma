require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('./database/mongooseConnect')
const abrigosRouter = require('./routes/abrigosRouter')
const petsRouter = require('./routes/petsRouter')
const usuariosRouter = require('./routes/usuariosRouter')

const app = express()

app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*")
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use(express.json())
app.use(cors())

mongoose.connect()

app.use(abrigosRouter)
app.use(petsRouter)
app.use(usuariosRouter)


module.exports = app

