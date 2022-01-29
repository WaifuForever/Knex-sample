import { Knex } from 'knex';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.dev' });

const extension =
    process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'dev'
        ? 'js'
        : 'ts';

interface IKnexConfig {
    [key: string]: Knex.Config;
}

const connection = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/`;
console.log(connection);
const config: IKnexConfig = {
    dev: {
        client: 'pg',
        connection: connection + `${process.env.DB_NAME}`,
        migrations: {
            directory: '../migrations',
            disableMigrationsListValidation: true,
            loadExtensions: [`.${extension}`],
        },
        seeds: { directory: '../seeds' },
        debug: true,
    },

    test: {
        client: 'pg',
        connection: connection + `${process.env.DB_TEST_NAME}`,
        migrations: {
            directory: '../migrations',
        },
        seeds: { directory: '../seeds' },
        debug: true,
    },

    prod: {
        client: 'pg',
        connection: connection + `${process.env.DB_NAME}`,
        migrations: {
            directory: '../migrations',
        },
        seeds: { directory: '../seeds' },
    },
};

export = config;
