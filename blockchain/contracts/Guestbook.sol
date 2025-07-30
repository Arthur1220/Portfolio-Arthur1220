// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Guestbook {
    event NewMessage(address indexed from, uint256 timestamp, string message);

    uint256 public constant MAX_MESSAGE_LENGTH = 280;

    struct Message {
        address author;
        string message;
        uint256 timestamp;
    }

    Message[] private messages;

    function addMessage(string memory _message) public {
        require(bytes(_message).length > 0, "Message cannot be empty.");
        require(bytes(_message).length <= MAX_MESSAGE_LENGTH, "Message exceeds maximum length.");

        messages.push(Message(msg.sender, _message, block.timestamp));
        emit NewMessage(msg.sender, block.timestamp, _message);
    }

    function getAllMessages() public view returns (Message[] memory) {
        return messages;
    }
}