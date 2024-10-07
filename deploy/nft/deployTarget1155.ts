import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async function(hre: HardhatRuntimeEnvironment) {

    try {
        const { deployments, getNamedAccounts } = hre;
        
        const { deploy } = deployments;

        const { deployer} = await getNamedAccounts();

        const deployed = await deploy(
            "SkaleMappedERC1155Token",
            {
                from: deployer,
                log: true,
                args: []
            }
        );

        const address: string = deployed.address;

        await hre.run("verify:verify", {
            address,
            contract: "contracts/NFT/SkaleMappedERC1155Token.sol:SkaleMappedERC1155Token"
        });
    } catch (err) {
        console.log("Err: ", err);
    }
}

export default func;

func.tags = ["target1155", "semift"]
