module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser"
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    indent: ["error", 2],
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
    "no-console": "off",
    "no-debugger": "off",
    "vue/html-end-tags": "error",
    "vue/html-indent": "error",
    "vue/html-quotes": "error",
    "vue/mustache-interpolation-spacing": "error",
    "vue/name-property-casing": "error",
    "vue/no-multi-spaces": "error",
    "vue/no-spaces-around-equal-signs-in-attribute": "error",
    "vue/no-template-shadow": "error",
    "vue/prop-name-casing": "error",
    "vue/require-prop-types": "error",
    "vue/this-in-template": "error",
    "vue/comma-dangle": "warn",
    "vue/require-name-property": "error",
    "vue/html-closing-bracket-spacing": "error"
  }
};
