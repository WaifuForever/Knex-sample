
exports.seed = knex => 
  knex.schema.hasTable('teams').then(exists => {
    if (!exists) {
      knex.schema.createTable('users', table => {
        table.increments('team_id')
        table.text('name').notNullable()    
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
      });
      knex('teams').insert([
        {id: 1, name: 'rowValue1'},
        {id: 2, name: 'rowValue2'},
        {id: 3, name: 'rowValue3'}
      ]);
    }
    else {
      // Deletes ALL existing entries
      knex('teams').del().then(() => {
        // Inserts seed entries
        knex('teams').insert([
          {id: 1, name: 'rowValue1'},
          {id: 2, name: 'rowValue2'},
          {id: 3, name: 'rowValue3'}
        ]);
      });
    }
  });
  
