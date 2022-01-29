import express from 'express';

import TeamController from '../controllers/team.controller';

//import TeamMiddleware from '../middleware/team.middleware';

const router = express.Router();

router.post('/', TeamController.create);

router.get('/findOne', TeamController.findOne);

router.put('/', TeamController.update);

export default router;
