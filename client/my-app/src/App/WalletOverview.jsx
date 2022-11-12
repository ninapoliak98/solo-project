import CryptoMarket from "./CryptoMarket";
import Balance from "./Balance";

export default function WalletOverview({coins}) {
    //will have the persons $$ and list of from coin api
    return(
        <div>
            <div className="balance">
              <Balance/>
            </div>
            <div className="market"></div>
            <h2>Market Information</h2>
            <CryptoMarket coins = {coins}/>
        </div>
    )
}