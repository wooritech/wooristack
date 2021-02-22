import { extendType, nonNull, idArg, stringArg } from 'nexus';

export const query = extendType({
  type: 'Query',
  definition(t) {
    /** id로 user 찾기 */
    t.field('userById', {
      type: 'User',
      args: {
        userId: nonNull(idArg()),
      },
      resolve: async (_root, args, ctx) => {
        return await ctx.users.findById(args);
      },
      description: 'userId로 사용자 찾기',
    });
    /** email 또는 username으로 사용자 찾기 */
    t.field('findUser', {
      type: 'User',
      args: {
        email: stringArg(),
        username: stringArg(),
      },
      resolve: async (_root, args, ctx) => {
        return await ctx.users.findUser(args);
      },
      description: 'email 또는 username으로 사용자 찾기',
    });
    /** login */
    t.field('login', {
      type: 'User',
      args: {
        email: stringArg(),
        username: stringArg(),
        password: stringArg(),
      },
      resolve: async (_root, args, ctx) => {
        return await ctx.users.login(args);
      },
      description: 'login',
    });
  }
});