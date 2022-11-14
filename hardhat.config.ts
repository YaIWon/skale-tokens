/**
 *
 * @author Sawyer Cutler
 * @copyright 2022 Sawyer Cutler
 * @license MIT
 *
**/

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from 'dotenv';

import 'hardhat-deploy';
import 'hardhat-deploy-ethers';

dotenv.config();

const PRIVATE_KEY: string | undefined = (process.env.PRIVATE_KEY as string | undefined);
if (!PRIVATE_KEY) {
    throw new Error("Private Key Not Found");
}

task("wethu-mint", "Mint wETHu")
    .setAction(async(taskArgs: any, { ethers, getNamedAccounts }) => {
        
        const contract = await ethers.getContractAt("CalypsoWETHU", "0x08f98Af60eb83C18184231591A8F89577E46A4B9");

        const res = await contract.mint("0x2c20Ef3fc0248FCA2DC57bcb202F2CAe504A9A66", ethers.utils.parseEther("0.005"));

        console.log("RES: ", res);
    })


const BASE_RPC_URL: string = "https://staging-v2.skalenodes.com/v1/";
const BASE_RPC_URL_V3: string = "https://staging-v3.skalenodes.com/v1/";
const BASE_RPC_MAINNET: string = "https://mainnet.skalenodes.com/v1/";

const config: HardhatUserConfig = {
    solidity: "0.8.17",
    /// Required to work with hardhat deploy and the auatomation
    namedAccounts: {
        deployer: 0 
    },
    networks: {
        "se-team": {
            accounts: [PRIVATE_KEY],
            url: BASE_RPC_URL + 'deafening-maia'
        },
        'europa': {
            accounts: [PRIVATE_KEY],
            url: BASE_RPC_URL + 'fancy-rasalhague'
        },
        'calypso-staging-v2': {
            chainId: 104734457,
            accounts: [PRIVATE_KEY],
            url: BASE_RPC_URL + 'actual-secret-cebalrai'
        },
        'stocky': {
            accounts: [PRIVATE_KEY],
            url: BASE_RPC_URL + 'stocky-pleione'
        },
        'honorable': {
            accounts: [PRIVATE_KEY],
            url: BASE_RPC_URL + 'honorable-steel-rasalhague'
        },
        'exorde': {
            accounts: [PRIVATE_KEY],
            url: BASE_RPC_URL + 'shapely-dschubba'
        },
        'cryptoblades': {
            accounts: [PRIVATE_KEY],
            url: BASE_RPC_URL + 'glamorous-grumium'
        },
        'fit-graffias': {
            accounts: [PRIVATE_KEY],
            url: BASE_RPC_URL + 'fit-graffias'
        },
        'whispering': {
            accounts: [PRIVATE_KEY],
            url: BASE_RPC_URL + 'whispering-turais'
        },
        'attractive': {
            accounts: [PRIVATE_KEY],
            url: BASE_RPC_URL + 'attractive-merope'
        },
        'roasted': {
            accounts: [PRIVATE_KEY],
            url: BASE_RPC_URL + 'roasted-thankful-unukalhai'
        },
        'spry': {
            accounts: [PRIVATE_KEY],
            url: BASE_RPC_URL + 'spry-wobbly-ready-skale'
        },
        'lean': {
            accounts: [PRIVATE_KEY],
            url: BASE_RPC_URL + 'lean-yawning-late-skale'
        },
        "calypso-staging-v3": {
            accounts: [PRIVATE_KEY],
            url: BASE_RPC_URL_V3 + 'staging-utter-unripe-menkar'
        },
        "calypso": {
            accounts: [PRIVATE_KEY],
            url: BASE_RPC_MAINNET + 'honorable-steel-rasalhague'
        }
    },
    etherscan: {
        apiKey: {
            "calypso-staging-v2": "na",
            "calypso-staging-v3": "na",
            "calypso": "non-applicable-value"
        },
        customChains: [
             {
                network: "calypso-staging-v2",
                chainId:  104734457,
                urls: {
                    apiURL: "https://actual-secret-cebalrai.explorer.staging-v2.skalenodes.com/api",
                    browserURL: "https://actual-secret-cebalrai.explorer.staging-v2.skalenodes.com"
                }
            },
            {
                network: "calypso-staging-v3",
                chainId:  344106930,
                urls: {
                    apiURL: "https://staging-utter-unripe-menkar.explorer.staging-v3.skalenodes.com/api",
                    browserURL: "https://staging-utter-unripe-menkar.explorer.staging-v3.skalenodes.com"
                }
            },
            {
                network: "calypso",
                chainId:  1564830818,
                urls: {
                    apiURL: "https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/api",
                    browserURL: "https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com"
                }
            }

        ]
    }
};

export default config;
