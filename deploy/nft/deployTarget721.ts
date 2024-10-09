import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const tokenName = "Target721";
const tokenSymbol = "T721";

const func: DeployFunction = async function(hre: HardhatRuntimeEnvironment) {

    try {
        const { deployments, getNamedAccounts } = hre;
        
        const { deploy } = deployments;

        const { deployer} = await getNamedAccounts();

        const deployed = await deploy(
            "SkaleMappedERC721Token",
            {
                from: deployer,
                log: true,
                args: [tokenName, tokenSymbol, "0x8f2aC7323316974c05Eb3ADc72810f92a2ad471E"]
            }
        );

        const address: string = deployed.address;

        await hre.run("verify:verify", {
            address,
            contract: "contracts/NFT/SkaleMappedERC721Token.sol:SkaleMappedERC721Token",
            constructorArguments: [
                tokenName, tokenSymbol, "0x8f2aC7323316974c05Eb3ADc72810f92a2ad471E"
            ]
        });
    } catch (err) {
        console.log("Err: ", err);
    }
}

export default func;

func.tags = ["target721"]
