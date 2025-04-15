// eslint.config.mjs
import js from '@eslint/js';
import github from 'eslint-plugin-github';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
  js.configs.recommended,

  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      github,
      import: importPlugin,
      'unused-imports': unusedImports,
    },
    rules: {
      // GitHub plugin rules
      'github/no-then': 'error',
      'github/no-useless-passive': 'error',

      // Import rules
      'import/no-unresolved': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      // Unused imports
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
      ],

      // General style
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-unused-vars': 'off', // replaced by unused-imports
    },
  },
];
