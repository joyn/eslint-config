'use strict';

const test = require('ava');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const functionalPlugin = require('eslint-plugin-functional');
const typescriptConfig = require('../configs/typescript');
const { testPluginRulesConfigured, testContainsKnownPluginRules } = require('./macros');

test('all eslint-plugin-typescript rules are configured', testPluginRulesConfigured, {
    ruleConfigSet: typescriptConfig.rules,
    rules: typescriptPlugin.rules,
    pluginName: '@typescript-eslint/eslint-plugin'
});

test('all eslint-plugin-functional rules are configured', testPluginRulesConfigured, {
    ruleConfigSet: typescriptConfig.rules,
    rules: functionalPlugin.rules,
    pluginName: 'eslint-plugin-functional'
});

test('contains only known plugin rules', testContainsKnownPluginRules, {
    ruleConfigSet: typescriptConfig.rules,
    pluginRules: {
        '@typescript-eslint/eslint-plugin': typescriptPlugin.rules,
        'eslint-plugin-functional': functionalPlugin.rules
    }
});
