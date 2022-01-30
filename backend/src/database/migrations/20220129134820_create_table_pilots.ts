import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('pilots', (table: Knex.TableBuilder) => {
        table.uuid('_id').primary().notNullable().unique();
        table.string('name').notNullable();

        table
            .uuid('country_id')
            .notNullable()
            .references('_id')
            .inTable('countries');
        table.uuid('team_id').notNullable().references('_id').inTable('teams');

        table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {}
