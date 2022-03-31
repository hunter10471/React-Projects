import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import InsightsIcon from '@mui/icons-material/Insights';
import PaidIcon from '@mui/icons-material/Paid';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import LogoutIcon from '@mui/icons-material/Logout';
import ArticleIcon from '@mui/icons-material/Article';
import LockIcon from '@mui/icons-material/Lock';
import JoinRightIcon from '@mui/icons-material/JoinRight';

export const Sidebar = () => {
  return (
    <div className='fixed h-screen bg-gradient-to-bl from-slate-900 to-slate-800 w-60 md:w-96 flex flex-col items-center '>
        <h1 className='lg:text-2xl md:text-xl lg font-heading font-bold text-white h-fit w-[80%] text-center tracking-wide mt-5 '> <JoinRightIcon className='text-primary' fontSize='large' /><span className=' bg-clip-text text-transparent bg-gradient-to-r from-primary mr-1'>unity </span>CRM</h1>
        <div className='flex flex-col w-full mt-10 text-sm md:text-base '>
            <div className='flex items-center text-white p-5 bg-slate-800 w-full relative'>
                <span className='flex items-center justify-around'><HomeIcon className='mr-5'/> Dashboard</span>
                <span className='absolute right-5 justify-around py-1 px-6 rounded-lg bg-blue-600'>5</span>
            </div>
            <div className='flex text-slate-400 flex-col justify-between'>
              <div className='m-10'>
                <h2 className='font-heading'>
                  ADMINISTRATION
                </h2>
                <div className='mt-5 px-5 py-2 rounded-md  transition-all cursor-pointer hover:bg-slate-800 hover:text-white w-full'>
                  <DataUsageIcon className='mr-4' /> Analytics
                </div>
                <div className='mt-5 px-5 py-2 rounded-md  transition-all cursor-pointer hover:bg-slate-800 hover:text-white w-full'>
                  <GroupIcon className='mr-4' /> Customers
                </div>
                <div className='mt-5 px-5 py-2 rounded-md  transition-all cursor-pointer hover:bg-slate-800 hover:text-white w-full'>
                  <PaidIcon className='mr-4' /> Revenue
                </div>
                <div className='mt-5 px-5 py-2 rounded-md  transition-all cursor-pointer hover:bg-slate-800 hover:text-white w-full'>
                  <InsightsIcon className='mr-4' /> Graphs
                </div>
              </div>
              <div className='m-10'>
                <h2 className='font-heading'>
                  PAGES
                </h2>
                <div className='mt-5 px-5 py-2 rounded-md  transition-all cursor-pointer hover:bg-slate-800 hover:text-white w-full'>
                  <LockIcon className='mr-4' /> Accounts
                </div>
                <div className='mt-5 px-5 py-2 rounded-md  transition-all cursor-pointer hover:bg-slate-800 hover:text-white w-full'>
                  <ArticleIcon className='mr-4' /> Reviews
                </div>
                <div className='mt-5 px-5 py-2 rounded-md  transition-all cursor-pointer hover:bg-slate-800 hover:text-white w-full'>
                  <ReportProblemIcon className='mr-4' /> Issues
                </div>
              </div>
              <div className='absolute bottom-6 flex px-8 py-4 rounded-md  transition-all cursor-pointer hover:bg-slate-800 hover:text-white w-full'>
                  <LogoutIcon className='mr-6' /> Logout
                </div>
            </div>
        </div>
    </div>
  )
}
