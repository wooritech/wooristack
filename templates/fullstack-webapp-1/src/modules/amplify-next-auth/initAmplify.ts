import Amplify from 'aws-amplify';

import { LoggerFactory } from '../logger';

const logger = LoggerFactory.getLogger('amplify-auth-next');

const initAmplify = (config?: any): void => {
  logger.debug('Amplify 설정을 시작합니다.');
  Amplify.configure(config);
  logger.debug('Amplify 설정이 완료되었습니다.');
};

export default initAmplify;
