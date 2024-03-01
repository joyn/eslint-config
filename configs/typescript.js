'use strict';

module.exports = {
    parser: require.resolve('@typescript-eslint/parser'),
    parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
        sourceType: 'module',
        jsx: false,
        project: 'tsconfig.json'
    },
    plugins: ['@typescript-eslint', 'functional'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts']
            }
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts']
        }
    },
    rules: {
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': [
            'error',
            {
                default: 'array'
            }
        ],
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-types': [
            'error',
            {
                types: {
                    String: {
                        message: 'Use `string` instead.',
                        fixWith: 'string'
                    },
                    Number: {
                        message: 'Use `number` instead.',
                        fixWith: 'number'
                    },
                    Boolean: {
                        message: 'Use `boolean` instead.',
                        fixWith: 'boolean'
                    },
                    Symbol: {
                        message: 'Use `symbol` instead.',
                        fixWith: 'symbol'
                    },
                    Object: {
                        message:
                            'The `Object` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead. See https://github.com/typescript-eslint/typescript-eslint/pull/848',
                        fixWith: 'Record<string, unknown>'
                    },
                    object: {
                        message:
                            'The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848',
                        fixWith: 'Record<string, unknown>'
                    },
                    Function: 'Use a specific function type instead, like `() => void`.',
                    Omit: 'Prefer the `Except` type in the `type-fest` package instead as it’s stricter.'
                }
            }
        ],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'parameter',
                format: ['camelCase'],
                leadingUnderscore: 'allow',
                trailingUnderscore: 'forbid'
            },
            {
                selector: 'typeLike',
                format: ['PascalCase']
            },
            {
                selector: 'interface',
                format: ['PascalCase'],
                custom: {
                    regex: '^I[A-Z]',
                    match: false
                }
            }
        ],
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            {
                assertionStyle: 'as',
                objectLiteralTypeAssertions: 'allow-as-parameter'
            }
        ],
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: true
            }
        ],
        '@typescript-eslint/member-ordering': 'error',
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-empty-interface': [
            'error',
            {
                allowSingleExtends: true
            }
        ],
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': [
            'error',
            {
                checksConditionals: true,
                checksVoidReturn: true
            }
        ],

        '@typescript-eslint/no-this-alias': [
            'error',
            {
                allowDestructuring: true
            }
        ],
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: true,
                argsIgnorePattern: '^_',
                caughtErrors: 'all',
                caughtErrorsIgnorePattern: '^_$'
            }
        ],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/promise-function-async': [
            'error',
            {
                allowAny: true
            }
        ],
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/triple-slash-reference': [
            'error',
            {
                path: 'never'
            }
        ],
        '@typescript-eslint/prefer-regexp-exec': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': ['error'],
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
        '@typescript-eslint/consistent-type-definitions': 'off',
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': ['error'],
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': ['error'],
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/init-declarations': 'off',
        '@typescript-eslint/method-signature-style': ['error', 'method'],
        '@typescript-eslint/no-base-to-string': 'warn',
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': ['error'],
        '@typescript-eslint/no-dynamic-delete': ['warn'],
        '@typescript-eslint/no-extra-non-null-assertion': ['error'],
        'no-extra-parens': 'off',
        '@typescript-eslint/no-floating-promises': ['error'],
        '@typescript-eslint/no-implied-eval': ['off'],
        '@typescript-eslint/no-invalid-this': ['off'],
        '@typescript-eslint/no-invalid-void-type': ['error'],
        '@typescript-eslint/no-magic-numbers': ['off'],
        '@typescript-eslint/no-namespace': ['off'],
        '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
        '@typescript-eslint/no-non-null-assertion': ['error'],
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
        '@typescript-eslint/no-unnecessary-condition': ['error'],
        '@typescript-eslint/no-unsafe-assignment': ['warn'],
        '@typescript-eslint/no-unsafe-call': ['warn'],
        '@typescript-eslint/no-unsafe-member-access': ['warn'],
        '@typescript-eslint/no-unsafe-return': ['warn'],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/prefer-as-const': ['error'],
        '@typescript-eslint/prefer-readonly-parameter-types': ['off'],
        '@typescript-eslint/prefer-reduce-type-parameter': ['error'],
        '@typescript-eslint/prefer-ts-expect-error': ['off'],
        '@typescript-eslint/restrict-template-expressions': ['off'],
        '@typescript-eslint/return-await': ['off'],
        '@typescript-eslint/switch-exhaustiveness-check': ['error'],
        '@typescript-eslint/typedef': ['off'],
        '@typescript-eslint/unbound-method': ['off'],
        'lines-between-class-members': 'off',
        '@typescript-eslint/ban-tslint-comment': ['off'],
        '@typescript-eslint/no-confusing-non-null-assertion': ['off'],
        '@typescript-eslint/prefer-enum-initializers': ['off'],
        '@typescript-eslint/prefer-literal-enum-member': ['off'],
        '@typescript-eslint/no-loss-of-precision': ['off'],
        'no-redeclare': ['off'],
        '@typescript-eslint/no-redeclare': ['error', { builtinGlobals: true }],
        'no-shadow': ['off'],
        '@typescript-eslint/no-shadow': ['error', { builtinGlobals: true }],
        '@typescript-eslint/consistent-type-imports': ['off'],
        '@typescript-eslint/consistent-indexed-object-style': 'off',
        '@typescript-eslint/no-loop-func': 'off',
        'no-duplicate-imports': 'off',
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        '@typescript-eslint/no-confusing-void-expression': [
            'error',
            {
                ignoreArrowShorthand: false,
                ignoreVoidOperator: false
            }
        ],
        '@typescript-eslint/non-nullable-type-assertion-style': 'off',
        '@typescript-eslint/sort-type-constituents': [
            'error',
            {
                checkIntersections: true,
                checkUnions: true,
                groupOrder: [
                    'named',
                    'keyword',
                    'operator',
                    'literal',
                    'function',
                    'import',
                    'conditional',
                    'object',
                    'tuple',
                    'intersection',
                    'union',
                    'nullish'
                ]
            }
        ],
        '@typescript-eslint/no-unsafe-argument': 'error',
        '@typescript-eslint/prefer-return-this-type': 'off',
        '@typescript-eslint/no-meaningless-void-operator': 'error',
        '@typescript-eslint/no-restricted-imports': 'warn',
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/no-redundant-type-constituents': 'error',
        '@typescript-eslint/no-useless-empty-export': 'error',
        '@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],
        '@typescript-eslint/no-duplicate-enum-values': 'error',
        '@typescript-eslint/parameter-properties': 'off',
        '@typescript-eslint/no-unsafe-declaration-merging': 'error',
        '@typescript-eslint/no-mixed-enums': 'error',
        '@typescript-eslint/no-import-type-side-effects': 'error',
        '@typescript-eslint/no-duplicate-type-constituents': 'error',
        '@typescript-eslint/no-unsafe-enum-comparison': 'error',
        '@typescript-eslint/class-methods-use-this': 'error',
        '@typescript-eslint/no-array-delete': 'error',
        '@typescript-eslint/prefer-find': 'error',
        '@typescript-eslint/prefer-promise-reject-errors': 'error',
        'prefer-destructuring': 'off',
        '@typescript-eslint/prefer-destructuring': [
            'error',
            {
                VariableDeclarator: {
                    array: false,
                    object: true
                },
                AssignmentExpression: {
                    array: false,
                    object: false
                }
            },
            {
                enforceForRenamedProperties: false,
                enforceForDeclarationWithTypeAnnotation: false
            }
        ],
        'max-params': 'off',
        '@typescript-eslint/max-params': ['warn', { max: 4 }],
        '@typescript-eslint/no-unsafe-unary-minus': 'error',
        '@typescript-eslint/no-useless-template-literals': 'error',
        'functional/prefer-immutable-types': [
            'error',
            {
                enforcement: 'None',
                ignoreClasses: false,
                ignoreInferredTypes: true,
                parameters: {
                    enforcement: 'ReadonlyShallow'
                },
                variables: {
                    ignoreInFunctions: true
                }
            }
        ],
        'functional/type-declaration-immutability': 'off',
        'functional/readonly-type': ['error', 'keyword'],
        'functional/prefer-tacit': 'error',
        'functional/no-this-expressions': 'error',
        'functional/functional-parameters': 'off',
        'functional/immutable-data': 'off',
        'functional/no-classes': 'off',
        'functional/no-conditional-statements': 'off',
        'functional/no-expression-statements': 'off',
        'functional/no-let': 'off',
        'functional/no-loop-statements': 'off',
        'functional/prefer-property-signatures': 'off',
        'functional/no-mixed-types': 'off',
        'functional/no-promise-reject': 'off',
        'functional/no-return-void': 'off',
        'functional/no-throw-statements': 'off',
        'functional/no-try-statements': 'off'
    }
};
