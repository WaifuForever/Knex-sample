
exports.up = knex => knex.schema.createTable('pilots', table => {
    table.increments('pilot_id')
    table.text('pilotLicense').notNullable()
    table.text('name').notNullable()
    table.text('country_id').notNullable()

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
})
  

exports.down = knex => knex.schema.dropTable('pilots', function(table){
      
})

