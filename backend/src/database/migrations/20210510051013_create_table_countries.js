
exports.up = knex => knex.schema.createTable('countries', table => {
    table.increments('country_id')    
    table.text('name').notNullable()
   
})
  

exports.down = knex => knex.schema.dropTable('countries', function(table){
      
})

