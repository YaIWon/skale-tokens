import { task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import ABI from "./TokenManagerERC721WithMetadata.abi.json";

task("bridge")
    .setAction(async(_, { ethers }) => {
        
        const [ signer ] = await ethers.getSigners();
        const contractAddress = "0xD2aaa00600000000000000000000000000000000"; /// w/metadata - 0xd2AaA00a00000000000000000000000000000000
        const contract = new ethers.Contract(
            contractAddress,
            ABI,
            signer
        );

        const _721Contract = await ethers.getContractAt("OriginERC721", "0x65f1c73d9e1B01B2c540a71183C40BaEae6C8C25", signer);
        const res = await _721Contract.approve(contractAddress, 1);
        await res.wait(1);

        

        const response = await contract.transferToSchainERC721(
            "lanky-ill-funny-testnet",
            "0x65f1c73d9e1B01B2c540a71183C40BaEae6C8C25",
            1
        );

        console.log("Response: ", response);

    });