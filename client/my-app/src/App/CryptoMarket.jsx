import "./marketservices"
import CryptoDetails from "./CryptoDetails";
import {Line } from 'react-chartjs-2';
import CryptoGraph from "./CryptoGraph";
import {useState} from "react";
export default function CryptoMarket({coins}) {
    const [data, setData] = useState([])
    const [click, setClick] = useState(false)
    const chartData = []
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