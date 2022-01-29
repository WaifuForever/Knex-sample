import knex from 'knex';
const { config } = require('./knexfile');

const db = knex(config[process.env.NODE_ENV || 'dev']);

export default db;
