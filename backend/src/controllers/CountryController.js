const knex = require('../database')

module.exports = {
    async store (req, res){
       
        try {
            const { name } = req.body
            console.log(req.body)

            knex.select("name")
                .from("countries")
                .where("name", name)              
                .then(namesList => {
                    if (namesList.length === 0) {

                        return knex('countries').insert({               
                            name: name
                
                        }).then(() => {
                            res.status(201).json("Country added!!")
                        });

                      
                    }
                    else {
                        return res.json({error: "Country already registered!!"});
                    }
                }).catch(err => {
                    return res.status(500).json({error: "Error"});
                
                })                    

            
        } catch (error) {
            return res.json(error)
        }
       
    },

    async index(req, res){
        const { _id } = req.query;

        
        try {
            if(_id)
                const results = await knex('countries').where('country_id', id)
            else
                const results = await knex('countries')
            return res.json(results)
        } catch (err){
            console.log(err)
            return res.json(
                {err: err, message: "Error"}
            )
        }
        

       
    }
    

};
