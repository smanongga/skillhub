const bodyParser = require('body-parser')
const express = require('express')
const verifyJwt = require('express-jwt')
const db = require('../db')
const users = require('../lib/users')
const auth = require('../lib/auth.js')
const jwt = require('jsonwebtoken')

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
router.post('/auth', (req, res) => {
  jwt.verify(req.body.authToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log(err)
    }
    db.profileExists(conn, decoded.sub)
      .then((exists) => {
        console.log(exists)
        if (exists.length !== 0) {
          return res.status(200).send({
            firstLogin: false
          })
        }
        db.addUserToProfile(conn, decoded.sub)
          .then((result) => {
            res.status('200').send({
              firstLogin: true
            })
          })
      })
  })
})

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

router.post('/profile/edit', (req, res) => {
  db.updateProfile(conn, req.body, req.user.sub)
  .then((result) => {
    res.status('200')
  })
})

router.get('/profile/:id', (req, res) => {
  const connection = req.app.get('db')
  db.getProfileById(Number(req.params.id), connection)
  .then((data) => {
    res.json({result: data})
  })
})
// Expecting this type of data back:
// { id: 1,
//  name: tony
//  photo_url: 'www.Tonyphoto.com'
//  bio: “Hi, I'm Tony. Looking forward to learning with you”
//    skillsToOffer['car repair', 'baking']
//    skillsToLearn['guitar','javascript']
//    feedback[{
//               commenter_username: 'Jim'
//               commenter_photo_url: 'www.photo/132.png'
//               comment: 'Tony was great at teaching my how to bake a cake!'
//            }]
// }

router.get('/categories', (req, res) => {
  const connection = req.app.get('db')
  db.getCategories(connection)
  .then((data) => {
    res.json({result: data})
  })
})
// Expecting this type of data back:
// [
//    { id: 1, name: 'Music'}
//    { id: 2, name: 'Web Development'}
//    { id: 3, name: 'Art and Design'}
// ]

// GET /pofiles/skills/:name
// Needs to return profile object with array of skills:
// { id: 1,
//  name: tony
//    skillsToLearn['guitar','javascript']
// }

// GET /pofiles/skills/:name
// Needs to return profile object with array of skills:
// { id: 1,
//  name: tony
//    skillsToLearn['guitar','javascript']
// }

module.exports = router
