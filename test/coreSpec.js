'use strict';

const test = require('ava');
const eslintDefaults = require('eslint/conf/eslint-all');
const eslintReplacements = require('eslint/conf/replacements.json');
const coreConfig = require('../configs/core');
const { testCoreRulesConfigured } = require('./macros');

test('all eslint core rules are configured', testCoreRulesConfigured, {
    rules: eslintDefaults.rules,
    ruleConfigSet: coreConfig.rules
});

test('doesn’t contain configs for core rules that don’t exist (anymore)', (t) => {
    const rules = Object.keys(coreConfig.rules);
    const configuredRules = Object.keys(coreConfig.rules);

    configuredRules.forEach((ruleName) => {
        const isCoreRule = !ruleName.includes('/');

        if (isCoreRule) {
            t.true(rules.includes(ruleName));
        }
    });
});

test('doesn’t contain configs for deprecated core rules', (t) => {
    const rules = Object.keys(eslintReplacements.rules);
    const configuredRules = Object.keys(coreConfig.rules);

    rules.forEach((ruleName) => {
        t.assert(!configuredRules.includes(ruleName));
    });
});
