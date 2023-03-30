import { ethers} from "ethers";

function getTaskName() {
    return new Date().toUTCString() + " " + "storeCaller every 10min"
}

function connectToWallet(url: string, chainId: number) {
    let connection = new ethers.providers.JsonRpcProvider(url, chainId);
    return connection
}

function getAbi(){
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
    ]`
}

export { 
    getAbi,
    getTaskName,
    connectToWallet
}