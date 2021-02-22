import { objectType } from 'nexus';

export const Ticket = objectType({
  name: 'Ticket',
  definition(t) {
    t.id('_id');
    t.nonNull.int('no', { description: '티켓 번호' });
    t.string('subject', { description: '티켓 제목' });
    t.string('brandName', { description: '브랜드 명' });
    t.date('createdAt', { description: '생성일' });
  },
});

