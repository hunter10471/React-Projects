import React from 'react'
import Public from '@mui/icons-material/Public'
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { EmailOutlined, LocationOn } from '@mui/icons-material';


export const Footer = () => {
  const [nameValue, setNameValue] = useState('')
  const [nameLabel,setNameLabel] = useState(false)
  const name = useRef()

  const [emailValue, setEmailValue] = useState('')
  const [emailLabel,setEmailLabel] = useState(false)
  const email = useRef()

  const [messageValue, setMessageValue] = useState('')
  const [messageLabel,setMessageLabel] = useState(false)
  const message = useRef()

  useEffect(()=>{
    if(nameValue !== '' && nameLabel  === false  ){
      name.current.classList.add('opacity-0')
      name.current.classList.remove('opacity-100')

    }else{
      name.current.classList.remove('opacity-0')
      name.current.classList.add('opacity-100')
  }

    if(emailValue !== '' && emailLabel  === false  ){
      email.current.classList.add('opacity-0')
      email.current.classList.remove('opacity-100')
    }else{
      email.current.classList.add('opacity-100')
      email.current.classList.remove('opacity-0')
  }
    if(messageValue !== '' && messageLabel  === false  ){
      message.current.classList.add('opacity-0')
      message.current.classList.remove('opacity-100')
    }else{
      message.current.classList.add('opacity-100')
      message.current.classList.remove('opacity-0')
  }
  },[nameValue,nameLabel,emailValue,emailLabel,messageLabel,messageValue])

  return (
    <>
    <div className='flex w-full flex-wrap py-5 px-2 items-center justify-around bg-gradient-to-br from-slate-900 to-slate-700 text-primary'>
    <div className='flex flex-col relative m-10 mt-20'>
        <SendIcon fontSize='large' className='absolute top-[-20px] rotate-[-35deg] left-[50%] ' />
        <fieldset className=' z-[10] h-full py-8 text-primary' >
          <legend className='text-2xl p-2 border-l-2 border-slate-700 font-heading font-semibold'>CONTACT US</legend>
        <form className="flex flex-col" onSubmit={(data)=>console.log(data)} >

          <div onFocus={()=>setNameLabel(true)} onBlur={()=>setNameLabel(false)} className='relative'>
            <input autoComplete='off' onChange={(e)=>setNameValue(e.target.value)} value={nameValue} required className='py-2 peer focus:border-secondary text-lg w-80 bg-transparent focus:outline-none border-b-2 border-slate-700 hover:border-slate-500 my-4 block appearance-none ' type="text" name='name' />
            <label  ref={name} className={`absolute transition-all text-lg text-slate-400 duration-500 z-[-1] origin-top-left cursor-text top-7 peer-focus:text-sm peer-focus:top-0 peer-focus:text-secondary `}>Name*</label>
          </div>

          <div onFocus={()=>setEmailLabel(true)} onBlur={()=>setEmailLabel(false)} className='relative'>
            <input autoComplete='off' onChange={(e)=>setEmailValue(e.target.value)} value={emailValue} required className='py-2 peer focus:border-secondary text-lg w-80 bg-transparent focus:outline-none border-b-2 border-slate-700 hover:border-slate-500 my-4 block appearance-none ' type="text" name='name' />
            <label  ref={email} className={`absolute transition-all text-lg text-slate-400 duration-500 z-[-1] origin-top-left cursor-text top-7 peer-focus:text-sm peer-focus:top-0 peer-focus:text-secondary `}>Email*</label>
          </div>

          <div onFocus={()=>setMessageLabel(true)} onBlur={()=>setMessageLabel(false)} className='relative'>
            <textarea autoComplete='off' onChange={(e)=>setMessageValue(e.target.value)} value={messageValue} required className='py-2 peer  focus:border-secondary text-lg h-[8rem] w-80 bg-transparent focus:outline-none border-b-2 border-slate-700 hover:border-slate-500 my-4 block appearance-none ' type="text" name='name' />
            <label  ref={message} className={`absolute transition-all text-lg text-slate-400 duration-500 origin-top-left z-[-1] cursor-text top-7 peer-focus:text-sm peer-focus:top-0 peer-focus:text-secondary `}>Message</label>
          </div>

            <button className='text-xl px-5 py-2 mt-2 transition-all bg-button hover:bg-secondary'>Send us a message</button>
        </form>
        </fieldset>
      </div>
      <div className='flex m-10 flex-col'>
        <h2 className='text-xl font-semibold font-heading mb-5'>SITE-MAP</h2>
        <div className='flex justify-center'>
        <ul>
          <li className='flex items-center my-4 cursor-pointer hover:text-slate-400 font-light text-lg'>Home</li>
          <li className='flex items-center my-4 cursor-pointer hover:text-slate-400 font-light text-lg'>Blogs</li>
          <li className='flex items-center my-4 cursor-pointer hover:text-slate-400 font-light text-lg'>About</li>
          <li className='flex items-center my-4 cursor-pointer hover:text-slate-400 font-light text-lg'>Contact</li>
        </ul>
        <ul className='ml-20'>
          <li className='flex items-center my-4 cursor-pointer hover:text-slate-400 font-light text-lg'>Privacy</li>
          <li className='flex items-center my-4 cursor-pointer hover:text-slate-400 font-light text-lg'>Security</li>
          <li className='flex items-center my-4 cursor-pointer hover:text-slate-400 font-light text-lg'>Terms & Conditions</li>
          <li className='flex items-center my-4 cursor-pointer hover:text-slate-400 font-light text-lg'>Licensing</li>
          <li className='flex items-center my-4 cursor-pointer hover:text-slate-400 font-light text-lg'>Product pricing</li>
          <li className='flex items-center my-4 cursor-pointer hover:text-slate-400 font-light text-lg'>Careers</li>
        </ul>
        </div>
      </div>
      <div className='opacity-80 m-10 flex h-full  flex-col'>
        <Public sx={{fontSize:'64px'}} />
        <h1 className='text-xl font-heading font-bold mt-2' > <span>TECH</span>BLOG</h1>
        <h3 className='text-lg tracking-wide py-2 font-normal italic font-heading'>The only real tech blog you'll ever need :D
        </h3>
        <span className='flex flex-col '><h3 className='text-lg font-semibold mt-10'> Follow us on </h3>
          <span className='flex mt-2 border-b-2 border-slate-700 py-5 w-fit'>
            <FacebookIcon className='text-[#3b5998] mr-2 rounded-[50%] bg-primary cursor-pointer border-4 hover:border-[#3b5998]' sx={{fontSize:'36px'}} />
            <TwitterIcon className='text-[#4B9DEA] mx-2 rounded-[50%] bg-primary cursor-pointer border-4 hover:border-[#4B9DEA] ' fontSize='large' sx={{fontSize:'36px'}}/>
            <GitHubIcon className='text-[#171515]  mx-2 rounded-[50%] bg-primary cursor-pointer border-4 hover:border-[#171515] ' fontSize='large' sx={{fontSize:'36px'}}/>
          </span>
          <div className='flex text-lg mt-5 tracking-wider flex-col'>
           <span className='mb-5'><EmailOutlined className='mr-5' /> rafay.dev@gmail.com </span> 
           <span><LocationOn className='mr-5' /> 45-A, George street, CA. </span> 
          </div>
        </span>
      </div>
    </div>
    
      <div className='text-center bg-slate-700 text-primary'>All rights reserved by the respective owner of the website ®</div>
      </>
  )
}
