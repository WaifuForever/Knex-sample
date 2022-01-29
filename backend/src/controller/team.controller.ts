import { Request, Response } from 'express';

import knex from '../database/db';

async function create(req: Request, res: Response) {
    try {
        const { name } = req.body;
        
        await knex('teams').insert({
            name: name,
        });

        return res.status(201).json('Team added!!');
    } catch (error) {
        return res.json(error);
    }
}

async function findOne(req: Request, res: Response) {
    const { _id } = req.query;
    try {
        const result = await knex('teams').where('_id', _id?.toString());

        return res.status(200).json(result);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ err: err, message: 'Error' });
    }
}

async function update(req: Request, res: Response) {
    const { _id, name } = req.body;

    try {
        knex('teams').where('_id', _id).update({
            name: name,
        });
        return res.json('Team updated');
    } catch (err) {
        console.log(err);
        return res.json({ err: err, message: 'Error' });
    }
}

export default { create, findOne, update };
