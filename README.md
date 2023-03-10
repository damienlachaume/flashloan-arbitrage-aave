# Simple Flash Loans contracts
Smart contracts using Aave Flash Loan deployed on the Goerli networks.

- FlashLoan.sol : Contract used to verify that the Flash Loan implementation works (without logic)

- FlashLoanArbitrage.sol : Contract that implements an arbitrage logic using the DEX contract below

- Dex.sol : Contract that represents a simple DEX with two tokens (DAI and USDC). It allows the FlashLoanArbitrage contract to simulate an arbitrage opportunity.

## Aave v3 Flash Loan documentation
https://docs.aave.com/developers/guides/flash-loans

https://docs.aave.com/developers/deployed-contracts/v3-testnet-addresses

## Contracts addresses on Goerli network

DAI-TestnetMintableERC20-Aave : 0xBa8DCeD3512925e52FE67b1b5329187589072A55

USDC-TestnetMintableERC20-Aave : 0x65aFADD39029741B3b8f0756952C74678c9cEC93

PoolAddressesProvider-Aave : 0xC911B590248d127aD18546B186cC6B324e99F02c

Dex.sol : 0x19EEA3a3F05cE204ca92E3B406DE063934bFbe02

FlashLoanArbitrage.sol : 0x0e78d714E2591B6A5461B150744Ae01f03d8462F

## Steps to test the contracts

- Add liquidity to Dex.sol :

  USDC 1500

  DAI  1500

- Approve tokens on the Flash Loan contract :

  USDC 1000000000

  DAI  1200000000000000000000

- Request Loan - USDC (6 decimal):

  0x65aFADD39029741B3b8f0756952C74678c9cEC93,1000000000 // 1,000 USDC
  
## Example of transaction
https://goerli.etherscan.io/tx/0x1a63fa7d2ff87e53afcad7ea9256bfbe66bd6c9331028166028ba57d114cd262
