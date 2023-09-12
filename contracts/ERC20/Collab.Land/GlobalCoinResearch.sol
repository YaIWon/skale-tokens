// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "../IMA/SkaleMappedERC20Token.sol";

contract GlobalCoinResearch is SkaleMappedERC20Token("Global Coin Research", "GCR") {
    
    function decimals() override public view returns (uint8) {
        return 4;
    }
}
