import { schema } from 'nexus';

function addToContext(): void {
  schema.addToContext(() => {
    return {
      greet: 'hello~!',
    };
  });
}

export default addToContext;
