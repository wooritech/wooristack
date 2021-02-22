import { extendType, nonNull, stringArg } from 'nexus';

export const mutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createTicket', {
      type: 'Ticket',
      resolve: async (_root, args, ctx) => {
        return ctx.tickets.createTicket(args);
      },
      description: '새로운 티켓 생성'
    });
  }
});