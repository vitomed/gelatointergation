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
const automate_sdk_1 = require("@gelatonetwork/automate-sdk");
const ethers_1 = require("ethers");
const configs_1 = require("./app/configs");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(0, automate_sdk_1.isAutomateSupported)(configs_1.chainId)) {
            console.log(`Automate network not supported (${configs_1.chainId})`);
        }
        const signer = new ethers_1.ethers.Wallet(configs_1.PrivateKey, configs_1.Provider);
        const automate = new automate_sdk_1.AutomateSDK(configs_1.chainId, signer);
        const counter = new ethers_1.Contract(configs_1.Address, configs_1.Abi, signer);
        console.log("COUNTER", counter);
        const selector = counter.interface.getSighash(configs_1.FunctionName);
        console.log("SELECTOR", selector);
        const params = {
            name: configs_1.taskName,
            execAddress: configs_1.Address,
            execSelector: selector,
            execAbi: configs_1.Abi,
            interval: 3 * 60,
            dedicatedMsgSender: true,
            singleExec: true,
            useTreasury: true
        };
        console.log("Params created!");
        const { taskId, tx } = yield automate.createTask(params);
        yield tx.wait(); // Optionally wait for tx confirmation
        console.log(`Task created, taskId: ${taskId} (tx hash: ${tx.hash})`);
        console.log(`> https://app.gelato.network/task/${taskId}?chainId=${configs_1.chainId}`);
    });
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});
