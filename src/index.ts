import { RULE_NAME } from "./constants/index.js";
import decimalSystemOnly from "./rules/decimal-system-only.js";
import { Plugin } from "./types/index.js";

const plugin: Plugin = {
  meta: {
    name: "eslint-plugin-decimal-system",
    version: "1.0.8",
  },
  rules: {
    [RULE_NAME]: decimalSystemOnly,
  },
  configs: {},
};

export const rules = plugin.rules;

Object.assign(plugin.configs, {
  recommended: [
    {
      plugins: {
        decimal: plugin,
      },
      rules: {
        [`decimal/${RULE_NAME}`]: "error",
      },
    }
  ]
})

export default plugin;
