import eslintPluginReact from 'eslint-plugin-react';


export default [
  {
    ignores: ["node_modules/**"]
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    plugins: {
      react: eslintPluginReact,
    },
    rules: {
      quotes: ["error", "single"],
      semi: ["error", "always"]
    }
  }
];
