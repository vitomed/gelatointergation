import {
    connectToWallet,
    getTaskName
} from './utils';

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
const SmartContractAddress: string = "0x54364efd8b3527AcfC064baEF5b60c127D5566D7"
const PrivateKey: string = "9ecf42bbc9cc4be6ec30c6cf99965a37cc6d7c0abaf11c62b4e0fbf371b5be4f";
const rpcUrl = "http://127.0.0.1:7540"
const chainId = 1;


const Provider = connectToWallet(rpcUrl, chainId);
const taskName: string = getTaskName()
console.log(taskName)
const FunctionName: string = "convertEthToDai(uint 1)"
const Abi: string = `[
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "daiAmount",
                "type": "uint256"
            }
        ],
        "name": "convertEthToDai",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "daiAmount",
                "type": "uint256"
            }
        ],
        "name": "getEstimatedETHforDAI",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
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
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
]`
export { 
    PrivateKey,
    Provider,
    rpcUrl,
    chainId,
    taskName,
    SmartContractAddress,
    FunctionName,
    Abi,
}