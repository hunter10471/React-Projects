import React from 'react'
import { PieChart, Pie, Cell, Tooltip, } from 'recharts';

const data = [
    { name: 'Clothing', value: 400 },
    { name: 'Household', value: 300 },
    { name: 'Food items', value: 300 },
    { name: 'Eelectronics', value: 200 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const Piechart = () => {
  return (
      <div className='flex-col relative flex min-w-[300px] items-center bg-white shadow-lg self-start m-10 p-6 rounded-md'>
          <h1 className='text-xl mt-5 tracking-wide font-semibold font-heading'>Most bought categories</h1>
      <PieChart width={250} height={250} >
        <Tooltip/>
        <Pie
          data={data}
          cx={100}
          cy={120}
          innerRadius={60}
          outerRadius={85}
          fill="#8884d8"
          paddingAngle={5}
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

