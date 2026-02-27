import { RuleTester } from '@typescript-eslint/rule-tester';
import * as vitest from 'vitest'
import rule from '../rules/decimal-system-only.js';

RuleTester.afterAll = vitest.afterAll;
RuleTester.it = vitest.it;
RuleTester.itOnly = vitest.it.only;
RuleTester.describe = vitest.describe;

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
})

ruleTester.run('decimalRule', rule, {
  valid: [
    "const a = 10;",
    "const b = 42n;",
    "const c = 0;",
  ],
  invalid: [
    {
      code: "const a = 0xFF;",
      errors: [{ messageId: "unexpected" }],
    },
    {
      code: "const a = 0b1010;",
      errors: [{ messageId: "unexpected" }],
    },
    {
      code: "const a = 0o755;",
      errors: [{ messageId: "unexpected" }],
    },
    {
      code: "const a = 0xFFn;",
      errors: [{ messageId: "unexpected" }],
    },
  ]
})
