'use strict';

const test = require('ava');
const jestPlugin = require('eslint-plugin-jest');
const jestConfig = require('../configs/jest');
const { testPluginRulesConfigured, testContainsKnownPluginRules } = require('./macros');

test('all eslint-plugin-jest rules are configured', testPluginRulesConfigured, {
    ruleConfigSet: jestConfig.rules,
    rules: jestPlugin.rules,
    pluginName: 'eslint-plugin-jest'
});

test('contains only known plugin rules', testContainsKnownPluginRules, {
    ruleConfigSet: jestConfig.rules,
    pluginRules: {
        'eslint-plugin-jest': jestPlugin.rules
    }
});
