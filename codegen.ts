
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'schema.docs.graphql',
  documents: 'src/**/*.ts',
  generates: {
    'src/generated/graphql.ts': {
      plugins: ['typescript-apollo-angular'],
    },
  },
};

export default config;
