// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "../IMA/SkaleMappedERC20Token.sol";

contract Page is SkaleMappedERC20Token("Page", "PAGE") {
    
    function decimals() override public view returns (uint8) {
        return 8;
    }
}
