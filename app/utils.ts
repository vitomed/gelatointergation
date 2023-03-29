import { ethers, } from "ethers";

function getTaskName() {
    return new Date().toUTCString() + " " + "storeCaller every 10min"
}

function connectToWallet(url: string, chainId: number) {
    let connection = new ethers.providers.JsonRpcProvider(url, chainId);
    return connection
}

export { 
    getTaskName,
    connectToWallet
}