import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";

export default tseslint.config(
  {
    ignores: ["dist"]
  },
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: {
      react
    },
    rules: {
      "react/no-danger": "error"
    }
  }
);
