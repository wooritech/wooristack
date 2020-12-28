import { mutationType } from "nexus";

export const mutation = mutationType({
  definition(t) {
    t.field('createOneUser', {
      type: 'User',
      resolve: () => {
        return {
          id: 'newId',
          username: 'newUsername'
        };
      }
    });
  }
});