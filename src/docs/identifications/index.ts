import collective from './collective';
import personal from './personal';

export default {
  '/identification/personal/{bi}': {
    ...personal,
  },
  '/identification/collective/{nif}': {
    ...collective,
  },
};
