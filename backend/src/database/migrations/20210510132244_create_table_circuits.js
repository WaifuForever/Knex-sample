
exports.up = knex => knex.schema.createTable('circuits', table => {
    table.increments('circuit_id')    
    table.text('name').notNullable()
    table.integer("year").notNullable()
        
    table.integer("country_id").notNullable()

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
})
  

exports.down = knex => knex.schema.dropTable('circuits', function(table){
      
})

