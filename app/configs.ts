import {
    connectToWallet,
    getTaskName,
    getAbi
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
const SmartContractAddress: string = "0x57a8Bbe9e4663f89209ea7e564d8852d1Cd1a5dc"
const PrivateKey: string = "ecd0476b2c3618a176c7fd6be1881f302fa0eead0d1d612555c4785229fb9252";
const rpcUrl = "http://127.0.0.1:7540"
const chainId = 1337;
const Provider = connectToWallet(rpcUrl, chainId);
const taskName: string = getTaskName()
const FunctionName: string = "convertEthToDai(uint minDaiAmount, address tokenAddress)"
const Abi: string = getAbi()

console.log(taskName)
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