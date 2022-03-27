import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Author = ({name, desc, img, about}) => {
  return (
    <div className='flex items-center justify-center p-2 sm:p-10 flex-wrap'>
        <img src={img} className="rounded-[50%] h-40 w-40 object-cover p-1 border-4 border-secondary " alt="" />
        <div className='flex flex-col text-tertiary p-10'>
        <h1 className='text-3xl font-heading font-bold tracking-wide'>{name}</h1>
        <span className='text-md text-slate-500 tracking-wider'>{about}</span>
        <p className='mt-5 text-lg tracking-wide italic min-w-[200px] max-w-[800px] '>{desc}</p>
        <div className='mt-5 w-fit pb-2'>
        <LinkedInIcon className='text-[#3566C2] mr-4' fontSize='medium'/>
        <InstagramIcon className='text-[#E1306C] mr-4' fontSize='medium'/>
        <TwitterIcon className='text-[#4B9DEA] mr-4' fontSize='medium'/>
        </div>
        </div>
    </div>
  )
}
