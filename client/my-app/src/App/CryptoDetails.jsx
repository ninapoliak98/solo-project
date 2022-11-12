import "../Styles/CryptoDetails.css"
import {currFormat, id_Format, symbol_Format} from "./marketservices";
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
                <p>{id_Format(details.id)}</p>
                <p>{symbol_Format(details.symbol)}</p>
            </div>
            <div className="current_price">
                <p>{details.current_price}</p>
            </div>
            </div>
            <div className="chart">
                <CryptoGraph data={d}/>
            </div>
        </div>
    )
}