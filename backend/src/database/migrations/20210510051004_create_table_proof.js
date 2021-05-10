
exports.up = knex => knex.schema.createTable('proof', table => {
    table.increments('proof_id')
    table.integer('year').notNullable()
    table.text('name').notNullable()
    table.integer('happened').notNullable()
    table.integer('country_id').notNullable()

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
})
  

exports.down = knex => knex.schema.dropTable('proof', function(table){
      
})

