import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const PricingCard = ({popular, title, price, benefits = []}) => {
  return (
    <div className={`relative  transition-all duration-200 hover:shadow-lg hover:shadow-primary  ${popular ? 'lg:scale-110 border-2 border-primary' : ''} w-[30%] min-w-[80vw] sm:min-w-[350px] md:min-w-[300px] max-w-[400px] flex-shrink-0  m-8 bg-[#1b1a1a] rounded-md  p-2`}>
        {popular && <h1 className='absolute text-xs md:text-sm lg:text-base text-center w-fit left-[calc(50%_-_5rem)] md:left-[calc(50%_-_5.5rem)] lg:left-[calc(50%_-_6rem)] rounded-md -top-5  px-6 py-2  font-heading font-bold uppercase bg-primary text-white '>Popular Pricing</h1>}
        <div className='flex flex-col my-10 mx-4 '>
            <h2 className='text-sm md:text-base lg:text-xl uppercase text-primary font-bold'>{title}</h2>
            <h2 className='text-5xl md:text-6xl lg:text-7xl text-white font-extrabold py-5 border-secondaryLight border-b-2'>${price}<span className='text-2xl font-thin'>/month</span></h2>
            <ul className='my-10 min-h-[250px]'>
                {
                    benefits.map(el=> (
                     <li className='flex items-center text-sm md:text-base lg:text-lg text-white'><CheckCircleIcon sx={{fontSize:25}} className='mr-3 my-2 text-green-600 bg-white rounded-[50%]' /> {el}</li>
                    ))
                }
            </ul>
            <button className='text-primary border-2 hover:bg-primary hover:text-white transition-all border-primary rounded-md px-4 py-2 my-5 w-full font-bold text-xs sm:text-sm md:text-base self-center'>Join Class</button>
        </div>
    </div>
  )
}
