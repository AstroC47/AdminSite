import {  SigningCosmWasmClient} from "cosmwasm";

const config = {
    chainId: "stargaze-1",
    rpcEndpoint: "https://rpc.stargaze-apis.com/",
    prefix: "wasm",
  };
  
const gasPrice = null;
const prefix = "wasm"


const getKeplrClient = async () => {

const offlineSigner = await window.getOfflineSignerAuto(config.chainId);

const client = await SigningCosmWasmClient.connectWithSigner(
    config.rpcEndpoint,
    offlineSigner,
    {
        prefix,
        gasPrice
    }
    );

  // console.log(offlineSigner.getAccounts()
  //     .then((result) => {console.log(result[0].address)})
  //     .catch((err) => {console.log(err)}));

}

const getAddres = async () => {
      const offlineSigner = await window.getOfflineSignerAuto(config.chainId);

      const addr = await offlineSigner.getAccounts().then((result) => { return result[0].address});

      return addr
}


  export { getKeplrClient, getAddres };