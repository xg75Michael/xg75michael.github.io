module.exports = {
  root: true,
  env: { browser: true, node: true, es2020: true, jest: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
  ],
  igonorePatterns: ['node_modules/', 'build/', 'dist/', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', ecmaFeatures: { jsx: true }, sourceType: 'module' },
  settings: {
    react: { version: 'detect' },
    'import/resolver': { node: { path: ['src'], extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx', '.json'] } },
  },
  plugins: ['react-refresh', 'react', '@stylistic'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'import/newline-after-import': ['error', { count: 1 }],
    'import/order': [
      'error',
      {
        groups: ['external', 'buildtin'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: false },
      },
    ],
    'import/no-unresolved': [2, { ignore: ['^@/*'] }],
    'react/prop-type': 0,
    '@stylistic/array-bracket-spacing': ['error', 'never'],
  },
};
