import { NextApiRequest, NextApiResponse } from 'next';

type ServerHandler = (req: NextApiRequest, res: NextApiResponse) => Promise<any>;
// interface CorsOptions {
//   origins: string | string[] | (() => void);
// };

const DEFAULT_ALLOW_METHODS = [
  'POST',
  'GET',
  'PUT',
  'PATCH',
  'DELETE',
  'OPTIONS'
];

const DEFAULT_ALLOW_HEADERS = [
  'X-Requested-With',
  'Access-Control-Allow-Origin',
  'X-HTTP-Method-Override',
  'Content-Type',
  'Authorization',
  'Accept'
];

const DEFAULT_MAX_AGE_SECONDS = 60 * 60 * 24; // 24 hours

const cors = (config: any) => {
  return (handler: ServerHandler) => {
    return (req: NextApiRequest, res: NextApiResponse) => {
      const {
        origin = '*',
        maxAge = DEFAULT_MAX_AGE_SECONDS,
        allowMethods = DEFAULT_ALLOW_METHODS,
        allowHeaders = DEFAULT_ALLOW_HEADERS,
        allowCredentials = true,
        exposeHeaders = []
      } = config;
      // console.log(typeof config.origins === 'function' ? config.origins() : config.origins);
      res.setHeader('Access-Control-Allow-Headers', ['X-Requested-With', 'Access-Control-Allow-Origin', 'X-HTTP-Method-Override', 'Content-Type', 'Authorization', 'Accept']);
      res.setHeader('Access-Control-Allow-Methods', ['GET', 'POST', 'OPTIONS']);
      res.setHeader('Access-Control-Allow-Origin', '*');

      if (req.method === 'OPTIONS') {
        // console.log('[server] preflight');
        res.end();
        return;
      }

      return handler(req, res);
    };
  };
};

export default cors;