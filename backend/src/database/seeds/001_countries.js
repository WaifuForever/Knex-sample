
exports.seed = function(knex) {
  return knex.schema.hasTable('countries').then(function(exists) {
    if (!exists) {
      knex.schema.createTable('countries', table => {
        table.increments('country_id')
        table.text('name').notNullable()    
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
      });
      console.log('doesnt exists')
      return knex('countrys').insert([
        { name: 'country_01' },
        { name: 'country_02' },
        { name: 'country_03' },
        { name: 'country_04' },
        { name: 'country_05' },
        { name: 'country_06' },
        { name: 'country_07' },
        { name: 'country_08' },
        { name: 'country_09' },
        { name: 'country_10' },
        { name: 'country_11' }
      ]);
      
    }
    else {
      console.log('exists')
      // Deletes ALL existing entries
      return knex('countries').del().then(function() {
        // Inserts seed entries
        return knex('countries').insert([
          { name: 'country_01' },
          { name: 'country_02' },
          { name: 'country_03' },
          { name: 'country_04' },
          { name: 'country_05' },
          { name: 'country_06' },
          { name: 'country_07' },
          { name: 'country_08' },
          { name: 'country_09' },
          { name: 'country_10' },
          { name: 'country_11' }
          
        ]);
       
      });
      
    }
  });
}
  
