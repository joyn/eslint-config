'use strict';

module.exports = {
    parser: require.resolve('@typescript-eslint/parser'),
    parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
        sourceType: 'module',
        jsx: false,
        project: 'tsconfig.json'
    },
    plugins: ['@typescript-eslint'],
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
                default: 'array-simple'
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
        'brace-style': 'off',
        '@typescript-eslint/brace-style': [
            'error',
            '1tbs',
            {
                allowSingleLine: false
            }
        ],
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/class-name-casing': 'error',
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
        '@typescript-eslint/generic-type-naming': 'off',
        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': ['error', 'never'],
        indent: 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/interface-name-prefix': ['error', 'never'],
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false
                }
            }
        ],
        '@typescript-eslint/member-naming': 'off',
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
                checksVoidReturn: false
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
        quotes: 'off',
        '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/require-array-sort-compare': 'error',
        semi: 'off',
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/triple-slash-reference': [
            'error',
            {
                path: 'never'
            }
        ],
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/prefer-regexp-exec': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        'no-useless-catch': 'error',
        'valid-jsdoc': 'off',
        'no-redeclare': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/no-extra-semi': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        '@typescript-eslint/consistent-type-definitions': 'off',
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': ['error'],
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': ['error'],
        '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'explicit' }],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/init-declarations': 'off',
        'keyword-spacing': 'off',
        '@typescript-eslint/keyword-spacing': [
            'error',
            {
                before: true,
                after: true
            }
        ],
        '@typescript-eslint/method-signature-style': ['error', 'method'],
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-base-to-string': 'error',
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': ['error'],
        '@typescript-eslint/no-dynamic-delete': ['warn'],
        '@typescript-eslint/no-extra-non-null-assertion': ['error'],
        'no-extra-parens': 'off',
        '@typescript-eslint/no-extra-parens': ['error'],
        '@typescript-eslint/no-floating-promises': ['error'],
        '@typescript-eslint/no-implied-eval': ['off'],
        '@typescript-eslint/no-invalid-this': ['off'],
        '@typescript-eslint/no-invalid-void-type': ['error'],
        '@typescript-eslint/no-magic-numbers': ['off'],
        '@typescript-eslint/no-namespace': ['off'],
        '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
        '@typescript-eslint/no-non-null-assertion': ['off'],
        '@typescript-eslint/no-parameter-properties': ['off'],
        '@typescript-eslint/no-type-alias': ['off'],
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
        '@typescript-eslint/no-unnecessary-condition': ['error'],
        '@typescript-eslint/no-unsafe-assignment': ['warn'],
        '@typescript-eslint/no-unsafe-call': ['warn'],
        '@typescript-eslint/no-unsafe-member-access': ['warn'],
        '@typescript-eslint/no-unsafe-return': ['warn'],
        '@typescript-eslint/no-untyped-public-signature': ['error'],
        '@typescript-eslint/no-unused-expressions': ['off'],
        '@typescript-eslint/no-unused-vars-experimental': ['off'],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/prefer-as-const': ['error'],
        '@typescript-eslint/prefer-readonly-parameter-types': ['warn'],
        '@typescript-eslint/prefer-reduce-type-parameter': ['error'],
        '@typescript-eslint/prefer-ts-expect-error': ['off'],
        '@typescript-eslint/restrict-template-expressions': ['off'],
        '@typescript-eslint/return-await': ['off'],
        '@typescript-eslint/space-before-function-paren': ['off'],
        '@typescript-eslint/switch-exhaustiveness-check': ['error'],
        '@typescript-eslint/typedef': ['off'],
        '@typescript-eslint/unbound-method': ['error']
    }
};
