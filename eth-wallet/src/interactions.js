import Web3 from 'web3';

export const loadWeb3 = () => {
    if(typeof window.ethereum!=='undefined'){
      const web3 = new Web3(window.ethereum);
      return web3
    } else {
      window.alert('Please install MetaMask')
      window.location.assign("https://metamask.io/")
    }
  }

export const signAndEncryptMessage = async (web3, inputMessage) => {

    const wallet = web3.eth.accounts.wallet.create(1);
    console.log("wallet",wallet);

    // const message = web3.utils.sha3(inputMessage);
    // console.log('message', message)
    
    const encryptedMessage = await web3.eth.accounts.wallet.encrypt(inputMessage)
    console.log("Encrypted Message is, ", encryptedMessage)

    const encryptedSignedMessage = await  web3.eth.sign(encryptedMessage[0].crypto.ciphertext, wallet[0].address)
    console.log("Signed  Message is, ", encryptedSignedMessage)
  
    return [encryptedMessage, encryptedSignedMessage];       
    }

export const decryptMessage = (web3, encryptedMessage, inputMessage, passwordInput) => {
  let decryptedMessage;
  if (passwordInput === inputMessage) {
    decryptedMessage = web3.eth.accounts.wallet.decrypt(encryptedMessage, inputMessage)
  }
  return decryptedMessage
}
