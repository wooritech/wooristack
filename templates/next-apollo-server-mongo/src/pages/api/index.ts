import server from 'server';
import cors from 'utils/cors';

export const config = {
  api: {
    bodyParser: false,
  },
};

const serverHandler = server.createHandler({ path: '/graphql' });

const corsHandler = cors({ origins: `() => 'origin'` });

export default corsHandler(serverHandler);