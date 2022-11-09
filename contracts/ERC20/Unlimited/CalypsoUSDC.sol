// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./SkaleUnlimitedERC20Token.sol";

contract CalypsoUSDC is SkaleUnlimitedERC20Token("USD Coin", "USDC") {

    function decimals() override public view returns (uint8) {
        return 6;
    }
}
