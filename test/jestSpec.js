'use strict';

const test = require('ava');
const jestPlugin = require('eslint-plugin-jest');
const jestConfig = require('../configs/jest');
const { testPluginRulesConfigured } = require('./macros');

test('all eslint-plugin-jest rules are configured', testPluginRulesConfigured, {
    ruleConfigSet: jestConfig.rules,
    rules: jestPlugin.rules,
    pluginName: 'eslint-plugin-jest'
});
