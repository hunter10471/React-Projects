import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {


    const [toggleNav, setToggleNav] = useState(false)

  return (  <div className={`z-10 text-white p-6 absolute w-full top-0 md:px-10 flex transition-all duration-200  overflow-hidden ${toggleNav ? ' h-96 shadow-xl' :' h-20'} flex-wrap items-center`}>
                <div className="text-4xl text-primary sm:text-5xl w-full lg:w-6/12 font-extrabold font-heading ">
                     <h1 className="italic">
                     <span className="text-white not-italic ">Gym-</span>X
                     </h1>
                </div>
                <span onClick={()=>setToggleNav(!toggleNav)} className="absolute lg:hidden right-10 top-6"><MenuIcon/></span>
                <ul className="w-full relative my-8 lg:my-0 lg:w-6/12 inline-flex items-center flex-col lg:flex-row lg:justify-end ">
                    <li className="absolute bg-black opacity-95 top-0 z-[-1] blur-lg w-screen h-full"></li>
                    <li className=" hover:text-primary sm:text-sm cursor-pointer m-5 uppercase tracking-wide lg:my-0"><a href="#home">Home</a> </li>
                    <li className=" hover:text-primary sm:text-sm cursor-pointer m-5 uppercase tracking-wide lg:my-0"><a href="#equipment">Equipment</a></li>
                    <li className=" hover:text-primary transition-all  sm:text-sm cursor-pointer m-5 uppercase py-2 border-2 border-primary rounded-sm px-4 tracking-wide lg:my-0"><a href="#memberships">Memberships</a> </li>
                    <li className=" hover:text-primary sm:text-sm cursor-pointer m-5 uppercase tracking-wide lg:my-0"><a href="#contact">Contact</a> </li>
                </ul>
            </div>
        );
 }
