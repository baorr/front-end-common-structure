const express = require('express')
const router = express.Router()
const invite = require('./api/invite')


router.post('/', invite);
router.get('/', function (req, res) {
  res.send('About birds')
})

module.exports = router