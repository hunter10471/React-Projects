import React from 'react'
import { SpinnerDotted } from 'spinners-react';

const lines = [
  "Unity will be with you right away...",
  "It all comes down to you...",
  "Fetching your stats...",
  "Unity has a support channel for you...",
  "Just a moment..."
]

const line = () =>{
  return (
    lines[Math.floor(Math.random()* lines.length)]
  )
}

export const Preloader = () => {
  return (
    <div className='flex flex-col w-screen h-screen justify-center items-center'>
        <SpinnerDotted size={60} thickness={120} speed={150} color="#0396A6" secondaryColor="#8BD9D9" />
        <h1 className='italic font-heading text-primary my-4 font-bold opacity-70'>{line()}</h1>
        <svg className='absolute w-[800px] h-[800px] top-[-50vh] left-[-200px] opacity-50' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#0396A6" d="M64.8,-52.2C80,-32.6,85.7,-5.9,79.6,17.2C73.6,40.3,55.9,59.8,33.9,70.4C11.9,81,-14.4,82.8,-37,73.3C-59.6,63.8,-78.5,43,-84.3,18.9C-90.1,-5.3,-82.9,-32.8,-66.6,-52.6C-50.4,-72.5,-25.2,-84.6,-0.2,-84.5C24.8,-84.3,49.6,-71.8,64.8,-52.2Z" transform="translate(100 100)" />
        </svg>
        <svg className='absolute w-[800px] h-[800px] bottom-[-50vh] right-[-200px] opacity-50' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#0396A6" d="M64.8,-52.2C80,-32.6,85.7,-5.9,79.6,17.2C73.6,40.3,55.9,59.8,33.9,70.4C11.9,81,-14.4,82.8,-37,73.3C-59.6,63.8,-78.5,43,-84.3,18.9C-90.1,-5.3,-82.9,-32.8,-66.6,-52.6C-50.4,-72.5,-25.2,-84.6,-0.2,-84.5C24.8,-84.3,49.6,-71.8,64.8,-52.2Z" transform="translate(100 100)" />
        </svg>
    </div>
  )
}
