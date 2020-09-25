import { schema } from 'nexus';

schema.objectType({
  name: 'Todo',
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.description();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
