import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {

    const data = [
        {
            name: 'Supplier A',
            price: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Supplier B',
            price: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Supplier C',
            price: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Supplier D',
            price: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Supplier E',
            price: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Supplier F',
            price: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Supplier G',
            price: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];


    return (
        <div>


            <LineChart width={800} height={500} data={data}>
                <Line dataKey={'price'}></Line>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>

            </LineChart>
        </div>
    );
};

export default MyLineChart;