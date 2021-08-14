module.exports = {
  extends: ["eslint:recommended"],
  plugins: [],
  globals: {
    window: true
  },
  parserOptions: {
    ecmaVersion: 2017
  },
  env: {
    es6: true,
    browser: true,
    node: true
  }
};
