# Projeto Blockchain: Guestbook On-Chain

Este diretório contém o smart contract e o ambiente de desenvolvimento Hardhat para a funcionalidade "Livro de Visitas On-Chain" do meu portfólio pessoal. O objetivo é demonstrar competência no desenvolvimento, teste e implantação de aplicações descentralizadas (dApps) na blockchain.

---

## Tecnologias Utilizadas

* **Solidity:** Linguagem para a escrita do smart contract.
* **Hardhat:** Ambiente de desenvolvimento para compilar, testar, implantar e depurar o software Ethereum.
* **Ethers.js:** Biblioteca para interagir com o contrato a partir de scripts e testes.
* **Mocha & Chai:** Frameworks de teste para escrever os testes unitários do contrato.
* **dotenv:** Para gerenciamento de variáveis de ambiente de forma segura.

---

## Estrutura de Pastas

A organização do projeto segue o padrão recomendado pelo Hardhat para manter o código limpo e modular.

```

/blockchain
├── contracts/
│   └── Guestbook.sol       \# O código-fonte do smart contract.
├── scripts/
│   ├── deploy.js           \# Script para implantar o contrato em uma rede (ex: Amoy).
│   └── run-local.js        \# Script para simular o deploy e interações em uma rede local.
├── test/
│   └── Guestbook.test.js   \# Testes unitários para o contrato.
├── artifacts/              \# Gerado pela compilação, contém o ABI e o bytecode. (Ignorado pelo Git)
├── cache/                  \# Cache do Hardhat para acelerar compilações. (Ignorado pelo Git)
├── node\_modules/          \# Dependências do projeto. (Ignorado pelo Git)
├── .env.example            \# Arquivo de exemplo para as variáveis de ambiente.
├── hardhat.config.js       \# Arquivo de configuração principal do Hardhat.
└── package.json            \# Dependências e scripts do projeto.

```

---

## Configuração do Ambiente

Para rodar este projeto em uma nova máquina, siga os passos abaixo:

1.  **Clone o repositório** (se ainda não o fez) e navegue até esta pasta:
    ```bash
    cd blockchain
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Crie o arquivo de ambiente:**
    Copie o arquivo de exemplo para criar seu próprio arquivo de segredos. Este arquivo não é monitorado pelo Git.
    ```bash
    cp .env.example .env
    ```

4.  **Preencha as variáveis no `.env`:**
    Abra o arquivo `.env` e preencha com suas chaves para poder implantar em uma rede de testes pública.
    * `AMOY_RPC_URL`: Sua URL de RPC de um provedor como [Alchemy](https://www.alchemy.com/) para a rede Polygon Amoy.
    * `PRIVATE_KEY`: A chave privada da sua carteira MetaMask que será usada para o deploy.

---

## Scripts Principais

Os seguintes comandos devem ser executados a partir da pasta `/blockchain`.

#### Compilação
Compila o smart contract e gera os `artifacts` (incluindo o ABI).
```bash
npx hardhat compile
```

#### Testes

Executa todos os testes unitários definidos na pasta `test/`.

```bash
npx hardhat test
```

#### Simulação Local

Inicia uma rede Hardhat local na memória, implanta o contrato, simula algumas transações e exibe o resultado no console. Ótimo para depuração rápida.

```bash
npx hardhat run scripts/run-local.js
```

#### Deploy na Rede de Testes

Implanta o contrato na rede de testes configurada no `hardhat.config.js` (neste caso, a Polygon Amoy).

```bash
npx hardhat run scripts/deploy.js --network amoy
```

-----

## Detalhes do Contrato: `Guestbook.sol`

O contrato é um simples "Livro de Visitas" que permite que qualquer pessoa registre uma mensagem na blockchain.

### Funcionalidades

  * `addMessage(string memory _message)`: Função pública que permite que um usuário envie uma nova mensagem. Ela armazena o endereço do remetente, a mensagem e o timestamp do bloco.
  * `getAllMessages()`: Função `view` pública que retorna um array com todas as mensagens já registradas.

### Validações e Segurança

  * **Mensagem Vazia:** A função `addMessage` possui uma verificação (`require`) que impede o registro de mensagens vazias.
  * **Limite de Caracteres:** Foi implementada uma constante `MAX_MESSAGE_LENGTH` (atualmente 280 caracteres) para prevenir o envio de mensagens excessivamente longas, otimizando os custos de gás e evitando spam.

### Eventos

  * `NewMessage`: Um evento é emitido sempre que uma nova mensagem é adicionada com sucesso. Isso permite que aplicações frontend escutem por novas mensagens em tempo real sem precisar consultar o contrato repetidamente.