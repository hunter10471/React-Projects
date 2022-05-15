import React from 'react'
import { BarChart } from '../components/BarChart'
import { Card } from '../components/Card'
import { ProductTable } from '../components/ProductTable';
import {cardData} from '../Data';
import { motion } from 'framer-motion';
function Dashboard(){
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5,ease:'easeIn'}} >
    <h1 className="font-heading text-2xl font-medium">Dashboard</h1>
    <div className="flex flex-wrap justify-between my-5">
      {
        cardData.map(el=>{
          return <Card title={el.title} loss={el.loss} profit={el.profit} money={el.money} iconColor={el.iconColor} icon={el.icon} />
        })
      }
    </div>
      <div className="border-2 my-5 p-4 rounded-md shadow-sm">
        <BarChart/>
      </div>
      <div>
        <ProductTable/>
      </div>
    </motion.div>
  )
}


export default Dashboard;