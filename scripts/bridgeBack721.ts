import { task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import ABI from "./TokenManagerERC721WithMetadata.abi.json";

task("bridge-back")
    .setAction(async(_, { ethers }) => {
        
        const [ signer ] = await ethers.getSigners();
        const contractAddress = "0xD2aaa00600000000000000000000000000000000"; /// w/metadata - 0xd2AaA00a00000000000000000000000000000000
        const contract = new ethers.Contract(
            contractAddress,
            ABI,
            signer
        );

        const _721Contract = await ethers.getContractAt("SkaleMappedERC721Token", "0x18ae2A4D6F43Be4fA7b929d32379e1B9Ce96dBF7", signer);
        const res = await _721Contract.approve(contractAddress, 1);
        await res.wait(1);

        

        const response = await contract.transferToSchainERC721(
            "juicy-low-small-testnet",
            "0x81c73c38b07b60f39aF383967FAD12067f5e1628",
            1
            // "0x18ae2A4D6F43Be4fA7b929d32379e1B9Ce96dBF7",
            // 1
        );

        console.log("Response: ", response);

    });