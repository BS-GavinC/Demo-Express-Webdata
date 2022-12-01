const express = require('express')
const demorouter = express.Router()

demorouter.get('/', (req, res) => {
    console.log('je suis la demo');
    res.status(200).end()
})

demorouter.get('/1', (req, res) => {
    console.log('je suis la demo numero uno');
    res.status(200).end()
})

module.exports = demorouter