const knex = require('./database')

module.exports = {
    async store (req, res){
       
    },

    async index(req, res){
        knex('teams').then((result) => {
            console.log(result)
            res.json(result)
        })
    }
    

};
