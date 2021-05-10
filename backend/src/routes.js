const express = require('express');
const routes = express.Router()

const PilotController = require('./controllers/PilotController')
const TeamController = require('./controllers/TeamController')


routes.get('/', (req, res) => {
    return res.json("Hello World");
});

routes.post('/teams', TeamController.store);

routes.post('/pilots', PilotController.store);

routes.get('/teams', TeamController.index);

routes.get('/pilots', PilotController.index);


module.exports = routes;