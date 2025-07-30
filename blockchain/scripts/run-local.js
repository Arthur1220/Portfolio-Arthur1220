const { ethers } = require("hardhat");

async function main() {
  // Pega algumas contas de teste
  const [owner, user1, user2] = await ethers.getSigners();

  console.log("Deploying Guestbook contract...");
  const Guestbook = await ethers.getContractFactory("Guestbook");
  const guestbook = await Guestbook.deploy();
  await guestbook.waitForDeployment();
  console.log("Guestbook deployed to:", await guestbook.getAddress());
  console.log("----------------------------------------------------");

  // Simula interações
  console.log("User 1 is sending a message...");
  let tx = await guestbook.connect(user1).addMessage("Olá, mundo blockchain!");
  await tx.wait(); // Espera a transação ser confirmada
  console.log("Message from User 1 sent!");

  console.log("\nUser 2 is sending a message...");
  tx = await guestbook.connect(user2).addMessage("Este portfólio é incrível!");
  await tx.wait();
  console.log("Message from User 2 sent!");
  console.log("----------------------------------------------------");

  // Busca e exibe as mensagens
  console.log("\nFetching all messages from the contract:");
  const allMessages = await guestbook.getAllMessages();

  for (const message of allMessages) {
    console.log(`\n  Author: ${message.author}`);
    console.log(`  Message: "${message.message}"`);
    console.log(`  Timestamp: ${new Date(Number(message.timestamp) * 1000).toLocaleString()}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});