import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
      name: 'Feb',
      income: 4000,
      expense: 2400,
      amt: 2400,
    },
    {
      name: 'Apr',
      income: 3000,
      expense: 1398,
      amt: 2210,
    },
    {
      name: 'Jun',
      income: 2000,
      expense: 9800,
      amt: 2290,
    },
    {
      name: 'Aug',
      income: 2780,
      expense: 3908,
      amt: 2000,
    },
    {
      name: 'Oct',
      income: 1890,
      expense: 4800,
      amt: 2181,
    },
    {
      name: 'Dec',
      income: 2390,
      expense: 3800,
      amt: 2500,
    },

  ];

export const Chart = () => {
  return (
      <div className='p-10 self-end m-2 w-full h-[500px] rounded-md bg-white shadow-lg'>
          <h2 className='text-heading font-heading text-xl md:text-2xl font-semibold'>Sales Report</h2>
        <ResponsiveContainer>
        <AreaChart    
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="income" stroke="#1B262C" fill='#0F4C75' activeDot={{ r: 8 }} />
          <Area type="monotone" dataKey="expense" stroke="#0F4C75" fill='#0F4C75'  />
        </AreaChart>
        </ResponsiveContainer>
          </div>


  )
}
