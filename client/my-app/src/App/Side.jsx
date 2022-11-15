import "../Styles/Side.css"
import Balance from "./Balance";
import LoadingPage from "./LoadingPage";
import React from "react";

export default function Side({balance, address, setAccount}) {
    return(
        <div className="side">
            <Balance balance={balance} address ={address}/>
            <LoadingPage setAccount={setAccount}/>
        </div>
    )
}