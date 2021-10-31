const express = require('express')
const router = express.Router()
const routes = require('./routes/tasks')
router.route('/').get((req, res) => {
    res.send('All Items')
})
module.exports = router