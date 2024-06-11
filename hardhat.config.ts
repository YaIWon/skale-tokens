/**
 *
 * @author Sawyer
 * @copyright 2022-2024 Dirt Road Development
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


const BASE_RPC_TESTNET: string = "https://testnet.skalenodes.com/v1/";
const BASE_RPC_MAINNET: string = "https://mainnet.skalenodes.com/v1/";

const config: HardhatUserConfig = {
    solidity: "0.8.17",
    /// Required to work with hardhat deploy and the auatomation
    namedAccounts: {
        deployer: 0 
    },
    networks: {
        "calypso-testnet": {
            accounts: [PRIVATE_KEY],
            url: BASE_RPC_TESTNET + 'giant-half-dual-testnet'
        },
        "calypso-mainnet": {
            accounts: [PRIVATE_KEY],
            url: BASE_RPC_MAINNET + 'honorable-steel-rasalhague'
        },
        "europa-testnet": {
            accounts: [PRIVATE_KEY],
            url: BASE_RPC_TESTNET + 'juicy-low-small-testnet'
        },
        "europa-mainnet": {
            accounts: [PRIVATE_KEY],
            url: BASE_RPC_MAINNET + "elated-tan-skat"
        }
    },
    etherscan: {
        apiKey: {
            "calypso-testnet": "na",
            "calypso-mainnet": "na",
            "europa-testnet": "na",
            "europa-mainnet": "na",
        },
        customChains: [
             {
                network: "calypso-testnet",
                chainId: 974399131,
                urls: {
                    apiURL: "https://giant-half-dual-testnet.explorer.testnet.skalenodes.com/api",
                    browserURL: "https://giant-half-dual-testnet.explorer.testnet.skalenodes.com"
                }
            },
            {
                network: "europa-testnet",
                chainId: 1444673419,
                urls: {
                    apiURL: "https://juicy-low-small-testnet.explorer.testnet.skalenodes.com/api",
                    browserURL: "https://juicy-low-small-testnet.explorer.testnet.skalenodes.com"
                }
            },
            {
                network: "calypso-mainnet",
                chainId:  1564830818,
                urls: {
                    apiURL: "https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/api",
                    browserURL: "https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com"
                }
            },
            {
                network: "europa-mainnet",
                chainId:  2046399126,
                urls: {
                    apiURL: "https://elated-tan-skat.explorer.mainnet.skalenodes.com/api",
                    browserURL: "https://elated-tan-skat.explorer.mainnet.skalenodes.com"
                }
            }
        ]
    }
};

export default config;
