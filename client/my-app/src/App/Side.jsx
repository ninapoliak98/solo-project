import "../Styles/Side.css"
import Balance from "./Balance";
import LoadingPage from "./LoadingPage";
import React from "react";
import Trending from "./Trending";

export default function Side({balance, address, setAccount, trending}) {
    return(
        <div className="side">
            <div className='main'>
                <Balance balance={balance} address ={address}/>
                <LoadingPage setAccount={setAccount}/>
            </div>
            <div className='trending'>
                <Trending trending={trending}/>
            </div>
        </div>
    )
}