'use strict';

const test = require('ava');
const nPlugin = require('eslint-plugin-n');
const nodeConfig = require('../configs/node');
const { testPluginRulesConfigured, testContainsKnownPluginRules } = require('./macros');

test('all eslint-plugin-node rules are configured', testPluginRulesConfigured, {
    ruleConfigSet: nodeConfig.rules,
    rules: nPlugin.rules,
    pluginName: 'eslint-plugin-n'
});

test('contains only known plugin rules', testContainsKnownPluginRules, {
    ruleConfigSet: nodeConfig.rules,
    pluginRules: {
        'eslint-plugin-n': nPlugin.rules
    }
});
