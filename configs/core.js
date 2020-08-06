'use strict';

module.exports = {
    reportUnusedDisableDirectives: true,
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'script',
        ecmaFeatures: {
            jsx: false,
            globalReturn: false,
            impliedStrict: false
        }
    },
    env: {
        builtin: true,
        es6: true
    },
    rules: {
        'array-callback-return': 'error',
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-catch-shadow': 'error',
        'no-class-assign': 'error',
        'no-cond-assign': 'error',
        'no-confusing-arrow': 'error',
        'no-console': 'error',
        'no-const-assign': 'error',
        'no-constant-condition': 'error',
        'no-continue': 'error',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-delete-var': 'error',
        'no-div-regex': 'error',
        'no-dupe-class-members': 'error',
        'no-dupe-keys': 'error',
        'no-dupe-args': 'error',
        'no-duplicate-case': 'error',
        'no-duplicate-imports': 'error',
        'no-else-return': [
            'error',
            {
                allowElseIf: false
            }
        ],
        'no-empty': ['error', { allowEmptyCatch: true }],
        'no-empty-character-class': 'error',
        'no-empty-function': 'off',
        'no-empty-pattern': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-ex-assign': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-label': 'error',
        'no-extra-parens': 'error',
        'no-extra-semi': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-func-assign': 'error',
        'no-implicit-coercion': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-inline-comments': 'off',
        'no-inner-declarations': ['error', 'functions'],
        'no-invalid-regexp': 'error',
        'no-invalid-this': 'off',
        'no-irregular-whitespace': 'error',
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-loop-func': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'linebreak-style': ['error', 'unix'],
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1
            }
        ],
        'no-global-assign': 'error',
        'no-negated-condition': 'off',
        'no-nested-ternary': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-symbol': 'error',
        'no-new-wrappers': 'error',
        'no-obj-calls': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': [
            'error',
            {
                props: true
            }
        ],
        'no-plusplus': 'error',
        'no-proto': 'error',
        'no-prototype-builtins': 'off',
        'no-redeclare': [
            'error',
            {
                builtinGlobals: true
            }
        ],
        'no-regex-spaces': 'error',
        'no-restricted-syntax': 'off',
        'no-return-assign': ['error', 'always'],
        'no-self-assign': [
            'error',
            {
                props: true
            }
        ],
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow': [
            'error',
            {
                builtinGlobals: true
            }
        ],
        'no-shadow-restricted-names': 'error',
        'no-sparse-arrays': 'error',
        'no-tabs': 'error',
        'no-ternary': 'off',
        'no-trailing-spaces': 'error',
        'no-this-before-super': 'error',
        'no-throw-literal': 'error',
        'no-undef': [
            'error',
            {
                typeof: true
            }
        ],
        'no-undef-init': 'error',
        'no-undefined': 'off',
        'no-unexpected-multiline': 'error',
        'no-underscore-dangle': 'off',
        'no-unmodified-loop-condition': 'error',
        'no-unneeded-ternary': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unused-expressions': 'error',
        'no-unused-labels': 'error',
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: true,
                argsIgnorePattern: '^_$',
                caughtErrors: 'all',
                caughtErrorsIgnorePattern: '^_$'
            }
        ],
        'no-use-before-define': 'error',
        'no-useless-call': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'no-useless-escape': 'error',
        'no-useless-rename': 'error',
        'no-whitespace-before-property': 'error',
        'no-void': 'error',
        'prefer-const': [
            'error',
            {
                destructuring: 'all'
            }
        ],
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'no-var': 'error',
        'no-warning-comments': [
            'warn',
            {
                terms: ['todo', 'fixme', 'wtf', 'falls through', 'istanbul'],
                location: 'anywhere'
            }
        ],
        'no-with': 'error',
        'no-magic-numbers': 'off',
        'no-mixed-operators': 'off',
        'array-bracket-spacing': ['error', 'never'],
        'array-bracket-newline': ['error', 'consistent'],
        'array-element-newline': ['error', 'consistent'],
        'arrow-body-style': 'off',
        'arrow-parens': ['error', 'always'],
        'arrow-spacing': [
            'error',
            {
                before: true,
                after: true
            }
        ],
        'accessor-pairs': [
            'error',
            {
                enforceForClassMembers: true
            }
        ],
        'block-scoped-var': 'off',
        'block-spacing': 'off',
        'brace-style': [
            'error',
            '1tbs',
            {
                allowSingleLine: false
            }
        ],
        camelcase: 'off',
        'comma-dangle': ['error', 'never'],
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        'comma-style': ['error', 'last'],
        complexity: ['warn', { max: 6 }],
        'computed-property-spacing': [
            'error',
            'never',
            {
                enforceForClassMembers: true
            }
        ],
        'consistent-return': 'error',
        'consistent-this': ['error', 'self'],
        'constructor-super': 'error',
        'generator-star-spacing': ['error', 'both'],
        curly: ['error', 'all'],
        'default-case': 'error',
        'dot-location': ['error', 'property'],
        'dot-notation': 'error',
        'eol-last': 'error',
        eqeqeq: 'error',
        'func-names': 'off',
        'func-style': 'off',
        'guard-for-in': 'error',
        'id-length': 'off',
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
                MemberExpression: 1
            }
        ],
        'init-declarations': 'off',
        'jsx-quotes': 'off',
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true
            }
        ],
        'lines-around-comment': 'off',
        'max-depth': ['warn', { max: 5 }],
        'max-lines': 'off',
        'max-nested-callbacks': ['warn', { max: 6 }],
        'max-params': ['warn', { max: 4 }],
        'max-statements': ['warn', 13],
        'multiline-ternary': 'off',
        'max-statements-per-line': ['error', { max: 1 }],
        'new-cap': [
            'error',
            {
                newIsCap: true,
                capIsNew: true
            }
        ],
        'new-parens': 'error',
        'newline-per-chained-call': 'off',
        'object-curly-newline': 'off',
        'object-curly-spacing': ['error', 'always'],
        'object-property-newline': 'off',
        'object-shorthand': ['error', 'always'],
        'one-var': ['error', 'never'],
        'one-var-declaration-per-line': 'error',
        'operator-assignment': ['error', 'always'],
        'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
        'padded-blocks': [
            'error',
            'never',
            {
                allowSingleLineBlocks: false
            }
        ],
        'prefer-arrow-callback': [
            'error',
            {
                allowNamedFunctions: true
            }
        ],
        'prefer-rest-params': 'error',
        'quote-props': ['error', 'as-needed'],
        quotes: ['error', 'single', { avoidEscape: true }],
        radix: 'error',
        'id-match': 'off',
        'id-blacklist': 'off',
        'require-jsdoc': 'off',
        'require-yield': 'error',
        'rest-spread-spacing': ['error', 'never'],
        semi: ['error', 'always'],
        'semi-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        'sort-vars': 'off',
        'keyword-spacing': [
            'error',
            {
                before: true,
                after: true
            }
        ],
        'space-before-blocks': ['error', 'always'],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': [
            'error',
            'always',
            {
                line: {
                    exceptions: ['-', '+', '*'],
                    markers: ['!', '/', '=>']
                },
                block: {
                    exceptions: ['-', '+', '*'],
                    markers: ['!', '*'],
                    balanced: true
                }
            }
        ],
        'sort-imports': 'off',
        strict: ['error', 'safe'],
        'template-curly-spacing': 'error',
        'unicode-bom': ['error', 'never'],
        'use-isnan': 'error',
        'valid-jsdoc': 'off',
        'valid-typeof': 'error',
        'vars-on-top': 'error',
        'wrap-iife': ['error', 'inside'],
        'wrap-regex': 'off',
        'yield-star-spacing': ['error', 'both'],
        yoda: ['error', 'never'],
        'capitalized-comments': 'off',
        'class-methods-use-this': 'off',
        'func-call-spacing': ['error', 'never'],
        'func-name-matching': 'off',
        'line-comment-position': 'off',
        'no-await-in-loop': 'off',
        'no-compare-neg-zero': 'error',
        'no-multi-assign': 'error',
        'no-restricted-properties': 'off',
        'no-return-await': 'error',
        'no-template-curly-in-string': 'error',
        'no-unsafe-negation': 'error',
        'no-useless-return': 'error',
        'nonblock-statement-body-position': 'off',
        'prefer-destructuring': [
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
                enforceForRenamedProperties: false
            }
        ],
        'prefer-numeric-literals': 'error',
        'prefer-promise-reject-errors': [
            'error',
            {
                allowEmptyReject: false
            }
        ],
        'require-await': 'off',
        'sort-keys': 'off',
        'symbol-description': 'error',
        'template-tag-spacing': ['error', 'never'],
        'for-direction': 'off',
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: 'directive',
                next: '*'
            },
            {
                blankLine: 'any',
                prev: 'directive',
                next: 'directive'
            }
        ],
        'semi-style': ['error', 'last'],
        'switch-colon-spacing': [
            'error',
            {
                after: true,
                before: false
            }
        ],
        'function-paren-newline': 'off',
        'getter-return': [
            'error',
            {
                allowImplicit: false
            }
        ],
        'implicit-arrow-linebreak': 'off',
        'lines-between-class-members': [
            'error',
            'always',
            {
                exceptAfterSingleLine: true
            }
        ],
        'multiline-comment-style': 'off',
        'max-classes-per-file': 'off',
        'max-lines-per-function': 'off',
        'prefer-object-spread': 'error',
        'no-async-promise-executor': 'error',
        'no-misleading-character-class': 'error',
        'default-param-last': 'error',
        'prefer-regex-literals': 'error',
        'require-unicode-regexp': 'off',
        'function-call-argument-newline': ['error', 'consistent'],
        'no-useless-catch': 'error',
        'prefer-named-capture-group': 'error',
        'no-import-assign': 'error',
        'require-atomic-updates': 'off',

        'callback-return': 'off',
        'global-require': 'off',
        'handle-callback-err': 'off',
        'no-buffer-constructor': 'off',
        'no-mixed-requires': 'off',
        'no-new-require': 'off',
        'no-path-concat': 'off',
        'no-process-env': 'off',
        'no-process-exit': 'off',
        'no-restricted-modules': 'off',
        'no-restricted-imports': 'off',
        'no-sync': 'off',

        'no-alert': 'off',
        'no-script-url': 'off',
        'no-restricted-globals': 'off',
        'max-len': 'off',

        'grouped-accessor-pairs': 'off',
        'no-constructor-return': 'error',
        'no-dupe-else-if': 'error',
        'no-setter-return': 'error',
        'prefer-exponentiation-operator': 'error',

        'default-case-last': 'error',
        'no-restricted-exports': 'off',
        'no-useless-backreference': 'error',
        'id-denylist': 'off',
        'no-loss-of-precision': 'off',
        'no-promise-executor-return': 'error',
        'no-unreachable-loop': 'error'
    }
};
