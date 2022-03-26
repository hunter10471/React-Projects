import React from 'react'
import { Author } from '../components/Author'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import img1 from '../images/pic1.jpg'
import ad1 from '../images/ad1.jpg'
import ad2 from '../images/ad2.jpg'

export const Blog = () => {

  return (
    <>
        <div className='mt-[8rem] p-2 flex bg-gradient-to-tl flex-wrap lg:flex-nowrap'>
      <div className='flex flex-col mb-20'>
      <img className=' w-full max-h-[500px] object-cover object-bottom self-center rounded-sm shadow-md shadow-black' src={img1} alt="" />
      <h1 className='text-xl sm:text-2xl  md:text-3xl  font-heading font-extrabold tracking-wide px-20 py-5 mt-2 text-left flex flex-col'>Star-Link satellites are up!
      <span className='text-sm text-slate-500'>By Joanna Coffee</span>
      </h1>
      <p className='text-[16px] sm:text-[18px] tracking-wide px-5 md:px-20 first-letter:text-2xl md:first-letter:text-5xl leading-loose first-letter:ml-40 first-letter:font-extrabold'>Using advanced satellites in a low orbit, Starlink enables video calls, online gaming, streaming, and other high data rate activities that historically have not been possible with satellite internet. Users can expect to see download speeds between 100 Mb/s and 200 Mb/s and latency as low as 20ms in most locations. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque et totam, repellat temporibus nesciunt aliquam deleniti impedit eum vitae doloremque eius reiciendis natus quaerat consectetur odit praesentium non rem. Molestias minus hic ducimus explicabo officiis veritatis, accusantium, voluptatem placeat, accusamus earum porro impedit nobis beatae voluptates quisquam dolores quos id? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam culpa magni voluptatibus quam molestiae alias dolore! Eum laborum nemo illo sequi a? Omnis dolorum, numquam illo eaque aliquid porro ad ratione quis alias facilis exercitationem adipisci voluptate magnam beatae modi, laudantium quaerat architecto culpa rem aut accusamus. Eligendi, quae voluptate!</p>      
      </div>
      <div className='flex lg:flex-col items-center justify-center lg:justify-start p-5 lg:w-[60%] xl:w-[80%] flex-wrap'>
        <div className='p-4 m-10 shadow-sm rounded-lg shadow-black sm:w-full md:w-[350px] text-sm flex flex-col items-center'>
          <span className='font-semibold tracking-wide italic'>New here? Join our newsletter for the latest tech. news</span>
          <input type="text" className='w-full p-2 m-2 border-slate-300 border-2 rounded-md outline-secondary' placeholder='Enter your email' />
          <div className='flex justify-evenly w-full'>
        <FacebookIcon className='text-[#3b5998]' fontSize='large'/>
        <PinterestIcon className='text-[#E02122]' fontSize='large'/>
        <InstagramIcon className='text-[#E1306C]' fontSize='large'/>
        <TwitterIcon className='text-[#4B9DEA]' fontSize='large'/>
        <MarkunreadIcon className='text-slate-400' fontSize='large'/>
          </div>
        </div>
      <div className='flex flex-col items-center'>
      <img src={ad1} className="max-h-[200px] my-5" alt="" />
      <span className='text-purple-700 w-[70%] cursor-pointer'>Buy 1ltr. pack and get 1 free! - Terms and Conditions apply.</span>
      </div>
      <div className='flex flex-col items-center'>
      <img src={ad2} className="max-h-[200px] my-5" alt="" />
      <span className='text-purple-700 w-[70%] cursor-pointer'>Is the community doing well ? Join us in making it better - Fixing the City.co </span>
        </div>
      </div>
    </div>
            <Author/>  
    </>
  )
}
