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
const configs_1 = require("./app/configs");
const utils_1 = require("./app/utils");
const contract_1 = require("./app/contract");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let gs = new contract_1.GelatoSmartContract((0, utils_1.Abi)(), configs_1.SmartContractAddress, configs_1.ChainId, configs_1.FunctionExecutable, configs_1.Interval, configs_1.PrivateKey, configs_1.RpcUrl);
        yield gs.automate();
    });
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});
