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

    const signedMessage = await  web3.eth.sign(inputMessage, wallet[0].address)
    console.log("Signed  Message is, ", signedMessage)
    const encryptedSignedMessage = await web3.eth.accounts.wallet.encrypt(signedMessage)
 
    console.log("Encrypted Message is, ", encryptedSignedMessage)
    return [signedMessage, encryptedSignedMessage];       
    }

export const decryptMessage = (web3, encryptedMessage, signedMessage, privateKeyInput) => {
    // const walletPrivateKey = wallet[0].privatekey;
    let decryptedMessage;
    // if(walletPrivateKey === privateKeyInput) {
      decryptedMessage = web3.eth.accounts.wallet.decrypt(encryptedMessage, signedMessage)
    // }
    return decryptedMessage
}
