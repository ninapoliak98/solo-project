import "../Styles/CryptoDetails.css"
import {currFormat} from "./marketservices";
import CryptoGraph from "./CryptoGraph";
import {useState} from "react";
export default function CryptoDetails({details, data, click}) {
    const [d, setD] = useState([])
    const getDivId = async (e) => {
        e.preventDefault();
        const url = `https://api.coingecko.com/api/v3/coins/${e.currentTarget.id}/market_chart?vs_currency=usd&days=30&interval=daily`;
        fetch(url).then((response) =>
            response.json().then((data) => {
                setD(data);
                console.log(data);
            })
        );
    }

    return(
        <div className='each_crypto' id={details.id} onClick={getDivId}>
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
              <CryptoGraph data={d}/>
            </div>
            </div>
        </div>
    )
}