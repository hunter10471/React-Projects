import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


export const Card = ({icon,iconColor,money,loss,profit,title,classes}) => {
  return (
    <div className={`${classes}  cursor-default transition-all hover:scale-105 hover:shadow-md border-2 shadow-sm rounded-md p-2 lg:p-4 mx-4 my-4 ml-0 min-w-[170px] lg:min-w-[200px] flex-1`}>
       <div className='flex justify-between'>
           <span className={`${iconColor}`}>
               {icon}
           </span>
           <span className={` flex items-center text-lg ${profit && 'text-green-600'} ${loss && 'text-red-600'} text-medium `}>
               {profit && <>
                <AddIcon sx={{fontSize:18,color:'green'}} />
                {profit}%
               </>}
               {loss && <>
                <RemoveIcon sx={{fontSize:18,color:'red'}} />
                {loss}%
               </>}
           </span>
       </div>
       <h2 className='text-2xl font-semibold my-2 tracking-wider'>
           {money}
       </h2>
       <h3 className='text-base font-semibold mt-2 text-gray-400'>
           {title}
       </h3>
    </div>
  )
}
