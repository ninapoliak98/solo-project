import "../Styles/CryptoDetails.css"
import {currFormat} from "./marketservices";
import CryptoGraph from "./CryptoGraph";
export default function CryptoDetails({details, data}) {
    return(
        <div className='each_crypto' id={details.id}>
            <div className="icon">
                <img src={details.image}/>
            </div>
            <div className="details">
            <div className="name">
                <p>{details.id}</p>
                <p>{details.symbol}</p>
            </div>
            <div className="current_price">
                <p>{currFormat(details.current_price)}</p>
            </div>
            <div>
                <CryptoGraph data = {data}/>
            </div>
            </div>
        </div>
    )
}