import express from 'express';

import PilotController from '../controllers/pilot.controller';

//import PilotMiddleware from '../middleware/pilot.middleware';

const router = express.Router();

router.post('/', PilotController.create);

router.get('/findOne', PilotController.findOne);

router.put('/', PilotController.update);

export default router;
