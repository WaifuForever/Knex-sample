import express from 'express';

import TeamController from '../controller/team.controller';

//import TeamMiddleware from '../middleware/team.middleware';

const router = express.Router();

router.post('/', TeamController.create);

router.get('/findOne', TeamController.findOne);

router.put('/', TeamController.update);

export default router;
