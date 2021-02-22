import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import { createServer } from 'http';
import express from 'express';

import { createContext } from './context';
import { schema } from './schema';
import { config } from './config';
import { loggingPlugin } from './logging-plugin';

config();

const { PORT = 3011 } = process.env;

const app = express();
const server = createServer(app);

const apollo = new ApolloServer({
  schema,
  context: createContext,
  introspection: process.env.NODE_ENV !== 'production',
  playground: process.env.NODE_ENV !== 'production',
  plugins: [
    loggingPlugin
  ],
});

apollo.applyMiddleware({ app });
apollo.installSubscriptionHandlers(server);

app.use(cors());

app.use((req, res) => {
  res.status(200);
  res.send('GraphQL API Server');
  res.end();
});

server.listen({ port: PORT }, () => {
  process.stdout.write(
    `🚀 Server ready at http://localhost:${PORT}${apollo.graphqlPath}\n`,
  );
});
