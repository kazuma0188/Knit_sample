import './App.css';
import {useEffect,useState} from 'react';

<link rel="stylesheet" href="index.css"></link>

const Wei = 1000000000000000000;//1 ether = 1000000000000000000 wei
//constは読み取り専用の宣言

const Chains = {//おそらく撤回前のテストネットワーク達要改装6/13
  //
  1: "Mainnet",
  3: "Ropsten",
  4: "Rinkeby",
  42: "Kovan",
  1337: "Geth private chain(default )",
  61: "Ethereum Classic Mainnet",
  62: "Morden",
}

const getAccount = async () => {
  try {
      const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
      //eth_requestAccountsでログイン情報求めてる？
      
      if (account.length > 0) {
          return account[0];
      } else {
          return "";
      }
  } catch (err) {
      if (err.code === 4001) {//メタマスクがない、又はダウンロードしてない処理
                  // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          console.log('Please connect to MetaMask.');
      
      } else {
          console.error(err);
      }
      return "";
  }
}
//async→Promiseによる非同期処理をより簡潔に効率よく記述できるのが大きな特徴
/*Promise処理を決まった順番に実行させる
https://qiita.com/cheez921/items/41b744e4e002b966391a*/ 
const handleAccountChanged = async (accountNo, setAccount, setChainId) => {
  const account = await getAccount();
  setAccount(account);

  const chainId = await getChainID();
  setChainId(chainId);
}

const getChainID = async () => {
  const chainId = await window.ethereum.request({ method: 'eth_chainId' });
  return parseInt(chainId);
}





function App() {
  const [account, setAccount] = useState("-");
  const [chainId, setChainId] = useState(0);
  const btnDisabled = account != "-";
//Disabled正常な動作のみ動かすみたいな
//btnはボタン
//https://magazine.techacademy.jp/magazine/22329
  const initializeAccount = async () => {
    const account = getAccount();
    if (account != "") {
        handleAccountChanged(account, setAccount, setChainId);
        }
      };


//window.ethwinereumでメタマスクを通してアクセスする
      useEffect(() => {
        if (typeof window.ethwinereum !== 'undefined') {
            window.ethereum.on("accountsChanged", (accountNo) => handleAccountChanged(accountNo, setAccount, setChainId));
            window.ethereum.on("chainChanged", (accountNo) => handleAccountChanged(accountNo, setAccount, setChainId));
        }
    }, [account]);


 //実は公開鍵大文字小文字区別してないかも
    return (
      <div class="container">
          <h2>MetaMaskで公開鍵、ChainID取得</h2>
         
          <div>
              <h3>Account情報取得</h3>
              <button id="GetAccountButton" onClick={initializeAccount} disabled={btnDisabled}>このボタン</button>
              <p id="account">Address: {account}</p>
              <p id="account">Chain ID: {chainId}</p>
              <p id="account">Chain Name: {Chains[chainId]}</p>
          </div>

      </div >
  );
}

export default App;
