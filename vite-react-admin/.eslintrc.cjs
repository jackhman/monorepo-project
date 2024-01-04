module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true }
    ],
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/ban-ts-comment": "off", // 关闭 @ts-ignore 的校验
    "react/prop-types": "warn", // 每个变量需要 type 修改为 warn
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-explicit-any": ["off"],
    indent: [
      "error",
      2,
      { SwitchCase: 1,
        MemberExpression: 0 }
    ]
  }
}
