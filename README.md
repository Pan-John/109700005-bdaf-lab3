# 109700005-bdaf-lab3
## Simple ERC20 Bank
This is a simple ERC20 bank that can deposit and withdraw ERC20 token.

## Contract link

* The erc20 token was deployed [here](https://sepolia.etherscan.io/token/0xa32f82D9549ccA5fcAa8A14F882033a11e726694)
* The bank contract was deployed [here](https://sepolia.etherscan.io/address/0x4F584C0B7c8ACAea13354109d1fE4476AAbe3676#writeContract)

## Interact with the contract on sepolia testnet


## Installation
```
mkdir erc20bank
cd erc20bank
npm init -y
npm install --save-dev hardhat
npm install --save @nomiclabs/hardhat-etherscan
npm install --save-dev @nomicfoundation/hardhat-toolbox/////
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
### The initial directory should be like this:

<img width="169" alt="enviroment set dir" src="https://user-images.githubusercontent.com/125814787/226530431-a92d81b5-165a-4ddf-8e4c-6a755faab2b6.png">

remove `Lock.sol`, `Lock.js`, `deploy.js` and `hardhat.config.js` ,then 
1. add `bank.sol` and `token.sol` in contracts
2. add `deploy.js` in scripts
3. add `test.js` in test
4. add `hardhat.config.js` and `.env` 

### the result should be like this:

<img width="169" alt="add bank.sol, token.sol, deploy.js, hardhat.config.js and .env" src="https://user-images.githubusercontent.com/125814787/226530807-f494e185-e0c0-4403-9fae-aed265423f88.png">

## edit .env

<img width="407" alt=".env" src="https://user-images.githubusercontent.com/125814787/226537657-bcd1c3b2-82ae-4af3-87ad-28e8c56155a9.png">

## compile, test, and interact with the contract on sepolia testnet
```
npx hardhat compile
npx hardhat test
npx hardhat run scripts/deploy.js --network sepolia
```
You will get two addresses:
```
PTC address: 0xPTC_token_address
Bank address: 0xBank_contract_address
```

```

```
terminal:

<img width="792" alt="截圖 2023-03-21 下午2 18 07" src="https://user-images.githubusercontent.com/125814787/226535607-7b605c50-9f25-49ba-bdcf-8c52b0a4491c.png">

## 
