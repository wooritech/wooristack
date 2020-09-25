/* eslint-disable import/first */
import { use } from 'nexus';
import { prisma } from 'nexus-plugin-prisma';

// next-plugin-prisma
// - https://nexusjs.org/pluginss/prisma/overview
use(prisma({ features: { crud: true } }));

import './Todo';
