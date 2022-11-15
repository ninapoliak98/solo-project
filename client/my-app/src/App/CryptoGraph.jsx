import React, { Component }  from 'react';
import {toChartData} from "./marketservices";
import "../Styles/CryptoGraph.css"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
} from 'recharts'

export default function CryptoGraph({data}) {
    const dataMax = () => {
        return Math.max(Number(toChartData(data)['price']))
    }
    const dataMin = () => {
        return Math.min(Number(toChartData(data)['price']))
    }
    return(
        <div className="linechart">
            <LineChart
                width={700}
                height={500}
                data={toChartData(data)}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <XAxis dataKey="date"/>
                <YAxis domain={[dataMin -1000 , dataMax + 1000]} allowDataOverflow={true} />
                <Tooltip />
                <Line type="monotone" dataKey="price"
                      stroke="black" activeDot={{ r: 8 }}/>
            </LineChart>
        </div>
    )
}