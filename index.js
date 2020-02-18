module.exports = {
  plugins: ['prettier', 'jsx-a11y', 'import', 'react', 'react-native', 'react-native-globals', '@typescript-eslint'],
  extends: [
    './rules/style',
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
    'comma-dangle': 'off',
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
    'brace-style': 'error',
    'no-unused-vars': 'off'
  }
};
