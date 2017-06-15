const path = require('path')
const express = require('express')
const passport = require('passport')
const LocalStrategy = require('passport-local')

const auth = require('./lib/auth')
const apiRoutes = require('./routes/api')

const server = express()

server.use(express.static('public'))
server.use(passport.initialize())

server.use('/api/v1/', apiRoutes)

server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = function (db) {
  server.set('db', db)
  return server
}
