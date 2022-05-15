import { CircularProgress } from '@mui/material'
import React from 'react'

export const Spinner = () => {
  return (
    <div className='w-full h-full flex items-center justify-center flex-col'>
        <CircularProgress/>
        <h2 className='text-sm italic font-bold opacity-30 my-4'>Loading...</h2>
    </div>
  )
}
