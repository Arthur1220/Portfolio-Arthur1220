// src/services/blockchainService.js
import { ethers } from 'ethers';

// Lê os dados do arquivo .env
const contractAddress = import.meta.env.VITE_GUESTBOOK_CONTRACT_ADDRESS;
const rpcUrl = import.meta.env.VITE_RPC_URL;
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

// Função de inicialização mais segura
const initialize = () => {
    try {
        if (typeof window.ethereum !== 'undefined') {
            provider = new ethers.BrowserProvider(window.ethereum);
            console.log("Provedor da carteira (MetaMask) encontrado.");
        } else if (rpcUrl) {
            provider = new ethers.JsonRpcProvider(rpcUrl);
            console.log("Conectado em modo de apenas leitura via RPC.");
        } else {
            console.warn("Nenhum provedor Web3 ou URL de RPC foi configurado. O Guestbook não poderá buscar mensagens.");
            return; // Sai da função se não houver como se conectar
        }
        contract = new ethers.Contract(contractAddress, contractABI, provider);
    } catch (error) {
        console.error("Falha ao inicializar o serviço de blockchain:", error);
    }
};

export const connectWallet = async () => {
    if (!window.ethereum) throw new Error("MetaMask não está instalado.");

    // Recria o provedor para garantir que é o da carteira
    provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    contract = new ethers.Contract(contractAddress, contractABI, signer); // Reconecta o contrato com o assinante
    return await signer.getAddress();
};

export const getMessages = async () => {
    // Adiciona uma verificação de segurança
    if (!contract) return []; // Retorna uma lista vazia se o contrato não foi inicializado

    const fetchedMessages = await contract.getAllMessages();
    return [...fetchedMessages].map(msg => ({
        author: `${msg.author.slice(0, 6)}...${msg.author.slice(-4)}`,
        message: msg.message,
        timestamp: new Date(Number(msg.timestamp) * 1000).toLocaleString()
    })).reverse();
};

export const addMessage = async (messageText) => {
    if (!contract) throw new Error("Contrato não inicializado.");

    const signer = await provider.getSigner();
    if (!signer) throw new Error("Carteira não conectada para assinar a transação.");

    const contractWithSigner = contract.connect(signer);
    const tx = await contractWithSigner.addMessage(messageText);
    await tx.wait();
};

// Inicializa o serviço ao carregar
initialize();
