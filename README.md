[![NPM Version](https://img.shields.io/npm/v/eslint-config-joyn.svg?style=flat)](https://www.npmjs.org/package/eslint-config-joyn)
[![GitHub Actions status](https://github.com/joyn/eslint-config/workflows/CI%20Pipeline/badge.svg)](https://github.com/joyn/eslint-config/actions)
[![peerDependencies](https://img.shields.io/david/peer/joyn/eslint-config)](https://david-dm.org/joyn/eslint-config?type=peer)

# eslint-config-joyn

Shareable ESLint config presets for Joyn.

This config aims for ES2015+ or TypeScript code. It supports various environments (e.g. `node` or `browser`).

## Install and Setup

* Make sure to install all required peer dependencies along with this config: `npm i -D joyn/eslint-config eslint-plugin-prettier prettier eslint-plugin-unicorn eslint-plugin-promise eslint-plugin-eslint-comments eslint-plugin-import eslint-plugin-optimize-regex eslint-plugin-no-secrets eslint-plugin-array-func`
* Add `extends: "joyn"` to your ESLint config.

## Specify Environments

### Example:

The following `.eslintrc.json` config file configures a node project with mixed commonjs script and typescript files.

```json
{
    "extends": [ "joyn", "joyn/presets/node" ],
    "overrides": [
        {
            "files": [ "**/*.js" ],
            "extends": [ "joyn/presets/commonjs" ]
        },
        {
            "files": [ "**/*.ts" ],
            "extends": [ "joyn/presets/typescript" ]
        },
        {
            "files": [ "test/unit/**/*.spec.js", "test/unit/**/*.spec.ts" ],
            "extends": [ "joyn/presets/mocha-chai" ]
        }
    ]
}
```

### Environments:

* `joyn/presets/browser`
* `joyn/presets/node`: requires additional dependencies `npm i -D eslint-plugin-node`
* `joyn/presets/commonjs`
* `joyn/presets/esm`
* `joyn/presets/mocha-chai`: requires additional dependencies `npm i -D eslint-plugin-mocha`
* `joyn/presets/typescript`: requires additional dependencies `npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin` and the use of [`--ext`](https://eslint.org/docs/user-guide/command-line-interface#ext) ESLint CLI option in order to lint `.ts` files
* `joyn/presets/ava`: requires additional dependencies `npm i -D eslint-plugin-ava`
