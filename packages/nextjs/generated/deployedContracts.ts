const contracts = {
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        Balloons: {
          address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          abi: [
            {
              inputs: [],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        DEX: {
          address: "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "token_addr",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "Already__Initiated",
              type: "error",
            },
            {
              inputs: [],
              name: "Eth__To__Token",
              type: "error",
            },
            {
              inputs: [],
              name: "Eth__Transfer__Failed",
              type: "error",
            },
            {
              inputs: [],
              name: "Token__Initial__Transfer__Failed",
              type: "error",
            },
            {
              inputs: [],
              name: "Token__To__Eth",
              type: "error",
            },
            {
              inputs: [],
              name: "Token__Transfer",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "swapper",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "tokenOutput",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "ethInput",
                  type: "uint256",
                },
              ],
              name: "EthToTokenSwap",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "liquidityProvider",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "liquidityMinted",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "ethInput",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "tokensInput",
                  type: "uint256",
                },
              ],
              name: "LiquidityProvided",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "liquidityRemover",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "liquidityWithdrawn",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "tokensOutput",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "ethOutput",
                  type: "uint256",
                },
              ],
              name: "LiquidityRemoved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "swapper",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "tokensInput",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "ethOutput",
                  type: "uint256",
                },
              ],
              name: "TokenToEthSwap",
              type: "event",
            },
            {
              inputs: [],
              name: "deposit",
              outputs: [
                {
                  internalType: "uint256",
                  name: "tokensDeposited",
                  type: "uint256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "ethToToken",
              outputs: [
                {
                  internalType: "uint256",
                  name: "tokenOutput",
                  type: "uint256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "lp",
                  type: "address",
                },
              ],
              name: "getLiquidity",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokens",
                  type: "uint256",
                },
              ],
              name: "init",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "liquidity",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "xInput",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "xReserves",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "yReserves",
                  type: "uint256",
                },
              ],
              name: "price",
              outputs: [
                {
                  internalType: "uint256",
                  name: "yOutput",
                  type: "uint256",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenInput",
                  type: "uint256",
                },
              ],
              name: "tokenToEth",
              outputs: [
                {
                  internalType: "uint256",
                  name: "ethOutput",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "totalLiquidity",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "withdraw",
              outputs: [
                {
                  internalType: "uint256",
                  name: "eth_amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "token_amount",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
  11155111: [
    {
      chainId: "11155111",
      name: "sepolia",
      contracts: {
        Balloons: {
          address: "0xdf0F94d4c9De7233863362D7557F32A6bCECd5e0",
          abi: [
            {
              inputs: [],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        DEX: {
          address: "0x49042c6bce17b26e1F250EBf3AC937831C05505b",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "token_addr",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "Already__Initiated",
              type: "error",
            },
            {
              inputs: [],
              name: "Eth__To__Token",
              type: "error",
            },
            {
              inputs: [],
              name: "Eth__Transfer__Failed",
              type: "error",
            },
            {
              inputs: [],
              name: "Token__Initial__Transfer__Failed",
              type: "error",
            },
            {
              inputs: [],
              name: "Token__To__Eth",
              type: "error",
            },
            {
              inputs: [],
              name: "Token__Transfer",
              type: "error",
            },
            {
              inputs: [],
              name: "Trade__Deposit__Amount__Should__Not__Be__Zero",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "swapper",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "tokenOutput",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "ethInput",
                  type: "uint256",
                },
              ],
              name: "EthToTokenSwap",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "liquidityProvider",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "liquidityMinted",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "ethInput",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "tokensInput",
                  type: "uint256",
                },
              ],
              name: "LiquidityProvided",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "liquidityRemover",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "liquidityWithdrawn",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "tokensOutput",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "ethOutput",
                  type: "uint256",
                },
              ],
              name: "LiquidityRemoved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "swapper",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "tokensInput",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "ethOutput",
                  type: "uint256",
                },
              ],
              name: "TokenToEthSwap",
              type: "event",
            },
            {
              inputs: [],
              name: "deposit",
              outputs: [
                {
                  internalType: "uint256",
                  name: "tokensDeposited",
                  type: "uint256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "ethToToken",
              outputs: [
                {
                  internalType: "uint256",
                  name: "tokenOutput",
                  type: "uint256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "lp",
                  type: "address",
                },
              ],
              name: "getLiquidity",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokens",
                  type: "uint256",
                },
              ],
              name: "init",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "liquidity",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "xInput",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "xReserves",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "yReserves",
                  type: "uint256",
                },
              ],
              name: "price",
              outputs: [
                {
                  internalType: "uint256",
                  name: "yOutput",
                  type: "uint256",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenInput",
                  type: "uint256",
                },
              ],
              name: "tokenToEth",
              outputs: [
                {
                  internalType: "uint256",
                  name: "ethOutput",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "totalLiquidity",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "withdraw",
              outputs: [
                {
                  internalType: "uint256",
                  name: "eth_amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "token_amount",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
