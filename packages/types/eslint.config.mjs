export default {
  root: true,
  extends: ["@repo/eslint-config/base.js"],
  parser: "@typescript-eslint/parser",
  parseOptions: {
    tsconfigRootDir: __dirname,
  }
}