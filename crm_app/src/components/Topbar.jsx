import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Topbar = () => {
  return (
    <div className='w-full px-6 py-3 shadow-md flex justify-between items-center bg-white'>
        <MenuIcon className='cursor-pointer' />
        <div className='flex items-center'>
            <div className='relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-[50%] '>
            <NotificationsIcon className='mr-5  cursor-pointer' />
            </div>
            <SettingsIcon className='mr-5  cursor-pointer' />
            <span className='flex items-center'>
                <img className='h-10 w-10 rounded-[50%] mr-5' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                Daniel Ralph
                <KeyboardArrowDownIcon className='ml-4 cursor-pointer' />
            </span>
        </div>
    </div>
  )
}
