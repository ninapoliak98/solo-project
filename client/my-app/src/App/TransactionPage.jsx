import React, { Component }  from 'react';
import SendCoins from "./SendCoins";
import RecieveCoins from "./RecieveCoins";
import {useState} from "react";

export default function TransactionPage({address}) {
    const [bool, setBool] = useState(false)

    return(
        <div>
            <SendCoins address={address}/>
            <RecieveCoins/>
        </div>
    )
}