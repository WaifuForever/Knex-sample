
exports.up = knex => knex.schema.createTable('countries', table => {
    table.increments('country_id')    
    table.text('name').notNullable()
    
    table.specificType('circuits_id',  'INT[]');
    table.specificType('pilots_id',  'INT[]');

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
})
  

exports.down = knex => knex.schema.dropTable('countries', function(table){
      
})
