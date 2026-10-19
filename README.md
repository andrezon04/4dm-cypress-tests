<div align="center">

# Testes de interface

Cenários de login e formulários automatizados com Cypress.

  <img alt="Cypress 15" src="https://img.shields.io/badge/Cypress%2015-1a1b27?style=flat-square" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-1a1b27?style=flat-square" />
  <img alt="E2E" src="https://img.shields.io/badge/E2E-1a1b27?style=flat-square" />

**Projeto de estudo**

</div>

---

Projeto de estudo de testes de ponta a ponta para fluxos de login e formulários. O repositório inclui a aplicação compilada em `dist/`, utilizada como alvo dos testes.

## Foco técnico

- Automação de interações com páginas e formulários usando Cypress.
- Asserções para credenciais inválidas e campos obrigatórios.
- Reutilização do fluxo de login por meio de um comando customizado.

## Tecnologias

JavaScript, Cypress 15 e Serve.

## Cenários presentes

- Login com credenciais válidas e inválidas.
- Tentativa de login sem preencher os campos.
- Login com senha incorreta.
- Validação dos campos obrigatórios do formulário.
- Preenchimento de dados, seleção de opções e inclusão de tecnologias.

As credenciais usadas nos testes pertencem ao cenário de demonstração incluído no projeto.

## Como executar

Pré-requisitos: Node.js compatível com Cypress 15 (20, 22 ou 24+) e npm. A execução do Cypress também exige as bibliotecas de sistema indicadas pelo instalador.

```bash
git clone https://github.com/andrezon04/4dm-cypress-e2e.git
cd 4dm-cypress-e2e
npm ci
npm run dev
```

Mantenha esse terminal aberto. A aplicação será servida em `http://localhost:3000`.

Em outro terminal, na mesma pasta:

```bash
npx cypress open
```

Para executar sem a interface interativa:

```bash
npx cypress run
```

## Organização

- `cypress/e2e/login.cy.js`: cenários de login.
- `cypress/e2e/forms.cy.js`: validação e preenchimento do formulário.
- `cypress/support/commands.js`: comando reutilizável de login.
- `cypress.config.js`: configuração do Cypress.
- `dist/`: aplicação compilada usada nos testes.

## Limites atuais

O cenário de preenchimento verifica interações e seleção de campos; não comprova a persistência dos dados nem a conclusão de um envio. As capturas de falha versionadas registram execuções anteriores e não representam o resultado de uma execução atual.

Próximos passos: verificar o resultado final do envio, ampliar cenários negativos e automatizar a execução em integração contínua.
