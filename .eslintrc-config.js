module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-undef": "error",
    "no-unused-expressions": "error",
    "no-unreachable": "error",
    "prettier/prettier": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    process: "readonly",
  },
};
