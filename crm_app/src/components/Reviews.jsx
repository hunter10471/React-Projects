import  StarIcon  from '@mui/icons-material/Star'
import React from 'react'

export const Reviews = () => {
  return (
    <div className='flex overflow-auto before:bottom-0 before:bg-gradient-to-t from w rounded-md max-h-[500px] min-w-[350px] mx-10 shadow-lg p-2 flex-col bg-white'>
        <h1 className='text-xl px-10 py-5 font-heading font-semibold'>Latest Ratings & Reviews</h1>
        <div className='border-b-2 p-5'>
        <div className='flex justify-between whitespace-nowrap items-center'>
            <h3 className='text-lg font-medium px-5 p-2 '>1. John Albert</h3>
            <div className='flex px-5 p-2 text-yellow-500 flex-nowrap'>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
            </div>
        </div>
            <p className='px-5 tracking-wide  text-secondary leading-6 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates dignissimos, ipsum explicabo odit ea.
            </p>
        </div>
        <div className='border-b-2 p-5'>
        <div className='flex justify-between whitespace-nowrap items-center'>
            <h3 className='text-lg font-medium px-5 p-2 '>2. John Albert</h3>
            <div className='flex px-5 p-2 text-yellow-500 flex-nowrap'>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
            </div>
        </div>
            <p className='px-5 tracking-wide  text-secondary leading-6 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates dignissimos, ipsum explicabo odit ea.
            </p>
        </div>
        <div className='p-5'>
        <div className='flex justify-between whitespace-nowrap items-center'>
            <h3 className='text-lg font-medium px-5 p-2 '>3. John Albert</h3>
            <div className='flex px-5 p-2 text-yellow-500 flex-nowrap'>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
            </div>
        </div>
            <p className='px-5 tracking-wide  text-secondary leading-6 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates dignissimos, ipsum explicabo odit ea.
            </p>
        </div>
        <div className='p-5'>
        <div className='flex justify-between whitespace-nowrap items-center'>
            <h3 className='text-lg font-medium px-5 p-2 '>4. John Albert</h3>
            <div className='flex px-5 p-2 text-yellow-500 flex-nowrap'>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
            </div>
        </div>
            <p className='px-5 tracking-wide  text-secondary leading-6 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates dignissimos, ipsum explicabo odit ea.
            </p>
        </div>
        <div className='p-5'>
        <div className='flex justify-between whitespace-nowrap items-center'>
            <h3 className='text-lg font-medium px-5 p-2 '>5. John Albert</h3>
            <div className='flex px-5 p-2 text-yellow-500 flex-nowrap'>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
            </div>
        </div>
            <p className='px-5 tracking-wide  text-secondary leading-6 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates dignissimos, ipsum explicabo odit ea.
            </p>
        </div>
    </div>
  )
}
