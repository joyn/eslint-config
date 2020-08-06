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
        'jest/lowercase-name': ['error'],
        'jest/no-alias-methods': ['error'],
        'jest/no-commented-out-tests': ['error'],
        'jest/no-conditional-expect': ['error'],
        'jest/no-deprecated-functions': ['error'],
        'jest/no-disabled-tests': ['error'],
        'jest/no-duplicate-hooks': ['error'],
        'jest/no-export': ['error'],
        'jest/no-focused-tests': ['error'],
        'jest/no-hooks': ['error'],
        'jest/no-identical-title': ['error'],
        'jest/no-jasmine-globals': ['error'],
        'jest/no-large-snapshots': ['error'],
        'jest/no-standalone-expect': ['error'],
        'jest/no-test-callback': ['error'],
        'jest/no-test-prefixes': ['error'],
        'jest/no-test-return-statement': ['error'],
        'jest/prefer-called-with': ['error'],
        'jest/prefer-strict-equal': ['error'],
        'jest/prefer-to-be-null': ['error'],
        'jest/prefer-to-be-undefined': ['error'],
        'jest/prefer-to-contain': ['error'],
        'jest/prefer-to-have-length': ['error'],
        'jest/require-to-throw-message': ['error'],
        'jest/require-top-level-describe': ['error'],
        'jest/no-expect-resolves': ['off'],
        'jest/no-interpolation-in-snapshots': ['off'],
        'jest/no-jest-import': ['off'],
        'jest/no-mocks-import': ['off'],
        'jest/no-restricted-matchers': ['off'],
        'jest/no-truthy-falsy': ['off'],
        'jest/no-try-expect': ['off'],
        'jest/prefer-expect-assertions': ['off'],
        'jest/prefer-hooks-on-top': ['off'],
        'jest/prefer-inline-snapshots': ['off'],
        'jest/prefer-spy-on': ['off'],
        'jest/prefer-todo': ['off'],
        'jest/valid-describe': ['off'],
        'jest/valid-expect-in-promise': ['off'],
        'jest/valid-expect': ['off'],
        'jest/valid-title': ['off'],
        'jest/no-if': ['off']
    }
};
