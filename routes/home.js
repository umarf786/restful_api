//Import express and setup express router for use
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('You are on the homepage');
});

module.exports = router;
