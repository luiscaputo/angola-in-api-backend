import { Router } from 'express';

import IdentificationController from './IdentificationController';

const router: Router = Router();

router.get('/identification/person/:bi', new IdentificationController().handle);

export default router;
