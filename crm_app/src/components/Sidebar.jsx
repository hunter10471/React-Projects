import React, { useEffect, useState } from 'react'
import JoinRightIcon from '@mui/icons-material/JoinRight';
import { motion } from 'framer-motion';
import Tooltip from '@mui/material/Tooltip';
import {sidebarData} from '../Data';

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
    const [highlighted, setHighlighted] = useState('')
    useEffect(()=>{
        const closeNavOnOutSideClick = () =>{
            if(nav){
                document.addEventListener('click',(e)=>{
                    var container = document.getElementById('sidebar')
                    if(!container.contains(e.target)){
                        setNav(false)
                    }
                })
            }
        }
        closeNavOnOutSideClick();
    },[nav])
    const Item = ({icon, text}) => {
       return <button onClick={()=>setHighlighted(text)} className={`flex items-center cursor-pointer w-full focus:bg-primaryLighter focus:text-white focus:font-semibold ${highlighted === text ?  'bg-primaryLighter text-white font-semibold' : 'text-gray-300 font-medium'} ${text==='Logout' && 'mt-10'}  my-3 transition-all hover:font-semibold hover:text-white hover:bg-primaryLighter p-[6px] md:p-2 rounded-lg`}>
        <Tooltip title={text} placement='right' arrow >
                {icon}
        </Tooltip>
        {nav &&
        <span>
            {text}
        </span> 
        }
    </button>
    }
    
    return (
    <div id='sidebar' className={`flex flex-col z-[20] overflow-y-scroll lg:overflow-y-visible fixed top-0 bg-gradient-to-br from-primary to-primaryLight h-screen transition-all ${nav ? 'w-[250px]' : 'w-[55px]'} px-2 py-5`}>
        <h1 className='text-3xl font-heading font-thin flex items-center text-white mt-5 mb-10'><JoinRightIcon onClick={()=>setNav(!nav)} className='p-1 transition-all hover:scale-105 bg-white text-primary rounded-xl cursor-pointer ' sx={{fontSize:38,marginRight:0.5}} />
        {nav && 
            <motion.span variants={textAnimation} initial='initial' animate='animate' exit='exit' >
            Unity
            </motion.span>
        }
        </h1>
          { sidebarData.map(el => {
            return <Item text={el.label} icon={el.icon} highlighted={el.highlighted} />
        })}
        <span className={`${nav ? 'flex' : 'hidden'} flex-col w-full h-full justify-end whitespace-nowrap `}>
        <h3 className='text-xs font-bold text-white'>© 2002-2022 Unity</h3>
        <span className='text-[10px] text-gray-400 w-[80%] overflow-clip '>All business statistics tracked <br /> at one place.</span>
        </span>
    </div>
  )
}
