// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "../IMA/SkaleMappedERC20Token.sol";

// https://holesky.etherscan.io/token/0x46E0F6C2aeC8C48588a5a4d064d32b14Fa685f78
contract Skivvy is SkaleMappedERC20Token("Skivvy", "$SKIVVY") {
    
    function decimals() override public view returns (uint8) {
        return 8;
    }
}
