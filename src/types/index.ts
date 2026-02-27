import type { Linter } from "eslint";
import type { RuleModule } from "@typescript-eslint/utils/ts-eslint";

export interface Plugin {
  meta: { name: string; version: string };
  rules: Record<string, RuleModule<string, unknown[]>>;
  configs: Record<string, Linter.Config[]>;
};

