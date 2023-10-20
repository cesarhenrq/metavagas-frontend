<div align="center">
     <img width="30%" src="https://github.com/cesarhenrq/metavagas-frontend/assets/92116544/2698b07c-186c-4db7-abc6-1bb60d4c638f"/>
</div> 

#
  ### Tecnologias utilizadas
  ![Typescript](https://img.shields.io/badge/-TypeScript-0D1117?style=for-the-badge&logo=typescript&labelColor=0D1117)&nbsp;
  ![React](https://img.shields.io/badge/-React-0D1117?style=for-the-badge&logo=react&labelColor=0D1117)&nbsp;
  ![Jest](https://img.shields.io/badge/-Jest-0D1117?style=for-the-badge&logo=jest&labelColor=0D1117)&nbsp;
  ![Cypress](https://img.shields.io/badge/-Cypress-0D1117?style=for-the-badge&logo=cypress&labelColor=0D1117)&nbsp;
  ![Eslint](https://img.shields.io/badge/-Eslint-0D1117?style=for-the-badge&logo=eslint&labelColor=0D1117)&nbsp;
  ![Prettier](https://img.shields.io/badge/-Prettier-0D1117?style=for-the-badge&logo=prettier&labelColor=0D1117)&nbsp;
#

[![unit-lint-typecheck-e2e-ct](https://github.com/muratkeremozcan/react-cypress-ts-vite-template/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/muratkeremozcan/react-cypress-ts-vite-template/actions/workflows/main.yml)
![react version](https://img.shields.io/badge/react-18.2.0-brightgreen)
![cypress version](https://img.shields.io/badge/cypress-13.2.0-brightgreen)
![typescript version](https://img.shields.io/badge/typescript-4.5.4-brightgreen)
![jest version](https://img.shields.io/badge/jest-27.3.1-brightgreen)
![eslint version](https://img.shields.io/badge/eslint-8.50.0-brightgreen)
![prettier version](https://img.shields.io/badge/prettier-2.8.8-brightgreen)
[![renovate-app badge][renovate-badge]][renovate-app]

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/

A template with React, TS, Cypress (e2e & ct), GHA with CI architecture, Jest,
ESLint, Prettier, Renovate, Husky, Lint-staged, and most of the things you need
to get started with a new project. 

```bash
yarn install --registry https://registry.yarnpkg.com # specify the registry in case you are using a proprietary registry

# parallel unit, typecheck, lint, format
yarn validate

# no need to have server running for these:
yarn cy:open-ct # for cypress component test runner
yarn cy:run-ct # headless version

# runs the ui and api servers, then opens e2e runner
yarn cy:open-e2e
yarn cy:run-e2e  # headless version

yarn test # run unit tests with jest
```

## CI

```
build  -->  Cypress e2e test
       -->  Cypress component test
       -->  Typecheck
       -->  Lint
       -->  Unit test
```

> When updating packages, make sure that `react-scripts` and `jest` versions
> stay compatible. Ex: `react-scripts` latest version uses `jest v27`, but
> `jest`'s latest version is `29`. Double check node modules or `react-scripts`
> docs. The incompatibility may cause tools like WallabyJs to malfunction.
