# Portfólio Full-Stack & Web3 - Arthur Azevedo

## Sobre o Projeto

Este é o repositório do meu portfólio pessoal, uma Single Page Application (SPA) moderna construída para demonstrar minhas habilidades em desenvolvimento web full-stack e blockchain. O projeto é dividido em duas partes principais: um frontend interativo construído com Vue.js e um smart contract na blockchain para uma funcionalidade de "Livro de Visitas On-Chain".

**[Acesse a versão ao vivo aqui](https://portfolioama.netlify.app)**

---

## ✨ Funcionalidades Principais

* **Frontend Moderno e Interativo:** Uma interface totalmente responsiva construída com Vue 3 (Composition API), com troca de temas (claro/escuro), suporte a múltiplos idiomas (PT/EN) e animações de scroll.
* **Prova de Habilidade On-Chain:** Uma seção "Guestbook" funcional que permite aos visitantes conectar suas carteiras MetaMask e deixar uma mensagem em um smart contract real, implantado na rede de testes Polygon Amoy.
* **Ambiente de Desenvolvimento Blockchain Profissional:** O smart contract foi desenvolvido com Hardhat, seguindo as melhores práticas, incluindo testes unitários completos, scripts de deploy e simulação local.
* **Arquitetura Limpa:** O código é bem estruturado, com uma clara separação de responsabilidades entre UI (componentes), lógica de estado (Pinia) e serviços (interação com a blockchain).

---

## 🛠️ Pilha de Tecnologias

| Frontend                                                                                      | Blockchain                                                                         |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [Vue.js](https://vuejs.org/) (Composition API)                                                | [Solidity](https://soliditylang.org/)                                              |
| [Vite](https://vitejs.dev/)                                                                   | [Hardhat](https://hardhat.org/)                                                    |
| [Pinia](https://pinia.vuejs.org/)                                                             | [Ethers.js](https://ethers.io/)                                                    |
| [Vue Router](https://router.vuejs.org/)                                                       | [Mocha](https://mochajs.org/) & [Chai](https://www.chaijs.com/)                    |
| [Vue-i18n](https://vue-i18n.intlify.dev/)                                                     | [OpenZeppelin](https://www.openzeppelin.com/contracts) (Contratos Padrão)        |
| [AOS](https://michalsnik.github.io/aos/) (Animate on Scroll)                                  | [Polygon Amoy](https://polygon.technology/) (Rede de Testes)                       |
| [Lucide Icons](https://lucide.dev/) & [Devicon](https://devicon.dev/)                         | [Alchemy](https://www.alchemy.com/) (Provedor de RPC)                              |

---

## 📂 Estrutura do Projeto

O repositório está organizado em um formato de monorepo, com duas pastas principais:

* **`/frontend`**: Contém toda a aplicação Vue.js. Esta é a parte visual e interativa do portfólio.
* **`/blockchain`**: Contém o projeto Hardhat com o smart contract, testes e scripts de deploy.
* **`netlify.toml`**: Arquivo de configuração que instrui o Netlify a fazer o deploy do site a partir da pasta `/frontend`.

---

## 🚀 Configuração e Execução Local

Para rodar o projeto completo na sua máquina, você precisará configurar as duas partes.

**Pré-requisitos:**
* [Node.js](https://nodejs.org/) (versão LTS)
* [NPM](https://www.npmjs.com/)
* Uma carteira [MetaMask](https://metamask.io/) para interagir com a funcionalidade do Guestbook.

### Configurando o Frontend

1.  Navegue até a pasta do frontend:
    ```bash
    cd frontend
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Crie e configure o arquivo de variáveis de ambiente:
    ```bash
    cp .env.example .env
    ```
    Abra o arquivo `.env` e preencha as variáveis `VITE_GUESTBOOK_CONTRACT_ADDRESS` e `VITE_RPC_URL` com os seus dados.

4.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

### Configurando o Backend (Blockchain)

1.  Em outro terminal, navegue até a pasta do blockchain:
    ```bash
    cd blockchain
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Para rodar os testes ou simular interações, nenhum passo adicional é necessário. Para fazer deploy em uma rede de testes, configure o arquivo `.env` conforme as instruções no `README.md` da pasta `/blockchain`.

---

## 📜 Scripts Disponíveis

#### Frontend
* `npm run dev`: Inicia o servidor de desenvolvimento.
* `npm run build`: Compila a aplicação para produção.
* `npm run preview`: Visualiza o build de produção localmente.

#### Blockchain
* `npx hardhat compile`: Compila os smart contracts.
* `npx hardhat test`: Roda os testes unitários.
* `npx hardhat run scripts/run-local.js`: Roda uma simulação local.
* `npx hardhat run scripts/deploy.js --network amoy`: Faz o deploy para a rede de testes Amoy.