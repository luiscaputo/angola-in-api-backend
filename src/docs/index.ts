import components from './components';
import identificationRoutes from './identifications';
import infos from './infos';
import provincesRoutes from './locations';
import servers from './servers';
import tags from './tags';

export default {
  ...infos,
  ...servers,
  ...components,
  ...tags,
  paths: {
    ...identificationRoutes,
    ...provincesRoutes,
  },
};
