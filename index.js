module.exports = {
  plugins: ['react', 'react-native', 'react-native-globals', '@typescript-eslint'],
  extends: [
    './rules/style',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ].map(require.resolve),
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    }
  },

  rules: {
    'dot-notation': 'error',
    'semi': 'error',
    'curly': ['error'],
    'block-spacing': ['error', 'always'],
    'jsx-quotes': ['error', 'prefer-double'],
    'keyword-spacing': ['error', { before: true }],
    'lines-between-class-members': ['error', 'always'],
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 1
    }],
    'no-underscore-dangle': ['error', { enforceInMethodNames: true }],
    'operator-assignment': ['error', 'always'],
    'indent': ['error', 2],
    'brace-style': 'error',
    'no-unused-vars': 'off',
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 1 }],
    'react-native/sort-styles': 'off',
    'react-native/no-inline-styles': 'off',
    'react-native/no-unused-styles': 'warn',
  }
};
