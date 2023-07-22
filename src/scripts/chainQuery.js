import { CosmWasmClient } from 'cosmwasm'
import { toStars } from './utils.ts';
require('dotenv').config()

const config = require('../config');

const setupClient = async () => {

    const client = await CosmWasmClient.connect(config.rpcEndpoint);
    const account = toStars(process.env.REACT_APP_NFT_ACCOUNT);

    return { client, account }

}

const queryClassC = async (client, account) => { 

const balance = await client.getBalance(account, 'ustars');

return balance

}

const queryNft = async (client, nftNum) => {

    const nftInfo = await client.queryContractSmart(process.env.REACT_APP_NFT_SG721, {
        owner_of: { token_id: nftNum},
        });

        return nftInfo.owner  
    }

// const searchTx = async (client, account) => {

//     const balance = await client.searchTx(query:SearchBySentFromOrToQuery,);

// return balance

// }

const queryAddress = async (client, address) => {

    const nfts = await client.queryContractSmart(process.env.REACT_APP_NFT_SG721, {
        tokens: { owner: address, limit: 50, start_after: '0' },
      });

      return nfts.tokens

    }

const nftCount = async (client) => {
    let all_tokens_minted = []
    let tokens = {tokens:[0,0,0,0,0,0,0,0,0,0]}
    let check = '0'

    try{
    while (tokens.tokens[tokens.tokens.length-1] != null ){
    tokens = await client.queryContractSmart(process.env.REACT_APP_NFT_SG721, {
        all_tokens: { start_after: check},
      });
        all_tokens_minted.push.apply(all_tokens_minted, tokens.tokens);
        check = all_tokens_minted[all_tokens_minted.length-1]
        console.log(tokens.tokens)
    }
    } catch{
        while (tokens.tokens[tokens.tokens.length-1] != null ){
            tokens = await client.queryContractSmart(process.env.REACT_APP_NFT_SG721, {
                all_tokens: { start_after: check},
              });
                all_tokens_minted.push.apply(all_tokens_minted, tokens.tokens);
                check = all_tokens_minted[all_tokens_minted.length-1]
                console.log(tokens.tokens)
            }
    }
        console.log('done')
      return all_tokens_minted

    }

    const snapShot = async() => {

    }


export { queryClassC, queryNft, queryAddress, setupClient, snapShot, nftCount}