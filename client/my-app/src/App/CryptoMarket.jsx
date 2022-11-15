import React, { Component }  from 'react';
import "./marketservices"
import "../Styles/CryptoMarket.css"
import CryptoDetails from "./CryptoDetails";
import {useState} from "react";
import CryptoGraph from "./CryptoGraph";
import Side from "./Side";


export default function CryptoMarket({coins, balance, address, setAccount}) {
    const [d, setD] = useState([])
    const [id, setId] =  useState()
    const getDivId = async (e) => {
        e.preventDefault();
        setId(e.currentTarget.id)
        const url = `https://api.coingecko.com/api/v3/coins/${e.currentTarget.id}/market_chart?vs_currency=usd&days=30&interval=daily`;
        fetch(url).then((response) =>
            response.json().then((data) => {
                setD(data);
                console.log(data);
            })
        );
    }
    return(
        <div className="market_info">
        <div className='indv'>
            {coins.map((elem, i) => (
                <div id={elem.id} key={elem.id} onClick={getDivId} >
                 <CryptoDetails details = {elem}/>
                </div>
            ))}
        </div>
            <div className="market_container">
            <Side balance={balance} address={address} setAccount={setAccount}/>
            <div className="chart_data">
                <CryptoGraph data={d} id={id}/>
            </div>
            </div>
        </div>
    )
}