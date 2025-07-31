# Portfólio Pessoal - Frontend Vue.js

Este diretório contém o código-fonte do frontend do meu portfólio pessoal. O projeto foi desenvolvido como uma Single Page Application (SPA) moderna e interativa, utilizando **Vue.js 3 (Composition API)** e **Vite**.

O objetivo principal é apresentar minhas habilidades e projetos de uma forma visualmente agradável e tecnicamente robusta, incluindo uma prova de conceito funcional com a tecnologia blockchain.

**[Acesse a versão ao vivo aqui](https://portfolioama.netlify.app)**

---

## ✨ Funcionalidades Principais

* **Design Responsivo:** Interface adaptável para uma experiência de usuário consistente em desktops, tablets e dispositivos móveis.
* **Troca de Temas:** Seletor de temas dinâmico (Claro/Escuro) com persistência via `localStorage`.
* **Internacionalização (i18n):** Suporte completo para múltiplos idiomas (Português/Inglês) utilizando `vue-i18n`.
* **Guestbook On-Chain:** Uma prova de habilidade interativa que permite aos visitantes conectar suas carteiras MetaMask e deixar uma mensagem em um smart contract implantado na testnet Polygon Amoy, utilizando `Ethers.js`.
* **Animações e UX:** Animações sutis de scroll com a biblioteca `AOS` e um botão "Voltar ao Topo" para melhorar a experiência de navegação.
* **Carrossel de Projetos:** Apresentação dos projetos em um carrossel interativo e responsivo (`vue3-carousel`).
* **Gerenciamento de Estado:** Utilização do Pinia para gerenciar o estado global da aplicação (como o tema).

---

## 🛠️ Tecnologias e Bibliotecas

O projeto foi construído com as seguintes tecnologias principais:

* **Vue.js (v3):** Framework principal com Composition API.
* **Vite:** Ferramenta de build para desenvolvimento rápido e otimizado.
* **Pinia:** Para gerenciamento de estado global.
* **Vue Router:** Para gerenciamento de rotas (embora seja uma SPA, a estrutura está pronta).
* **Vue-i18n:** Para a funcionalidade de internacionalização.
* **Ethers.js:** Para interação com a blockchain Ethereum (Guestbook).
* **Vue3-Carousel:** Para o carrossel de projetos.
* **Lucide Vue Next:** Para ícones de UI.
* **Devicon:** Para os ícones das tecnologias na seção de Habilidades.
* **AOS (Animate On Scroll):** Para animações de scroll.
* **ESLint & Prettier:** Para garantir a qualidade e a padronização do código.

---

## 📂 Estrutura de Pastas

A organização dos arquivos segue as melhores práticas do ecossistema Vue, com uma clara separação de responsabilidades:

```

/frontend
├── public/               \# Arquivos estáticos (PDFs, favicon, logos).
├── src/
│   ├── assets/           \# CSS global, fontes e imagens.
│   ├── components/       \# Componentes Vue reutilizáveis, organizados em:
│   │   ├── layout/       \# (Header, Footer)
│   │   ├── sections/     \# (Hero, About, Projects, etc.)
│   │   └── ui/           \# (Botões, Switchers)
│   ├── locales/          \# Arquivos de tradução (pt.json, en.json).
│   ├── router/           \# Configuração do Vue Router.
│   ├── services/         \# Lógica de negócio (ex: blockchainService.js).
│   ├── stores/           \# Stores do Pinia (ex: theme.js).
│   ├── App.vue           \# Componente raiz da aplicação.
│   ├── i18n.js           \# Configuração da instância do vue-i18n.
│   └── main.js           \# Ponto de entrada da aplicação.
├── .env.example          \# Template para as variáveis de ambiente.
├── index.html            \# Ponto de entrada do HTML.
├── netlify.toml          \# Configuração de deploy para o Netlify.
└── vite.config.js        \# Configuração do Vite.

```

---

## 🚀 Configuração do Ambiente Local

Para rodar este projeto na sua máquina, siga os passos abaixo:

1.  **Clone o repositório** e navegue até a pasta do frontend:
    ```bash
    git clone <url-do-repositorio>
    cd Portfolio-Arthur1220/frontend
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    Copie o arquivo de exemplo `.env.example` para criar seu próprio arquivo `.env`.
    ```bash
    cp .env.example .env
    ```
    Abra o arquivo `.env` e preencha as variáveis com suas chaves. Elas são necessárias para a funcionalidade do Guestbook.
    * `VITE_GUESTBOOK_CONTRACT_ADDRESS`: O endereço do smart contract implantado.
    * `VITE_RPC_URL`: A URL de um provedor RPC (ex: Alchemy) para a rede de testes.

4.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    O site estará disponível em `http://localhost:5173` (ou a porta indicada no terminal).

## 📜 Scripts Disponíveis

* `npm run dev`: Inicia o servidor de desenvolvimento com Hot-Module Replacement (HMR).
* `npm run build`: Compila e otimiza a aplicação para produção, gerando os arquivos na pasta `dist/`.
* `npm run preview`: Inicia um servidor local para visualizar o build de produção (o conteúdo da pasta `dist/`).
```