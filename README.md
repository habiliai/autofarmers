<p align="center">
  <img alt="Brand image for thumbnail of Autofarmers" src="https://u6mo491ntx4iwuoz.public.blob.vercel-storage.com/autofarmers/thumbnail-EiE2Vv5i2E5AYWjhYXRrJyGZmAeAor.png" width="50%" />
</p>

<h1 align="center">Autofarmers</h1>

## Overview

### What is Autofarmers?

Autofarmers is a platform that provides AI-powered agents to help users manage their cryptocurrency investments on the Solana blockchain. The platform leverages conversational AI interfaces to simplify complex DeFi operations like token swaps and liquidity provision, making them more accessible to everyday users.

Through specialized agents like Swavv (Solana Swap and Stake Assistant) and Yieldo (Liquidity Pool Supply Assistant), users can interact naturally with the system to execute blockchain transactions, discover yield opportunities, and optimize their crypto portfolio.

### How does it work?

Autofarmers operates through a multi-component architecture:

1. **AI Agents**: Specialized AI assistants powered by large language models that understand DeFi concepts and can execute specific tasks:
   - **Swavv**: Handles token swaps and staking operations
   - **Yieldo**: Manages liquidity pool operations and yield farming strategies

2. **Agent Runtime**: A Go-based backend that manages agent execution using YAML configuration files to define agent capabilities, personalities, and allowed tools.

3. **Frontend Application**: A Next.js web interface that provides:
   - Chat interface for communicating with agents
   - Visual components for displaying token balances, swap operations, and liquidity positions
   - Wallet integration for transaction signing

4. **Blockchain Integration**: Connection to Solana blockchain via the "solana-mcp" component, enabling agents to:
   - Fetch wallet balances
   - Execute token swaps
   - Manage liquidity positions
   - Retrieve market data and trending pools

5. **Communication Flow**: Messages flow through a thread system that routes requests to the appropriate agent, processes blockchain interactions, and returns results to the user interface.

### Features

- **Token Swapping**: Swap between different tokens on Solana with real-time price information and transaction confirmations
- **Liquidity Provision**: Discover and provide liquidity to pools on DEXes like Orca with analysis of yield opportunities
- **Multi-Agent Collaboration**: Agents coordinate to handle complex operations (e.g., swap tokens then provide liquidity)
- **Wallet Integration**: Connect Solana wallets to view balances and execute signed transactions
- **Conversational Interface**: Natural language interaction with AI assistants that understand DeFi concepts
- **Visual UI Components**: Rich interface elements for displaying token balances, pools, and transaction details

## Scenarios

Autofarmers enables seamless interactions between users and specialized AI agents to perform DeFi operations on Solana. Below are typical scenarios demonstrating the platform's capabilities.

1. **Check wallet balance**
   - Description: View all tokens in your connected wallet with current values
   - Example: "@swavv What tokens do I have in my wallet?"
   - Example: "@swavv Show me my current SOL balance"

2. **Request finding highest APY pools**
   - Description: Discover the most profitable liquidity pools currently available
   - Example: "@yieldo What are the highest APY pools right now?"
   - Example: "@yieldo Show me the best yield opportunities for SOL-USDC pairs"

3. **Request token swap**
   - Description: Exchange one token for another at current market rates
   - Example: "@swavv Swap 50 USDT to SOL"
   - Example: "@swavv What's the current exchange rate between USDC and RAY?"

4. **Open new liquidity position**
   - Description: Provide liquidity to a pool to earn trading fees and rewards
   - Example: "@yieldo I want to add liquidity to the SOL-USDC pool"
   - Example: "@yieldo Help me open a new position in the highest APY whirlpool"

5. **Request to check my liquidity positions**
   - Description: View all active liquidity positions with current metrics
   - Example: "@yieldo Show me my current liquidity positions"
   - Example: "@yieldo What's the performance of my SOL-USDC position?"

6. **Close liquidity position**
   - Description: Remove liquidity from a pool and convert back to individual tokens
   - Example: "@yieldo I want to close my SOL-USDC position"
   - Example: "@yieldo Remove my liquidity from whirlpool #28491"

## Docs
- [How to run agentruntime](docs/how_to_run_agentruntime.md)