'use strict';

const test = require('ava');
const mochaPlugin = require('eslint-plugin-mocha');
const mochaConfig = require('../configs/mocha');
const { testPluginRulesConfigured } = require('./macros');

test('all eslint-plugin-mocha rules are configured', testPluginRulesConfigured, {
    ruleConfigSet: mochaConfig.rules,
    rules: mochaPlugin.rules,
    pluginName: 'eslint-plugin-mocha'
});
