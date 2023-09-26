module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020
  },
  plugins: [
    "@babel/plugin-proposal-decorators",
    "@typescript-eslint/eslint-plugin"
  ],
  extends: ["plugin:@typescript-eslint/recommended"],
  root: true,
  env: {
    node: true,
    jest: true
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "no-console": "off",
    "no-await-in-loop": "warn",
    "require-await": "off",
    indent: ["warn", 2, { SwitchCase: 1 }],
    eqeqeq: "warn",
    "@typescript-eslint/no-unused-vars": "error",
    semi: ["error", "never"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "no-unreachable": "off",
    "no-var": "error",
    "no-multi-spaces": "error",
    "no-whitespace-before-property": "error",
    "block-spacing": "error",
    "comma-spacing": ["error", { before: false, after: true }],
    "array-bracket-spacing": ["error", "never"],
    "key-spacing": ["error", { beforeColon: false }],
    "object-curly-spacing": ["error", "always"],
    "comma-dangle": ["error", "never"],
    "space-infix-ops": "error",
    "spaced-comment": ["error", "always"],
    "space-in-parens": ["error", "never"],
    "no-trailing-spaces": "error",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-explicit-any": "off"
  }
}
