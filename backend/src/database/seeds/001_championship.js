

const data = [
  { team_id: 1, placing: 1, circuit_id: 3 },
  { team_id: 2, placing: 2, circuit_id: 2 },
  { team_id: 3, placing: 3, circuit_id: 5 },
  { team_id: 6, placing: 4, circuit_id: 6 },
  { team_id: 5, placing: 5, circuit_id: 8 },
  { team_id: 4, placing: 6, circuit_id: 9 },
  { team_id: 7, placing: 7, circuit_id: 10 },
  { team_id: 8, placing: 8, circuit_id: 4 },
  { team_id: 9, placing: 9, circuit_id: 7 },
  { team_id: 10, placing: 10, circuit_id: 5 },
  { team_id: 11, placing: 11, circuit_id: 2 },
  { team_id: 1, placing: 3, circuit_id: 3 },
  { team_id: 2, placing: 6, circuit_id: 2 },
  { team_id: 3, placing: 5, circuit_id: 5 },
  { team_id: 6, placing: 7, circuit_id: 6 },
  { team_id: 5, placing: 8, circuit_id: 8 },
  { team_id: 4, placing: 9, circuit_id: 9 },
  { team_id: 7, placing: 10, circuit_id: 10 },
  { team_id: 8, placing: 11, circuit_id: 4 },
  { team_id: 9, placing: 1, circuit_id: 7 },
  { team_id: 10, placing: 2, circuit_id: 5 },
  { team_id: 11, placing: 3, circuit_id: 2 }
  
]
 

exports.seed = function(knex) {
  return knex.schema.hasTable('championship').then(function(exists) {
    if (!exists) {
      knex.schema.createTable('pilots', table => {
          
        table.integer("placing").notNullable()

        table.integer("team_id").notNullable()
        table.integer("circuit_id").notNullable()
      
      

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
      })
      console.log('doesnt exists')
      return knex('championship').insert(data);
      
    }
    else {
      console.log('exists')
      // Deletes ALL existing entries
      return knex('championship').del().then(function() {
        // Inserts seed entries
        return knex('championship').insert(data);
       
      });
      
    }
  });
}
  
