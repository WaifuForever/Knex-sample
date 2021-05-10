require('dotenv').config()
const express = require('express');


const app = express();
const server = require('http').Server(app);

//app.use(response);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));
server.listen(3333, () => {
    console.log(`Listening on port 3333`);
});

