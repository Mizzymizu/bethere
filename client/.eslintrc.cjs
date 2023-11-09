module.exports = {
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    extends: [
      'plugin:react/recommended',  // This line adds recommended React rules
    ],
    rules: {
      // your rules here
    },
  };