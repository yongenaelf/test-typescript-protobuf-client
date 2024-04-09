import * as dotenv from "dotenv";
dotenv.config();

import { HelloWorldClient } from "./client/contract/hello_world_contract_aelf";
import { Address } from "./client/aelf/core_pb";
import { Empty } from "@bufbuild/protobuf";

/**
 * This is a wrapper that inits the client
 * @example const contract = await aelf.chain.contractAt(contractAddress, wallet);
 * @param contract
 */
const initClient = (contract) =>
  new HelloWorldClient(
    async (n, p) => {
      if (p instanceof Empty) {
        return await contract[n]("");
      }

      return await contract[n](p);
    },
    async (n, p) => {
      if (p instanceof Empty) {
        return await contract[n].call("");
      }

      return await contract[n].call(p);
    }
  );

// https://docs.aelf.io/en/latest/reference/chain-sdk/javascript/js-sdk.html
import AElf from "aelf-sdk";

const aelf = new AElf(
  new AElf.providers.HttpProvider("https://tdvw-test-node.aelf.io")
);

const wallet = AElf.wallet.getWalletByPrivateKey(process.env.PRIVATE_KEY);
const contractAddress = "2W8WdsTNApnCnGVyvgGtNpuKR9pUGjH98jGYBDoEJVhtaYHUas";

(async () => {
  const contract = await aelf.chain.contractAt(contractAddress, wallet);

  // this is the old way, there is no Typescript Intellisense
  // const dataOld = contract.Read.call();
  // const txIdData = contract.Update("test");

  // here, we init the client so that we can get Typescript Intellisense
  const client = initClient(contract);

  // when you mouseover the data, you can see the type
  const initRes = await client.Initialize(new Empty());

  console.log(initRes);

  // when you mouseover the TransactionId, you can see the type
  const charRes = await client.CreateCharacter(new Empty());
  console.log(charRes);

  const char = await client.GetMyCharacter(wallet.address);
  console.log(char);
})();
