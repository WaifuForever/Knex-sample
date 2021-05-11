const knex = require('../database')

module.exports = {
    async store (req, res){
       
        try {
            const { team_id, country_id, name } = req.body
            console.log(req.body)


            knex.select("country_id")
            .from("countries")
            .where("country_id", country_id)              
            .then(matchList => {
                if (matchList.length === 1) {
                    knex.select("team_id")
                    .from("teams")
                    .where("team_id", team_id)              
                    .then(matchList => {
                        if(matchList.length === 1) {
                            knex('pilots').insert({
                                team_id: team_id,
                                country_id: country_id,
                                name: name
                    
                            }).then(() => {
                                res.status(201).json("Pilot added!!")
                            }).catch(err =>{
                                return res.status(500).json({error: "Server error."});
                            })
                        }
                        else {
                            return res.json({error: "Bad request!!"});
                        }

                     
                    }).catch(err =>{
                        return res.json({error: "Bad request!!"});
                    })

                  
                }
                else {
                    return res.json({error: "Bad request!!"});
                }
            }).catch(err => {
                return res.json({error: "Bad request!!"});
            
            })            

                         

            return res.status(201).send()
        } catch (error) {
            return res.json(error)
        }
       
    },

    async index(req, res){
        const { _id } = req.query;

        try {
            if(_id)
                const results = await knex('pilots').where('pilot_id', id)
            else
                const results = await knex('pilots')
            return res.json(results)
        } catch (err){
            console.log(err)
            return res.json(
                {err: err, message: "Error"}
            )
        }
        

    },
    
    async update(req, res){
        const { _id, name, country_id, team_id } = req.query

        update = {}

        if(_id){
            if(name){
                update.name = name;
            }

            if(country_id)
                update.country_id = country_id

            if(team_id)
                update.team_id = team_id

            try{
                knex('pilots')
                    .where('pilot_id', _id)
                    .update(update)
                return res.json("Team updated")
            } catch(err) {
                console.log(err)
                return res.json(
                    {err: err, message: "Error"}
                )
            }
        } else{
            return res.json(
                {err: err, message: "BadRequest"}
            )
        }

       


       
    }
    

};
