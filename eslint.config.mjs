// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [...compat.extends("next/core-web-vitals")];

// export default eslintConfig;

import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import { fixupConfigRules } from "@eslint/compat";
import typescriptParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

// Base Next.js config with TypeScript support
const nextConfig = fixupConfigRules(
  compat.extends("next/core-web-vitals")
);

// TypeScript-specific configuration
const javaScriptConfig = {
  files: ["**/*.js", "**/*.jsx"],
  languageOptions: {
    parser: typescriptParser,
    parserOptions: {
      project: "./jsconfig.json",
      jsconfigRootDir: __dirname,
      warnOnUnsupportedTypeScriptVersion: false
    }
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: "./jsconfig.json",
      },
    },
  },
};

export default [
  ...nextConfig,
  javaScriptConfig,
  {
    ignores: [".next/**", "node_modules/**", "dist/**"],
  },
  // Add custom rules/overrides here
];
