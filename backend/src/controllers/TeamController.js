const knex = require('../database')

module.exports = {
    async store (req, res){
       
        try {
            const {name } = req.body
            console.log(req.body)

            await knex('teams').insert({               
                name: name
    
            })                

            return res.status(201).json("Team added!!")
        } catch (error) {
            return res.json(error)
        }
       
    },

    async index(req, res){
        const { _id } = req.query

        try {
            if(_id)
                const results = await knex('teams').where('team_id', id)
            else
                const results = await knex('teams')
            return res.json(results)
        } catch (err){
            console.log(err)
            return res.json(
                {err: err, message: "Error"}
            )
        }
        
    },
    
    async update(req, res){
        const { _id, name } = req.query

        try{
            knex('teams')
                .where('team_id', _id)
                .update({
                    name: name
                })
            return res.json("Team updated")
        } catch(err) {
            console.log(err)
            return res.json(
                {err: err, message: "Error"}
            )
        }


       
    }

};
