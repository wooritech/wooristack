import { asNexusMethod } from 'nexus';
import { DateTimeResolver, JSONObjectResolver } from 'graphql-scalars';

export default [
  asNexusMethod(JSONObjectResolver, 'json'),
  asNexusMethod(DateTimeResolver, 'date'),
];