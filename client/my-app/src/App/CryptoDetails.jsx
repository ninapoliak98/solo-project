import React, {Component, useState} from 'react';
import "../Styles/CryptoDetails.css"
import {currFormat, id_Format, symbol_Format} from "./marketservices";

export default function CryptoDetails({details}) {
    const [isActive, setIsActive] = useState(false);
    const [id, setId] = useState("")

    const handleClick = (e) => {
        if(id.length > 0 && id !== e.currentTarget.id) setIsActive(true)
        setIsActive(false)
        setId(e.currentTarget.id)
    };
    return(
        <div className='each_crypto' id={details.id}
             onClick={handleClick} >
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