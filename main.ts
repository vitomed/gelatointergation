import { AutomateSDK, TaskTransaction, isAutomateSupported } from "@gelatonetwork/automate-sdk";
import { BigNumber, Contract, Overrides, ethers} from "ethers";
import {
  PrivateKey, 
  Provider, 
  chainId, 
  taskName,
  FunctionName,
  SmartContractAddress,
  Abi
} from './app/configs';

async function main() {
  if (!isAutomateSupported(chainId)) {
    console.log(`Automate network not supported (${chainId})`)
  }
  const signer = new ethers.Wallet(PrivateKey, Provider);
  const gasPrice = signer.getGasPrice();
  console.log("gasPrice", gasPrice)

  const automate = new AutomateSDK(chainId, signer);
  const counter = new Contract(SmartContractAddress, Abi, signer);
  // console.log("COUNTER", counter)
  const selector = counter.interface.getSighash(FunctionName);
  console.log("SELECTOR", selector)
  const params: CreateTaskOptions = {
    name: taskName,
    execAddress: SmartContractAddress,
    execSelector: selector,
    execAbi: Abi,
    interval: 3 * 60, // execute every 3 minutes
    dedicatedMsgSender: true,
    singleExec: true,  // task cancels itself after 1 execution if true.
  };
  console.log("Params created!")
  const overrides: Overrides = {
    gasLimit: BigNumber.from(1),
    maxFeePerGas: BigNumber.from(2)
  }
  const { taskId, tx }: TaskTransaction = await automate.createTask(params);
  console.log("taskId", taskId)
  console.log("TX", tx)
  await tx.wait(); // Optionally wait for tx confirmation
  console.log(`Task created, taskId: ${taskId} (tx hash: ${tx.hash})`);
  console.log(`> https://app.gelato.network/task/${taskId}?chainId=${chainId}`);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });