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
const RpcUrl = "http://127.0.0.1:7540"
const ChainId = 1337;
const Interval = 1;
const FunctionExecutable: string = "convertEthToDai(uint minDaiAmount, address tokenAddress)"
const Abi = `[
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
]`

export { 
    Abi,
    PrivateKey,
    RpcUrl,
    ChainId,
    Interval,
    SmartContractAddress,
    FunctionExecutable,
}