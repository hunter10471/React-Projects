import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PublicIcon from '@mui/icons-material/Public';

export const Footer = () => {
  return (
    <div id='contact' className='flex flex-col justify-center mt-20 bg-[#1b1b1b]'>
      <ul className='my-20 mb-10 w-full flex flex-wrap justify-center '>
        <li className='text-gray-400 text-sm hover:text-white m-2 flex-shrink-0 px-6 cursor-pointer'>Home</li>
        <li className='text-gray-400 text-sm hover:text-white m-2 flex-shrink-0 px-6 cursor-pointer'>Equipment</li>
        <li className='text-gray-400 text-sm hover:text-white m-2 flex-shrink-0 px-6 cursor-pointer'>Membership</li>
        <li className='text-gray-400 text-sm hover:text-white m-2 flex-shrink-0 px-6 cursor-pointer'>Location</li>
        <li className='text-gray-400 text-sm hover:text-white m-2 flex-shrink-0 px-6 cursor-pointer '>Contact</li>
      </ul>
      <ul className='mb-10 w-full flex flex-wrap justify-center '>
      <li className='text-gray-400 text-sm hover:text-white m-2 flex-shrink-0 px-6 cursor-pointer'><FacebookIcon sx={{fontSize:25}} /></li>
      <li className='text-gray-400 text-sm hover:text-white m-2 flex-shrink-0 px-6 cursor-pointer'><LinkedInIcon sx={{fontSize:25}} /></li>
      <li className='text-gray-400 text-sm hover:text-white m-2 flex-shrink-0 px-6 cursor-pointer'><TwitterIcon sx={{fontSize:25}} /></li>
      <li className='text-gray-400 text-sm hover:text-white m-2 flex-shrink-0 px-6 cursor-pointer'><InstagramIcon sx={{fontSize:25}} /></li>
      </ul>
      <span className='text-gray-400 text-center font-medium mb-20  hover:text-white mx-6 cursor-pointer'>gymx.com</span>
      <span className='text-gray-400 text-right font-medium my-2 border-t-2 pt-2 border-secondaryLight hover:text-white m-2 flex-shrink-0 px-6 cursor-pointer'>English <PublicIcon sx={{fontSize:30,marginBottom:'2px',marginLeft:1}}/></span>
    </div>
  )
}
