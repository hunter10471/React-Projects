import LocalMallIcon from '@mui/icons-material/LocalMall';
import GroupIcon from '@mui/icons-material/Group';

export const ProductsAndUsers = () => {
  return (
    <div className="my-5 border-2 p-6 rounded-lg shadow-sm w-full text-gray-700">
    <span className='flex justify-center'>
      <span className='flex items-center justify-center border-r-2 w-full'>
        <LocalMallIcon sx={{fontSize:25}} />
        <span className='flex flex-col mx-5'>
           <b className='text-lg'>245</b>
           <b className='text-gray-500 text-sm'>Products</b>
        </span>
      </span>
       <span className='flex items-center justify-center w-full'>
        <GroupIcon sx={{fontSize:30}} />
        <span className='flex flex-col mx-5'>
            <b className='text-lg'>3568</b>
            <b className='text-gray-500 text-sm'>Users</b>
        </span>
      </span>
      </span>
  </div>
  )
}
