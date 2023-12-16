# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.4.3] — 2023-12-16

- Allow `global-require`
- Pass prettier object in the rules

## [2.4.2] — 2023-12-16

- Allow `console.log`

## [2.4.1] — 2023-12-16

- Correctly allow padding lines in `case`

## [2.4.0] — 2023-12-16

- Use '@stylistic/eslint-plugin for stylistic rules deprecated in eslint core

## [2.0.6] — 2023-07-11

- Troubleshooting imports

## [2.0.5] — 2023-07-11

- Delete plugin Sort

## [2.0.4] — 2023-07-11

- Fix prettier version

## [2.0.3] — 2023-07-10

- Add prettier as a dep

## [2.0.2] — 2023-07-10

- Update dependencies

## [2.0.1] — 2023-07-10

- Revert dependencies

## [2.0.0] — 2023-07-10

- Update dependencies

## [1.9.0] — 2022-04-01

- Add new [eslint-plugin-sort](https://www.npmjs.com/package/eslint-plugin-sort) plugin, which allows to autofix destructured props, import members and exports

## [1.8.0] — 2022-04-01

- Add new [sort-keys-fix](https://www.npmjs.com/package/eslint-plugin-sort-keys-fix) plugin, which allows to autofix the native `sort-keys` rule.
- Add `react/jsx-sort-props` rule to enforce props sorting.

## [1.7.3] — 2022-04-01

- Add exception for `Component` in rule `react/jsx-props-no-spreading` to prevent `Next.js` linting warning on boilerplate
- Ignore `Component` and `pageProps` in rule `react/prop-types` to prevent `Next.js` linting warning on boilerplate

## [1.7.2] — 2022-03-31

- Remove error for `import/no-extraneous-dependencies` to stop requiring manually enter the rule when using propTypes.

## [1.7.1] — 2022-03-31

- Adjust severity of `jsx-a11y/no-static-element-interactions` rule to `warning`

## [1.7.0] — 2022-03-31

- Add rule to allow for arrow functions in named components
- Add rule disallowing trailing spaces
- Disable `simple-import-sort`
- `ignoreDeclarationSort` now defaults to `true` in `sort-imports`

## [1.6.0] — 2022-03-30

- Bumped dependencies versions to latest

## [1.5.2] — 2021-04-25

- Bumped peer deps

## [1.5.1] — 2021-04-25

- Bumped minor upgrades for eslint (7.24.0 > 7.25.0) and eslint-config-prettier (8.2.0 > 8.3.0)

## [1.5.0] — 2021-04-25

- Replace “eslint-plugin-sort-imports-es6-autofix” with “eslint-plugin-simple-import-sort”

## [1.4.0] — 2021-04-25

- Add plugin “eslint-plugin-sort-imports-es6-autofix” which auto-fixes imports sorting

## [1.3.0] — 2021-04-21

- Warn for 'react/no-array-index-key` (was 'error', breaking)

## [1.2.0] — 2021-04-21

- Disallow no-use-before-define
- Disallow not spaced comments
- Disallow var
- Alphabetized rules

## [1.1.8] — 2021-04-20

- Allow rule “consistent-return” per useEffect cleanup function

## [1.1.7] — 2021-04-20

- Allow prop spreading in native HTML elements, not in custom ones
- Remove deprecated rule “newline-after-var”
- Add padding between let and const

## [1.1.6] — 2021-04-20

- Add warning for missing button type

## [1.1.5] — 2021-04-19

- Disable alphabetical order of imports by eslint-plugin-import as it clashes with native sort-imports
- Improve padding lines between statements

## [1.1.4] — 2021-04-19

- Fine-tune padding lines between statements

## [1.1.3] — 2021-04-19

- Remove deprecated add new line before return

## [1.1.2] — 2021-04-19

- Add padding line between statements

## [1.1.1] — 2021-04-19

- Add camel case warning

## [1.1.0] — 2021-04-19

- Delete deprecated rules
- Adjusted non-breaking rules to show warnings rather than errors

## [1.0.0] — 2021-04-19

- Initial Release
