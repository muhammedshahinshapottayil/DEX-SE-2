// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

error Already__Initiated();
error Token__Initial__Transfer__Failed();
error Eth__To__Token();
error Token__To__Eth();
error Eth__Transfer__Failed();
error Token__Transfer();
error Trade__Deposit__Amount__Should__Not__Be__Zero();






/**
 * @title DEX Template
 * @author stevepham.eth and m00npapi.eth
 * @notice Empty DEX.sol that just outlines what features could be part of the challenge (up to you!)
 * @dev We want to create an automatic market where our contract will hold reserves of both ETH and 🎈 Balloons. These reserves will provide liquidity that allows anyone to swap between the assets.
 * NOTE: functions outlined here are what work with the front end of this challenge. Also return variable names need to be specified exactly may be referenced (It may be helpful to cross reference with front-end code function calls).
 */
contract DEX {
	/* ========== GLOBAL VARIABLES ========== */

	IERC20 token; //instantiates the imported contract
	uint256 public totalLiquidity;
	mapping (address => uint256) public liquidity;

	/* ========== EVENTS ========== */

	/**
	 * @notice Emitted when ethToToken() swap transacted
	 */
	event EthToTokenSwap(
		address swapper,
		uint256 tokenOutput,
		uint256 ethInput
	);

	/**
	 * @notice Emitted when tokenToEth() swap transacted
	 */
	event TokenToEthSwap(
		address swapper,
		uint256 tokensInput,
		uint256 ethOutput
	);

	/**
	 * @notice Emitted when liquidity provided to DEX and mints LPTs.
	 */
	event LiquidityProvided(
		address liquidityProvider,
		uint256 liquidityMinted,
		uint256 ethInput,
		uint256 tokensInput
	);

	/**
	 * @notice Emitted when liquidity removed from DEX and decreases LPT count within DEX.
	 */
	event LiquidityRemoved(
		address liquidityRemover,
		uint256 liquidityWithdrawn,
		uint256 tokensOutput,
		uint256 ethOutput
	);

	/* ========== CONSTRUCTOR ========== */

	constructor(address token_addr) {
		token = IERC20(token_addr); //specifies the token address that will hook into the interface and be used through the variable 'token'
	}

	/* ========== MUTATIVE FUNCTIONS ========== */

	/**
	 * @notice initializes amount of tokens that will be transferred to the DEX itself from the erc20 contract mintee (and only them based on how Balloons.sol is written). Loads contract up with both ETH and Balloons.
	 * @param tokens amount to be transferred to DEX
	 * @return totalLiquidity is the number of LPTs minting as a result of deposits made to DEX contract
	 * NOTE: since ratio is 1:1, this is fine to initialize the totalLiquidity (wrt to balloons) as equal to eth balance of contract.
	 */
	function init(uint256 tokens) public payable returns (uint256) {
		if (totalLiquidity != 0) revert Already__Initiated(); 
		totalLiquidity = address(this).balance;
		liquidity[msg.sender] = tokens;
		(bool success) = token.transferFrom(msg.sender, address(this),tokens);
		if (!success) revert Token__Initial__Transfer__Failed(); 
		return totalLiquidity;
	}

	/**
	 * @notice returns yOutput, or yDelta for xInput (or xDelta)
	 * @dev Follow along with the [original tutorial](https://medium.com/@austin_48503/%EF%B8%8F-minimum-viable-exchange-d84f30bd0c90) Price section for an understanding of the DEX's pricing model and for a price function to add to your contract. You may need to update the Solidity syntax (e.g. use + instead of .add, * instead of .mul, etc). Deploy when you are done.
	 */
	function price(
		uint256 xInput,
		uint256 xReserves,
		uint256 yReserves
	) public pure returns (uint256 yOutput) {
  uint256 input_amount_with_fee = xInput * 997;
  uint256 numerator = input_amount_with_fee * yReserves;
  uint256 denominator = xReserves * 1000 + input_amount_with_fee;
  return numerator / denominator;
	}

	/**
	 * @notice returns liquidity for a user.
	 * NOTE: this is not needed typically due to the `liquidity()` mapping variable being public and having a getter as a result. This is left though as it is used within the front end code (App.jsx).
	 * NOTE: if you are using a mapping liquidity, then you can use `return liquidity[lp]` to get the liquidity for a user.
	 * NOTE: if you will be submitting the challenge make sure to implement this function as it is used in the tests.
	 */
	function getLiquidity(address lp) public view returns (uint256) {
		return liquidity[lp];
	}

	/**
	 * @notice sends Ether to DEX in exchange for $BAL
	 */
	function ethToToken() public payable returns (uint256 tokenOutput) {
		if (msg.value == 0) revert Trade__Deposit__Amount__Should__Not__Be__Zero(); 

		uint256 tokenReserve = token.balanceOf(address(this));
		tokenOutput = price(msg.value, address(this).balance - msg.value , tokenReserve);
	 	(bool success) = token.transfer(msg.sender,tokenOutput);
		if (!success) revert Eth__To__Token();
		emit EthToTokenSwap(msg.sender,tokenOutput,msg.value);
	}

	/**
	 * @notice sends $BAL tokens to DEX in exchange for Ether
	 */
	function tokenToEth(
		uint256 tokenInput
	) public returns (uint256 ethOutput) {
		if (tokenInput == 0) revert Trade__Deposit__Amount__Should__Not__Be__Zero(); 
		

		uint256 ethReserve = address(this).balance;
		uint256 token_reserve = token.balanceOf(address(this));
		ethOutput = price(tokenInput, token_reserve, ethReserve);

		bool success = token.transferFrom(msg.sender,address(this),tokenInput);
		if(!success)
		revert Token__To__Eth(); 

		(bool status,) = payable(address(msg.sender)).call{value: ethOutput}("");
		if (!status) 
		revert Eth__Transfer__Failed(); 
		emit TokenToEthSwap(msg.sender,tokenInput,ethOutput);
	}

	/**
	 * @notice allows deposits of $BAL and $ETH to liquidity pool
	 * NOTE: parameter is the msg.value sent with this function call. That amount is used to determine the amount of $BAL needed as well and taken from the depositor.
	 * NOTE: user has to make sure to give DEX approval to spend their tokens on their behalf by calling approve function prior to this function call.
	 * NOTE: Equal parts of both assets will be removed from the user's wallet with respect to the price outlined by the AMM.
	 */
	function deposit() public payable returns (uint256 tokensDeposited) {
		if(msg.value == 0) revert Trade__Deposit__Amount__Should__Not__Be__Zero();

		 uint256 eth_reserve = address(this).balance - msg.value;
  	     uint256 token_reserve = token.balanceOf(address(this));
  	     uint256 token_amount = msg.value * token_reserve / eth_reserve + 1;
  	     tokensDeposited = msg.value * totalLiquidity / eth_reserve;
  		 liquidity[msg.sender] = liquidity[msg.sender] + tokensDeposited;
  		 totalLiquidity = totalLiquidity + tokensDeposited;
		 (bool success) = token.transferFrom(msg.sender, address(this), token_amount);
  		 if(!success)
  		 revert Eth__To__Token(); 
		 emit LiquidityProvided(msg.sender, tokensDeposited , msg.value,token_amount);
  		 return tokensDeposited;
	}

	/**
	 * @notice allows withdrawal of $BAL and $ETH from liquidity pool
	 * NOTE: with this current code, the msg caller could end up getting very little back if the liquidity is super low in the pool. I guess they could see that with the UI.
	 */
	function withdraw(
		uint256 amount
	) public returns (uint256 eth_amount, uint256 token_amount) {
  	uint256 token_reserve = token.balanceOf(address(this));
  	eth_amount = amount * (address(this).balance) / totalLiquidity;
  	token_amount = amount * (token_reserve) / totalLiquidity;
  	liquidity[msg.sender] = liquidity[msg.sender] - eth_amount;
  	totalLiquidity = totalLiquidity - eth_amount;

  	(bool success,) = payable(address(msg.sender)).call{value : eth_amount}("");
  	if(!success)
  	revert Eth__Transfer__Failed(); 
	(bool status) = token.transfer(msg.sender, token_amount);
  	if(!status)
  	revert Token__Transfer(); 

  	emit LiquidityRemoved(msg.sender,amount,token_amount,eth_amount);

  	return (eth_amount, token_amount);
	}
}
