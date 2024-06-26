// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "../IMA/SkaleMappedERC20Token.sol";

// https://etherscan.io/address/0x514910771AF9Ca656af840dff83E8264EcF986CA#code
contract LinkToken is SkaleMappedERC20Token("ChainLink Token", "LINK") {}