pragma solidity ^0.5.0;

contract Failure {

  mapping(address => bytes32[]) public lockReason;

  function fail() external {
    lockReason[msg.sender].pop();
  }

}
