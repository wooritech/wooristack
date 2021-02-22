import { makeSchema, asNexusMethod } from 'nexus';
import { DateTimeResolver, JSONObjectResolver } from 'graphql-scalars';
import path from 'path';

import { userTypes } from './user';
import { ticketTypes } from './ticket';

/**
 * 스칼라 타입 정의
 */
const scalarTypes = [
  asNexusMethod(JSONObjectResolver, 'json'),
  asNexusMethod(DateTimeResolver, 'date'),
];

/**
 * nexus 스키마 정의
 *   merge를 좀 편하게 하려면 queryType, mutationType 대신 extendType 을 쓴다.
 */
const schemaTypes = [userTypes, ticketTypes].flat();

/**
 * nexus 스키마 generation
 */
export const schema = makeSchema({
  types: [...schemaTypes, ...scalarTypes],
  outputs: {
    typegen: path.join(process.cwd(), 'src', 'schema', 'generated', 'nexus-typegen.d.ts'),
    schema: path.join(process.cwd(), 'src', 'schema', 'generated', 'schema.graphql')
  },
});