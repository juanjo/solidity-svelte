// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";

// We can save amazing ideas!
contract Idea is Ownable {
  string private _idea = "My amazing idea!!!";

  function getIdea() external view returns (string memory) {
    return string(abi.encodePacked(_idea));
  }

  function setIdea(string memory _newIdea) external onlyOwner {
    _idea = _newIdea;
  } 
}
