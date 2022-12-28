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

function isRuleConfigured(ruleConfigSet, ruleName) {
    const configuredRuleNames = Object.keys(ruleConfigSet);
    return configuredRuleNames.includes(ruleName);
}

function isPluginRuleConfigured(ruleConfigSet, ruleName, pluginName) {
    const shortPluginName = extractShortName(pluginName);
    const pluginRuleName = `${pluginName}/${ruleName}`;
    const shortPluginRuleName = `${shortPluginName}/${ruleName}`;

    return isRuleConfigured(ruleConfigSet, pluginRuleName) || isRuleConfigured(ruleConfigSet, shortPluginRuleName);
}

function testCoreRulesConfigured(t, { ruleConfigSet, rules }) {
    const ruleNames = Object.keys(rules);

    ruleNames.forEach((ruleName) => {
        t.assert(isRuleConfigured(ruleConfigSet, ruleName), `Rule ${ruleName} not configured`);
    });
}

function testPluginRulesConfigured(t, { ruleConfigSet, rules, pluginName }) {
    const ruleNames = Object.keys(rules);

    ruleNames.forEach((ruleName) => {
        const rule = rules[ruleName];
        const isConfigured = isPluginRuleConfigured(ruleConfigSet, ruleName, pluginName);

        if (rule.meta?.deprecated) {
            t.false(isConfigured, `Rule ${pluginName}/${ruleName} is deprecated`);
            return;
        }

        t.assert(isConfigured, `Rule ${pluginName}/${ruleName} not configured`);
    });
}

module.exports = {
    testCoreRulesConfigured,
    testPluginRulesConfigured
};
