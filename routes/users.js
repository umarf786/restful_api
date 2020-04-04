const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('You are on the users homepage')
})

module.exports = router;