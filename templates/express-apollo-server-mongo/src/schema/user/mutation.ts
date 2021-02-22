import { extendType, nonNull, stringArg } from 'nexus';

export const mutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createUser', {
      type: 'User',
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
        username: stringArg(),
        name: stringArg(),
        company: stringArg(),
      },
      resolve: async (_root, args, ctx) => {
        return ctx.users.createUser(args);
      }
    });

    /** email주소 만으로 임시 사용자 생성 */
    t.field('createTemporaryUser', {
      type: 'User',
      args: {
        email: nonNull(stringArg()),
        username: stringArg(),
        name: stringArg(),
      },
      resolve: async (_root, args, ctx) => {
        return ctx.users.createTemporaryUser(args);
      }
    });
  }
});