import React, { Component }  from 'react';
import SendCoins from "./SendCoins";
import {useState} from "react";

export default function TransactionPage({address}) {

    return(
        <div>
            <SendCoins address={address}/>
        </div>
    )
}