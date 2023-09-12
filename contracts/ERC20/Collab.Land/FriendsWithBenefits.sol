// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "../IMA/SkaleMappedERC20Token.sol";

contract FriendsWithBenefits is SkaleMappedERC20Token("FRIENDS WITH BENEFITS", "FWB") {
    
    function decimals() override public view returns (uint8) {
        return 4;
    }
}
