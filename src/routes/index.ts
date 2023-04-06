import companyValidationRoutes from '~/modules//companyIdentification/company.routes';
import locationRoutes from '~/modules/locations/locations.routes';
import identificationRoutes from '~/modules/personalIdentification/identification.routes';
import userRoutes from '~/modules/users/http/routes';
import phoneNumberRoutes from '~/modules/phoneNumbers/phoneNumber.routes';
import marketsRoutes from '~/modules/markets/markets.routes';
import { Router } from 'express';

import baseRoute from './base.routes';

const routes = Router();

routes.use(baseRoute);
routes.use(userRoutes);
routes.use(identificationRoutes);
routes.use(companyValidationRoutes);
routes.use(locationRoutes);
routes.use(phoneNumberRoutes);
routes.use(marketsRoutes);

export default routes;
