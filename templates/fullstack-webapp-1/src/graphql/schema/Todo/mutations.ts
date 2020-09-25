import { schema } from 'nexus';

schema.mutationType({
  definition(t) {
    t.crud.createOneTodo();
    t.crud.updateOneTodo();
    t.crud.deleteOneTodo();
  },
});
