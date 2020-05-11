'use strict';

const test = require('ava');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const typescriptConfig = require('../configs/typescript');
const { testPluginRulesConfigured } = require('./macros');

test('all eslint-plugin-typescript rules are configured', testPluginRulesConfigured, {
    ruleConfigSet: typescriptConfig.rules,
    rules: typescriptPlugin.rules,
    pluginName: '@typescript-eslint/eslint-plugin'
});
