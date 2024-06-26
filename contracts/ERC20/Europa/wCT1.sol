// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "../IMA/SkaleMappedERC20Token.sol";

// https://etherscan.io/address/0x514910771AF9Ca656af840dff83E8264EcF986CA#code
contract WrappedCarToken1 is SkaleMappedERC20Token("Wrapped Car Token 1", "wCT1") {

    function decimals() override public view returns (uint8) {
        return 2;
    }
}