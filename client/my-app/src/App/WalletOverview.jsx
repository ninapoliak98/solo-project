import CryptoMarket from "./CryptoMarket";
import Balance from "./Balance";

export default function WalletOverview({coins, balance}) {
    //will have the persons $$ and list of from coin api
    return(
        <div>
            <h1>{balance}</h1>
            <div className="balance">
              <Balance balance={balance}/>
            </div>
            <div className="market"></div>
            <h2>Market Information</h2>
            <CryptoMarket coins = {coins}/>
        </div>
    )
}