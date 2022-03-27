import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [nav,setNav] = useState(false)
  return (
    <div className='w-full absolute bg-background top-0 left-0 z-40'>
      <div className="md:flex items-center justify-between py-7 md:px-5 px-7">
        <Link to='/'>
        <h1 className='md:text-4xl text-3xl text-primary font-heading font-extrabold '> <span className='md:text-2xl text-xl text-primary'>TECH</span>BLOG</h1>
        </Link>
        <div onClick={()=>setNav(!nav)} className='absolute z-auto right-9 top-9 text-white cursor-pointer md:hidden'>
         {
           nav ? <ClearIcon/> : <MenuIcon />
         }

        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static md:bg-transparent bg-background left-0 w-full md:w-auto md:pl-0 text-center transition-all duration-200 ease-in md:z-auto z-[-1] ${nav ? 'top-20 opacity-100' : 'top-[-490px] opacity-0 '} md:opacity-100  `}>
            <li className=' text-md md:text-lg lg:px-10 lg:ml-5  md:my-0 my-8 md:ml-3 px-4 py-2 cursor-pointer  text-primary transition duration-300 rounded-sm font-bold   hover:ring-2 hover:text-secondary uppercase tracking-widest '>Home</li>
            <li onClick={()=>{ document.getElementById('blogs').scrollIntoView()}} className=' text-md md:text-lg lg:px-10 lg:ml-5  md:my-0 my-8 md:ml-3 px-4 py-2 cursor-pointer  text-primary transition duration-300 rounded-sm font-bold   hover:ring-2 hover:text-secondary uppercase tracking-widest '>Blogs</li>
            <li className=' text-md md:text-lg lg:px-10 lg:ml-5  md:my-0 my-8 md:ml-3 px-4 py-2 cursor-pointer  text-primary transition duration-300 rounded-sm font-bold   hover:ring-2 hover:text-secondary uppercase tracking-widest '>About</li>
            <li onClick={()=>{ document.getElementById('footer').scrollIntoView()}}  className=' text-md md:text-lg lg:px-8 lg:ml-5  md:static  md:my-0 my-8 md:ml-3  text-primary bg-secondary px-4 py-2 cursor-pointer  transition duration-300 rounded-sm font-bold   hover:bg-white hover:text-secondary uppercase tracking-widest '>Contact</li>
        </ul>
        </div>
     </div>
  )

}