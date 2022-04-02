import React from 'react'
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: '1', loss: 300, profit: 456 },
  { name: '2', loss: -145, profit: 230 },
  { name: '3', loss: -100, profit: 345 },
  { name: '4', loss: -8, profit: 450 },
  { name: '5', loss: 100, profit: 321 },
  { name: '6', loss: 9, profit: 235 },
  { name: '7', loss: 53, profit: 267 },
  { name: '8', loss: 252, profit: -378 },
  { name: '9', loss: 79, profit: -210 },
  { name: '10', loss: 294, profit: -23 },
  { name: '12', loss: 43, profit: 45 },
  { name: '13', loss: -74, profit: 90 },
  { name: '14', loss: -71, profit: 130 },
  { name: '15', loss: -117, profit: 11 },
  { name: '16', loss: -186, profit: 107 },
  { name: '17', loss: -16, profit: 926 },
  { name: '18', loss: -125, profit: 653 },
  { name: '19', loss: 222, profit: 366 },
  { name: '20', loss: 372, profit: 486 },
  { name: '21', loss: 182, profit: 512 },
  { name: '22', loss: 164, profit: 302 },
  { name: '23', loss: 316, profit: 425 },
  { name: '24', loss: 131, profit: 467 },
  { name: '25', loss: 291, profit: -190 },
  { name: '26', loss: -47, profit: 194 },
  { name: '27', loss: -415, profit: 371 },
  { name: '28', loss: -182, profit: 376 },
  { name: '29', loss: -93, profit: 295 },
  { name: '30', loss: -99, profit: 322 },
  { name: '31', loss: -52, profit: 246 },
  { name: '32', loss: 154, profit: 33 },
  { name: '33', loss: 205, profit: 354 },
  { name: '34', loss: 70, profit: 258 },
  { name: '35', loss: -25, profit: 359 },
  { name: '36', loss: -59, profit: 192 },
  { name: '37', loss: -63, profit: 464 },
  { name: '38', loss: -91, profit: -2 },
  { name: '39', loss: -66, profit: 154 },
  { name: '40', loss: -50, profit: 186 },
];
export const BrushBarChart = () => {
  return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '20px' }} />
          <ReferenceLine y={0} stroke="#000" />
          <Brush dataKey="name" height={30} stroke="#0F4C75" />
          <Bar dataKey="profit" fill="green" />
          <Bar dataKey="loss" fill="red" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
