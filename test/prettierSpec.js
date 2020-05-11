'use strict';

const test = require('ava');
const prettierPlugin = require('eslint-plugin-prettier');
const prettierConfig = require('../configs/prettier');
const { testPluginRulesConfigured } = require('./macros');

test('all eslint-plugin-prettier rules are configured', testPluginRulesConfigured, {
    ruleConfigSet: prettierConfig.rules,
    rules: prettierPlugin.rules,
    pluginName: 'eslint-plugin-prettier'
});
