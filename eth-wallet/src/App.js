
import React, { useState} from 'react';
import './index.css';
import './App.js';
import { decryptMessage, loadWeb3, signAndEncryptMessage } from './interactions';

const App = () => {
  const [inputMessage, setInputMessage]= useState('');
  const [decryptedMessage, setDecryptMessage] = useState('');
  const [encryptedMessage, setEncryptedMessage] = useState('')
  const [inputPassword, setInputPassword] = useState('');
  const [signedMessage, setSignedMessage] = useState('');

  const  web3 = loadWeb3();

  const onEncryptHandler = async (e) => {
    e.preventDefault();
  const [encryptionResult, signedMessage ] = await signAndEncryptMessage(web3, inputMessage);
  setEncryptedMessage(encryptionResult);
  setSignedMessage(signedMessage);
  // setInputMessage('')
  }


  const onDecryptHandler = async (e) => {
    e.preventDefault();
    const decryptionResult = await decryptMessage(web3, encryptedMessage,inputMessage,inputPassword);
    console.log('decrypt', decryptionResult)
    setDecryptMessage(decryptionResult[0].address);
  }



  return (
  <div>
    <h2> Enter A Password</h2>
    <form onSubmit={(e)=> onEncryptHandler(e)} className="">
      <input id="message" type="text" onChange={(e)=>setInputMessage(e.target.value)} value={inputMessage}/>
      <button type="submit">Send</button>
    </form>
     {signedMessage&&<h1>Your secret message is {signedMessage}</h1>}
    <h2> Enter Your Password To Reveal The Account That Sent The Secret Message</h2>
    <form onSubmit={(e)=> onDecryptHandler(e)} className="">
      <input id="message" type="text" onChange={(e)=>setInputPassword(e.target.value)}/>
      <button type="submit">Send</button>
      {decryptedMessage && <h1>Your message was sent by account: {decryptedMessage}</h1>}
    </form>
  </div>

  )
}

export default App;
