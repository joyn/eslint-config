'use strict';

const test = require('ava');
const noSecretsPlugin = require('eslint-plugin-no-secrets');
const unicornPlugin = require('eslint-plugin-unicorn');
const promisePlugin = require('eslint-plugin-promise');
const importPlugin = require('eslint-plugin-import');
const eslintCommentsPlugin = require('eslint-plugin-eslint-comments');
const optimizeRegexPlugin = require('eslint-plugin-optimize-regex');
const arrayFuncPlugin = require('eslint-plugin-array-func');
const sonarFuncPlugin = require('eslint-plugin-sonarjs');
const basePluginsConfig = require('../configs/base-plugins');
const { testPluginRulesConfigured, testContainsKnownPluginRules } = require('./macros');

test('all eslint-plugin-no-secrets rules are configured', testPluginRulesConfigured, {
    ruleConfigSet: basePluginsConfig.rules,
    rules: noSecretsPlugin.rules,
    pluginName: 'eslint-plugin-no-secrets'
});

test('all eslint-plugin-unicorn rules are configured', testPluginRulesConfigured, {
    ruleConfigSet: basePluginsConfig.rules,
    rules: unicornPlugin.rules,
    pluginName: 'eslint-plugin-unicorn'
});

test('all eslint-plugin-promise rules are configured', testPluginRulesConfigured, {
    ruleConfigSet: basePluginsConfig.rules,
    rules: promisePlugin.rules,
    pluginName: 'eslint-plugin-promise'
});

test('all eslint-plugin-import rules are configured', testPluginRulesConfigured, {
    ruleConfigSet: basePluginsConfig.rules,
    rules: importPlugin.rules,
    pluginName: 'eslint-plugin-import'
});

test('all eslint-plugin-eslint-comments rules are configured', testPluginRulesConfigured, {
    ruleConfigSet: basePluginsConfig.rules,
    rules: eslintCommentsPlugin.rules,
    pluginName: 'eslint-plugin-eslint-comments'
});

test('all eslint-plugin-optimize-regex rules are configured', testPluginRulesConfigured, {
    ruleConfigSet: basePluginsConfig.rules,
    rules: optimizeRegexPlugin.rules,
    pluginName: 'eslint-plugin-optimize-regex'
});

test('all eslint-plugin-array-func rules are configured', testPluginRulesConfigured, {
    ruleConfigSet: basePluginsConfig.rules,
    rules: arrayFuncPlugin.rules,
    pluginName: 'eslint-plugin-array-func'
});

test('all eslint-plugin-sonarjs rules are configured', testPluginRulesConfigured, {
    ruleConfigSet: basePluginsConfig.rules,
    rules: sonarFuncPlugin.rules,
    pluginName: 'eslint-plugin-sonarjs'
});

test('contains only known plugin rules', testContainsKnownPluginRules, {
    ruleConfigSet: basePluginsConfig.rules,
    pluginRules: {
        'eslint-plugin-no-secrets': noSecretsPlugin.rules,
        'eslint-plugin-unicorn': unicornPlugin.rules,
        'eslint-plugin-promise': promisePlugin.rules,
        'eslint-plugin-import': importPlugin.rules,
        'eslint-plugin-eslint-comments': eslintCommentsPlugin.rules,
        'eslint-plugin-optimize-regex': optimizeRegexPlugin.rules,
        'eslint-plugin-array-func': arrayFuncPlugin.rules,
        'eslint-plugin-sonarjs': sonarFuncPlugin.rules
    }
});
