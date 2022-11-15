import React, { Component }  from 'react';
import "../Styles/WalletOverview.css"
import CryptoMarket from "./CryptoMarket";

export default function WalletOverview({coins, setAccount, balance, address, trending}) {

    return(
        <div className="overview">
            <CryptoMarket coins = {coins} balance={balance} address = {address} setAccount ={setAccount} trending ={trending}/>
        </div>
    )
}