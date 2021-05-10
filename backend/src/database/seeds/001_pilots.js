
exports.seed = function(knex) {
  return knex.schema.hasTable('pilots').then(function(exists) {
    if (!exists) {
      knex.schema.createTable('pilots', table => {
        table.increments('pilot_id')
        table.text('name').notNullable()    
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
      });
      console.log('doesnt exists')
      return knex('pilots').insert([
        { name: 'pilot_01', country_id: 1, team_id: 2 },
        { name: 'pilot_02', country_id: 2, team_id: 3 },
        { name: 'pilot_03', country_id: 3, team_id: 5 },
        { name: 'pilot_04', country_id: 4, team_id: 6 },
        { name: 'pilot_05', country_id: 5, team_id: 7 },
        { name: 'pilot_06', country_id: 6, team_id: 8 },
        { name: 'pilot_07', country_id: 7, team_id: 9 },
        { name: 'pilot_08', country_id: 8, team_id: 10 },
        { name: 'pilot_09', country_id: 9, team_id: 1 },
        { name: 'pilot_10', country_id: 10, team_id: 4 },
        { name: 'pilot_11', country_id: 2, team_id: 5 }
      ]);
      
    }
    else {
      console.log('exists')
      // Deletes ALL existing entries
      return knex('pilots').del().then(function() {
        // Inserts seed entries
        return knex('pilots').insert([
          { name: 'pilot_01', country_id: 1, team_id: 1 },
          { name: 'pilot_02', country_id: 2, team_id: 2 },
          { name: 'pilot_03', country_id: 3, team_id: 3 },
          { name: 'pilot_04', country_id: 4, team_id: 4 },
          { name: 'pilot_05', country_id: 5, team_id: 5 },
          { name: 'pilot_06', country_id: 6, team_id: 6 },
          { name: 'pilot_07', country_id: 7, team_id: 7 },
          { name: 'pilot_08', country_id: 8, team_id: 8 },
          { name: 'pilot_09', country_id: 9, team_id: 9 },
          { name: 'pilot_10', country_id: 10, team_id: 10 },
          { name: 'pilot_11', country_id: 3, team_id: 5 }
          
        ]);
       
      });
      
    }
  });
}
  
