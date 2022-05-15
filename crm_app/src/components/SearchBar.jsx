import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export const SearchBar = () => {
    const [focus, setFocus] = useState(false)
  return (
    <div onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} className={` relative mb-10 flex duration-200 shadow-md before:absolute before:origin-center  before:bottom-0 before:border-[1px] before:transition-all before:duration-500 justify-center ${ focus ? ' before:border-blue-500 before:w-[100%]' : 'before:w-[0%]'} `}>
        <span className='inline-flex cursor-pointer items-center bg-blue-50  px-4 py-2 text-gray-600 ' ><SearchIcon sx={{fontSize:35}} /></span> 
        <input className='px-4 py-2 bg-blue-50 w-full max-w-[1500px] focus:outline-none placeholder:italic ' placeholder='Enter a product, user or order' type="text" />
    </div>
  )
}
