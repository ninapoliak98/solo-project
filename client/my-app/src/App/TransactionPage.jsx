import SendCoins from "./SendCoins";
import RecieveCoins from "./RecieveCoins";

export default function TransactionPage() {
    //will have send and recieve

    return(
        <div>
            Transaction Page
            <SendCoins/>
            <RecieveCoins/>
        </div>
    )
}