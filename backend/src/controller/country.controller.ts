import { Request, Response } from 'express';

import knex from '../database/db';

async function create(req: Request, res: Response) {
    const { name } = req.body;
    return knex('countries')
        .insert({
            name: name,
        })
        .then(result => {
            return res.status(201).json({ message: 'Country added!!' });
        })
        .catch(err => {
            return res.status(400).json({ error: err });
        });
}

async function findOne(req: Request, res: Response) {
    const { _id } = req.query;
    try {
        const result = await knex('countries').where(
            'country_id',
            _id?.toString(),
        );

        return res.status(200).json(result);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ err: err, message: 'Error' });
    }
}

export default { create, findOne };
