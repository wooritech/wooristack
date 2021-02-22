// import { Context } from './context';
import path from 'path';
import { verify } from 'jsonwebtoken';

const env = process.env.NODE_ENV;
const envPath = env === 'development'
  ? path.resolve(__dirname, '../dotenv/dev.env')
  : env === 'test'
    ? path.resolve(__dirname, '../dotenv/test.env')
    : path.resolve(__dirname, '../dotenv/.env');

require('dotenv').config({ path: envPath });
console.log('env:', process.env);

const { SECRET } = process.env;
export const APP_SECRET = SECRET;

interface Token {
  userId: string;
}

// export function getUserId(context: Context): string {
//   const Authorization = context.request.req.get('Authorization');
//   if (Authorization) {
//     const token = Authorization.replace('Bearer ', '');
//     const verifiedToken = verify(token, APP_SECRET) as Token;
//     return verifiedToken && verifiedToken.userId;
//   }
// }
