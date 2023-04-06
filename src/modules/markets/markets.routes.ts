import { Router } from 'express';
import MarketsController from './MarketsController';

const router = Router();

router.get('/super-markets', new MarketsController().handle);

export default router;