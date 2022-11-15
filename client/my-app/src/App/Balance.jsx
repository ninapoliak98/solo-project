import React, { Component }  from 'react';
import "../Styles/Balance.css"

export default function Balance({balance, address}) {
    function checkBalance(data) {
        if (!data ) return  0
        else return data.ETH
    }

    return (
        <div className="balance_wrapper">
            <h1 className="balance_title">Wallet Balance: </h1>
            <h2 className="balance">{checkBalance(balance)}</h2>
            <h1 className="balance_title">Address: </h1>
            <h2 className="balance">{address}</h2>
        </div>
    )
}