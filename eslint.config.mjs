import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Existing UI effects initialize or synchronize third-party/browser state.
      // Keep the stricter rule opt-in until those primitives are redesigned.
      "react-hooks/set-state-in-effect": "off",
    },
  },
  {
    files: [
      "src/components/**/*.{ts,tsx}",
      "src/features/**/components/**/*.{ts,tsx}",
    ],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/data", "@/data/*", "@/data/**"],
              message:
                "Views and presenters must receive application data through a ViewModel/container.",
            },
          ],
        },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "types/**",
  ]),
]);

export default eslintConfig;
