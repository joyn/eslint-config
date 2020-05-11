'use strict';

const test = require('ava');
const nodePlugin = require('eslint-plugin-node');
const nodeConfig = require('../configs/node');
const { testPluginRulesConfigured } = require('./macros');

test('all eslint-plugin-node rules are configured', testPluginRulesConfigured, {
    ruleConfigSet: nodeConfig.rules,
    rules: nodePlugin.rules,
    pluginName: 'eslint-plugin-node'
});
