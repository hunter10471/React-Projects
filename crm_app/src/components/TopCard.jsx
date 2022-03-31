import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

export const TopCard = ({title, amount, percentage, sign}) => {
  return (
    <div className="flex m-3">
    <div className=" h-40 shadow-lg bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg md:text-xl font-heading font-medium text-slate-400 tracking-wide mb-5">{title}</h3>
        <span className="flex items-center text-xl md:text-2xl font-semibold tracking-wider">
           {amount} <span className={`${sign === "+" ? "text-green-500" : "text-red-500"} text-base font-medium ml-5`}>{sign === "+" ? "+" : "-"} {percentage}% {sign === "+" ? <ArrowUpwardIcon className='text-green-500' fontSize="large" /> : <ArrowDownwardIcon className='text-red-500' fontSize="large" /> } </span>
        </span>
    </div>
</div>
  )
}
