const prettierConfig = require('@gbrachetta/prettier-config');

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', 'react-hooks', 'jsx-a11y'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['node_modules/'],
  rules: {
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'ignore',
          caseInsensitive: true,
        },
      },
    ],
    'sort-imports': [
      'warn',
      {
        ignoreCase: true,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['all', 'multiple', 'single', 'none'],
        allowSeparatedGroups: true,
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'prettier/prettier': [2, prettierConfig],
    'class-methods-use-this': 0,
    'import/newline-after-import': 1,
    'import/no-dynamic-require': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 1,
    'max-len': 0,
    'newline-per-chained-call': 1,
    'no-confusing-arrow': 0,
    'no-console': 1,
    'no-use-before-define': 0,
    'prefer-template': 2,
    'react/require-default-props': 1,
    'react/self-closing-comp': 1,
    'react/sort-comp': 0,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-props-no-spreading': [1, {html: 'ignore'}],
    'react/jsx-no-target-blank': 1,
    'react/jsx-uses-vars': 2,
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/mouse-events-have-key-events': 1,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'react-hooks/rules-of-hooks': 2,
    //
    'space-before-function-paren': 1,
    'space-before-blocks': 1,
    'arrow-spacing': 1,
    'no-unused-vars': 1,
    'arrow-body-style': 0,
    'no-restricted-syntax': 1,
    'guard-for-in': 1,
    'react/destructuring-assignment': 1,
    'react/no-unescaped-entities': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-key': 1,
    'react/prop-types': 1,
    'react/display-name': 1,
    'react/forbid-prop-types': 0,
    'react/button-has-type': 1,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/no-onchange': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'camelcase': 1,
    "padding-line-between-statements": [
      1,
      {
        blankLine: 'always',
        prev: '*',
        next: ['return', 'export', 'function', 'block-like']
      },
      {
        blankLine: 'always',
        prev: ['case', 'default', 'directive', 'const', 'let', 'block-like'],
        next: '*'
      },
      {
        blankLine: 'any',
        prev: ['let'],
        next: ['let']
      },
      {
        blankLine: 'any',
        prev: ['const'],
        next: ['const']
      }
    ],
  },
};
