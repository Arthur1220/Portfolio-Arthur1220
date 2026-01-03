# // Arthur Azevedo - Full-Stack & Web3 Engineer
### [B.Sc. Computer Science @ UESC | GPA 8.3/10]

---

<div align="left">

[![Status](https://img.shields.io/badge/Status-Consolidação_2026-3d8c2a?style=flat-square&logo=terminal&logoColor=white)](https://portfolioama.netlify.app)
[![Main Stack](https://img.shields.io/badge/Stack-Go_|_Python_|_Solidity-235218?style=flat-square)](https://portfolioama.netlify.netlify.app)
[![License](https://img.shields.io/badge/License-MIT-gray?style=flat-square)](LICENSE)

**[🌐 Live Portfolio](https://portfolioama.netlify.app)** • **[💼 LinkedIn](https://linkedin.com/in/azevedo-arthur)** • **[📧 Contact](mailto:arthurmarquesazevedo@gmail.com)**

</div>

---

## // 01. Visão Geral do Projeto

Este repositório contém a infraestrutura completa do meu portfólio profissional. Diferente de um site estático comum, este projeto foi desenhado como uma **Arquitetura Híbrida (Web2 + Web3)**, servindo como um "Proof of Concept" (PoC) para sistemas escaláveis de rastreabilidade e automação.

### Destaques de Engenharia:
* **Hybrid On-Chain State:** Implementação de um Guestbook descentralizado com registro de eventos na L2 **Polygon (Amoy)**.
* **Infrastructure-as-Code (Manual):** Ambientes conteinerizados com **Docker** e estratégias de deploy em instâncias **AWS EC2**.
* **Software Design:** Aplicação de Composition API no Vue 3 para separação rigorosa de lógica de estado (Pinia) e serviços de blockchain.
* **AI Integration:** Módulos de automação técnica utilizando **LLMs (Gemini/GPT)** para otimização de fluxos.

---

## // 02. Stack Tecnológica

### Core Languages & Runtimes
* **Backend:** Go (Sistemas de alta performance), Python (Django/FastAPI), Node.js (Express).
* **Blockchain:** Solidity (EVM Smart Contracts), Hardhat, Ethers.js.
* **Frontend:** Vue.js 3, Vite, TypeScript, Tailwind/Custom CSS.

### Data & Infrastructure
* **Databases:** PostgreSQL (Relacional), MongoDB (NoSQL), Redis (Caching/Queues).
* **DevOps:** Docker & Docker Compose, AWS (EC2/S3), GitHub Actions (CI/CD).
* **Testing:** Mocha/Chai (Smart Contracts), Pytest (Backend).

---

## // 03. Arquitetura do Repositório

O projeto utiliza uma estrutura de **Monorepo** para manter a paridade entre o contrato inteligente e a interface de usuário:

```bash
.
├── 📁 blockchain/          # Hardhat Environment
│   ├── 📁 contracts/       # Smart Contracts (Solidity)
│   ├── 📁 test/            # Unit & Integration Tests
│   └── scripts/            # Deployment & Migration scripts
├── 📁 frontend/            # Vue 3 SPA
│   ├── 📁 src/
│   │   ├── 📁 services/    # Blockchain & API Integrations
│   │   ├── 📁 components/  # Atomic UI Components
│   │   └── 📁 locales/     # i18n (PT/EN Support)
│   └── vite.config.js
└── netlify.toml            # Automated Deployment Config

```

---

## // 04. Setup & Desenvolvimento Local

### 04.1 Frontend Context

```bash
cd frontend
npm install
cp .env.example .env # Configure VITE_GUESTBOOK_CONTRACT_ADDRESS
npm run dev

```

### 04.2 Blockchain Context (Hardhat)

```bash
cd blockchain
npm install
npx hardhat test      # Validação da lógica do contrato
npx hardhat compile   # Geração de ABI para o frontend

```

---

## // 05. Pesquisas e Inovação (UESC)

Este portfólio também documenta minha trajetória acadêmica na **Universidade Estadual de Santa Cruz**, incluindo:

* **TCC (2025):** Plataforma Full-stack de Rastreabilidade Animal via Blockchain L2.
* **Iniciação Tecnológica:** Sistemas de estimativa de peso via Visão Computacional 3D (Intel RealSense).

---

## // 06. Licença e Contrato

Desenvolvido por **Arthur Azevedo**.
*A imutabilidade das mensagens no Guestbook é garantida pelo protocolo Polygon.*