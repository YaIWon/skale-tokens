// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./SkaleMappedERC20Token.sol";

contract EuropaSkivvy is SkaleMappedERC20Token("Europa Skivvy", "$SKIVVY") {
    
    function decimals() override public view returns (uint8) {
        return 8;
    }
}
