import './App.css';
import WalletOverview from "./App/WalletOverview";
import LoadingPage from "./App/LoadingPage";
import NavBar from "./App/NavBar";
import TransactionPage from "./App/TransactionPage";
import {useEffect, useState} from "react";
import Web3 from "web3";
import {Route, Routes} from "react-router-dom"


function App() {
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false";
    const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/b280a6aa48a94b698a78d2f3acf0e892"));
    const [coins, setCoins] = useState([]);
    //set account balance and key into this array
    const [account, setAccount] = useState([]);
    let ActiveComp;

    async function getAccount() {
        await window.ethereum.enable();
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        console.log(account)
    }
    async function getBalance(acctNum) {
        await web3.eth.getBalance(acctNum, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(web3.utils.fromWei(result, "ether") + " ETH");
            }
        })
    }
    async function coingeckoFetch(){
        return fetch(url).then((response) =>
            response.json().then((jsonData) => {
                setCoins(jsonData);
                console.log(jsonData);
            })
        );
    };
    useEffect( () => {
        coingeckoFetch()
        getAccount()
        getBalance("0x2bc4230a51e7b2d091110d125c60e7c3037dd480")
    }, [])




    return (
    <div className="App">
      <LoadingPage/>
      <NavBar/>
        <Routes>
            <Route path="/" element={<WalletOverview coins={coins}/>}/>
            <Route path="/send" element={<TransactionPage/>}/>
        </Routes>
</div>
  );
}


export default App;
