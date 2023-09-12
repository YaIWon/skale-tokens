// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "../IMA/SkaleMappedERC20Token.sol";

contract Hero is SkaleMappedERC20Token("HERO", "HERO") {
    
    function decimals() override public view returns (uint8) {
        return 4;
    }
}
