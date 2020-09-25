import app from 'nexus';
import { NextApiRequest, NextApiResponse } from 'next';

import addToContext from './middlewares/addToContext';
import './schema';

app.assemble();

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  // middlewares
  addToContext();

  app.server.handlers.graphql(req, res);
};
