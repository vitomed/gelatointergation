"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GelatoSmartContract = void 0;
const automate_sdk_1 = require("@gelatonetwork/automate-sdk");
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
class GelatoSmartContract {
    constructor(abi, address, chainId, functionExecutable, interval, privateKey, rpcUrl) {
        this.address = address;
        this.abi = abi;
        this.interval = interval;
        this.chainId = chainId;
        this.functionExecutable = functionExecutable;
        this.rpcUrl = rpcUrl;
        this.taskName = new Date().toUTCString();
        this.provider = new ethers_1.ethers.providers.JsonRpcProvider(rpcUrl, chainId);
        this.signer = new ethers_1.ethers.Wallet(privateKey, this.provider);
        this.counter = new ethers_1.Contract(this.address, this.abi, this.signer);
        this.selector = this.counter.interface.getSighash(this.functionExecutable);
    }
    healthCheck() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(0, automate_sdk_1.isAutomateSupported)(this.chainId)) {
                console.log(`Automate network not supported (${this.chainId})`);
                // raise exception    
            }
        });
    }
    getTaskParams(interval) {
        return __awaiter(this, void 0, void 0, function* () {
            let execData = this.counter.interface.encodeFunctionData("convertEthToDai", [1, "0xdAC17F958D2ee523a2206206994597C13D831ec7"]);
            let params = {
                name: this.functionExecutable,
                execAddress: this.address,
                execSelector: this.selector,
                execData,
                execAbi: this.abi,
                interval: interval,
                dedicatedMsgSender: true,
                singleExec: true,
            };
            return params;
        });
    }
    automate() {
        return __awaiter(this, void 0, void 0, function* () {
            let taskParams = yield this.getTaskParams(this.interval);
            const automate = new automate_sdk_1.AutomateSDK(this.chainId, this.signer);
            const { taskId, tx } = yield automate.createTask(taskParams);
            yield tx.wait();
            console.log(`Task created, taskId: ${taskId} (tx hash: ${tx.hash})`);
            console.log(`> https://app.gelato.network/task/${taskId}?chainId=${this.chainId}`);
        });
    }
}
exports.GelatoSmartContract = GelatoSmartContract;
