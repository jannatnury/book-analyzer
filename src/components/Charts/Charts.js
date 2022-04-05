import React from 'react';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
const data = [
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 363,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 626,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    }
];

const Charts = () => {
    return (
        <div className='flex justify-between my-8 mx-5'>
            <div>
                <h1 className='text-3xl text-gray-600 font-sans font-semibold'>Line Chart </h1>
                {/* Line Chart of data */}
                <LineChart width={600} height={500} data={data}>
                    <Line dataKey={"sell"}></Line>
                    <Line dataKey={"revenue"}></Line>
                    <XAxis dataKey={"month"}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                </LineChart>
            </div>
            <div>
                {/* Composed chart of data */}
                <h1 className='text-3xl text-gray-600 font-sans font-semibold'>Compose Chart </h1>
                <ComposedChart width={600} height={500} data={data}>
                    <XAxis dataKey={data}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="sell" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                </ComposedChart>
            </div>
        </div >

    );
};

export default Charts;