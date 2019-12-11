'use strict';

module.exports = {
    env: {
        browser: true
    },
    rules: {
        'no-alert': 'error',
        'no-script-url': 'error',
        'no-restricted-globals': ['error', 'event']
    }
};
