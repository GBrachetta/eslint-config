# @gbrachetta/eslint-config

ESLint configuration for a React-based Project (Next.js, Gatsby, etc). Easy to install and configure, it follows the best code standards from airbnb and uses prettier configuration on code format. Integrated with my [prettier configuration](https://github.com/gbrachetta/prettier-config).

## Purpose

This configuration uses airbnb and Prettier configuration plus some extra rules that I find useful for *React* applications.

For more information, check [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) documentations as well the [airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) and [prettier](https://github.com/prettier/eslint-config-prettier).

This package integrates the Prettier rules with ESLint using my configuration. You can check it at [@gbrachetta/prettier-config](https://github.com/gbrachetta/prettier-config)

## How to install

You need ESLint and Prettier installed as development dependencies on your project. You can install them by using **npm** or **yarn**.

```bash
npm install --save-dev eslint prettier
# or
yarn add eslint prettier -D
```

Install all peer dependencies of my configuration, these can be listed with the command:

```bash
npm info "@gbrachetta/eslint-config@latest" peerDependencies
```

Install dependencies by:

```bash
npx install-peerdeps --dev @gbrachetta/eslint-config
```

## How to use

To configure ESLint and Prettier you can add to your `package.json`

```json
"eslintConfig": {
  "extends": "@gbrachetta/eslint-config"
},
"prettier": "@gbrachetta/prettier-config"
```

If you need to override or extend the settings, you can create a `.eslintrc.json` and `.prettierrc.json` files and add `extends: "@gbrachetta/eslint-config"` and `"@gbrachetta/prettier-config"` respectivally. As an example:

```json
// .eslintrc.json
{
  "extends": "@gbrachetta/eslint-config"
}
// you can edit this configuration as usual, check ESLint docs
```

```json
// .prettierrc.json
{
  "@gbrachetta/prettier-config"
}
```

To use ESLint and Prettier from the terminal, add these scripts to your `package.json` file

```json
{
  "lint": "eslint ./ --ignore-path .gitignore",
  "lint:fix": "npm run lint -- --fix",
  "format": "prettier --write \"{,!(node_modules)/**/}*.js\""
}
```

## Contributing

How to [contribute](/CONTRIBUTING.md) to this open source library

## License

Copyright © 2021 [Guillermo Brachetta](https://www.gbrachetta.com). This library is licensed under the MIT [license](/LICENSE).
