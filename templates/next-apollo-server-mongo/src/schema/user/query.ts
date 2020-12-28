import { queryType } from "nexus";

export const query = queryType({
  definition(t) {
    t.field('user', {
      type: 'User',
      resolve: async (_root, _arg, ctx) => {
        const user = await ctx.db.collection('users').findOne();
        return user;
      }
    });
  }
});