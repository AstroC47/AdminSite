import { SigningCosmWasmClient } from "cosmwasm";
import { addTestnetToKeplr } from './stargazeTestnet.js'
import config from "../config";
import { SigningStargateClient } from '@cosmjs/stargate'


const getKeplrClient = async (config) => {
  const prefix = "wasm";
  const gasPrice = null;

  // check browser compatibility
  if (!window.keplr) {
    throw new Error("Keplr is not supported or installed on this browser!");
  }

  // try to enable keplr with given chainId
  await window.keplr.enable(config.chainId).catch(() => {
    throw new Error(`Keplr can't connect to this chainId: ${config.chainId}`);
  });

  // Setup signer
  const offlineSigner = await window.getOfflineSignerAuto(config.chainId);

  // Init SigningCosmWasmClient client
  const signingClient = await SigningCosmWasmClient.connectWithSigner(
    config.rpcEndpoint,
    offlineSigner,
    {
      prefix,
      gasPrice,
    }
  );
  return signingClient;
};

// const sendStar = async (denom, toSend, adr) => {

//   addTestnetToKeplr()

//   const offlineSigner = window.getOfflineSigner(config.chainId)
//   // console.log('1')
//   const signingClient = await SigningStargateClient.connectWithSigner(
//   config.rpcEndpoint,
//   offlineSigner,
// )
// // console.log('2')

// const account = (await offlineSigner.getAccounts())[0]
// console.log(account.address)
// const myAddr = (account.address)
// let bal = ((await signingClient.getBalance(account.address, denom)).amount)
// // console.log('4')

// const sendResult = await signingClient.sendTokens(
//   account.address,
//   adr,
//   [ {denom: denom,amount: (toSend*1000000).toString(),},],
//   {amount: [{ denom: "ustars", amount: "500000" }],gas: "200000",},
// )
// // console.log('5')
// console.log(sendResult)

// bal = (await signingClient.getBalance(account.address, denom)).amount

// const sentBal = await signingClient.getBalance(adr, denom)
// console.log("sent : ", sentBal)

// }

const send = async (denom, toSend, adr) => {

  addTestnetToKeplr()

  const offlineSigner = window.getOfflineSigner(config.chainId)
  const signingClient = await SigningCosmWasmClient.connectWithSigner(
  config.rpcEndpoint,
  offlineSigner,
)

const account = (await offlineSigner.getAccounts())[0]
let bal = ((await signingClient.getBalance(account.address, denom)).amount)


const sendResult = await signingClient.sendTokens(
  account.address,
  adr,
  [ {denom: denom,amount: (toSend*100000).toString(),},],
  {amount: [{ denom: "ustars", amount: "500" }],gas: "200000",},
)
console.log('sendresult ', sendResult)
console.log('signing client ', offlineSigner)

bal = (await signingClient.getBalance(account.address, denom)).amount

const sentBal = await signingClient.getBalance(adr, denom)
console.log("sent : ", sentBal)

}

export { getKeplrClient, send};