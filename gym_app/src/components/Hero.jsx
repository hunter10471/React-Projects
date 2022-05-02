import img from '../imgs/gym.jpg'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CopyrightIcon from '@mui/icons-material/Copyright';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Hero = () => {
  return (
    <div id='home' className=' h-screen flex items-center justify-center mx-2'>
        <img className='h-[120vh] blur-[2px] w-screen object-cover absolute top-0 z-[-1] brightness-50 ' src={img} alt="" />
        <div className='  relative flex flex-col items-center'>
            <h2 className='relative text-white flex items-center text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide uppercase my-10 lg:my-16  px-6 py-2 border-[1px] '>Gym Fitness Club <span className='text-[12px] sm:text-[14px] text-primary absolute right-3 top-0'> <CopyrightIcon fontSize='' /> </span> &nbsp; </h2>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-widest text-white uppercase text-center  lg:leading-[70px]'>Believe In Yourself And Watch How Much You Achieve</h1>
            <span className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-thin my-5 italic text-center flex'><FormatQuoteIcon fontSize='' className='rotate-[180deg] mx-1 lg:mx-2' /> Spirit, Mind And Body When Used Together Can Change The World <FormatQuoteIcon fontSize='' className='mx-1 lg:mx-2' />  </span>
            <div className='flex w-full justify-center sm:flex-row flex-col items-center my-10'>
            <button className='px-2 sm:px-5 py-3 my-2 bg-primary   transition-all hover:scale-105  text-white  max-w-[220px] rounded-md tracking-wider whitespace-nowrap text-sm md:text-base lg:text-lg w-full mx-4 '>Free Class</button>
            <a className='mx-4 w-full sm:w-fit flex justify-center' href="#memberships"><button className='px-2 sm:px-5 py-3 my-2 bg-secondary transition-all hover:scale-105   text-white  max-w-[220px] rounded-md tracking-wider whitespace-nowrap text-sm md:text-base lg:text-lg w-full '>Check Memberships</button></a>
            </div>
        </div>
        <span className='text-4xl animate-bounce text-white absolute bottom-2 sm:bottom-5'> <a href="#excercises"> <KeyboardArrowDownIcon fontSize='' /> </a></span>
    </div>
  )
}
