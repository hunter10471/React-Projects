import React, { useState } from 'react'
import JoinRightIcon from '@mui/icons-material/JoinRight';
import { motion } from 'framer-motion';
import data from '../sideBarData';


const textAnimation = {
    initial:{
        opacity:0,
        x:-200
    },
    animate:{
        opacity:1,
        x:0,
        transition:{
            duration:0.5,
            ease:'backInOut'
        },
    exit:{
        opacity:0,
        x:-200,
        transition:{
            duration:0.5,
            ease:'backInOut'
        },
    }
}
}




export const Sidebar = () => {
    const [nav, setNav] = useState(false)

    const Item = ({icon, text, highlighted = false}) => {
       return <div className={`flex items-center cursor-pointer ${highlighted &&'bg-primaryLighter text-white font-semibold'} ${text==='Search' && 'mb-10'} ${text==='Logout' && 'mt-10'}  my-3 font-medium text-gray-200 transition-all hover:font-semibold hover:text-white hover:bg-primaryLighter p-2 rounded-lg`}>
        {icon}
        {nav &&
        <span className='mt-1'>
            {text}
        </span> 
        }
    </div>
    }
    
    return (
    <div className={`fixed top-0 bg-gradient-to-br from-primary to-primaryLight h-screen transition-all ${nav ? 'w-[250px]' : 'w-[55px]'} px-2 py-5`}>
        <h1 className='text-3xl font-heading font-thin flex items-center text-white mt-5 mb-10'><JoinRightIcon onClick={()=>setNav(!nav)} className='p-1 bg-white text-primary rounded-xl cursor-pointer ' sx={{fontSize:35,marginRight:0.5}} />
        {nav && 
            <motion.span variants={textAnimation} initial='initial' animate='animate' exit='exit' >
            Unity
            </motion.span>
        }
        </h1>
          { data.map(el => {
            return <Item text={el.label} icon={el.icon} highlighted={el.highlighted} />
        })}

    </div>
  )
}
