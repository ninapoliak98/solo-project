import SendCoins from "./SendCoins";
import RecieveCoins from "./RecieveCoins";
import {useState} from "react";

export default function TransactionPage() {
    const [bool, setBool] = useState(false)

    return(
        <div>
            <SendCoins/>
            <RecieveCoins/>
        </div>
    )
}