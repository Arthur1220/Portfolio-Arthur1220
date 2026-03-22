# Portfolio · Arthur Marques Azevedo

> Desenvolvedor Back-end & Blockchain — Ilhéus, BA

**[→ portfolioama.netlify.app](https://portfolioama.netlify.app)**

---

## Sobre o Projeto

Portfólio pessoal desenvolvido como SPA moderna com Vue.js 3, apresentando minha trajetória técnica, projetos selecionados e uma prova de conceito funcional com blockchain — um Guestbook on-chain onde visitantes podem assinar a página via smart contract na testnet Polygon Amoy.

---

## Funcionalidades

- **Guestbook On-Chain** — visitantes conectam sua carteira MetaMask e registram uma mensagem permanente em um smart contract (Polygon Amoy), via Ethers.js
- **Internacionalização** — suporte completo PT/EN com vue-i18n
- **Tema Claro/Escuro** — alternância dinâmica com persistência via localStorage
- **Seção de Pesquisa** — timeline com projetos de iniciação científica da UESC (2022–2025)
- **Design Responsivo** — adaptado para desktop, tablet e mobile
- **Animações de Scroll** — transições sutis via AOS

---

## Stack

| Camada     | Tecnologias                       |
| ---------- | --------------------------------- |
| Framework  | Vue.js 3 (Composition API) + Vite |
| Estado     | Pinia                             |
| Roteamento | Vue Router                        |
| i18n       | Vue-i18n                          |
| Blockchain | Ethers.js                         |
| Ícones     | Lucide Vue Next · Devicon         |
| Animações  | AOS (Animate on Scroll)           |
| Deploy     | Netlify                           |

---

## Estrutura

```
/frontend
├── public/              # Arquivos estáticos (PDFs, favicon)
├── src/
│   ├── assets/          # CSS global, fontes e imagens
│   ├── components/
│   │   ├── layout/      # Header, Footer
│   │   ├── sections/    # Hero, About, Projects, Skills, Guestbook, Contact
│   │   └── ui/          # Componentes reutilizáveis
│   ├── locales/         # pt.json, en.json
│   ├── services/        # blockchainService.js
│   ├── stores/          # Pinia (theme)
│   ├── App.vue
│   └── main.js
├── .env.example
├── netlify.toml
└── vite.config.js
```

---

## Rodando Localmente

**1. Clone e entre na pasta:**

```bash
git clone https://github.com/Arthur1220/Portfolio-Arthur1220
cd Portfolio-Arthur1220/frontend
```

**2. Instale as dependências:**

```bash
npm install
```

**3. Configure as variáveis de ambiente:**

```bash
cp .env.example .env
```

Edite o `.env` com suas chaves:

```env
VITE_GUESTBOOK_CONTRACT_ADDRESS=   # Endereço do smart contract na Polygon Amoy
VITE_RPC_URL=                      # URL do provedor RPC (ex: Alchemy)
```

**4. Inicie o servidor:**

```bash
npm run dev
# http://localhost:5173
```

---

## Scripts

```bash
npm run dev      # Servidor de desenvolvimento (HMR)
npm run build    # Build de produção → /dist
npm run preview  # Preview do build local
```

---

## Contato

**Arthur Marques Azevedo**  
[LinkedIn](https://linkedin.com/in/azevedo-arthur) · [GitHub](https://github.com/Arthur1220) · arthurmarquesazevedo@gmail.com
