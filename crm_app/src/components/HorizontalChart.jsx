import React from 'react'
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '2012',
    stocks: 590,
    dividends: 800,
    investments: 1400,
  },
  {
    name: '2014',
    stocks: 868,
    dividends: 967,
    investments: 1506,
  },
  {
    name: '2016',
    stocks: 1397,
    dividends: 1098,
    investments: 989,
  },
  {
    name: '2018',
    stocks: 1480,
    dividends: 1200,
    investments: 1228,
  },
  {
    name: '2020',
    stocks: 1520,
    dividends: 1108,
    investments: 1100,
  },
  {
    name: '2022',
    stocks: 1400,
    dividends: 680,
    investments: 1700,
  },
];
export const HorizontalChart = () => {
  return (

      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Legend />
          <Area dataKey="investments" fill="#6aa3c9" stroke="#8884d8" />
          <Bar dataKey="dividends" barSize={30} fill="#0F4C75" />
          <Line dataKey="stocks" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
