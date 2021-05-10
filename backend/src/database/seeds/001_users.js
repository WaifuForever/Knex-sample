
exports.seed = function(knex) {
  return knex.schema.hasTable('teams').then(function(exists) {
    if (!exists) {
      knex.schema.createTable('teams', table => {
        table.increments('team_id')
        table.text('name').notNullable()    
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
      });
      console.log('doesnt exists')
      return knex('teams').insert([
        { name: 'rowValue1' },
        { name: 'rowValue2' },
        { name: 'rowValue3' }
      ]);
      
    }
    else {
      console.log('exists')
      // Deletes ALL existing entries
      return knex('teams').del().then(function() {
        // Inserts seed entries
        return knex('teams').insert([
          { name: 'rowValue1' },
          { name: 'rowValue2' },
          { name: 'rowValue3' }
        ]);
       
      });
      
    }
  });
}
  
