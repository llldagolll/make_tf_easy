const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.send('hello')
})

router.get('/postAllData', function (req, res, next) {
  console.log("start GET-----------------------------------")
  console.log(req)
  console.log("start GET------------------------------------")
})

router.post('/postAllData', function (req, res, next) {
  console.log("start POST-----------------------------------")
  console.log(req.body)
  console.log("start POST------------------------------------")
  res.send('Hello')
})

module.exports = router;
