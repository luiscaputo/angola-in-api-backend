import components from './components';
import identificationRoutes from './identifications';
import infos from './infos';
import provincesRoutes from './locations';
import servers from './servers';
import tags from './tags';
import phoneNumberRoutes from './phoneNumber';
import superMarketsRoutes from './markets';

export default {
  ...infos,
  ...servers,
  ...components,
  ...tags,
  paths: {
    ...identificationRoutes,
    ...provincesRoutes,
    ...phoneNumberRoutes,
    ...superMarketsRoutes
  },
};
