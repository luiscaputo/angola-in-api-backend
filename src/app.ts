import 'reflect-metadata';
import '~/configs/environments';
import 'express-async-errors';
import routes from '~/routes';
import { versions } from '~/utils/versions';
import cors from 'cors';
import express from 'express';
import logger from 'morgan';

import '~/shared/container';
import { errors } from './helpers/middlewares/errorsExceptions';

const app = express();

app.use(express.json({ limit: '500mb' }));
app.use(logger('dev'));
app.use(cors());

app.use(express.urlencoded({ limit: '500mb', extended: false }));

app.use(versions.current, routes);

app.use(errors);

export default app;