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
            <LineChart width={300} height={600} data={toChartData(data)}>
                <Line yAxisId="left-axis" type="monotone" dataKey="y"
                      stroke="green" dot={false}/>
            </LineChart>
        </div>
    )
}