'use strict';

const test = require('ava');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const reactConfig = require('../configs/react');
const { testPluginRulesConfigured, testContainsKnownPluginRules } = require('./macros');

test('all eslint-plugin-react rules are configured', testPluginRulesConfigured, {
    ruleConfigSet: reactConfig.rules,
    rules: reactPlugin.rules,
    pluginName: 'eslint-plugin-react'
});

test('all eslint-plugin-react-hooks rules are configured', testPluginRulesConfigured, {
    ruleConfigSet: reactConfig.rules,
    rules: reactHooksPlugin.rules,
    pluginName: 'eslint-plugin-react-hooks'
});

test('contains only known plugin rules', testContainsKnownPluginRules, {
    ruleConfigSet: reactConfig.rules,
    pluginRules: {
        'eslint-plugin-react': reactPlugin.rules,
        'eslint-plugin-react-hooks': reactHooksPlugin.rules
    }
});
