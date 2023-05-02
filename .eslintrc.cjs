module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:storybook/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    semi: ['error', 'never'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true, optionalDependencies: true, peerDependencies: true }],
    'import/no-unresolved': [0, { commonjs: true, amd: true }],
    'react/no-array-index-key': [0, { commonjs: true, amd: true }],
    'react/jsx-props-no-spreading': [0, { commonjs: true, amd: true }],
  },
}
