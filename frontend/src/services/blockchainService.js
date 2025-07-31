import { ethers } from 'ethers';

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

/*
  * Inicializa o serviço de blockchain, configurando o provedor e o contrato.
  * Tenta usar o MetaMask se disponível, ou um URL de RPC configurado.
  * Se nenhum provedor for encontrado, emite um aviso.
*/
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
            return;
        }
        contract = new ethers.Contract(contractAddress, contractABI, provider);
    } catch (error) {
        console.error("Falha ao inicializar o serviço de blockchain:", error);
    }
};

/*
  * Conecta a carteira do usuário, solicitando permissão para acessar as contas.
  * Recria o provedor para garantir que é o da carteira conectada.
  * Retorna o endereço da conta conectada.
*/
export const connectWallet = async () => {
    if (!window.ethereum) throw new Error("MetaMask não está instalado.");

    provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    contract = new ethers.Contract(contractAddress, contractABI, signer);
    return await signer.getAddress();
};

/*
  * Recupera todas as mensagens do contrato.
  * Se o contrato não estiver inicializado, retorna um array vazio.
  * Formata as mensagens para exibir o autor com um prefixo e sufixo,
  * e converte o timestamp para uma string legível.
*/
export const getMessages = async () => {
    if (!contract) return [];

    const fetchedMessages = await contract.getAllMessages();
    return [...fetchedMessages].map(msg => ({
        author: `${msg.author.slice(0, 6)}...${msg.author.slice(-4)}`,
        message: msg.message,
        timestamp: new Date(Number(msg.timestamp) * 1000).toLocaleString()
    })).reverse();
};

/*
  * Adiciona uma nova mensagem ao contrato.
  * Verifica se o contrato está inicializado e se a carteira está conectada.
  * Se não estiver, lança um erro.
  * Conecta o contrato ao signer da carteira e envia a transação.
  * Aguarda a confirmação da transação antes de retornar.
*/
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
