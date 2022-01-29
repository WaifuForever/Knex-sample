import { Request, Response } from 'express';

import knex from '../database/db';

interface Pilot {
    name: string;
    team_id: string;
    country_id: string;
}

interface updatePilot {
    _id: string;
    name?: string;
    team_id?: string;
    country_id?: string;
}

async function create(req: Request, res: Response) {
    try {
        const { team_id, country_id, name }: Pilot = req.body;
        console.log(req.body);

        knex.select('country_id')
            .from('countries')
            .where('country_id', country_id)
            .then(matchList => {
                if (matchList.length === 1) {
                    knex.select('team_id')
                        .from('teams')
                        .where('team_id', team_id)
                        .then(matchList => {
                            if (matchList.length === 1) {
                                knex('pilots')
                                    .insert({
                                        team_id: team_id,
                                        country_id: country_id,
                                        name: name,
                                    })
                                    .then(() => {
                                        res.status(201).json('Pilot added!!');
                                    })
                                    .catch(err => {
                                        return res
                                            .status(500)
                                            .json({ error: 'Server error.' });
                                    });
                            } else {
                                return res.json({ error: 'Bad request!!' });
                            }
                        })
                        .catch(err => {
                            return res.json({ error: 'Bad request!!' });
                        });
                } else {
                    return res.json({ error: 'Bad request!!' });
                }
            })
            .catch(err => {
                return res.json({ error: 'Bad request!!' });
            });

        return res.status(201).send();
    } catch (error) {
        return res.json(error);
    }
}

async function findOne(req: Request, res: Response) {
    const { _id } = req.query;
    try {
        const result = await knex('pilots').where('_id', _id?.toString());

        return res.status(200).json(result);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ err: err, message: 'Error' });
    }
}

async function update(req: Request, res: Response) {
    const { _id, name, country_id, team_id }: updatePilot = req.body;
    //lack validation
    try {
        knex('pilots').where('_id', _id).update(update);
        return res.json('Pilot updated');
    } catch (err) {
        console.log(err);
        return res.json({ err: err, message: 'Error' });
    }
}

export default { create, findOne, update };
