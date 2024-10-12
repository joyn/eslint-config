'use strict';

module.exports = {
    plugins: ['n'],
    env: {
        node: true
    },
    rules: {
        'callback-return': 'off',
        'handle-callback-err': 'off',
        'no-buffer-constructor': 'error',
        'no-path-concat': 'off',
        'no-process-env': 'off',
        'no-process-exit': 'off',
        'no-restricted-modules': 'off',
        'no-restricted-imports': 'off',
        'no-sync': 'off',

        'n/no-unpublished-bin': 'error',
        'n/no-unsupported-features/node-builtins': 'error',
        'n/no-unsupported-features/es-syntax': 'error',
        'n/no-unsupported-features/es-builtins': 'error',
        'n/no-deprecated-api': 'error',
        'n/prefer-global/buffer': ['error', 'always'],
        'n/prefer-global/console': ['error', 'always'],
        'n/prefer-global/process': ['error', 'always'],
        'n/prefer-global/text-decoder': ['error', 'always'],
        'n/prefer-global/text-encoder': ['error', 'always'],
        'n/prefer-global/url-search-params': ['error', 'always'],
        'n/prefer-global/url': ['error', 'always'],
        'n/prefer-promises/dns': 'error',
        'n/prefer-promises/fs': 'error',
        'n/callback-return': 'off',
        'n/exports-style': 'off',
        'n/file-extension-in-import': 'off',
        'n/global-require': 'off',
        'n/handle-callback-err': ['error', '^(e$|(e|(.*(_e|E)))rr)'],
        'n/no-callback-literal': 'error',
        'n/no-exports-assign': 'off',
        'n/no-extraneous-import': 'off',
        'n/no-extraneous-require': 'off',
        'n/no-missing-import': 'off',
        'n/no-missing-require': 'off',
        'n/no-mixed-requires': 'off',
        'n/no-new-require': 'error',
        'n/no-path-concat': 'error',
        'n/no-process-env': 'error',
        'n/no-process-exit': 'error',
        'n/no-restricted-require': ['error', ['domain', 'freelist', 'smalloc', 'sys', 'colors']],
        'n/no-restricted-import': ['error', ['domain', 'freelist', 'smalloc', 'sys', 'colors']],
        'n/no-sync': 'error',
        'n/no-unpublished-import': 'off',
        'n/no-unpublished-require': 'off',
        'n/process-exit-as-throw': 'error',
        'n/hashbang': 'off',

        // error in the future
        'n/prefer-node-protocol': 'warn'
    }
};
