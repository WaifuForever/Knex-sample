
exports.up = knex => knex.schema.createTable('teams', table => {
    table.increments('team_id')
    table.text('name').notNullable()

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
})
  

exports.down = knex => knex.schema.dropTable('teams', function(table){
      
})

