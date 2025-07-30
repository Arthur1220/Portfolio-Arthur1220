const { ethers } = require("hardhat");

async function main() {
  console.log("Preparando para implantar o contrato Guestbook...");

  // Obtém o contrato compilado
  const Guestbook = await ethers.getContractFactory("Guestbook");

  // Envia a transação para criar o contrato na rede
  console.log("Enviando transação de deploy...");
  const guestbook = await Guestbook.deploy();

  // Espera a transação ser confirmada pela rede
  await guestbook.waitForDeployment();

  const contractAddress = await guestbook.getAddress();
  console.log("✅ Contrato Guestbook implantado com sucesso no endereço:", contractAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});