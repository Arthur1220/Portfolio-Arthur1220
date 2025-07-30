require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // Linha que carrega as variáveis do .env

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28", // Garante que a versão é a mesma do seu contrato
  networks: {
    // Define a configuração para a rede 'amoy'
    amoy: {
      url: process.env.AMOY_RPC_URL,     // Usa a URL do seu .env
      accounts: [process.env.PRIVATE_KEY], // Usa a chave da sua carteira do .env
    },
  },
};