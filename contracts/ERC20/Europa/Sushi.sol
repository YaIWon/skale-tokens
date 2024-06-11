// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "../IMA/SkaleMappedERC20Token.sol";

// https://etherscan.io/address/0x6B3595068778DD592e39A122f4f5a5cF09C90fE2#code
contract SushiToken is SkaleMappedERC20Token("SushiToken", "SUSHI") {}