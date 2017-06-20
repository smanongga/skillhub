const bodyParser = require('body-parser')
const express = require('express')
const verifyJwt = require('express-jwt')


const auth = require('../lib/auth.js')
const jwt = require('jsonwebtoken')
const db = require('../db')

const config = require('../../knexfile')[process.env.NODE_ENV || 'development']
const conn = require('knex')(config)

const router = express.Router()
router.use(bodyParser.json())

function getSecret (req, payload, done) {
  done(null, process.env.JWT_SECRET)
}

router.get('/sent/:id', (req, res) => {
  const connection = req.app.get('db')
  db.getSentMessages(Number(req.params.id), connection)
  .then((data) => {
    res.json({result: data})
  })
})

router.post('/auth', (req, res) => {
  jwt.verify(req.body.authToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log(err)
    }
    db.profileExists(conn, decoded.sub)
      .then((exists) => {
        if (exists.length !== 0) {
          return res.status(200).send({
            firstLogin: false
          })
        }
        db.addUserToProfile(conn, decoded.sub, req.body.user, req.body.email)
          .then((result) => {
            res.status('200').send({
              firstLogin: true
            })
          })
      })
  })
})

router.post('/contact', (req, res) => {
  db.addMessage(req.body, conn)
  .then((result) => {
    res.send(result)
  })
})

router.get('/categories', (req, res) => {
  const connection = req.app.get('db')
  db.getCategories(connection)
  .then((data) => {
    res.json({result: data})
  })
})

router.get('/offer/:categoryid', (req, res) => {
  const connection = req.app.get('db')
  const id = req.params.categoryid
  db.filterSkillsToOffer(connection, id)
  .then((result) => {
    res.json({result})
  })
})

router.get('/learn/:categoryid', (req, res) => {
  const connection = req.app.get('db')
  const id = req.params.categoryid
  db.filterSkillsToLearn(connection, id)
  .then((result) => {
    res.json({result})
  })
})

router.post('/readmessage', (req, res) => {
  db.readMessage(conn, req.body)
  .then()
})

router.get('/categories', (req, res) => {
  const connection = req.app.get('db')
  db.getCategories(connection)
  .then((data) => {
    res.json({result: data})
  })
})

router.post('/categories/skills-offered', (req, res) => {
  db.insertSkillsToOffer(conn, req.body, req.user.sub)
   .then((data) => {
     res.json({result: data})
   })
})

router.post('/categories/skills-learn', (req, res) => {
  db.insertSkillsToLearn(conn, req.body, req.user.sub)
   .then((data) => {
     res.json({result: data})
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

router.get('/messages', (req, res) => {
  const connection = req.app.get('db')
  db.getMessages(req.user.sub, connection)
  .then((data) => {
    res.json({result: data})
  })
})

router.get('/feedback/', (req, res) => {
  const connection = req.app.get('db')
  db.getFeedback(Object.keys(req.query)[0], connection)
  .then((data) => {
    res.json({result: data})
  })
})

router.get('/sent/', (req, res) => {
  const connection = req.app.get('db')
  db.getSentMessages(req.user.sub, connection)
  .then((data) => {
    res.json({result: data})
  })
})

router.post('/contact', (req, res) => {
  db.addMessage(req.body, conn)
  .then((result) => {
    res.send(result)
  })
})

router.get('/profile/edit/skills', (req, res) => {
  db.getSkills(conn)
  .then((data) => {
    res.json({result: data})
  })
})

router.get('/profile/edit', (req, res) => {
  db.getSkills(conn)
  db.getLocations(conn)
  .then((data) => {
    res.json({result: data})
  })
})

router.put('/profile/edit', (req, res) => {
  db.updateProfile(conn, req.body, req.user.sub)
  .then((result) => {
    res.status('200')
  })
})

router.post('/profile/skills-offered', (req, res) => {
  db.insertSkillsToOffer(conn, req.body, req.user.sub)
   .then((data) => {
     res.json({result: data})
   })
})

router.post('/profile/skills-learn', (req, res) => {
  db.insertSkillsToLearn(conn, req.body, req.user.sub)
   .then((data) => {
     res.json({result: data})
   })
})

router.get('/profile', (req, res) => {
  const connection = req.app.get('db')
  db.getOwnProfile(req.user.sub, connection)
  .then((data) => {
    res.json({result: data})
  })
})

router.get('/profiles/:id', (req, res) => {
  const connection = req.app.get('db')
  db.getOtherProfileById(Number(req.params.id), connection)
  .then((data) => {
    res.json({result: data})
  })
})

module.exports = router
