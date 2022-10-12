/**
 *
 * @author Sawyer Cutler
 * @copyright 2022 Sawyer Cutler
 * @license MIT
 *
**/

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from 'dotenv';
dotenv.config();

const PRIVATE_KEY: string | undefined = (process.env.PRIVATE_KEY as string | undefined);

if (!PRIVATE_KEY) {
    throw new Error("Private Key Not Found");
}

const BASE_RPC_URL: string = "https://staging-v2.skalenodes.com/v1/";

const config: HardhatUserConfig = {
    solidity: "0.8.17",
    networks: {
        "se-team": {
            accounts: [PRIVATE_KEY],
            url: BASE_RPC_URL + 'deafening-maia'
        },
        'europa': {
            accounts: [PRIVATE_KEY],
            url: BASE_RPC_URL + 'fancy-rasalhague'
        },
        'calypso': {
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
        }
    }
};

export default config;
