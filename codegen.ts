import type { CodegenConfig } from "@graphql-codegen/cli";
require('dotenv').config({ path: ['.env.local', '.env'] })

if (!process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT) {
  throw new Error("NEXT_PUBLIC_GRAPHQL_ENDPOINT is not set");
}

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  documents: ["src/**/*.graphql"],
  generates: {
    "src/graphql/graphql-types.generated.ts": { plugins: ["typescript"] },
    "src/": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "graphql/graphql-types.generated.ts",
      },
      plugins: ["typescript-operations", "typed-document-node"],
    },
  },
};

export default config;