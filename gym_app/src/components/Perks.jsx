import React from 'react'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Perks = () => {
  return (
    <div className='relative mb-40 mx-6 sm:mx-10 md:mx-14 lg:mx-20'>
        <h1 id='perks' className='flex flex-col justify-center items-center text-white  font-heading uppercase text-xl md:text-2xl lg:text-4xl mt-4 md:mt-0 mb-4 sm:mb-12 md:mb-14 lg:mb-20 mx-2 md:mx-6 text-center  tracking-wider font-extrabold'>Perks<AutoAwesomeIcon sx={{fontSize:45}} className='m-2 text-primary' /> </h1>
    <div className='flex justify-center  mb-5 flex-col lg:flex-row w-full'>
        <img className='w-full lg:w-[45vw] h-[50vh] lg:h-[80vh] object-cover z-10 rounded' src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1594&q=80" alt="coach" />
        <div className=' bg-primaryDark w-full lg:w-[45vw] p-5 md:p-10 xl:p-12 2xl:p-20 flex justify-center items-center flex-col'>
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-wide text-white uppercase my-4 w-[80%]'>
                meet the gym-x certified trainer
            </h2>
            <p className='text-xs md:text-sm lg:text-base text-gray-100 w-[80%]'>
                The gym-x trainer is a certified professional athelete with the previous experience of training boxing, marathon, cycling and weight-lifting champions. Visit our gym to meet him today and truly experience how you can bring the best in you.
            </p>
            <span className='mt-5 w-[80%] text-left text-white font-semibold text-sm  md:text-base  lg:text-lg'>
                John Perkins
            </span>
            <span className='text-gray-100 text-[10px] md:text-xs lg:text-sm w-[80%] text-left  '>Certified Training Specialist</span>
            <span className='text-white mt-10 text-left w-[80%] cursor-pointer'>
                <TwitterIcon sx={{fontSize:20, marginRight:1}}/>
                <InstagramIcon sx={{fontSize:20, marginRight:1}}/>
                <LinkedInIcon sx={{fontSize:20, marginRight:1}}/>
            </span>
        </div>
    </div>
    <div className='flex justify-center  flex-col lg:flex-row-reverse mt-5'>
        <img className='w-full lg:w-[45vw] h-[50vh] lg:h-[80vh] object-cover z-10 rounded' src="https://images.unsplash.com/photo-1587996597484-04743eeb56b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="coach" />
        <div className=' bg-primaryDark w-full lg:w-[45vw] p-5 md:p-10 xl:p-12 2xl:p-20 flex justify-center items-center flex-col'>
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-wide text-white uppercase my-4 w-[80%]'>
                get your diet fixed by a nutritionist
            </h2>
            <p className='text-xs md:text-sm lg:text-base text-gray-100 w-[80%]'>
            Proper nutrition can help manage chronic diseases such as diabetes and heart disease as well as many other chronic issues in combination with treatment from your primary care doctor or specialist. A nutritionist can also act as a motivator when you might be struggling to keep up with a healthy lifestyle.
            </p>
            <span className='mt-5 w-[80%] text-left text-white font-semibold text-sm  md:text-base  lg:text-lg'>
                Rwanda Williams
            </span>
            <span className='text-gray-100 text-[10px] md:text-xs lg:text-sm w-[80%] text-left  '>Clinical Nutritionist</span>
            <span className='text-white mt-10 text-left w-[80%] cursor-pointer'>
                <TwitterIcon sx={{fontSize:20, marginRight:1}}/>
                <InstagramIcon sx={{fontSize:20, marginRight:1}}/>
                <LinkedInIcon sx={{fontSize:20, marginRight:1}}/>
            </span>
        </div>
    </div>
    </div>
  )
}
