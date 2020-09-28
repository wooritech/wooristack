import { GetServerSidePropsContext } from 'next';
import { Auth, withSSRContext } from 'aws-amplify';

import { AuthContextProps } from '../client';

export interface GetSessionResult {
  isAuthenticated: AuthContextProps['isAuthenticated'];
  user: AuthContextProps['user'];
}

async function getSession(
  context: GetServerSidePropsContext
): Promise<GetSessionResult> {
  let user: GetSessionResult['user'] = null;

  try {
    const auth: typeof Auth = withSSRContext(context).Auth;
    user = await auth.currentAuthenticatedUser();
  } catch (e) {
    console.error(e);
  }

  return { isAuthenticated: !!user, user };
}

export default getSession;
