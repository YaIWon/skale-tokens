// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract OriginERC721 is ERC721, ERC721URIStorage, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    uint256 private _nextTokenId;

    constructor() ERC721("Test721", "T721") {
        _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());
        _grantRole(MINTER_ROLE, _msgSender());
        _nextTokenId = 1;
        safeMint(_msgSender(), "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXAFL5nP3S-4xiiVYAVOk3qkYDTyQVOFA1Rg&s");
        safeMint(_msgSender(), "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MjA0OTgzNC13aWtpbWVkaWEtaW1hZ2Uta293ZmM0bHouanBn.jpg");
        safeMint(_msgSender(), "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXAFL5nP3S-4xiiVYAVOk3qkYDTyQVOFA1Rg&s");
        safeMint(_msgSender(), "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MjA0OTgzNC13aWtpbWVkaWEtaW1hZ2Uta293ZmM0bHouanBn.jpg");
        safeMint(_msgSender(), "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXAFL5nP3S-4xiiVYAVOk3qkYDTyQVOFA1Rg&s");
        safeMint(_msgSender(), "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MjA0OTgzNC13aWtpbWVkaWEtaW1hZ2Uta293ZmM0bHouanBn.jpg");
        safeMint(_msgSender(), "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXAFL5nP3S-4xiiVYAVOk3qkYDTyQVOFA1Rg&s");
        safeMint(_msgSender(), "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MjA0OTgzNC13aWtpbWVkaWEtaW1hZ2Uta293ZmM0bHouanBn.jpg");
    }

    function safeMint(address to, string memory uri) public onlyRole(MINTER_ROLE) {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    function _burn(uint256 tokenId)
        internal
        virtual
        override(ERC721, ERC721URIStorage)
    {
        return super._burn(tokenId);
    }

    // The following functions are overrides required by Solidity.
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