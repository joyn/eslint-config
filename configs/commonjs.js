'use strict';

module.exports = {
    env: {
        commonjs: true
    },
    parserOptions: {
        ecmaFeatures: {
            globalReturn: true
        }
    },
    rules: {
        'no-mixed-requires': [
            'error',
            {
                grouping: true,
                allowCall: true
            }
        ],
        'no-new-require': 'error',

        'import/no-commonjs': 'off',

        'no-implicit-globals': 'off'
    }
};
