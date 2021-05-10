

const data = [
  { team_id: 1, placing: 1, pilots_id: [1, 2], circuits_id:[1, 2] },
  { team_id: 2, placing: 2, pilots_id: [7, 8], circuits_id:[1, 2] },
  { team_id: 3, placing: 3, pilots_id: [3, 4], circuits_id:[1, 2] },
  { team_id: 6, placing: 4, pilots_id: [5, 6], circuits_id:[1, 2] },
  { team_id: 5, placing: 5, pilots_id: [9, 10], circuits_id:[1, 2] },
  { team_id: 4, placing: 6, pilots_id: [11, 1], circuits_id:[1, 2] },
  { team_id: 7, placing: 7, pilots_id: [5, 2], circuits_id:[1, 2] },
  { team_id: 8, placing: 8, pilots_id: [8, 3], circuits_id:[1, 2] },
  { team_id: 9, placing: 9, pilots_id: [9, 4], circuits_id:[1, 2] },
  { team_id: 10, placing: 10, pilots_id: [6, 10], circuits_id:[1, 2] },
  { team_id: 11, placing: 11, pilots_id: [7, 11], circuits_id:[1, 2] }
  
]
 

exports.seed = function(knex) {
  return knex.schema.hasTable('disputes').then(function(exists) {
    if (!exists) {
      knex.schema.createTable('pilots', table => {
        table.increments('pilot_id')   
        table.text('name').notNullable()
    
        table.integer('country_id').notNullable()
        table.integer('dispute_id').notNullable()
    
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
      })
      console.log('doesnt exists')
      return knex('disputes').insert(data);
      
    }
    else {
      console.log('exists')
      // Deletes ALL existing entries
      return knex('disputes').del().then(function() {
        // Inserts seed entries
        return knex('disputes').insert(data);
       
      });
      
    }
  });
}
  
