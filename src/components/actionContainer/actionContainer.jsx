import React from 'react'
import './actionContainer.css'
import { queryClassC, queryNft, setupClient, queryAddress, snapShot, nftCount } from '../../scripts/chainQuery.js'
import { useState } from 'react'
import { send } from '../../scripts/chainMsg.js'
require('dotenv').config()


export default function ActionContainer(props) {

  let [balance,setBalance] = useState(0);
  let [client, setClient] = useState(null);
  let [account, setAccount] = useState(null);
  const [num, setNum] = useState();
  const [Adr, setAdr] = useState("");

  const [captReward, setCaptreward] = useState(0);
  const [cccReward, setCccReward] = useState(0);
  const [mdReward, setMdReward] = useState(0);

function calcRewards(balance) {
  const captAmount = 5 
  const cccAmount = 20 
  const mdAmount = 47 

  const captHoldAmount = 5 * 50
  const cccHoldAmount = 20 * 17
  const mdHoldAmount = 47 * 12

  const totalRankedCats = captHoldAmount + cccHoldAmount + mdHoldAmount

  setCaptreward(Math.round((captAmount/totalRankedCats)*balance))
  setCccReward(Math.round((cccAmount/totalRankedCats)*balance))
  setMdReward(Math.round((mdAmount/totalRankedCats)*balance))

}

  const handleSnapshot = async (event) => {
    event.preventDefault()

    const returns  = await setupClient();

    setClient(returns.client)
    setAccount(returns.account)

    const balance = await queryClassC(returns.client,returns.account);

    console.log(returns.client)

    setBalance(balance.amount/1000000)

    const holders = await nftCount(returns.client)

    console.log(holders)

    calcRewards(balance.amount/1000000)

  }

  const handlePay = async (evt) => {
    evt.preventDefault();

    const bal = send("ustars",50,process.env.REACT_APP_PAY_ADDRESS)
    
  }

  const handleNft = async (evt) => {
    evt.preventDefault();
    console.log(num)
    const adr = await queryNft(client, num)
    console.log(adr)
    
    alert(`Submitting NFT ID ${adr}`)
}

const handleAdr = async (evt) => {
  evt.preventDefault();
  const nfts = await queryAddress(client, Adr)
  alert(`Submitting Address ${nfts}`)
}

  return (

<div className="grid-container">
  <div className="item1">Classified Cats Phase 1</div>
  <div className="item2">
    <form onSubmit={handleAdr}>
      <label>
        Address: 
        <input
          type="text"
          value={Adr}
          onChange={e => setAdr(e.target.value)}
        />
      </label>
      <input type="submit" value="Query" />
    </form></div>

  <div className="item3">
    <form onSubmit={handleNft}>
      <label>
        NFT Num:
        <input
          type="text"
          value={num}
          onChange={e => setNum(e.target.value)}
        />
      </label>
      <input type="submit" value="Query" />
    </form>
    </div>

  <div className="item4">Stars reward Amount : {balance} stars</div>
  <div className="item5"><button onClick={handleSnapshot}>Snapshot</button></div>
  <div className="item6">Query</div>
  <div className="item7">Query</div>
  <div className="item8"><button onClick={handlePay}>Pay</button></div>  
  <div className="item9">Capt : {captReward}</div>
  <div className="item10">CCC : {cccReward}</div>
  <div className="item11">MD : {mdReward}</div>
  <div className="item12">returns: <input id="numberInp" type="text"></input></div>
</div>

  )

}
