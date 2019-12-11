'use strict';

module.exports = {
    env: {
        mocha: true
    },
    plugins: ['mocha'],
    rules: {
        'mocha/handle-done-callback': 'error',
        'mocha/max-top-level-suites': ['error', { limit: 1 }],
        'mocha/no-exclusive-tests': 'warn',
        'mocha/no-global-tests': 'error',
        'mocha/no-hooks': 'off',
        'mocha/no-hooks-for-single-case': 'warn',
        'mocha/no-identical-title': 'error',
        'mocha/no-mocha-arrows': 'off',
        'mocha/no-nested-tests': 'error',
        'mocha/no-pending-tests': 'warn',
        'mocha/no-return-and-callback': 'error',
        'mocha/no-setup-in-describe': 'off',
        'mocha/no-sibling-hooks': 'error',
        'mocha/no-skipped-tests': 'warn',
        'mocha/no-synchronous-tests': 'off',
        'mocha/no-top-level-hooks': 'warn',
        'mocha/prefer-arrow-callback': 'off',
        'mocha/valid-suite-description': 'off',
        'mocha/valid-test-description': 'off',
        'mocha/no-async-describe': 'error'
    }
};
