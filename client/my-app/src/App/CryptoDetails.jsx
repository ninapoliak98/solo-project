import React, { Component }  from 'react';
import "../Styles/CryptoDetails.css"
import {currFormat, id_Format, symbol_Format} from "./marketservices";
import CryptoGraph from "./CryptoGraph";
import {useState} from "react";
export default function CryptoDetails({details}) {
    return(
        <div className='each_crypto' id={details.id} >
            <div className="icon">
                <img src={details.image}/>
            </div>
            <div className="details">
            <div className="name">
                <p className="details_text">{id_Format(details.id)}</p>
                <p className="details_text">{symbol_Format(details.symbol)}</p>
            </div>
            <div className="current_price">
                <h1 className="price">{currFormat(details.current_price)}</h1>
            </div>
            </div>
        </div>
    )
}