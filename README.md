## eslint-plugin-decimal-system

ESLint plugin that enforces usage of decimal numeric literals only.

## Disallows:

- Hexadecimal (`0xFF`)
- Binary (`0b1010`)
- Octal (`0o755`)
- BigInt in non-decimal form (`0xFFn`)

Allows:

- Decimal numbers (`10`, `12345`, `0`, `42n`)

## Installation
```bash
npm install --save-dev eslint-plugin-decimal-system
```

Peer dependency:
```bash
npm install --save-dev eslint
```

### What the plugin exports

- default → plugin (contains `rules` and `configs`)

- named export → `rules`

### Usage
ESLint 9 
```js
import { defineConfig } from "eslint/config";
import decimal from "eslint-plugin-decimal-system";

export default defineConfig([
  ...decimal.configs.recommended,
])

```

Or enable manually:
```js
import decimal from "eslint-plugin-decimal-system";

export default [
  {
    plugins: { decimal },
    rules: {
      "decimal/decimal-system-only": "error",
    },
  },
];
```

### Rule Details

- The rule checks all Literal AST nodes and reports when:

- The literal is number or bigint

- The raw source starts with 0x, 0b, or 0o

### When to Use

- This rule is useful when:

- Enforcing numeric consistency in codebases

- Avoiding mixed numeral systems

- Improving readability

- Preventing accidental octal usage

### License

ISC
