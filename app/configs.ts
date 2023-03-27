import {
    connectToWallet,
    getTaskName
} from './utils';

const PrivateKey = "2dc63b3ab270c6c15050e2d7c1c35b922ca270eaa0f34caf847852326db3307d";
const rpcUrl = "https://goerli.infura.io/v3/f0b04b881cb747b8b58ddaa2e4141886" //https://rpc.ankr.com/eth_goerli
const chainId = 5;
const Provider = connectToWallet(rpcUrl, chainId);
const taskName: string = getTaskName()
console.log(taskName)
const Address: string = "0x919f095252B54128f8eF8D80986A712121AbE950"
const FunctionName: string = "storeCaller()"
const Abi: string = `[
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
]`
export { 
    PrivateKey,
    Provider,
    rpcUrl,
    chainId,
    taskName,
    Address,
    FunctionName,
    Abi,
}