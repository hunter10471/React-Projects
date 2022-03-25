import React from 'react'
import Public from '@mui/icons-material/Public'
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';

export const Footer = () => {
  return (
    <div className='flex w-full py-20 px-2 items-center justify-around bg-slate-800 text-primary'>
      <div className='opacity-80 flex items-center flex-col'>
        <Public sx={{fontSize:'64px'}} />
        <h1 className='text-xl font-heading font-bold mt-2' > <span>TECH</span>BLOG</h1>
      </div>
      <div className='flex flex-col'>
        <h2 className='text-xl font-semibold font-heading'>SITE-MAP</h2>
        <ul>
          <li className='flex items-center my-2 cursor-pointer hover:text-slate-400 font-light text-lg'>Home</li>
          <li className='flex items-center my-2 cursor-pointer hover:text-slate-400 font-light text-lg'>Blogs</li>
          <li className='flex items-center my-2 cursor-pointer hover:text-slate-400 font-light text-lg'>About</li>
          <li className='flex items-center my-2 cursor-pointer hover:text-slate-400 font-light text-lg'>Contact</li>
        </ul>
      </div>
      <div className='relative'>
        <SendIcon fontSize='large' className='absolute top-[-20px] rotate-[-35deg] left-[50%] ' />
        <fieldset className='border-2 border-secondary shadow-md bg-gradient-to-t from-slate-900 shadow-secondary p-8 rounded-md text-primary' >
          <legend className='text-2xl px-2 font-heading font-semibold'>CONTACT US</legend>
        <form className="flex flex-col" onSubmit={(data)=>console.log(data)} >
            <input placeholder='Name' className='py-2 text-lg w-80 bg-transparent focus:outline-none border-b-2 border-slate-700 hover:border-slate-500 my-4   ' type="text" name='name' />
            <input placeholder='Email'className='py-2 text-lg w-80 bg-transparent focus:outline-none border-b-2 my-4 border-slate-700 hover:border-slate-500 ' type="email" name='email' />
            <textarea placeholder='Message' className='py-2 text-lg w-80 h-20 focus:outline-none hover:border-slate-500 my-4 border-slate-700 bg-transparent border-b-2  ' type="text" name='text' />
            <button className='text-xl px-5 py-2 mt-2 transition-all bg-button hover:bg-secondary'>Send us a message</button>
        </form>
        </fieldset>
      </div>
    </div>
  )
}
