import React, { useState } from 'react'
import AddTaskIcon from '@mui/icons-material/AddTask';

export const UnityPro = () => {
  return (
    <div className='flex flex-col group items-center transition-all hover:scale-105 hover:shadow-xl hover:shadow-pink-300 relative overflow-hidden px-2 py-10 rounded-xl bg-gradient-to-br from-pink-500 to-indigo-500'>
        <svg className='opacity-40 absolute transition-all duration-300 group-hover:translate-x-0 translate-x-[-80%] z-[0]' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FF0066" d="M64.8,-52.2C80,-32.6,85.7,-5.9,79.6,17.2C73.6,40.3,55.9,59.8,33.9,70.4C11.9,81,-14.4,82.8,-37,73.3C-59.6,63.8,-78.5,43,-84.3,18.9C-90.1,-5.3,-82.9,-32.8,-66.6,-52.6C-50.4,-72.5,-25.2,-84.6,-0.2,-84.5C24.8,-84.3,49.6,-71.8,64.8,-52.2Z" transform="translate(100 100)" />
        </svg>
        <svg className='opacity-40 absolute transition-all duration-300 group-hover:translate-x-0 translate-x-[80%] z-[0]' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FF0066" d="M64.8,-52.2C80,-32.6,85.7,-5.9,79.6,17.2C73.6,40.3,55.9,59.8,33.9,70.4C11.9,81,-14.4,82.8,-37,73.3C-59.6,63.8,-78.5,43,-84.3,18.9C-90.1,-5.3,-82.9,-32.8,-66.6,-52.6C-50.4,-72.5,-25.2,-84.6,-0.2,-84.5C24.8,-84.3,49.6,-71.8,64.8,-52.2Z" transform="translate(100 100)" />
        </svg>
       <span className='p-2 z-10 bg-white rounded-[50%]' ><AddTaskIcon className='text-primary' sx={{fontSize:35}} /> </span> 
        <h2 className='text-white z-10 text-center text-lg md:text-xl font-medium font-heading my-2' >Unity <b className='capitalize' >Pro</b></h2>
        <h4 className='mb-2 text-white z-10 text-center font-medium text-xs md:text-sm'>Get access to the premimum features of Unity today.</h4>
        <button className='bg-white z-10 text-primary py-2 px-4 text-xs md:text-sm rounded-2xl font-bold w-[50%] min-w-[200px] hover:bg-gray-200 transition-all mt-4 ' >Go Pro</button>
    </div>
  )
}
