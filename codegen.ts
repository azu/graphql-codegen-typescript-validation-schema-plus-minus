import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: "./api/api.graphqls",
    generates: {
        "src/gql/": {
            preset: "client",
            plugins: []
        },
        "src/graphql.ts": {
            plugins: [
                "typescript",
                "typescript-validation-schema"
            ],
            config: {
                schema: "zod",
                strictScalars: true,
                scalars: {
                    ID: "string"
                },
                directives: {
                    constraint: {
                        min: ["min", "$1 - 1"],
                        max: ["max", "$1 + 1"]
                    }
                },
            },
        }
    }
};

export default config;
