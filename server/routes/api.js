const bodyParser = require('body-parser')
const express = require('express')
const verifyJwt = require('express-jwt')
const db = require('../db')
const users = require('../lib/users')
const auth = require('../lib/auth.js')

const config = require('../../knexfile')[process.env.NODE_ENV || 'development']
const conn = require('knex')(config)

const router = express.Router()
router.use(bodyParser.json())

// This is the only API route that uses local strategy,
// to check if we can issue a JWT in response to requests.
router.post('/authenticate', auth.issueJwt)

router.post('/register',
  register,
  auth.issueJwt
)

function register (req, res, next) {
  users.exists(req.body.username)
    .then(exists => {
      if (exists) {
        return res.status(400).send({ message: 'User exists' })
      }
      // req.login() can be used to automatically log the user in after registering
      users.create(req.body.username, req.body.password)
        .then(() => next())
    })
    .catch(err => {
      res.status(400).send({ message: err.message })
    })
}

// express-jwt middleware lets us use a function as the secret,
// so we can grab from wherever...
function getSecret (req, payload, done) {
  done(null, process.env.JWT_SECRET)
}

// This route will set the req.user object if it exists, but is still public
router.get('/quote',
  verifyJwt({
    credentialsRequired: false,
    secret: getSecret
  }),
  (req, res) => {
    const response = { message: 'This is a PUBLIC quote.' }
    if (req.user) {
      response.user = `Your user ID is: ${req.user.id}`
    }
    res.json(response)
  }
)
router.post('/profiletest', (req, res) => {
  db.profileExists(conn, req.body.auth_id)
  .then((exists) => {
    console.log(exists)
    if (exists.length !== 0) {
      return res.status(403).json({
        message: 'Registration failed',
        info: 'User already exists.'
      })
    }
    db.addUserToProfile(conn, req.body)
  .then((result) => {
    res.send(result)
  })
  })
})

// db.getUserByName(user.username, connection)
//     .then((users) => {
//       if (users.length !== 0) {
//         return res.status(403).json({
//           message: 'Registration failed',
//           info: 'User already exists.'
//         })
//       }

//       db.addUser(user, connection)
//         .then((id) => {
//           user.id = id[0]
//           callback(user, res)
//         })
//     })
//     .catch(() => {
//       return res.status(500).json({
//         message: 'Authentication failed due to a server error.',
//         info: 'Unable to save user into database'
//       })
//     })
// }

// Protect all routes beneath this point
router.use(
  verifyJwt({
    secret: getSecret
  }),
  auth.handleError
)

// These routes are protected
router.get('/secret', (req, res) => {
  res.json({
    message: 'This is a SECRET quote.',
    user: `Your user ID is: ${req.user.id}`
  })
})

module.exports = router
