const express = require('express')
const bodyParser = require('body-parser')
const verifyJWT = require('express-jwt')

const db = require('./db')
const auth = require('./auth')

const router = express.Router()
router.use(bodyParser.json())

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
//  bio: "Hi, I'm Tony. Looking forward to learning with you"
//    skillsToTeach['car repair', 'baking']
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
