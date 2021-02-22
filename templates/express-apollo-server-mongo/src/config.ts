import path from 'path';

export const config = () => {
  /** config */
  const node_env = process.env.NODE_ENV;
  require('dotenv').config({ path: path.resolve(process.cwd(), node_env === 'development' ? '.env.dev' : '.env') });
  // console.log('env:', process.env);
};