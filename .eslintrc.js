module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "no-empty-function": ["error", { "allow": ["constructors"] }],
    "quotes": [2, "single", "avoid-escape"],
    "comma-dangle": ["error", "always-multiline"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "semi": ["error", "always"],
    "eol-last": ["error", "always"],
    "@typescript-eslint/explicit-member-accessibility": ["error"],
  },
};
