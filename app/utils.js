"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToWallet = exports.getTaskName = exports.Abi = void 0;
const ethers_1 = require("ethers");
function getTaskName() {
    return new Date().toUTCString() + " " + "storeCaller every 10min";
}
exports.getTaskName = getTaskName;
function connectToWallet(url, chainId) {
    let connection = new ethers_1.ethers.providers.JsonRpcProvider(url, chainId);
    return connection;
}
exports.connectToWallet = connectToWallet;
function Abi() {
    return `[
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "minDaiAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "tokenAddress",
                    "type": "address"
                }
            ],
            "name": "convertEthToDai",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        },
        {
            "inputs": [],
            "name": "uniswapRouter",
            "outputs": [
                {
                    "internalType": "contract IUniswapV2Router02",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]`;
}
exports.Abi = Abi;
