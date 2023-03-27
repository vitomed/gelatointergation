import { AutomateSDK, TaskTransaction, isAutomateSupported } from "@gelatonetwork/automate-sdk";
import { Contract, ethers } from "ethers";
import {
  PrivateKey, 
  Provider, 
  chainId, 
  taskName,
  FunctionName,
  Address,
  Abi
} from './app/configs';

async function main() {
  if (!isAutomateSupported(chainId)) {
    console.log(`Automate network not supported (${chainId})`)
  }
  const signer = new ethers.Wallet(PrivateKey, Provider);
  const automate = new AutomateSDK(chainId, signer);
  const counter = new Contract(Address, Abi, signer);
  console.log("COUNTER", counter)
  const selector = counter.interface.getSighash(FunctionName);
  console.log("SELECTOR", selector)
  const params: CreateTaskOptions = {
    name: taskName,
    execAddress: Address,
    execSelector: selector,
    execAbi: Abi,
    interval: 3 * 60, // execute every 3 minutes
    dedicatedMsgSender: true,
    singleExec: true,  // task cancels itself after 1 execution if true.
    useTreasury: true
  };
  console.log("Params created!")
  const { taskId, tx }: TaskTransaction = await automate.createTask(params);
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