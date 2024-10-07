import { task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import ABI from "./TokenManagerERC1155.abi.json";

task("bridgebatch")
    .setAction(async(_, { ethers }) => {
        
        const [ signer ] = await ethers.getSigners();
        const contractAddress = "0xD2aaA00900000000000000000000000000000000";
        const contract = new ethers.Contract(
            contractAddress,
            ABI,
            signer
        );

        const _1155Contract = await ethers.getContractAt("OriginERC1155", "0x8b2345E10047A305df214D3D377a7F434b417Bb8", signer);
        const res = await _1155Contract.setApprovalForAll(contractAddress, true);
        await res.wait(1);

        

        const response = await contract.transferToSchainERC1155Batch(
            "lanky-ill-funny-testnet",
            "0x8b2345E10047A305df214D3D377a7F434b417Bb8",
            [1,2],
            [1,1]
        );

        console.log("Response: ", response);

    });