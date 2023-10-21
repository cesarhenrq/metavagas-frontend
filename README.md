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

### <div><img src="https://user-images.githubusercontent.com/25181517/187955005-f4ca6f1a-e727-497b-b81b-93fb9726268e.png" width='20px' alt="Jest" align="center"> Jest</div>

Para executar os testes de unidade, execute o seguinte comando:

```bash
yarn test
```

ou

```bash
npm test
```

## 🔨 Testes de componente:

### <div><img src="https://user-images.githubusercontent.com/68279555/200387386-276c709f-380b-46cc-81fd-f292985927a8.png" width='20px' alt="Cypress" align="center"> Cypress</div>

Para executar os testes de componente, execute o seguinte comando:

```bash
yarn cy:run-ct-fast
```

ou

```bash
npm run cy:run-ct-fast
```

## <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M418.4 157.9c35.3-8.3 61.6-40 61.6-77.9c0-44.2-35.8-80-80-80c-43.4 0-78.7 34.5-80 77.5L136.2 151.1C121.7 136.8 101.9 128 80 128c-44.2 0-80 35.8-80 80s35.8 80 80 80c12.2 0 23.8-2.7 34.1-7.6L259.7 407.8c-2.4 7.6-3.7 15.8-3.7 24.2c0 44.2 35.8 80 80 80s80-35.8 80-80c0-27.7-14-52.1-35.4-66.4l37.8-207.7zM156.3 232.2c2.2-6.9 3.5-14.2 3.7-21.7l183.8-73.5c3.6 3.5 7.4 6.7 11.6 9.5L317.6 354.1c-5.5 1.3-10.8 3.1-15.8 5.5L156.3 232.2z"/></svg> Testes end-to-end:

### <div><img src="https://user-images.githubusercontent.com/68279555/200387386-276c709f-380b-46cc-81fd-f292985927a8.png" width='20px' alt="Cypress" align="center"> Cypress</div>

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

# <div style="display: flex; align-items: center;"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><style>svg{fill:#24e066}</style><path d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48V96H384V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48V160H192v16c0 1.7-.1 3.4-.3 5L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V336c0-1.7 .1-3.4 .3-5L144 224H48c-26.5 0-48-21.5-48-48V80z"/></svg><span style="margin-left: 8px;">Arquitetura:</span></div>

## <div style="display: flex; align-items: center;"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"/></svg><span style="margin-left: 8px;">Estrutura das pastas:</span></div>

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

## <div style="display: flex; align-items: center;"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg><span style="margin-left: 8px;">Descrição:</span></div>

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
