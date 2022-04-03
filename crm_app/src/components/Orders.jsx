import React from 'react'
import { tableData } from '../data'

export const Orders = () => {
  return (
    <table className='h-full w-full'>
        <tr>
            <th>No.</th>
            <th>Product Name</th>
            <th>Client</th>
            <th>Created At</th>
            <th>Status</th>
            <th>Price</th>
            <th>Action</th>
        </tr>
        {
            tableData.map(el=>{
                return(
                    <tr className='hover:bg-slate-300 cursor-default  text-center odd:bg-slate-100'>
                    <td className='p-3'>{el.id}</td>
                    <td>{el.name}</td>
                    <td>{el.client}</td>
                    <td>{el.createdAt}</td>
                    <td  className={`text-white cell rounded-md ${el.status === 'in process' && 'bg-gray-400'} ${el.status === 'cancelled' && 'bg-red-400'} ${el.status === 'completed' && 'bg-green-400'} `}>{el.status}</td>
                    <td className='font-semibold'>{el.price}</td>
                    <td>{el.icon}</td>
                </tr>
                    )
            })
        }
        
    </table>
  )
}
