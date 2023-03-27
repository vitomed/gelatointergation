"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToWallet = exports.getTaskName = void 0;
const ethers_1 = require("ethers");
function getTaskName() {
    return new Date().toUTCString() + " " + "storeCaller every 10min";
}
exports.getTaskName = getTaskName;
function connectToWallet(url, chainId) {
    let connection = new ethers_1.ethers.providers.JsonRpcProvider(url, chainId);
    return connection;
}
exports.connectToWallet = connectToWallet;
