# Lista de Tarefas

Aplicação simples de lista de tarefas (todo list) feita com **HTML**, **Tailwind CSS** e **JavaScript puro (ES Modules)**.

## Funcionalidades

- ✅ Adicionar tarefas
- ✅ Marcar/desmarcar como concluída
- ✅ Excluir tarefas
- ✅ Limpar tarefas concluídas
- ✅ Persistência no `localStorage` (dados não se perdem ao recarregar)
- ✅ Contador de tarefas pendentes
- ✅ Tema escuro moderno
- ✅ Acessível (ARIA labels, foco visível, semântica HTML)

## Estrutura do Projeto

```
task-list/
├── index.html
├── src/
│   ├── css/
│   │   ├── input.css      # Diretivas Tailwind
│   │   └── style.css      # Compilado (ignorado no git)
│   └── js/
│       ├── app.js         # Entry point
│       ├── state.js       # Estado da aplicação
│       ├── storage.js     # localStorage
│       ├── render.js      # Renderização DOM
│       └── events.js      # Event listeners
├── tailwind.config.js
├── package.json
├── .gitignore
└── README.md
```

## Como rodar localmente

```bash
# Instalar dependências
npm install

# Desenvolvimento (watch mode)
npm run dev

# Build para produção (minificado)
npm run build
```

Abra `index.html` no navegador (ou use um servidor local como `npx serve`).

## Deploy no GitHub Pages

1. Faça push para um repositório no GitHub
2. Em **Settings > Pages**, selecione a branch `main` e pasta `/ (root)`
3. O site estará disponível em `https://pedrobispodev.github.io/task-list-app/`

## Licença

MIT