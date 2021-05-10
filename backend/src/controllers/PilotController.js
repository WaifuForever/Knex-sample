const knex = require('../database')

module.exports = {
    async store (req, res){
       
        try {
            const { team_id, country_id, name } = req.body
            console.log(req.body)

            await knex('pilots').insert({
                team_id: team_id,
                country_id: country_id,
                name: name
    
            })                

            return res.status(201).send()
        } catch (error) {
            return res.json(error)
        }
       
    },

    async index(req, res){
        try {
            const results = await knex('pilots')
                   
            return res.json(results)
        } catch (err){
            console.log(err)
            return res.json(
                {err: err, message: "Error"}
            )
        }
            

    }
    

};
