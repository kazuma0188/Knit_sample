# Solidity Todo List

![preview](./preview.gif)

HTMLベースの TODO List, バックエンドとデータベースはEthereum.

## 必要条件

以下のツールをインストールしてください。

- [MetaMask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=ja)
  
- [Truffle](**前提：Node.jsがインストールされていること**)
  - `npm install -g truffle`

- [Ganache](https://trufflesuite.com/ganache/index.html)
  - DOWNLOAD (WINDOWS)

## 動かせる手順

1. `Ganache`を起動する
2. `MetaMask`を起動して、事前に設定したGanacheのネットワークを選択する
3. Contractをデプロイする

```sh
❯ truffle deploy

Compiling your contracts...
===========================
> Compiling ./contracts/Migrations.sol
> Compiling ./contracts/todo.sol
> Artifacts written to /Users/xxx/solidity-todo/build/contracts
> Compiled successfully using:
   - solc: 0.8.11+commit.d7f03943.Emscripten.clang

---If `Network up to date`appears---
❯ truffle deploy --reset

Starting migrations...
======================
> Network name:    'ganache'
> Network id:      5777
> Block gas limit: 6721975 (0x6691b7)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   ⠋ Blocks: 0            Seconds: 0   > transaction hash:    0x42b791b89190da6a59029322e9f68d5cc6054ba5efde2269ff3077ad5bf754cd
   > Blocks: 0            Seconds: 0
   > contract address:    0x477a136A655f0CcDF301586C437f4a170a1F6849
   > block number:        142
   > block timestamp:     1645673120
   > account:             0x70C492Cd0d89646f14fdD9c4094Cf734e8cDd00B
   > balance:             99.62268106
   > gas used:            248842 (0x3cc0a)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00497684 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00497684 ETH


2_todo.js
=========

   Deploying 'todo'
   ----------------
   ⠋ Blocks: 0            Seconds: 0   > transaction hash:    0x71ae9955672abdcd8417ba0ca250ca73ee165bc6fe9c49e8d1361d1ca9ec2030
   > Blocks: 0            Seconds: 0
   > contract address:    0x81c6a88E546908e2c2b223699884Fb4a8514Db62   ←←← このアドレスをコピー
   > block number:        144
   > block timestamp:     1645673120
   > account:             0x70C492Cd0d89646f14fdD9c4094Cf734e8cDd00B
   > balance:             99.60430194
   > gas used:            876443 (0xd5f9b)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01752886 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.01752886 ETH

Summary
=======
> Total deployments:   2
> Final cost:          0.0225057 ETH

```

4. contract address を [frontend/contract.js](frontend/contract.js)に上書きする
5. Vscodeを起動して、`Live Server`プラグインを入れローカルサーバを起動する
