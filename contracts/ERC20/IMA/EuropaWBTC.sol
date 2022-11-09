// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./SkaleMappedERC20Token.sol";

contract EuropaWBTC is SkaleMappedERC20Token("Europa WBTC", "WBTC") {
    function decimals() override public view returns (uint8) {
        return 8;
    }
}
