// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./SkaleMappedERC20Token.sol";

contract EuropaUSDC is SkaleMappedERC20Token("Europa USDC", "USDC") {

    function decimals() override public view returns (uint8) {
        return 6;
    }
}
