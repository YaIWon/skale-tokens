// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "../IMA/SkaleMappedERC20Token.sol";

contract AlexMasmej is SkaleMappedERC20Token("AlexMasmej", "ALEX") {
    
    function decimals() override public view returns (uint8) {
        return 4;
    }
}
