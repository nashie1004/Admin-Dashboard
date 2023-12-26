const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('discover')
})
// define the about route
// router.get('/discover', (req, res) => {
//   res.send('Discover')
// })
// // define the about route
// router.get('/manage', (req, res) => {
//   res.send('manage')
// })

module.exports = router