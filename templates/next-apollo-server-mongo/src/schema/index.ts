import { makeSchema } from 'nexus';
import path from 'path';
import { schemaTypes } from './schemaTypes';
import scalarTypes from './scalarTypes';

const schema = makeSchema({
  types: [...schemaTypes, ...scalarTypes],
  outputs: {
    typegen: path.join(process.cwd(), 'src', 'schema', '__generated', 'nexus-typegen.d.ts'),
    schema: path.join(process.cwd(), 'src', 'schema', '__generated', 'schema.graphql')
  },
});

export default schema;