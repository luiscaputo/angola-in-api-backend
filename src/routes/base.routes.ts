import { Router } from 'express';

const routes = Router();

routes.get('/', (_, res) => {
  res.json({
    summary: 'o-me-api',
    description:
      'Its a simple projet to disponible for some body some api that is privated and other mores thinks like, quantity counties on Angola Country bla bla',
    version: '1.0.0',
    origin: 'Luís Caputo Dev',
  });
});

export default routes;
