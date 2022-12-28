'use strict';

const test = require('ava');
const eslintDefaults = require('../node_modules/eslint/conf/eslint-all');
const eslintReplacements = require('../node_modules/eslint/conf/replacements.json');
const coreConfig = require('../configs/core');
const { testCoreRulesConfigured } = require('./macros');

test('all core rules are configured', testCoreRulesConfigured, {
    rules: eslintDefaults.rules,
    ruleConfigSet: coreConfig.rules
});

test('does not contain removed core rules', (t) => {
    const rules = Object.keys(eslintDefaults.rules);
    const configuredRules = Object.keys(coreConfig.rules);

    configuredRules.forEach((ruleName) => {
        const isCoreRule = !ruleName.includes('/');

        if (isCoreRule) {
            t.true(rules.includes(ruleName), `Rule ${ruleName} can be removed`);
        }
    });
});

test('does not contain replaced core rules', (t) => {
    const rules = Object.keys(eslintReplacements.rules);
    const configuredRules = Object.keys(coreConfig.rules);

    rules.forEach((ruleName) => {
        t.false(configuredRules.includes(ruleName));
    });
});
