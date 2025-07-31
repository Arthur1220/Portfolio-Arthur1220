const { ethers } = require("hardhat");

async function main() {
  console.log("Preparando para implantar o contrato Guestbook...");

  const Guestbook = await ethers.getContractFactory("Guestbook");

  console.log("Enviando transação de deploy...");
  const guestbook = await Guestbook.deploy();

  await guestbook.waitForDeployment();

  const contractAddress = await guestbook.getAddress();
  console.log("✅ Contrato Guestbook implantado com sucesso no endereço:", contractAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});