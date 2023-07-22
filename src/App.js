import React, { useState } from 'react';
import { getAddres, getKeplrClient } from './scripts/keplrUtil.js'
import './App.css';
import Header from './components/Header/Header.jsx'
import Nav from './components/Nav/Nav.jsx'
import Actions from './components/actionContainer/actionContainer.jsx'

function App(props) {

  let [address,setAddress] = useState(0);

  const handleKepler = async () => {
    // const newAddress = await keplerReadClient();
    const client = await getKeplrClient();
    const newAddress = await getAddres();
    // console.log(newAddress)
    setAddress(newAddress)
  }

  return (
    <>
    <Nav handleKeplr={handleKepler}/>
    <Header/>
    <Actions/>
    <h1>Hello Area47</h1>
    </>
  );
}

export default App;
