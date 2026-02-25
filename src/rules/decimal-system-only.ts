import { ESLintUtils } from '@typescript-eslint/utils';
import { NON_DECIMAL_REGEX } from '../regex';

const rule = ESLintUtils.RuleCreator.withoutDocs({
  create(context) {
    return {
        Literal(node) {
          if (
            (typeof node.value === "number" || typeof node.value === "bigint") && 
            typeof node.raw === 'string' && 
            NON_DECIMAL_REGEX.test(node.raw)
          ) {
            context.report({
              messageId: 'unexpected',
              node
            })
          }
        }
    }
  },
  meta: {
    type: "problem",
    schema: [],
    messages: {
      unexpected: "Only decimal literals are allowed",
    },
  },
  defaultOptions: [],
})
export default rule
