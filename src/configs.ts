// goerli
const SmartContractAddress: string = "0xF449f3A8b0c358D362B89668956E5Cd3955c879F"
const PrivateKey = "2dc63b3ab270c6c15050e2d7c1c35b922ca270eaa0f34caf847852326db3307d";
const RpcUrl = "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
const ChainId = 5;

// ganache
// const SmartContractAddress: string = "0xEf8a6dD37908E418b1596dAD00226Bd2A62c3D7f"
// const PrivateKey: string = "41c43367790db5391b8e2977a5807e9f1819e2e01f17a875a0c71d381228ab7d";
// const rpcUrl = "http://127.0.0.1:7545"
// const chainId = 1337;

// fork1
// const SmartContractAddress: string = "0x57a8Bbe9e4663f89209ea7e564d8852d1Cd1a5dc"
// const PrivateKey: string = "ecd0476b2c3618a176c7fd6be1881f302fa0eead0d1d612555c4785229fb9252";
// const RpcUrl = "http://127.0.0.1:7540"
// const ChainId = 1337;

// Common Parametrs
const Interval = 3 * 60;
const FunctionExecutable: string = "sendEth(uint256 amount)"
const Abi = `[
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "sendEth",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
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