const express = require('express');

const routes = express.Router()

const knex = require('./database')

routes.get('/', (req, res) => {
    return res.json("Hello World");

});

routes.get('/teams', (req, res) => {
    knex('teams').then((result) => {
        console.log(result)
        res.json(result)
    })
})


module.exports = routes;