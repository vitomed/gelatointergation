"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
class Fork1 {
    constructor() {
        this.smartContractAddress = "0x54364efd8b3527AcfC064baEF5b60c127D5566D7";
        this.privateKey = "9ecf42bbc9cc4be6ec30c6cf99965a37cc6d7c0abaf11c62b4e0fbf371b5be4f";
        this.rpcUrl = "http://127.0.0.1:7540";
        this.chainId = 1337;
        this.provider = this.connectToWallet();
    }
    connectToWallet() {
        return new ethers_1.ethers.providers.JsonRpcProvider(this.rpcUrl, this.chainId);
    }
}
