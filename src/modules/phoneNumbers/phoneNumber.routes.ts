import { Router } from 'express';
import { PhoneNumberController } from './PhoneNumberController';

const router = Router();

router.get('/phone-number/:phoneNumber', new PhoneNumberController().handle);

export default router;