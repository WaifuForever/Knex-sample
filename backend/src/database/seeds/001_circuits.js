const data = [
  { name: 'circuit_01', country_id: 1, year: 2020 },
  { name: 'circuit_02', country_id: 2, year: 2018 },
  { name: 'circuit_03', country_id: 3, year: 2020 },
  { name: 'circuit_04', country_id: 4, year: 2021 },
  { name: 'circuit_05', country_id: 5, year: 2020 },
  { name: 'circuit_06', country_id: 6, year: 2019 },
  { name: 'circuit_07', country_id: 7, year: 2020 },
  { name: 'circuit_08', country_id: 8, year: 2020 },
  { name: 'circuit_09', country_id: 9, year: 2020 },
  { name: 'circuit_10', country_id: 10, year: 2022 },
  { name: 'circuit_11', country_id: 2, year: 2020 }
]


exports.seed = function(knex) {
  return knex.schema.hasTable('circuits').then(function(exists) {
    if (!exists) {
      knex.schema.createTable('circuits', table => {
        table.increments('circuit_id')    
        table.text('name').notNullable()
        table.integer("year").notNullable()
            
        table.integer("country_id").notNullable()

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
      });
      console.log('doesnt exists')
      return knex('circuits').insert(data);
      
    }
    else {
      console.log('exists')
      // Deletes ALL existing entries
      return knex('circuits').del().then(function() {
        // Inserts seed entries
        return knex('circuits').insert(data);
       
      });
      
    }
  });
}
  
