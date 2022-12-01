const express = require('express')
const homerouter = express.Router()
const homeController = require('../controllers/homeController')


homerouter.get('/', homeController.get_index)


homerouter.get('/:id([0-9]+)', (req, res) => {
    console.log('je suis home et mon id est ' + req.params.id);
    res.status(200).end()
})

homerouter.get('/:name([a-zA-Z]+)', (req, res) => {
    console.log('je suis home et mon nom est ' + req.params.name);
    res.status(200).end()
})

module.exports = homerouter