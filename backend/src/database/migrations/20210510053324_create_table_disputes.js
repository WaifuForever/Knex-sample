
exports.up = knex => knex.schema.createTable('disputes', table => {
    table.increments('dispute_id')    
    table.integer("placing").notNullable().unique()
    table.integer("team_id").notNullable().unique()
    
    table.specificType('pilots_id', 'INT[]');
    table.specificType('circuits_id', 'INT[]');
   

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
})
  

exports.down = knex => knex.schema.dropTable('disputes', function(table){
      
})

