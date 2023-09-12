// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "../IMA/SkaleMappedERC20Token.sol";

contract SquiggleDAOToken is SkaleMappedERC20Token("Squiggle DAO Token ", "Squig") {
    
    function decimals() override public view returns (uint8) {
        return 4;
    }
}
