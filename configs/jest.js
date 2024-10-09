'use strict';

module.exports = {
    plugins: ['jest'],
    env: {
        'jest/globals': true
    },
    rules: {
        'max-statements': 'off',

        'jest/consistent-test-it': [
            'error',
            {
                fn: 'it',
                withinDescribe: 'it'
            }
        ],
        'jest/expect-expect': [
            'error',
            {
                assertFunctionNames: ['expect']
            }
        ],
        'jest/prefer-lowercase-title': 'error',
        'jest/no-alias-methods': 'error',
        'jest/no-commented-out-tests': 'error',
        'jest/no-conditional-expect': 'error',
        'jest/no-deprecated-functions': 'error',
        'jest/no-disabled-tests': 'error',
        'jest/no-duplicate-hooks': 'error',
        'jest/no-export': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-hooks': 'error',
        'jest/no-identical-title': 'error',
        'jest/no-jasmine-globals': 'error',
        'jest/no-large-snapshots': 'error',
        'jest/no-standalone-expect': 'error',
        'jest/no-test-prefixes': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-called-with': 'error',
        'jest/prefer-strict-equal': 'error',
        'jest/prefer-to-be': 'error',
        'jest/prefer-to-contain': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/require-to-throw-message': 'error',
        'jest/require-top-level-describe': 'error',
        'jest/no-interpolation-in-snapshots': 'off',
        'jest/no-mocks-import': 'off',
        'jest/no-restricted-matchers': 'off',
        'jest/prefer-expect-assertions': 'off',
        'jest/prefer-hooks-on-top': 'off',
        'jest/prefer-spy-on': 'off',
        'jest/prefer-todo': 'off',
        'jest/valid-describe-callback': 'off',
        'jest/valid-expect-in-promise': 'off',
        'jest/valid-expect': 'off',
        'jest/valid-title': 'off',
        'jest/no-done-callback': 'off',
        'jest/unbound-method': 'off',
        'jest/max-nested-describe': ['error', { max: 4 }],
        'jest/prefer-expect-resolves': 'error',
        'jest/require-hook': 'warn',
        'jest/no-conditional-in-test': 'off',
        'jest/prefer-comparison-matcher': 'off',
        'jest/prefer-equality-matcher': 'off',
        'jest/prefer-snapshot-hint': 'off',
        'jest/prefer-hooks-in-order': 'off',
        'jest/max-expects': 'off',
        'jest/prefer-mock-promise-shorthand': 'off',
        'jest/prefer-each': 'off',
        'jest/no-restricted-jest-methods': 'off',
        'jest/no-untyped-mock-factory': 'off',
        'jest/no-confusing-set-timeout': 'warn',
        'jest/padding-around-after-all-blocks': 'error',
        'jest/padding-around-after-each-blocks': 'error',
        'jest/padding-around-all': 'error',
        'jest/padding-around-before-all-blocks': 'error',
        'jest/padding-around-before-each-blocks': 'error',
        'jest/padding-around-expect-groups': 'error',
        'jest/padding-around-describe-blocks': 'error',
        'jest/padding-around-test-blocks': 'error',

        // error in the next major
        'jest/prefer-importing-jest-globals': 'warn',
        'jest/prefer-jest-mocked': 'warn'
    }
};
