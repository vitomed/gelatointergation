"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Abi = exports.FunctionName = exports.Address = exports.taskName = exports.chainId = exports.rpcUrl = exports.Provider = exports.PrivateKey = void 0;
const utils_1 = require("./utils");
const PrivateKey = "2dc63b3ab270c6c15050e2d7c1c35b922ca270eaa0f34caf847852326db3307d";
exports.PrivateKey = PrivateKey;
const rpcUrl = "https://eth-goerli.public.blastapi.io"; //https://rpc.ankr.com/eth_goerli
exports.rpcUrl = rpcUrl;
const chainId = 5;
exports.chainId = chainId;
const Provider = (0, utils_1.connectToWallet)(rpcUrl, chainId);
exports.Provider = Provider;
const taskName = (0, utils_1.getTaskName)();
exports.taskName = taskName;
console.log(taskName);
const Address = "0x919f095252B54128f8eF8D80986A712121AbE950";
exports.Address = Address;
const FunctionName = "storeCaller()";
exports.FunctionName = FunctionName;
const Abi = `[
    {
        "inputs": [],
        "name": "last_caller",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "storeCaller",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]`;
exports.Abi = Abi;
