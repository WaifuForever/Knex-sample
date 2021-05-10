const express = require('express');
const routes = express.Router()

const PilotController = require('./controllers/PilotController')
const TeamController = require('./controllers/TeamController')


routes.get('/', (req, res) => {
    return res.json("Hello World");

});

routes.get('/teams', (req, res) => {
    TeamController.index()
})

routes.get('/pilots', (req, res) => {
    PilotController.index()
})

module.exports = routes;