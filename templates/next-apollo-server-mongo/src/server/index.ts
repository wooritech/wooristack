import { ApolloServer } from 'apollo-server-micro';
import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, Db } from 'mongodb';
import cors from 'cors';
import schema from 'schema';

let db: Db;

const apolloServer = new ApolloServer({
  schema,
  introspection: true,
  /** production playground */
  playground: true,
  context: async (params) => {
    if (!db) {
      /** 인증 처리를 위해 request 에서 cookie등 정보를 가져와야 한다. */
      // const req: NextApiRequest = params.req;
      // console.log('[request]', req);

      try {
        const dbUrl = process.env.MONGO_URL!;
        console.log('[env.mongo_url]: ', dbUrl);

        const dbClient = new MongoClient(dbUrl, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });

        if (!dbClient.isConnected()) await dbClient.connect();
        db = dbClient.db('admin'); // database name
      } catch (e) {
        console.log('--->error while connecting with graphql context (db)', e);
      }
    }

    return { db };
  },
});

export default apolloServer;