"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Abi = exports.FunctionName = exports.SmartContractAddress = exports.taskName = exports.chainId = exports.rpcUrl = exports.Provider = exports.PrivateKey = void 0;
const utils_1 = require("./utils");
// goerli
// const SmartContractAddress: string = "0xEf8a6dD37908E418b1596dAD00226Bd2A62c3D7f"
// const PrivateKey = "2dc63b3ab270c6c15050e2d7c1c35b922ca270eaa0f34caf847852326db3307d";
// const rpcUrl = "https://rpc.ankr.com/eth_goerli"
// const chainId = 5;
// ganache
// const SmartContractAddress: string = "0xEf8a6dD37908E418b1596dAD00226Bd2A62c3D7f"
// const PrivateKey: string = "41c43367790db5391b8e2977a5807e9f1819e2e01f17a875a0c71d381228ab7d";
// const rpcUrl = "http://127.0.0.1:7545"
// const chainId = 1337;
// fork1
const SmartContractAddress = "0x57a8Bbe9e4663f89209ea7e564d8852d1Cd1a5dc";
exports.SmartContractAddress = SmartContractAddress;
const PrivateKey = "0xecd0476b2c3618a176c7fd6be1881f302fa0eead0d1d612555c4785229fb9252";
exports.PrivateKey = PrivateKey;
const rpcUrl = "http://127.0.0.1:7540";
exports.rpcUrl = rpcUrl;
const chainId = 1337;
exports.chainId = chainId;
const Provider = (0, utils_1.connectToWallet)(rpcUrl, chainId);
exports.Provider = Provider;
const taskName = (0, utils_1.getTaskName)();
exports.taskName = taskName;
console.log(taskName);
const FunctionName = "convertEthToDai(uint minDaiAmount, address tokenAddress)";
exports.FunctionName = FunctionName;
const Abi = (0, utils_1.getAbi)();
exports.Abi = Abi;
