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

export default function CryptoGraph({data}) {
    return(
        <div className="linechart">
            <LineChart width={200} height={90} data={toChartData(data)}>
                <Line yAxisId="left-axis" type="monotone" dataKey="y"
                      stroke="green" dot={false}/>
            </LineChart>
        </div>
    )
}