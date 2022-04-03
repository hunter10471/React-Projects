import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import JoinRightIcon from '@mui/icons-material/JoinRight';
import { administration,pages } from '../data';

export const Sidebar = ({nav}) => {
  
  return (
    <div className={` fixed h-full bg-gradient-to-bl from-slate-900 transition-all duration-200 ease-out to-slate-800 ${nav ? 'w-[20vw]' : 'w-[65px]'} flex flex-col items-center `}>
        <h1 className='lg:text-2xl whitespace-nowrap md:text-xl lg font-heading font-bold text-white h-fit w-[80%] text-center tracking-wide mt-5 '> <JoinRightIcon className='text-primary' fontSize='large' />{nav ? (<span className=' bg-clip-text text-transparent bg-gradient-to-r from-primary mr-1'>unity <span className='text-white'>CRM</span> </span>) : ''}</h1>
        <div className='flex flex-col w-full mt-10 text-sm md:text-base '>
            <div className='flex items-center text-white p-5 bg-slate-800 w-full relative'>
                <span className='flex items-center justify-around'><HomeIcon className='mr-3'/>{ nav ? 'Dashboard' : ''}</span>
                <span className={`absolute ${nav ? '' : 'hidden'} right-5 justify-around py-1 px-6 rounded-lg bg-blue-600`}>5</span>
            </div>
            <div className='flex text-slate-400 flex-col justify-between'>
              <div className={`${nav ? 'm-10' : 'm-5'}`}>
                <h2 className={`font-heading ${nav ? '' : 'hidden'}`}>
                  ADMINISTRATION
                </h2>
                  {
                    administration.map(el=>{ return (
                      <div className={`mt-5 ${nav ? 'px-5' : ''} py-2 rounded-md  transition-all cursor-pointer hover:bg-slate-800 hover:text-white w-full`}>
                      <span >{el.Icon}</span>
                      <span className={`${nav ? '' : 'hidden'}`} >{el.title}</span>
                      </div>
                    )
                      
                    })
                  }
              </div>
              <div className={`${nav ? 'm-10' : 'm-5'}`}>
                <h2 className={`font-heading ${nav ? '' : 'hidden'}`}>
                  PAGES
                </h2>
                { pages.map(el=>{return(
                  <div className={`mt-5 ${nav ? 'px-5' : ''} py-2 rounded-md  transition-all cursor-pointer hover:bg-slate-800 hover:text-white w-full`}>
                  <span>{el.Icon}</span>
                  <span className={`${nav ? '' : 'hidden'}`}>{el.title}</span>
                </div>
                    )
                })
                }
              </div>
              <div className={`absolute bottom-6 flex ${nav ? 'px-8' : 'px-5'} py-4 rounded-md  transition-all cursor-pointer hover:bg-slate-800 hover:text-white w-full`}>
                  <LogoutIcon className='mr-6' /> {nav ? 'Logout' : ''}
                </div>
            </div>
        </div>
    </div>
  )
}


