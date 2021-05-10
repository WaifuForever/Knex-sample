const express = require('express');

const routes = express.Router()


routes.get('/', (req, res) => {
    return res.jsonOK( null, "Hello World", null);

});
module.exports = routes;