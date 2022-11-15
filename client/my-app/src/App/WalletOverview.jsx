import React, { Component }  from 'react';
import "../Styles/WalletOverview.css"
import CryptoMarket from "./CryptoMarket";
import Balance from "./Balance";
import LoadingPage from "./LoadingPage";

export default function WalletOverview({coins, setAccount, balance, address}) {

    return(
        <div className="overview">
            <div className="market"></div>
            <CryptoMarket coins = {coins} balance={balance} address = {address} setAccount ={setAccount}/>
        </div>
    )
}