import React from 'react'
import { data } from '../data'

export const Table = () => {
  return (
    <table className='w-full h-full max- text-secondary table-fixed '>
        <tr className='sticky -top-5 bg-white  w-96 h-10 border-b-2 text-lg '> 
            <th colSpan={2} className='p-5 font-medium'>Product</th>
            <th className='p-5 font-medium'>Revenue</th>
        </tr>
            {
                data.map(el=>{
                    return(
                        <tr className=' text-center odd:bg-slate-100'>
                    <td className='p-5' ><img className=' mx-10 h-[50px] w-[50px] object-cover rounded-[10%]' src={el.img} alt="" /></td>
                    <td className='text-left' >{el.title}</td>
                    <td className='font-semibold text-center'>{el.revenue}</td>
                         </tr>
                        )
                })
            }
    </table>
  )
}
