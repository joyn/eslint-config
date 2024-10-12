'use strict';

function extractShortName(pluginName) {
    const prefix = 'eslint-plugin-';
    const suffix = '/eslint-plugin';

    if (pluginName.startsWith(prefix)) {
        return pluginName.slice(prefix.length);
    }

    if (pluginName.startsWith('@') && pluginName.endsWith(suffix)) {
        return pluginName.slice(0, pluginName.length - suffix.length);
    }

    return pluginName;
}

function isRuleDeprecated(rule) {
    return rule.meta?.deprecated ?? false;
}

function isRuleConfigured(ruleConfigSet, ruleName) {
    const configuredRuleNames = Object.keys(ruleConfigSet);
    return configuredRuleNames.includes(ruleName);
}

function testCoreRulesConfigured(t, { ruleConfigSet, rules }) {
    const ruleNames = Object.keys(rules);

    ruleNames.forEach((ruleName) => {
        t.true(isRuleConfigured(ruleConfigSet, ruleName), `Rule ${ruleName} not configured`);
    });
}

function testPluginRulesConfigured(t, { ruleConfigSet, rules, pluginName }) {
    const ruleNames = Object.keys(rules);
    const shortPluginName = extractShortName(pluginName);

    ruleNames.forEach((ruleName) => {
        const rule = rules[ruleName];
        const shortPluginRuleName = `${shortPluginName}/${ruleName}`;
        const isConfigured = isRuleConfigured(ruleConfigSet, shortPluginRuleName);

        if (isRuleDeprecated(rule)) {
            t.false(isConfigured, `Rule ${shortPluginRuleName} is deprecated`);
            return;
        }

        t.true(isConfigured, `Rule ${shortPluginRuleName} not configured`);
    });
}

function testContainsKnownPluginRules(t, { ruleConfigSet, pluginRules }) {
    const pluginRuleNames = new Set(
        Object.keys(pluginRules).flatMap((pluginName) => {
            const rules = pluginRules[pluginName];
            const shortPluginName = extractShortName(pluginName);

            return Object.keys(rules)
                .filter((ruleName) => !isRuleDeprecated(rules[ruleName]))
                .map((ruleName) => `${shortPluginName}/${ruleName}`);
        })
    );

    const shortPluginNames = Object.keys(pluginRules).map(extractShortName);
    const configuredPluginRuleNames = Object.keys(ruleConfigSet).filter((ruleName) =>
        shortPluginNames.find((shortPluginName) => ruleName.startsWith(`${shortPluginName}/`))
    );

    configuredPluginRuleNames.forEach((ruleName) => {
        t.true(pluginRuleNames.has(ruleName), `Rule ${ruleName} can be removed`);
    });
}

module.exports = {
    testCoreRulesConfigured,
    testPluginRulesConfigured,
    testContainsKnownPluginRules
};
