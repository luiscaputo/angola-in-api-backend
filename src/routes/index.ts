import { Router } from 'express';
import baseRoute from './base.routes';
import userRoutes from '~/modules/users/http/routes';
import identificationRoutes from '~/modules/identification/identification.routes';

const routes = Router();

routes.use(baseRoute);
routes.use(userRoutes);
routes.use(identificationRoutes);

export default routes;