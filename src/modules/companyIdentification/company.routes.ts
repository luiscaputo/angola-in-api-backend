import { Router } from 'express';

import CompanyValidationController from './CompanyValidationController';

const router = Router();

router.get(
  '/identification/company/:nif',
  new CompanyValidationController().handle
);

export default router;
