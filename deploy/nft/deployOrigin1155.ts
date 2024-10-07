import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async function(hre: HardhatRuntimeEnvironment) {

    try {
        const { deployments, getNamedAccounts } = hre;
        
        const { deploy } = deployments;

        const { deployer} = await getNamedAccounts();

        const deployed = await deploy(
            "OriginERC1155",
            {
                from: deployer,
                log: true,
                args: []
            }
        );

        const address: string = deployed.address;

        await hre.run("verify:verify", {
            address,
            contract: "contracts/NFT/OriginERC1155.sol:OriginERC1155"
        });
    } catch (err) {
        console.log("Err: ", err);
    }
}

export default func;

func.tags = ["origin1155"]
