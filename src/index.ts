import decimalSystemOnly from "./rules/decimal-system-only";

export const rules = {
  "decimal-system-only": decimalSystemOnly,
};

export const configs = {
  recommended: {
    rules: {
      "decimal/decimal-system-only": "error",
    },
  },
};

export default {
  rules,
  configs,
};
