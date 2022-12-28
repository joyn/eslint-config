'use strict';

const test = require('ava');
const prettierPlugin = require('eslint-plugin-prettier');
const prettierConfig = require('../configs/prettier');
const { testPluginRulesConfigured, testContainsKnownPluginRules } = require('./macros');

test('all eslint-plugin-prettier rules are configured', testPluginRulesConfigured, {
    ruleConfigSet: prettierConfig.rules,
    rules: prettierPlugin.rules,
    pluginName: 'eslint-plugin-prettier'
});

test('contains only known plugin rules', testContainsKnownPluginRules, {
    ruleConfigSet: prettierConfig.rules,
    pluginRules: {
        'eslint-plugin-prettier': prettierPlugin.rules
    }
});
