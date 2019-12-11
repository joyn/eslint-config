'use strict';

module.exports = {
    plugins: ['node'],
    env: {
        node: true
    },
    rules: {
        'callback-return': 'off',
        'global-require': 'off',
        'handle-callback-err': ['error', '^(e$|(e|(.*(_e|E)))rr)'],
        'no-buffer-constructor': 'error',
        'no-path-concat': 'error',
        'no-process-env': 'error',
        'no-process-exit': 'error',
        'no-restricted-modules': ['error', 'domain', 'freelist', 'smalloc', 'sys', 'colors'],
        'no-restricted-imports': ['error', 'domain', 'freelist', 'smalloc', 'sys', 'colors'],
        'no-sync': 'error',

        'node/no-unpublished-bin': 'error',
        'node/no-unsupported-features/node-builtins': 'error',
        'node/no-unsupported-features/es-syntax': 'error',
        'node/no-unsupported-features/es-builtins': 'error',
        'node/no-deprecated-api': 'error',
        'node/prefer-global/buffer': ['error', 'always'],
        'node/prefer-global/console': ['error', 'always'],
        'node/prefer-global/process': ['error', 'always'],
        'node/prefer-global/text-decoder': ['error', 'always'],
        'node/prefer-global/text-encoder': ['error', 'always'],
        'node/prefer-global/url-search-params': ['error', 'always'],
        'node/prefer-global/url': ['error', 'always'],
        'node/prefer-promises/dns': 'error',
        'node/prefer-promises/fs': 'error'
    }
};
