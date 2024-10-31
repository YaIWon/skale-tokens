// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract SkaleMappedERC721Token is ERC721, AccessControl {
    
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");
    bytes32 public constant SET_URI_ROLE = keccak256("SET_URI_ROLE");

    string private _baseEndpoint;

    constructor(
        string memory name,
        string memory symbol,
        address manager
    ) ERC721(name, symbol) {
        _grantRole(DEFAULT_ADMIN_ROLE, 0xD244519000000000000000000000000000000000);
        _grantRole(MINTER_ROLE, 0xD2aaa00600000000000000000000000000000000);
        _grantRole(BURNER_ROLE, 0xD2aaa00600000000000000000000000000000000);
        _grantRole(SET_URI_ROLE, manager);
        
    }

    function mint(address to, uint256 tokenId) public virtual {
        require(hasRole(MINTER_ROLE, msg.sender), "Caller is not a minter");
        _mint(to, tokenId);
    }

    function burn(uint256 tokenId) public virtual {
        require(hasRole(BURNER_ROLE, msg.sender), "Caller is not a minter");
        _burn(tokenId);
    }

    function setBaseEndpoint(string memory endpoint) public onlyRole(SET_URI_ROLE) {
        _baseEndpoint = endpoint;
    }

    function _baseURI() internal view override virtual returns (string memory) {
        return _baseEndpoint;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override
        returns (string memory)
    {
        string memory uri = _baseURI();
        return bytes(uri).length > 0 ? string(abi.encodePacked(uri, Strings.toString(tokenId), ".json")) : "";
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
