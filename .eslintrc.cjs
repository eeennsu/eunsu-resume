module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals' 
  ],
  plugins: ['react-hooks', 'react-refresh', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'react-refresh/only-export-components': 'off'
  },
  reportUnusedDisableDirectives: true,
  ignorePatterns: ['/proc', '/sys', '/dev', '**/node_modules/**', '**/dist/**'],
};
