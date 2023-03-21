# 109700005-bdaf-lab3
## Simple ERC20 Bank
This is a simple ERC20 bank that can deposit and withdraw ERC20 token.

## Contract link

* The PTC(ERC20) token contract was deployed [here](https://sepolia.etherscan.io/token/0xa32f82D9549ccA5fcAa8A14F882033a11e726694)
* The bank contract was deployed [here](https://sepolia.etherscan.io/address/0x4F584C0B7c8ACAea13354109d1fE4476AAbe3676#writeContract)

## Interact with the contract on sepolia testnet
First, go to PTC token contract, and connect to your wallet.
### Use `mint` function to get some PTC token.
Input your wallet address and the amount you want to mint. Also import the token address to your wallet.

<img width="743" alt="截圖 2023-03-21 下午4 46 04" src="https://user-images.githubusercontent.com/125814787/226556221-e1ca162c-b3e4-467d-8906-dcc3ae65bd66.png">

### Use `approve` function to approve some allowance to bank contract.
Input bank contract address and the amount you want to approve.

<img width="743" alt="截圖 2023-03-21 下午4 46 39" src="https://user-images.githubusercontent.com/125814787/226556235-a57b03bd-f6d8-4926-abe8-bf2308f3c817.png">

Then go to bank contract.
### Use `deposit` functiom to deposit money
Input the PTC or any ERC20 token contract address and the amount.

<img width="750" alt="截圖 2023-03-21 下午5 17 39" src="https://user-images.githubusercontent.com/125814787/226563131-0bae0d67-f687-4124-9dac-cad38f68d32f.png">

### Use `withdraw` function to withdraw money
Same as `deposit`, input the PTC or any ERC20 token contract address and the amount.

<img width="750" alt="截圖 2023-03-21 下午5 17 59" src="https://user-images.githubusercontent.com/125814787/226563124-771928ce-8eb8-4c5b-8b66-dcd58cf80a6a.png">

### Check the balance at `_balances` in Read Contract.
Input your wallet address and the ERC20 token contract address you want to check.

<img width="757" alt="截圖 2023-03-21 下午5 15 50" src="https://user-images.githubusercontent.com/125814787/226562654-49b66fc5-c1b1-4a0a-98d8-4fe0caec5478.png">

## Installation
Make a new directory, do npm init, then install hardhat and plugins. Start the project with `npx hardhat`
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
(Will Upload later)
* [hardhat]()
* [github]()
* [hackmd]()
