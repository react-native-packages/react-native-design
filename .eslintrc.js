module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    '@react-native',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unused-prop-types': [1],
    'react-native/no-color-literals': [1],
    'react-native/sort-styles': [
      'warn',
      'asc',
      { ignoreClassNames: true, ignoreStyleProperties: false },
    ],
    'react-native/no-raw-text': [1],
    'react-native/no-single-element-style-arrays': [1],
    'react-native/no-unused-styles': [1],
  },
  ignorePatterns: ['*.config.js'],
};
