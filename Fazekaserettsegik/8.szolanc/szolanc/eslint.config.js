import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist", "node_modules"] },

  js.configs.recommended,
  tseslint.configs.recommended,

  {
    languageOptions: {
      globals: { ...globals.node },
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      // Importok automatikus sorba rendezése (npm run lint:fix javítja)
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      // Ebben a tantárgyban a console a kimenetünk, ezért engedélyezett
      "no-console": "off",

      // Az _ jellel kezdődő nem használt paraméter nem hiba (pl. _index)
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },

  // Ez legyen az utolsó: kikapcsolja a Prettierrel ütköző formázási szabályokat
  prettier,
);
