import decimalSystemOnly from "./rules/decimal-system-only.js";

const plugin = {
  rules: {
    "decimal-system-only": decimalSystemOnly,
  },
};

export const rules = plugin.rules;

export const configs = {
  recommended: [
    {
      plugins: {
        decimal: plugin,
      },
      rules: {
        "decimal/decimal-system-only": "error",
      },
    },
  ],
};

export default plugin;
