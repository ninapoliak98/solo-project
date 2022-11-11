import "./marketservices"
import CryptoDetails from "./CryptoDetails";
import {Line } from 'react-chartjs-2';
import CryptoGraph from "./CryptoGraph";
import {useState} from "react";
export default function CryptoMarket({coins}) {
    const [data, setData] = useState([])
    const [click, setClick] = useState(false)
    const chartData = []
    const getDivId = async (e) => {
        e.preventDefault();
        const url = `https://api.coingecko.com/api/v3/coins/${e.currentTarget.id}/market_chart?vs_currency=usd&days=30&interval=daily`;
        fetch(url).then((response) =>
            response.json().then((data) => {
                setData(data);
                console.log(data);
            })
        );
        setClick(true)
    }
    return(

        <div>
            {coins.map((elem, i) => (
                <div id={elem.id} >
              <CryptoDetails details = {elem} data = {data} click = {click}/>
                </div>

            ))}
        </div>
    )
}