import { PubSub, Request } from 'apollo-server-express';
import { Db, MongoClient } from 'mongodb';
import { services, UsersService, TicketsService } from './services';

const { SECRET } = process.env;

const pubsub = new PubSub();

/** FIXIT: 컨텍스트는 필요에 따라 구성 하면 된다. */
export const createContext = async (request: Request) => {
  let db: Db;

  try {
    const dbUrl = process.env.MONGO_URL!;
    console.log('[env.mongo_url]: ', dbUrl);

    const dbClient = new MongoClient(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (!dbClient.isConnected()) await dbClient.connect();
    db = dbClient.db('realdesk'); // database name
  } catch (e) {
    console.log('--->error while connecting with graphql context (db)', e);
  }

  return {
    request,
    ...await services(db),
    pubsub,
    appSecret: SECRET,
  };
};
