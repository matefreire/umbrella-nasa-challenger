# Umbrella 🌦️

[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=flat-square&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/status-active-green.svg?style=flat-square)]()

> Aplicativo de previsão e análise climática com visualizações interativas e relatórios intuitivos baseados em dados espaciais.

## 📋 Sobre o Projeto

Umbrella é um aplicativo de consulta climática que transforma dados espaciais e meteorológicos em relatórios visuais e intuitivos. Ele permite explorar previsões, tendências e condições ambientais com uma interface moderna e fácil de usar — combinando ciência e design para aproximar você do clima da Terra.

### ✨ Principais Funcionalidades

- 🌡️ **Consultas Climáticas**: Acesso a dados meteorológicos em tempo real
- 📊 **Relatórios Visuais**: Visualizações interativas de dados climáticos
- 🗺️ **Dados Espaciais**: Análise baseada em informações geográficas
- 📈 **Tendências**: Acompanhamento de padrões climáticos ao longo do tempo
- 🎨 **Interface Moderna**: Design intuitivo e responsivo
- 🎬 **Scroll Storytelling**: Experiência de scroll interativa com animações fluidas

## 🚀 Tecnologias Utilizadas

- **Vue.js 3** - Framework JavaScript progressivo
- **Composition API** - Sistema de reatividade moderno
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool rápido e moderno
- **GSAP + ScrollTrigger** - Animações fluidas e scroll storytelling
- **Axios** - Cliente HTTP para APIs

## 🎬 Scroll Storytelling

O Umbrella utiliza uma abordagem de **scroll storytelling** (scrollytelling) para criar uma experiência de navegação única e envolvente. Conforme o usuário rola a página, elementos aparecem e se animam de forma suave, criando uma narrativa visual fluida similar aos sites do New York Times ou NASA Climate Stories.

### Características do Scroll Storytelling:

- **Animações Sequenciais**: Elementos aparecem em sequência conforme o scroll
- **Transições Suaves**: Movimentos fluidos entre seções
- **Interatividade**: Elementos respondem ao movimento do scroll
- **Mobile-First**: Otimizado para dispositivos móveis
- **Performance**: Animações otimizadas para não impactar a performance

## 📦 Instalação

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Passos para Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/umbrella.git
   cd umbrella
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**

   ```bash
   cp .env.example .env
   ```

   Edite o arquivo `.env` com suas chaves de API:

   ```env
   VITE_WEATHER_API_KEY=sua_chave_openweathermap_aqui
   VITE_MAP_API_KEY=sua_chave_mapbox_aqui
   VITE_NASA_API_KEY=sua_chave_nasa_aqui
   ```

## 🏃‍♂️ Execução

### Desenvolvimento

Para executar o projeto em modo de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

O aplicativo estará disponível em `http://localhost:5173`

### Build para Produção

Para criar uma build otimizada para produção:

```bash
npm run build
# ou
yarn build
```

Os arquivos de build serão gerados na pasta `dist/`

### Preview da Build

Para visualizar a build de produção localmente:

```bash
npm run preview
# ou
yarn preview
```

## 📁 Estrutura do Projeto

```
umbrella/
├── public/                 # Arquivos estáticos
├── src/
│   ├── components/        # Componentes Vue reutilizáveis
│   ├── views/            # Páginas/views da aplicação
│   │   └── LandingPage.vue # Landing page principal com scroll storytelling
│   ├── composables/      # Lógica reutilizável (Composition API)
│   │   └── useGSAPAnimations.ts # Composable para animações GSAP
│   ├── services/         # Serviços e APIs
│   ├── utils/           # Funções utilitárias
│   ├── assets/          # Recursos estáticos (imagens, CSS)
│   │   └── main.css     # Estilos principais
│   ├── types/           # Definições TypeScript
│   │   └── index.ts     # Tipos do projeto
│   ├── App.vue          # Componente raiz
│   └── main.ts          # Ponto de entrada da aplicação
├── .env.example         # Exemplo de variáveis de ambiente
├── .eslintrc.json      # Configuração do ESLint
├── .gitignore          # Arquivos ignorados pelo Git
├── index.html          # Template HTML principal
├── package.json        # Dependências e scripts
├── tsconfig.json       # Configuração do TypeScript
└── vite.config.ts      # Configuração do Vite
```

## 🔧 Scripts Disponíveis

| Script               | Descrição                            |
| -------------------- | ------------------------------------ |
| `npm run dev`        | Inicia o servidor de desenvolvimento |
| `npm run build`      | Cria build de produção               |
| `npm run preview`    | Preview da build de produção         |
| `npm run lint`       | Executa o linter                     |
| `npm run type-check` | Verifica tipos TypeScript            |

## 🌐 APIs Utilizadas

- **OpenWeatherMap API** - Dados meteorológicos
- **NASA APIs** - Dados espaciais e climáticos
- **Mapbox/Google Maps** - Serviços de mapas

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Desenvolvedor**: Seu Nome
- **Email**: seu.email@exemplo.com
- **GitHub**: [@seu-usuario](https://github.com/seu-usuario)

## 🙏 Agradecimentos

- NASA por fornecer dados espaciais e climáticos
- Comunidade Vue.js pela excelente documentação
- Todos os contribuidores que ajudaram a tornar este projeto possível

---

⭐ **Se este projeto foi útil para você, considere dar uma estrela!**
