import React from 'react'
import PublicIcon from '@mui/icons-material/Public';

export const Hero = ({blogs}) => {

  return (
    <div  className='w-screen h-screen bg-[url(./images/bg_img.jpg)] bg-cover relative bg-no-repeat flex items-center flex-col justify-center'>
      <div className='absolute bg-gradient-to-t from-primary w-full h-[20px] bottom-0'></div>
      <div className="flex relative items-center justify-center flex-col">
      <h1 className='font-central relative text-transparent  text-3xl px-8 text-center md:px-0 sm:text-4xl italic lg:text-6xl tracking-widest  bg-gradient-to-b from-primary bg-clip-text'>
        <span className='w-40 h-1 bg-gradient-to-l from-primary invisible sm:visible rounded-lg absolute  top-[-40%] '></span>
        <span className='w-40 h-1 bg-gradient-to-l from-primary invisible sm:visible rounded-lg absolute  bottom-[-40%] right-[10%]'></span>
        <span className='w-20 h-1 bg-gradient-to-l from-primary invisible sm:visible rounded-lg absolute  top-[-40%] right-[20%]'></span>
        <span className='w-20 h-1 bg-gradient-to-l from-primary invisible sm:visible rounded-lg absolute  bottom-[-40%] left-[20%]'></span>
        LET THERE BE CHANGE</h1>
      <span className='w-screen bottom-[25px] sm:bottom-[50px] h-[100px] absolute backdrop-blur-sm'></span>
      <span className='sm:text-lg md:text-xl font-heading tracking-widest italic text-center opacity-60 text-primary px-5 my-10 sm:my-20'>
        The Best Connections Worldwide <PublicIcon className='bg-[#1a1d1d] rounded-[50%] shadow-primary shadow-lg hover:animate-spin ' sx={{fontSize:'48px'}} /> Coming soon! </span>
      </div>
      <button onClick={()=>{blogs.current.scrollIntoView()}} className='text-primary font-heading flex font-bold items-center rounded-sm text-lg md:text-xl transition-all duration-200 tracking-widest absolute bottom-20 bg-button hover:bg-secondary px-[3rem] md:px-20 py-2 shadow-2xl shadow-secondary'> EXPLORE</button>
    </div>
  )
}
