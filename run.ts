import {
    GelatoSmartContract
} from './app/contract';

async function main() {
    GelatoSmartContract("")
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });