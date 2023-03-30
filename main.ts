import { Abi, ChainId, Interval, PrivateKey, RpcUrl, SmartContractAddress } from './src/configs';
import {GelatoSmartContract} from './src/contract';

async function main() {
    let gs: any = new GelatoSmartContract(
        Abi,
        SmartContractAddress,
        ChainId,
        Interval, // Василь
        PrivateKey,
        RpcUrl,
    );
    await gs.automate()
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });