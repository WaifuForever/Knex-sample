import express from 'express';

import CountryControler from '../controllers/country.controller';

//import CountryMiddleware from '../middleware/country.middleware';

const router = express.Router();

router.get('/findOne', CountryControler.findOne);

router.post('/', CountryControler.create);

export default router;
