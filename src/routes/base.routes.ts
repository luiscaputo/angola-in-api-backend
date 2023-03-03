import { Router } from 'express';

const routes = Router();

routes.get('/', (_, res) => {
  res.json({
    summary: 'Nzooji - Setup',
    version: '1.0.0',
    origin: 'Nzooji - Development',
  });
});

export default routes;