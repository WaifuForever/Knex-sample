import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(
        'championships',
        (table: Knex.TableBuilder) => {
            table.uuid('_id').primary().notNullable().unique();

            table.integer('placing').notNullable();

            table
                .uuid('team_id')
                .notNullable()
                .references('_id')
                .inTable('teams');
            table
                .uuid('circuit_id')
                .notNullable()
                .references('_id')
                .inTable('circuits');

            table.timestamps(true, true);
        },
    );
}

export async function down(knex: Knex): Promise<void> {}
