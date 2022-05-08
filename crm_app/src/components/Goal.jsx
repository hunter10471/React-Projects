import ReorderIcon from '@mui/icons-material/Reorder';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Progress } from './Progress';

export const Goal = () => {
  return (
    <div className='flex flex-col'>
    <div className='flex w-full shadow-sm p-6 border-2 rounded-lg my-2'>
        <span className='p-2 rounded-lg bg-amber-100 text-amber-500 mr-4'>
            <ReorderIcon sx={{fontSize:30}} />
        </span>
        <span className='w-full'>
        <h2 className='font-semibold'>Orders Goal</h2>
            <Progress color={'orange'} value={75} />
        </span>
    </div>
    <div className='flex w-full shadow-sm p-6 border-2 rounded-lg my-2'>
        <span className='p-2 rounded-lg bg-emerald-100 text-emerald-500 mr-4'>
            <HowToRegIcon sx={{fontSize:30}} />
        </span>
        <span className='w-full'>
        <h2 className='font-semibold'>Registrations Goal</h2>
            <Progress color='#10b981' value={37} />
        </span>
    </div>
    </div>
  )
}
