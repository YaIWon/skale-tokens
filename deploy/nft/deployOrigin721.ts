import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const tokenName = "Origin721";
const tokenSymbol = "O721";

const func: DeployFunction = async function(hre: HardhatRuntimeEnvironment) {

    try {
        const { deployments, getNamedAccounts } = hre;
        
        const { deploy } = deployments;

        const { deployer} = await getNamedAccounts();

        const deployed = await deploy(
            "OriginERC721",
            {
                from: deployer,
                log: true,
                args: []
            }
        );

        const address: string = deployed.address;

        await hre.run("verify:verify", {
            address,
            contract: "contracts/NFT/OriginERC721.sol:OriginERC721",
            constructorArguments: []
        });
    } catch (err) {
        console.log("Err: ", err);
    }
}

export default func;

func.tags = ["origin721"]
