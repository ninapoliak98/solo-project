import "./marketservices"
import CryptoDetails from "./CryptoDetails";
import {useState} from "react";

export default function CryptoMarket({coins}) {
    return(
        <div>
            {coins.map((elem, i) => (
                <div id={elem.id} >
                 <CryptoDetails details = {elem}/>
                </div>
            ))}
        </div>
    )
}