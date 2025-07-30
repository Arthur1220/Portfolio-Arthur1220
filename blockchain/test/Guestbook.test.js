const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Guestbook Contract", function () {
  let guestbook;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    
    const Guestbook = await ethers.getContractFactory("Guestbook");
    guestbook = await Guestbook.deploy();
    await guestbook.waitForDeployment();
  });

  it("Should deploy successfully", async function () {
    expect(await guestbook.getAddress()).to.not.be.null;
  });

  it("Should allow a user to add a message", async function () {
    const messageText = "Hello, Hardhat!";
    await guestbook.connect(addr1).addMessage(messageText);
    const allMessages = await guestbook.getAllMessages();
    
    expect(allMessages.length).to.equal(1);
    expect(allMessages[0].author).to.equal(addr1.address);
    expect(allMessages[0].message).to.equal(messageText);
  });

  it("Should emit a NewMessage event when a message is added", async function () {
    const messageText = "Testing events!";
    const block = await ethers.provider.getBlock('latest');
    
    await expect(guestbook.connect(addr1).addMessage(messageText))
      .to.emit(guestbook, "NewMessage")
      .withArgs(addr1.address, block.timestamp + 1, messageText);
  });

  it("Should revert if the message is empty", async function () {
    const emptyMessage = "";
    await expect(
      guestbook.connect(addr1).addMessage(emptyMessage)
    ).to.be.revertedWith("Message cannot be empty.");
  });
  
  it("Should revert if the message is too long", async function () {
    const longMessage = "a".repeat(281);
    
    await expect(
      guestbook.connect(addr1).addMessage(longMessage)
    ).to.be.revertedWith("Message exceeds maximum length.");
  });

  it("Should return all messages correctly", async function () {
    await guestbook.connect(addr1).addMessage("First message!");
    await guestbook.connect(addr2).addMessage("Second message from another user!");
    await guestbook.connect(owner).addMessage("Third one!");
    
    const allMessages = await guestbook.getAllMessages();
    
    expect(allMessages.length).to.equal(3);
    expect(allMessages[1].author).to.equal(addr2.address);
    expect(allMessages[2].message).to.equal("Third one!");
  });
});