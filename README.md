# About eth-wallet

This is a dApp that allows a user to enter a password. Upon submitting the password, a wallet is created with one account. This wallet is used to encrypt the password; the encrypted password is then signed. And the final result is displayed to the user. The user can then enter their password from before to see the public key of the wallet account that encrypted and signed the password.
Ideally, it would have been great if I could figure out how to decrypt the encrypted and signed message back to the original input. But that is an addition for another day. The goal for this project was to demonstrate wallet initalization, and hence account private and public keys creation; as well as encryption and decryption.
Ignore the name of the repo: I had a different idea when I first started out on the project. But hey, it uses `web3.eth` so :shrug:

_This dApp is meant for demo purposes only. It is just a proof-of-concept._ It is advised not to use this dApp in production since it has a few vulnerabilities such as the fact that the password is not cleared from the input when it is done being used.

# How it works / How to recreate

When the app loads, a function is called that loads web3. This function calls `new Web3(window.ethereum);` where `window.ethereum` requires a metamask browser installation for web3 to load.

When the user enters a password to be encrypted. A wallet with one account is created. This was done for simplicity, but it is highly recommended to create wallets with multiple accounts, for security reasons. This is another reason why this dApp should not be used in production. The wallet is created with `web3.eth.accounts.wallet.create(1);`

The newly created wallet is logged to the console (Another security vulnerability), and used to encrypt the password using `web3.eth.accounts.wallet.encrypt(inputMessage)`
The encryption result is then signed using the public key from the newly created wallet via `web3.eth.sign(encryptedMessage[0].crypto.ciphertext, wallet[0].address)`
The encrypted and signed message is then displayed to the user.

If the user wishes to see the public key of the wallet that encrypted and signed the message, they can re-enter their password and if it matches the original input, the decryption is done, and the account that encrypted and signed is revealed. One can compare the displayed public key/account with the one that was logged in the console earlier, to confirm that they are indeed the same. The decryption is achieved with `web3.eth.accounts.wallet.decrypt(encryptedMessage, inputMessage)`

# How to Run

_This project was developed in a nodeJs environment, with web3 on the backend and reactJs on the frontend. It was bootstrapped with `create-react-app`._

You will need to have a metamask wallet and browser extension installed
Clone this repo as you would any github repo. Prefarably use a new git branch.
-Run `yarn install` to install the node packages as defined in the package.json file.
Note: If you are missing any dependencies, read the error in the console and manually install anything that you are missing.
-Run `yarn start` to run the web server in localhost. The dApp can be tested in localhost.
It is recommended to open your dev tools console in localhost, where you can see that the account returned at the decryption stage is indeed the account that was created right before encryption in the `interactions.js` file.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
