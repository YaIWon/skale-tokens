// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract SkaleMappedERC721Token is ERC721, ERC721URIStorage, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");
    bytes32 public constant SET_URI_ROLE = keccak256("SET_URI_ROLE");

    constructor(
        string memory name,
        string memory symbol
    ) ERC721(name, symbol) {
        _grantRole(DEFAULT_ADMIN_ROLE, 0xD244519000000000000000000000000000000000);
        _grantRole(MINTER_ROLE, 0xd2AaA00a00000000000000000000000000000000);
        _grantRole(BURNER_ROLE, 0xd2AaA00a00000000000000000000000000000000);
        _grantRole(SET_URI_ROLE, 0xd2AaA00a00000000000000000000000000000000);
        _grantRole(MINTER_ROLE, 0xD2aaa00600000000000000000000000000000000);
        _grantRole(BURNER_ROLE, 0xD2aaa00600000000000000000000000000000000);
        _grantRole(SET_URI_ROLE, 0xD2aaa00600000000000000000000000000000000);
    }

    function mint(address to, uint256 amount) public virtual {
        require(hasRole(MINTER_ROLE, msg.sender), "Caller is not a minter");
        _mint(to, amount);
    }

    function _burn(uint256 tokenId)
        internal
        virtual
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }



    function setTokenURI(uint256 tokenId, string memory newTokenUri) public virtual {
        require(hasRole(SET_URI_ROLE, msg.sender), "Caller is not a uri setter");
        _setTokenURI(tokenId, newTokenUri);
    }


    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
