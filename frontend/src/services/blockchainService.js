// src/services/blockchainService.js
import { ethers } from 'ethers';

// Lê os dados do arquivo .env
const contractAddress = import.meta.env.VITE_GUESTBOOK_CONTRACT_ADDRESS;
const contractABI = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "message",
          "type": "string"
        }
      ],
      "name": "NewMessage",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "MAX_MESSAGE_LENGTH",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_message",
          "type": "string"
        }
      ],
      "name": "addMessage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllMessages",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "author",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "message",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "internalType": "struct Guestbook.Message[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

let provider;
let contract;

// Helper para formatar endereços
const formatAddress = (addr) => `${addr.slice(0, 6)}...${addr.slice(-4)}`;

/**
 * Inicializa o provedor e a instância do contrato (se o MetaMask estiver presente)
 */
const initialize = () => {
    // Tenta usar a carteira do navegador (MetaMask) primeiro
    if (typeof window.ethereum !== 'undefined') {
        provider = new ethers.BrowserProvider(window.ethereum);
    }
    // Se não houver carteira, usa nosso RPC da Alchemy para um acesso de "apenas leitura"
    else if (rpcUrl) {
        provider = new ethers.JsonRpcProvider(rpcUrl);
        console.log("Conectado em modo de apenas leitura via RPC.");
    }
    else {
        console.error("Nenhum provedor Web3 (MetaMask) ou URL de RPC encontrado.");
        return false;
    }

    contract = new ethers.Contract(contractAddress, contractABI, provider);
    return true;
};

/**
 * Solicita a conexão da carteira do usuário e retorna o endereço.
 */
export const connectWallet = async () => {
    if (!provider) initialize();
    if (!provider) throw new Error("MetaMask não está instalado.");

    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    return await signer.getAddress();
};

/**
 * Busca e formata todas as mensagens do smart contract.
 */
export const getMessages = async () => {
    if (!contract) initialize();
    if (!contract) throw new Error("Serviço não inicializado.");

    const fetchedMessages = await contract.getAllMessages();
    return [...fetchedMessages].map(msg => ({
        author: formatAddress(msg.author),
        message: msg.message,
        timestamp: new Date(Number(msg.timestamp) * 1000).toLocaleString()
    })).reverse();
};

/**
 * Envia uma nova mensagem para o smart contract.
 * @param {string} messageText O texto da mensagem a ser enviada.
 */
export const addMessage = async (messageText) => {
    if (!contract || !provider) throw new Error("Carteira não conectada ou serviço não inicializado.");

    const signer = await provider.getSigner();
    const contractWithSigner = contract.connect(signer);
    const tx = await contractWithSigner.addMessage(messageText);

    // Espera a transação ser confirmada
    await tx.wait();
};

// Inicializa o serviço assim que o arquivo é carregado
initialize();
