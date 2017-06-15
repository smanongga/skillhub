const jwt = require('jsonwebtoken')
const passport = require('passport')

const users = require('./users')

function createToken (user, secret) {
  return jwt.sign({
    id: user.id,
    username: user.username
  }, secret, {
    expiresIn: 60 * 60 * 24
  })
}

function handleError (err, req, res, next) {
  if (err) {
    return res.status(403).json({
      message: 'Access to this resource was denied.',
      error: err.message
    })
  }
  next()
}

function issueJwt (req, res, next) {
  passport.authenticate(
    'local',
    (err, user, info) => {
      if (err) {
        return res.status(500).json({
          message: 'Authentication failed due to a server error.'
        })
      }

      if (!user) {
        return res.status(403).json({
          message: 'Authentication failed.',
          info: info.message
        })
      }

      const token = createToken(user, process.env.JWT_SECRET)
      res.json({
        message: 'Authentication successful.',
        token
      })
    }
  )(req, res, next)
}

module.exports = {
  handleError,
  issueJwt
}
