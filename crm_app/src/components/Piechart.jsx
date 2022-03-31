import React from 'react'
import { PieChart, Pie, Cell, } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const Piechart = () => {
  return (
      <div className='flex-col relative flex max-w-[500px] items-center bg-white shadow-lg self-start m-5 p-6 rounded-md'>
          <h1 className='text-2xl tracking-wide font-semibold font-heading'>Most bought categories</h1>
    <h2 className='absolute top-[35%] left-44  text-xl font-bold'>$1,247,4302</h2>
      <PieChart width={250} height={250} >
        <Pie
          data={data}
          cx={100}
          cy={120}
          innerRadius={80}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={10}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className='flex justify-between flex-wrap'>
          <div className='flex items-center'>
        <span className='bg-[#0088FE] w-5 h-5'>&nbsp;</span>
        <span className='m-5'>Clothing <b>$300k</b> </span>
          </div>
          <div className='flex items-center'>
        <span className='bg-[#00C49F] w-5 h-5'>&nbsp;</span>
        <span className='m-5'>Household <b>$150k</b></span>
          </div>
          <div className='flex items-center'>
        <span className='bg-[#FFBB28] w-5 h-5'>&nbsp;</span>
        <span className='m-5'>Food-Items <b>$230k</b></span>
          </div>
          <div className='flex items-center'>
        <span className='bg-[#FF8042] w-5 h-5'>&nbsp;</span>
        <span className='m-5'>Electronics <b>$180k</b></span>
          </div>

        </div>
          </div>
    );
  }

