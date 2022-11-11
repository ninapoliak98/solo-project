import logo from './logo.svg';
import './App.css';
import WalletOverview from "./App/WalletOverview";
import LoadingPage from "./App/LoadingPage";
import NavBar from "./App/NavBar";
import TransactionPage from "./App/TransactionPage";
import {useEffect, useState} from "react";


function App() {
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false";
    const [coins, setCoins] = useState([])
    const coingeckoFetch = async () => {
        return fetch(url).then((response) =>
            response.json().then((jsonData) => {
                setCoins(jsonData);
                console.log(jsonData);
            })
        );
    };
    useEffect( () => { coingeckoFetch()}, []) //Empty array for deps.

    let ActiveComp;
    switch (window.location.pathname){
        case "/overview":
            ActiveComp = <WalletOverview coins ={coins}/>
            break
        case "/send":
            ActiveComp = <TransactionPage/>
            break
    }


  return (
    <div className="App">
      <LoadingPage/>
      <NavBar/>
        {ActiveComp}
</div>
  );
}


export default App;
