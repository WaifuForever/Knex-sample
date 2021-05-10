
exports.up = knex => knex.schema.createTable('championship', table => {
    
    table.integer("placing").notNullable()

    table.integer("team_id").notNullable()
    table.integer("circuit_id").notNullable()
   
   

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
})
  

exports.down = knex => knex.schema.dropTable('championship', function(table){
      
})

