// contracts/interfaces/IWETH.sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

interface IWETH {
    // The public, permissionless function to wrap native ETH into WETH.
    // The transaction must send ETH (msg.value) to the WETH contract.
    function deposit() external payable; 
    
    // Standard ERC20 functions the Baker will use.
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}
