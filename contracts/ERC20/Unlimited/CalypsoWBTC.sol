// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./SkaleUnlimitedERC20Token.sol";

contract CalypsoWBTC is SkaleUnlimitedERC20Token("Wrapped BTC", "WBTC") {
    function decimals() override public view returns (uint8) {
        return 8;
    }
}
