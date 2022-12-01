const express = require('express')
const demorouter = require('./demorouter')
const router = express.Router()
const homerouter = require('./homerouter')

router.use('/home', homerouter)
router.use('/index', homerouter)
router.use('/demo', demorouter)

module.exports = router