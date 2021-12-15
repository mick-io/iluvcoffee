module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-explicit-any': 'on',
    'max-len': 120,
    'sort-imports': ["warn", {
      allowSeparateGroups: true
    }]
  },
  overrides: {
    files: ['*.js', '*.jsx'],
    extends: ['airbnb', 'prettier'],
    plugins: ['prettier', '@typescript-eslint'],
    rules: {
      'max-len': 80,
    },
  },
};
