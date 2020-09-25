import { schema } from 'nexus';

schema.queryType({
  definition(t) {
    t.crud.todos();
  },
});
