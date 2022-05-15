import ReorderIcon from '@mui/icons-material/Reorder';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import DescriptionIcon from '@mui/icons-material/Description';
import { Progress } from './Progress';

export const Goal = () => {
  return (
    <div className='flex flex-col rounded-md shadow-sm '>
    <div className='transition-all duration-300 hover:shadow-amber-300 hover:scale-[1.02] hover:shadow-md flex w-full shadow-sm p-6 border-2 rounded-lg my-3'>
        <span className='p-2 h-fit rounded-lg bg-amber-100 text-amber-500 mr-4'>
            <ReorderIcon sx={{fontSize:30}} />
        </span>
        <span className='w-full'>
        <h2 className='font-semibold'>Orders Goal</h2>
            <Progress color={'orange'} value={75} />
        </span>
    </div>
    <div className='transition-all duration-300 hover:shadow-emerald-200 hover:scale-[1.02] hover:shadow-md flex w-full shadow-sm p-6 border-2 rounded-lg my-3'>
        <span className='p-2 h-fit rounded-lg bg-emerald-100 text-emerald-500 mr-4'>
            <HowToRegIcon sx={{fontSize:30}} />
        </span>
        <span className='w-full'>
        <h2 className='font-semibold'>Registrations Goal</h2>
            <Progress color='#10b981' value={37} />
        </span>
    </div>
    <div className='transition-all duration-300 hover:shadow-blue-300 hover:scale-[1.02] hover:shadow-md flex w-full shadow-sm p-6 border-2 rounded-lg my-3'>
        <span className='p-2 h-fit rounded-lg bg-blue-100 text-blue-500 mr-4'>
            <DescriptionIcon sx={{fontSize:30}} />
        </span>
        <span className='w-full'>
        <h2 className='font-semibold'>Product Listings Goal</h2>
            <Progress color='rgb(59,130,246)' value={52} />
        </span>
    </div>
    </div>
  )
}
