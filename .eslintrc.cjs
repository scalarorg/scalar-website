module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'eslint-config-prettier',
    'prettier',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'tailwind.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier', '@typescript-eslint', 'simple-import-sort', 'import'],
  // rules: {
  //   'react-hooks/rules-of-hooks': 0, // Turn off rules of hooks
  //   'no-console': 'warn', // Warn on console usage
  //   '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }], // Warn on unused variables
  //   eqeqeq: ['error', 'always'], // Enforce strict equality
  //   curly: 'error', // Require curly braces for all control statements
  //   quotes: ['error', 'single'], // Enforce single quotes
  //   semi: ['error', 'never'], // Enforce semicolons
  //   'comma-dangle': ['error', 'always-multiline'], // Enforce trailing commas in multiline objects and arrays
  //   'react/prop-types': 'off', // Turn off prop-types rule (if using TypeScript)
  //   '@typescript-eslint/no-explicit-any': 'warn', // Warn on usage of the any type in TypeScript
  //   '@typescript-eslint/explicit-module-boundary-types': 'off', // Turn off requirement for explicit return types on functions and class methods
  //   'prettier/prettier': [
  //     'warn',
  //     {
  //       arrowParens: 'always',
  //       semi: false,
  //       trailingComma: 'all',
  //       tabWidth: 2,
  //       endOfLine: 'auto',
  //       useTabs: false,
  //       singleQuote: true,
  //       printWidth: 120,
  //       jsxSingleQuote: true,
  //     },
  //   ],
  // },
  rules: {
    'no-console': 2,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
    'react/no-array-index-key': 2,
    'react/display-name': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'prettier/prettier': ['off', { singleQuote: true }],
    'no-restricted-imports': [
      2,
      {
        patterns: [
          '@/features/*/*',
          // '@/components/*',
          // '@/hooks/*',
          // '@/utils/*',
          '@/ts/*/*',
        ],
      },
    ],

    // 'simple-import-sort/imports': 'error',
    // 'simple-import-sort/exports': 'error',
    // 'import/first': 'error',
    // 'import/newline-after-import': 'error',
    // 'import/no-duplicates': 'error',

    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    //@typescript-eslint/recommended-requiring-type-checking
    // '@typescript-eslint/await-thenable': 'error',
    // '@typescript-eslint/no-floating-promises': 'error',
    // '@typescript-eslint/no-for-in-array': 'error',
    'no-implied-eval': 'off',
    // '@typescript-eslint/no-implied-eval': 'error',
    // '@typescript-eslint/no-misused-promises': 'error',
    // '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    // '@typescript-eslint/no-unsafe-argument': 'error',
    // '@typescript-eslint/no-unsafe-assignment': 'error',
    // '@typescript-eslint/no-unsafe-call': 'error',
    // '@typescript-eslint/no-unsafe-member-access': 'error',
    // '@typescript-eslint/no-unsafe-return': 'error',
    'require-await': 'off',
    // '@typescript-eslint/require-await': 'error',
    // '@typescript-eslint/restrict-plus-operands': 'error',
    // '@typescript-eslint/restrict-template-expressions': 'error',
    // '@typescript-eslint/unbound-method': 'error',

    '@typescript-eslint/ban-ts-comment': 1,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './.eslintrc.cjs'],
    tsconfigRootDir: __dirname,
  },
};
