import { Router } from 'express';

import CreateUserController from '../useCases/users/createUserController';

const router: Router = Router();

router.post('/users', new CreateUserController().handle);

export default router;
