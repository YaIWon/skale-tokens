// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./SkaleUnlimitedERC20Token.sol";

contract CalypsoUSDT is SkaleUnlimitedERC20Token("Tether USD", "USDT") {
    
    function decimals() override public view returns (uint8) {
        return 6;
    }
}
