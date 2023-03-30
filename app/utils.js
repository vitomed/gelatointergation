"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToWallet = exports.getTaskName = exports.Abi = void 0;
var ethers_1 = require("ethers");
function getTaskName() {
    return new Date().toUTCString() + " " + "storeCaller every 10min";
}
exports.getTaskName = getTaskName;
function connectToWallet(url, chainId) {
    var connection = new ethers_1.ethers.providers.JsonRpcProvider(url, chainId);
    return connection;
}
exports.connectToWallet = connectToWallet;
function Abi() {
    return "[\n        {\n            \"inputs\": [\n                {\n                    \"internalType\": \"uint256\",\n                    \"name\": \"minDaiAmount\",\n                    \"type\": \"uint256\"\n                },\n                {\n                    \"internalType\": \"address\",\n                    \"name\": \"tokenAddress\",\n                    \"type\": \"address\"\n                }\n            ],\n            \"name\": \"convertEthToDai\",\n            \"outputs\": [],\n            \"stateMutability\": \"payable\",\n            \"type\": \"function\"\n        },\n        {\n            \"inputs\": [],\n            \"stateMutability\": \"nonpayable\",\n            \"type\": \"constructor\"\n        },\n        {\n            \"stateMutability\": \"payable\",\n            \"type\": \"receive\"\n        },\n        {\n            \"inputs\": [],\n            \"name\": \"uniswapRouter\",\n            \"outputs\": [\n                {\n                    \"internalType\": \"contract IUniswapV2Router02\",\n                    \"name\": \"\",\n                    \"type\": \"address\"\n                }\n            ],\n            \"stateMutability\": \"view\",\n            \"type\": \"function\"\n        }\n    ]";
}
exports.Abi = Abi;
