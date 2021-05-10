
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
        { name: 'team_01' },
        { name: 'team_02' },
        { name: 'team_03' },
        { name: 'team_04' },
        { name: 'team_05' },
        { name: 'team_06' },
        { name: 'team_07' },
        { name: 'team_08' },
        { name: 'team_09' },
        { name: 'team_10' },
        { name: 'team_11' }
      ]);
      
    }
    else {
      console.log('exists')
      // Deletes ALL existing entries
      return knex('teams').del().then(function() {
        // Inserts seed entries
        return knex('teams').insert([
          { name: 'team_01' },
          { name: 'team_02' },
          { name: 'team_03' },
          { name: 'team_04' },
          { name: 'team_05' },
          { name: 'team_06' },
          { name: 'team_07' },
          { name: 'team_08' },
          { name: 'team_09' },
          { name: 'team_10' },
          { name: 'team_11' }
          
        ]);
       
      });
      
    }
  });
}
  
