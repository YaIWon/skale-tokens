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
                args: [tokenName, tokenSymbol]
            }
        );

        const address: string = deployed.address;

        await hre.run("verify:verify", {
            address,
            contract: "contracts/NFT/SkaleMappedERC721Token.sol:SkaleMappedERC721Token",
            constructorArguments: [
                tokenName, tokenSymbol
            ]
        });
    } catch (err) {
        console.log("Err: ", err);
    }
}

export default func;

func.tags = ["target721"]
