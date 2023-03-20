import { Router } from 'express';

import LocationsControllers from './LocationController';

const router = Router();

router.get('/locations/provinces', new LocationsControllers().handle);

export default router;
