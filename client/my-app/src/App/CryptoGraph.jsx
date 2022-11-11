import {toChartData} from "./marketservices";
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
    function checkIfData () {
    }
    return(
        <div>
            <LineChart width={700} height={300} data={toChartData(data)}>
                <Line yAxisId="left-axis" type="monotone" dataKey="y"
                      stroke="green" dot={false}/>
            </LineChart>
        </div>
    )
}