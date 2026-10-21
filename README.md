# Multi-Step Form

Formulário de assinatura em 4 etapas, feito com Angular 17 durante um curso. Simula a contratação de um plano de serviço de jogos online.

## O que o projeto faz

O usuário avança por 4 etapas, com uma barra lateral mostrando o progresso:

1. **Your info** — Nome, e-mail e telefone.
2. **Select plan** — Escolha entre Arcade (`$9/mo`), Advanced (`$12/mo`) e Pro (`$15/mo`), com cobrança mensal ou anual.
3. **Add-ons** — Extras opcionais: Online service (`+$1/mo`), Larger storage (`+$2/mo`) e Customizable profile (`+$2/mo`).
4. **Summary** — Resumo do plano, dos add-ons e do total, com botão de confirmação.

## Tecnologias

- Angular 17 (módulos, control flow `@switch`, `output()`)
- Reactive Forms (`ReactiveFormsModule`)
- TypeScript 5.4
- CSS puro
- Karma + Jasmine (testes)

## Estrutura

```
src/app/
├── app.component.*          # Controla qual etapa aparece (@switch)
└── components/
    ├── sidebar/             # Barra lateral com arte decorativa
    ├── steps/               # Lista das 4 etapas
    ├── personal-info/       # Etapa 1
    ├── select-plan/         # Etapa 2
    ├── add-ons/             # Etapa 3
    ├── summary/             # Etapa 4
    └── next-button/         # Botão "Next Step" reutilizável
```

## Como rodar

```bash
npm install
npm start
```

Abra `http://localhost:4200/`.

## Outros comandos

- `npm run build` — Gera o build de produção em `dist/`.
- `npm test` — Roda os testes unitários com Karma.

## Status

Em desenvolvimento. Já pronto:

- Layout das 4 etapas.
- Navegação entre etapas via botão **Next**.

Ainda falta:

- Ligar os campos aos Reactive Forms e validar.
- Botão **Go Back** funcional.
- Destacar a etapa ativa na barra lateral.
- Alternância mensal/anual com cálculo de preços.
- Resumo e total dinâmicos.
