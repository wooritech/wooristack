import { extendType, nonNull, idArg, stringArg, intArg } from 'nexus';

export const query = extendType({
  type: 'Query',
  definition(t) {
    t.field('ticketById', {
      type: 'Ticket',
      args: {
        ticketId: nonNull(idArg()),
      },
      resolve: async (_root, args, ctx) => {
        return await ctx.tickets.findById(args);
      },
      description: 'id로 티켓 찾기',
    });
    t.field('ticketByNo', {
      type: 'Ticket',
      args: {
        ticketNo: intArg()
      },
      resolve: async (_root, args, ctx) => {
        return await ctx.tickets.findByNo(args);
      },
      description: '티켓 번호로 티켓 찾기',
    });
  }
});