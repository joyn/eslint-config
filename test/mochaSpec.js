'use strict';

const test = require('ava');
const mochaPlugin = require('eslint-plugin-mocha');
const mochaConfig = require('../configs/mocha');
const { testPluginRulesConfigured, testContainsKnownPluginRules } = require('./macros');

test('all eslint-plugin-mocha rules are configured', testPluginRulesConfigured, {
    ruleConfigSet: mochaConfig.rules,
    rules: mochaPlugin.rules,
    pluginName: 'eslint-plugin-mocha'
});

test('contains only known plugin rules', testContainsKnownPluginRules, {
    ruleConfigSet: mochaConfig.rules,
    pluginRules: {
        'eslint-plugin-mocha': mochaPlugin.rules
    }
});
