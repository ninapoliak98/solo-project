import React, { Component }  from 'react';
import {toChartData} from "./marketservices";
import "../Styles/CryptoGraph.css"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'

export default function CryptoGraph({data, id}) {
    return(
        <div className="linechart">
            <h1>{id}</h1>

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
                <XAxis dataKey="x"/>
                <Tooltip />
                <Legend />
                <Line yAxisId="left-axis" type="monotone" dataKey="y"
                      stroke="black" activeDot={{ r: 8 }}/>
            </LineChart>
        </div>
    )
}