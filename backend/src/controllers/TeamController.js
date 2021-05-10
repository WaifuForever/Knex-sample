const knex = require('../database')

module.exports = {
    async store (req, res){
       const { name } = req.body
       await knex('teams').insert({
           name
        })
        return res.json({message: "Team added!!"})
    },

    async index(req, res){
        
        await knex('teams').then((result) => {
            console.log(result)
            return res.json(result)
        }).catch(err => {
            return res.json(
                {message: "fail"}
            )
        })
    }
    

};
