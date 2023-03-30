import { AutomateSDK, TaskTransaction, isAutomateSupported } from "@gelatonetwork/automate-sdk";
import { Contract, ethers} from "ethers";




class Fork1 {
    smartContractAddress = "0x54364efd8b3527AcfC064baEF5b60c127D5566D7"
    privateKey = "9ecf42bbc9cc4be6ec30c6cf99965a37cc6d7c0abaf11c62b4e0fbf371b5be4f";
    rpcUrl = "http://127.0.0.1:7540"
    chainId = 1337;
    provider = this.connectToWallet();

    connectToWallet(){
        return new ethers.providers.JsonRpcProvider(this.rpcUrl, this.chainId);
    }
}

class GelatoSmartContract {
    private abi: string;
    private address: string;
    private interval: number;
    private rpcUrl: string;
    private functionExecutable: string;
    private chainId: number;
    private provider: ethers.providers.JsonRpcProvider;
    private signer: ethers.Wallet;
    private taskName: string;
    private counter: Contract;
    private selector: string
    
    constructor(
        abi: string,
        address: string,
        chainId: number,
        functionExecutable: string,
        interval: number,
        privateKey: string,
        rpcUrl: string,        
    ) {
        this.address = address; 
        this.abi = abi;
        this.interval = interval;
        this.chainId = chainId;
        this.functionExecutable = functionExecutable;
        this.rpcUrl = rpcUrl

        this.taskName = new Date().toUTCString();
        this.provider = new ethers.providers.JsonRpcProvider(rpcUrl, chainId);
        this.signer = new ethers.Wallet(privateKey, this.provider);
        this.counter = new Contract(this.address, this.abi, this.signer);
        this.selector = this.counter.interface.getSighash(this.functionExecutable);
    }
  
    async healthCheck() {
        if (!isAutomateSupported(this.chainId)) {
          console.log(`Automate network not supported (${this.chainId})`)
          // raise exception    
        }
    }

    async getTaskParams(interval: number){
        let execData = this.counter.interface.encodeFunctionData("convertEthToDai", [1, "0xdAC17F958D2ee523a2206206994597C13D831ec7"]);
        let params: CreateTaskOptions = {
            name: this.functionExecutable,
            execAddress: this.address,
            execSelector: this.selector,
            execData,
            execAbi: this.abi,
            interval: interval, // 3 * 60, // execute every 3 minutes
            dedicatedMsgSender: true,
            singleExec: true,
        };
        return params
    }

    async automate(): Promise<void> {
        let taskParams = await this.getTaskParams(this.interval)
        const automate = new AutomateSDK(this.chainId, this.signer);
        const { taskId, tx }: TaskTransaction = await automate.createTask(taskParams);
        await tx.wait();
        console.log(`Task created, taskId: ${taskId} (tx hash: ${tx.hash})`);
        console.log(`> https://app.gelato.network/task/${taskId}?chainId=${this.chainId}`);
    }
}

export {
    GelatoSmartContract
}