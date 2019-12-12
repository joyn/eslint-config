'use strict';

module.exports = {
    plugins: ['unicorn', 'promise', 'import', 'eslint-comments', 'no-secrets', 'optimize-regex', 'array-func'],
    rules: {
        'no-secrets/no-secrets': ['error', { tolerance: 5 }],

        'optimize-regex/optimize-regex': 'warn',

        'promise/param-names': 'error',
        'promise/no-return-wrap': [
            'error',
            {
                allowReject: true
            }
        ],
        'promise/no-new-statics': 'error',
        'promise/no-return-in-finally': 'error',
        'promise/valid-params': 'error',
        'promise/prefer-await-to-then': 'error',

        'eslint-comments/disable-enable-pair': [
            'error',
            {
                allowWholeFile: true
            }
        ],
        'eslint-comments/no-aggregating-enable': 'error',
        'eslint-comments/no-duplicate-disable': 'error',
        'eslint-comments/no-unused-disable': 'error',
        'eslint-comments/no-unused-enable': 'error',

        'import/default': 'error',
        'import/export': 'error',
        'import/extensions': [
            'error',
            {
                js: 'never',
                jsx: 'never',
                json: 'always'
            }
        ],
        'import/namespace': [
            'error',
            {
                allowComputed: true
            }
        ],
        'import/no-absolute-path': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'import/no-self-import': 'error',
        'import/no-useless-path-segments': [
            'error',
            {
                noUselessIndex: true
            }
        ],
        'import/no-amd': 'error',
        'import/no-commonjs': 'error',
        'import/no-duplicates': 'error',
        'import/no-extraneous-dependencies': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-as-default-member': 'error',
        'import/no-named-as-default': 'error',
        'import/order': 'error',
        'import/no-unassigned-import': [
            'error',
            {
                allow: ['@babel/polyfill', '@babel/register', 'mocha']
            }
        ],
        'import/no-unresolved': [
            'error',
            {
                ignore: ['mocha', 'aws-lambda']
            }
        ],

        'unicorn/catch-error-name': 'error',
        'unicorn/consistent-function-scoping': 'error',
        'unicorn/custom-error-definition': 'off',
        'unicorn/error-message': 'error',
        'unicorn/escape-case': 'error',
        'unicorn/expiring-todo-comments': 'error',
        'unicorn/explicit-length-check': 'error',
        'unicorn/filename-case': 'off',
        'unicorn/import-index': 'error',
        'unicorn/new-for-builtins': 'error',
        'unicorn/no-abusive-eslint-disable': 'error',
        'unicorn/no-array-instanceof': 'error',
        'unicorn/no-console-spaces': 'error',
        'unicorn/no-fn-reference-in-iterator': 'off',
        'unicorn/no-for-loop': 'error',
        'unicorn/no-hex-escape': 'error',
        'unicorn/no-keyword-prefix': 'off',
        'no-nested-ternary': 'off',
        'unicorn/no-nested-ternary': 'error',
        'unicorn/no-new-buffer': 'error',
        'unicorn/no-process-exit': 'error',
        'unicorn/no-unreadable-array-destructuring': 'error',
        'unicorn/no-unsafe-regex': 'off',
        'unicorn/no-unused-properties': 'off',
        'unicorn/no-zero-fractions': 'error',
        'unicorn/number-literal-case': 'error',
        'unicorn/prefer-add-event-listener': 'error',
        'unicorn/prefer-dataset': 'error',
        'unicorn/prefer-event-key': 'error',
        'unicorn/prefer-exponentiation-operator': 'error',
        'unicorn/prefer-flat-map': 'error',
        'unicorn/prefer-includes': 'error',
        'unicorn/prefer-node-append': 'error',
        'unicorn/prefer-node-remove': 'error',
        'unicorn/prefer-query-selector': 'error',
        'unicorn/prefer-reflect-apply': 'error',
        'unicorn/prefer-spread': 'off',
        'unicorn/prefer-starts-ends-with': 'error',
        'unicorn/prefer-string-slice': 'error',
        'unicorn/prefer-text-content': 'error',
        'unicorn/prefer-type-error': 'error',
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/regex-shorthand': 'error',
        'unicorn/throw-new-error': 'error',

        'array-func/from-map': 'error',
        'array-func/no-unnecessary-this-arg': 'error',
        'array-func/prefer-array-from': 'error',
        'array-func/avoid-reverse': 'error',
        'array-func/prefer-flat-map': 'error',
        'array-func/prefer-flat': 'error'
    }
};
