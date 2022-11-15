import React, { Component }  from 'react';
import "../Styles/Balance.css"

export default function Balance({balance, address}) {
    function checkBalance(data) {
        if (!address) return  (<p>No account detected please connect to wallet</p>)
        if(address && !data) return `ETH 0`
        else return `ETH ${data.ETH}`
    }
    return (
        <div className="balance_wrapper">
            <h3 className="balance_title">Wallet Balance: </h3>
            <h2 className="balance">{checkBalance(balance)}</h2>
            <h1 className="balance_title">Address: </h1>
            <p className="address">{address}</p>
        </div>
    )
}