# 🚀 Configuração de Desenvolvimento - Umbrella

Este documento descreve a configuração de desenvolvimento para o projeto Umbrella.

## 📋 Tecnologias Utilizadas

- **Vue 3** - Framework JavaScript reativo
- **TypeScript** - Superset tipado do JavaScript
- **Vite** - Build tool e dev server
- **GSAP** - Biblioteca de animações
- **Axios** - Cliente HTTP
- **ESLint** - Linter para JavaScript/TypeScript
- **Prettier** - Formatador de código

## 🛠️ Configuração do Ambiente

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- VS Code (recomendado)

### Instalação

```bash
# Instalar dependências
npm install

# Instalar extensões recomendadas do VS Code
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension vue.volar
code --install-extension vue.vscode-typescript-vue-plugin
```

## 🎯 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Build para produção
npm run preview      # Preview do build

# Qualidade de Código
npm run lint         # Executa ESLint e corrige problemas
npm run lint:check   # Verifica problemas sem corrigir
npm run format       # Formata código com Prettier
npm run format:check # Verifica formatação sem alterar
npm run type-check   # Verifica tipos TypeScript
npm run check-all    # Executa todas as verificações

# Desenvolvimento
npm run dev          # Servidor de desenvolvimento com hot reload
```

## 📁 Estrutura de Arquivos

```
umbrella/
├── .vscode/                 # Configurações do VS Code
│   ├── settings.json       # Configurações do editor
│   └── extensions.json     # Extensões recomendadas
├── src/
│   ├── assets/            # Recursos estáticos
│   ├── components/        # Componentes Vue
│   ├── composables/       # Composables Vue 3
│   ├── services/          # Serviços e APIs
│   ├── types/             # Definições TypeScript
│   ├── utils/             # Utilitários
│   └── views/             # Páginas/Vistas
├── .eslintrc.js           # Configuração ESLint
├── .prettierrc            # Configuração Prettier
├── .editorconfig          # Configuração EditorConfig
└── package.json           # Dependências e scripts
```

## ⚙️ Configurações

### ESLint

- Configurado para Vue 3 + TypeScript
- Regras específicas para Vue (componentes, templates)
- Regras TypeScript (tipos, imports)
- Regras JavaScript/ES6 (formatação, boas práticas)

### Prettier

- Formatação automática ao salvar
- Configuração para Vue, TypeScript, CSS, JSON
- Aspas simples, ponto e vírgula obrigatório
- Largura máxima de 80 caracteres

### VS Code

- Formatação automática ao salvar
- Correção automática de ESLint
- Organização automática de imports
- Suporte completo para Vue 3 + TypeScript

## 🔧 Comandos Úteis

### Desenvolvimento

```bash
# Iniciar desenvolvimento
npm run dev

# Verificar tipos
npm run type-check

# Formatar código
npm run format
```

### Antes do Commit

```bash
# Verificar tudo
npm run check-all

# Ou individualmente
npm run lint:check
npm run format:check
npm run type-check
```

## 📝 Convenções de Código

### Vue Components

- Nomes em PascalCase
- Props tipadas com TypeScript
- Composables para lógica reutilizável
- Template com indentação de 2 espaços

### TypeScript

- Tipos explícitos para props e emits
- Interfaces para objetos complexos
- Imports organizados automaticamente

### CSS

- Variáveis CSS para cores e espaçamentos
- Classes com BEM quando necessário
- Responsive design mobile-first

## 🚨 Troubleshooting

### Problemas Comuns

1. **Erro de tipos TypeScript**

   ```bash
   npm run type-check
   ```

2. **Problemas de formatação**

   ```bash
   npm run format
   ```

3. **Erros de ESLint**

   ```bash
   npm run lint
   ```

4. **Cache do ESLint**
   ```bash
   rm -rf .eslintcache
   npm run lint
   ```

## 📚 Recursos Úteis

- [Vue 3 Documentation](https://vuejs.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [GSAP Documentation](https://greensock.com/docs/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Prettier Options](https://prettier.io/docs/en/options.html)
