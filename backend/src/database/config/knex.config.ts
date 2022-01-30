import { Knex } from 'knex';
interface IKnexConfig {
    [key: string]: Knex.Config;
}

const connection = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/`;
console.log(connection)
const config: IKnexConfig = {
    dev: {
        client: 'pg',
        connection: connection + `${process.env.DB_NAME}`,
        migrations: {
            directory: '../migrations',
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

export default config;
