# 109700005-bdaf-lab3
## Simple ERC20 Bank
This is a simple ERC20 bank that can deposit and withdraw ERC20 token.

## Contract link

* The PTC(ERC20) token contract was deployed [here](https://sepolia.etherscan.io/address/0x3F107Abd46156487E041195D55e293A79f4B62fD)
* The bank contract was deployed [here](https://sepolia.etherscan.io/address/0x3F107Abd46156487E041195D55e293A79f4B62fD)

## Interact with the contract on sepolia testnet
First, go to PTC token contract, and connect to your wallet.
### Use `mint` function to get some PTC token.
Input the amount you want to mint. Also, import the token address to your wallet.

<img width="743" alt="截圖 2023-03-21 下午11 45 14" src="https://user-images.githubusercontent.com/125814787/226662406-a9458b59-52c0-4e61-b06c-8c028125135d.png">

### Use `approve` function to approve some allowance to bank contract.
Input bank contract address and the amount you want to approve.

<img width="743" alt="截圖 2023-03-21 下午11 54 23" src="https://user-images.githubusercontent.com/125814787/226665765-ce9dc639-cbba-42f3-a8a6-6d14efcb0e37.png">

Then go to bank contract.
### Use `deposit` functiom to deposit money
Input the PTC or any ERC20 token contract address and the amount.

<img width="743" alt="截圖 2023-03-21 下午11 51 53" src="https://user-images.githubusercontent.com/125814787/226665066-a9ab61bd-1b96-4658-af97-3e2a07f405e2.png">

### Use `withdraw` function to withdraw money
Same as `deposit`, input the PTC or any ERC20 token contract address and the amount.

<img width="743" alt="截圖 2023-03-21 下午11 53 44" src="https://user-images.githubusercontent.com/125814787/226665577-3d97bb55-ed25-4266-88f5-a565ce729904.png">

### Check the balance at `_balances` in Read Contract.
Input your wallet address and the ERC20 token contract address you want to check.

<img width="743" alt="截圖 2023-03-21 下午11 52 29" src="https://user-images.githubusercontent.com/125814787/226665219-0cd33431-e470-4658-a85d-ed02707347ab.png">

## Installation
Make a new directory, do npm init, then install hardhat and plugins. Start the project with `npx hardhat`
```
mkdir erc20bank
cd erc20bank
npm init -y
npm install --save-dev hardhat
npm install --save @nomiclabs/hardhat-etherscan
npm install --save-dev @nomicfoundation/hardhat-toolbox
npm install --save-dev @openzeppelin/contracts
npm install --save dotenv
npx hardhat
```
select `Create a JavaScript project`
```
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888

👷 Welcome to Hardhat v2.9.9 👷‍

? What do you want to do? …
❯ Create a JavaScript project
  Create a TypeScript project
  Create an empty hardhat.config.js
  Quit
```
The initial directory should be like this:

<img width="169" alt="enviroment set dir" src="https://user-images.githubusercontent.com/125814787/226530431-a92d81b5-165a-4ddf-8e4c-6a755faab2b6.png">

remove `Lock.sol`, `Lock.js`, `deploy.js` and `hardhat.config.js` ,then 
1. add `bank.sol` and `token.sol` in contracts
2. add `deploy.js` in scripts
3. add `test.js` in test
4. add `hardhat.config.js` and `.env` 

The result should be like this:

<img width="169" alt="add bank.sol, token.sol, deploy.js, hardhat.config.js and .env" src="https://user-images.githubusercontent.com/125814787/226530807-f494e185-e0c0-4403-9fae-aed265423f88.png">

### edit .env

<img width="407" alt=".env" src="https://user-images.githubusercontent.com/125814787/226537657-bcd1c3b2-82ae-4af3-87ad-28e8c56155a9.png">

### compile and test
```
npx hardhat compile
npx hardhat test
```

### deploy and verify the contract on sepolia testnet
```
npx hardhat run scripts/deploy.js --network sepolia
```
You will get two addresses:
```
PTC address: 0xPTC_token_address
Bank address: 0xBank_contract_address
```
Verify these two address:
```
hardhat verify --network sepolia 0xPTC_token_address
hardhat verify --network sepolia 0xBank_contract_address
```
That's it!

The whole process should be like this:

<img width="906" alt="截圖 2023-03-21 下午3 38 12" src="https://user-images.githubusercontent.com/125814787/226543224-9980fa4e-da10-4727-87cf-f1e5e6f3b178.png">

## reference
* [Hardhat's tutorial for beginners](https://hardhat.org/tutorial)
* [Hardhat 教學：從入門 Solidity 開發者到專業](https://hackmd.io/@JasonFinley/HJEscpIc5/https%3A%2F%2Fhackmd.io%2F%40SVMGKOLoRDqczI3S4lKC9Q%2Frk4w5kKu9)
