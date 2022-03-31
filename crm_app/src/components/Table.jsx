import React from 'react'
import { data } from '../data'

export const Table = () => {
  return (
    <table className='w-full h-fit text-secondary table-fixed '>
        <tr className='p-2 w-96 h-10 border-b-2 text-lg '> 
            <th className='p-2 font-medium'>Product</th>
            <th className='p-2 px-12 font-medium'>Revenue</th>
        </tr>
            {
                data.map(el=>{
                    return(
                        <tr className='border-b-2 odd:bg-slate-100'>
                    <td className='flex items-center tracking-wide' > <img className='h-[60px] w-[60px] object-cover rounded-[10%] my-2 mx-10' src={el.img} alt="" /> {el.title}</td>
                    <td className='font-semibold text-center'>{el.revenue}</td>
                         </tr>
                        )
                })
            }
    </table>
  )
}
