import knex from 'knex';
import config from './config/knex.config';

const db = knex(config[process.env.NODE_ENV! || 'dev']);

export default db;
