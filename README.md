<div align="center">
     <img width="30%" src="https://github.com/cesarhenrq/metavagas-frontend/assets/92116544/2698b07c-186c-4db7-abc6-1bb60d4c638f"/>
</div>

Este repositório guarda o projeto final do curso Arnia, MetaVagas. MetaVagas é
um sistema de vagas de emprego, onde o usuário pode se cadastrar e encontrar
vagas de emprego que se encaixam no seu perfil. Para conferir clique no link a
seguir: [MetaVagas](https://metavagas-frontend.vercel.app/)

# 💻 Tecnologias utilizadas

![Typescript](https://img.shields.io/badge/-TypeScript-0D1117?style=for-the-badge&logo=typescript&labelColor=0D1117)&nbsp;
![React](https://img.shields.io/badge/-React-0D1117?style=for-the-badge&logo=react&labelColor=0D1117)&nbsp;
![Jest](https://img.shields.io/badge/-Jest-0D1117?style=for-the-badge&logo=jest&labelColor=0D1117)&nbsp;
![Cypress](https://img.shields.io/badge/-Cypress-0D1117?style=for-the-badge&logo=cypress&labelColor=0D1117)&nbsp;
![Eslint](https://img.shields.io/badge/-Eslint-0D1117?style=for-the-badge&logo=eslint&labelColor=0D1117)&nbsp;
![Prettier](https://img.shields.io/badge/-Prettier-0D1117?style=for-the-badge&logo=prettier&labelColor=0D1117)&nbsp;
![Husky](https://img.shields.io/badge/-Husky-0D1117?style=for-the-badge&logo=husky&labelColor=0D1117)&nbsp;
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)&nbsp;

[![unit-lint-typecheck-e2e-ct](https://github.com/muratkeremozcan/react-cypress-ts-vite-template/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/muratkeremozcan/react-cypress-ts-vite-template/actions/workflows/main.yml)
![react version](https://img.shields.io/badge/react-18.2.0-brightgreen)
![cypress version](https://img.shields.io/badge/cypress-13.2.0-brightgreen)
![typescript version](https://img.shields.io/badge/typescript-4.5.4-brightgreen)
![jest version](https://img.shields.io/badge/jest-27.3.1-brightgreen)
![eslint version](https://img.shields.io/badge/eslint-8.50.0-brightgreen)
![prettier version](https://img.shields.io/badge/prettier-2.8.8-brightgreen)
![husky version](https://img.shields.io/badge/husky-7.0.4-brightgreen)
[![renovate-app badge][renovate-badge]][renovate-app]

#

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge)

# 🚀 Começando

Estas instruções permitirão que você obtenha uma cópia funcional do projeto em
sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

- [Node.js](https://nodejs.org/en) - Ambiente de execução JavaScript

### 🔧 instalação

1. Clone o repositório:

```bash
git clone https://github.com/cesarhenrq/metavagas-frontend.git
```

2. Instale as dependências:

```bash
yarn install
```

ou

```bash
npm install
```

3. Execute o aplicativo:

```bash
yarn start
```

ou

```bash
npm start
```

# 🧪 Executando os testes:

## 🔬 Testes unitários:

Para executar os testes de unidade, execute o seguinte comando:

```bash
yarn test
```

ou

```bash
npm test
```

## 🔨 Testes de componente:

Para executar os testes de componente, execute o seguinte comando:

```bash
yarn cy:run-ct-fast
```

ou

```bash
npm run cy:run-ct-fast
```

## ⚙️➖⚙️ Testes end-to-end:

Para executar os testes de end-to-end, execute o seguinte comando:

```bash
yarn cy:run-e2e
```

ou

```bash
npm run cy:run-e2e
```

# 🔍 Linting:

Para executar o linting, execute o seguinte comando:

```bash
yarn lint
```

ou

```bash
npm run lint
```

# ✅ Typechecking:

Para executar o typechecking, execute o seguinte comando:

```bash
yarn typecheck
```

ou

```bash
npm run typecheck
```

# 📏 Formatação:

Para executar a formatação, execute o seguinte comando:

```bash
yarn format
```

ou

```bash
npm run format
```

# 🔃 CI

Este projeto utiliza o GitHub Actions para CI/CD. O arquivo de configuração pode
ser encontrado em `.github/workflows/main.yml`. O pipeline de CI/CD é executado
sempre que um push é feito para qualquer uma das branchs. O pipeline de CI/CD é
composto por 5 jobs:

- `unit`: Executa os testes de unidade.
- `lint`: Executa o linting.
- `typecheck`: Executa o typechecking.
- `e2e`: Executa os testes de end-to-end.
- `ct`: Executa os testes de componente.

# 🔌 Deployment:

Para implantar o aplicativo, execute o seguinte comando:

```bash
yarn build
```

ou

```bash
npm build
```

Este comando irá gerar uma pasta `dist` contendo o código compilado.

# 🏢 Arquitetura:

## 📁 Estrutura das pastas:

```bash
├── src
│   ├── assets
│   │   ├── image.svg
│   │   └── icon.tsx
│   ├── components
│   │   ├── Component
│   │   │   ├── Component.tsx
│   │   │   ├── Component.test.tsx
│   │   │   ├── Component.cy.tsx
│   │   │   ├── styles.ts
│   │   │   └── index.ts
│   ├── contexts
│   │   ├── Context
│   │   │   ├── actions.ts
│   │   │   ├── context.ts
│   │   │   ├── dispatcher.ts
│   │   │   ├── provider.tsx
│   │   │   ├── index.ts
│   ├── hooks
│   │   ├── hook.ts
│   │   └── index.ts
│   ├── pages
│   │   ├── Page
│   │   │   ├── Page.tsx
│   │   │   ├── Page.test.tsx
│   │   │   ├── Page.cy.tsx
│   │   │   ├── styles.ts
│   │   │   └── index.ts
│   ├── routes
│   │   ├── router.tsx
│   ├── services
│   │   ├── Service
│   │   │   ├── service.ts
│   ├── styles
│   │   ├── global.ts
│   ├── types
│   │   ├── type.d.ts
│   ├── utils
│   │   ├── functions
│   │   │   ├── function.ts
│   │   │   └── index.ts
│   │   ├── helpers
│   │   │   ├── helper.ts
│   │   │   └── index.ts
│   │   ├── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── vite-env.d.ts
│   └── tsconfig.json
```

## 📄 Descrição:

- `assets`: Pasta que contém os arquivos estáticos do projeto.
- `components`: Pasta que contém os componentes do projeto.
- `contexts`: Pasta que contém os contextos do projeto.
- `hooks`: Pasta que contém os hooks do projeto.
- `pages`: Pasta que contém as páginas do projeto.
- `routes`: Pasta que contém as rotas do projeto.
- `services`: Pasta que contém os serviços do projeto.
- `styles`: Pasta que contém os estilos globais do projeto.
- `types`: Pasta que contém os tipos do projeto.
- `utils`: Pasta que contém as utilidades do projeto.
- `App.tsx`: Arquivo que contém o componente raiz do projeto.
- `main.tsx`: Arquivo que contém o ponto de entrada do projeto.
- `vite-env.d.ts`: Arquivo que contém as variáveis de ambiente do projeto.
- `tsconfig.json`: Arquivo que contém as configurações do typescript.

# ✒️ Autores:

<table>
  <tr>
    <td align="center"><a href="https://github.com/cesarhenrq"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/92116544?v=4" width="100px;" alt=""/><br /><sub><b>César Henrique</b></sub></a><br /><a href="https://github.com/cesarhenrq" title="Metavagas">👨🏻‍💻</a></td>
    <td align="center"><a href="https://github.com/katiene-souza"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/85809975?v=4" width="100px;" alt=""/><br /><sub><b>Katiene Souza</b></sub></a><br /><a href="https://github.com/katiene-souza" title="Metavagas">👩🏻‍💻</a></td>
  </tr>
</table>
```
