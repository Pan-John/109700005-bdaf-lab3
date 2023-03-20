// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Bank {
    mapping(address account_address => mapping(address token_address => uint256)) public _balances;

    function deposit(address token, uint256 amount) external {
        _balances[msg.sender][token] += amount;
        ERC20(token).transferFrom(msg.sender, address(this), amount);
    }

    function withdraw(address token, uint256 amount) external {
        require(_balances[msg.sender][token] >= amount, "Insufficent balance!");
        _balances[msg.sender][token] -= amount;
        ERC20(token).transfer(msg.sender, amount);
    }
}
