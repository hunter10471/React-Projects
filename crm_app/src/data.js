import shoes from './images/shoes.jpg'
import bag from './images/bag.jpg'
import shirt from './images/shirt.jpg'
import wallet from './images/wallet.jpg'
import hoody from './images/hoody.jpg'
import GroupIcon from '@mui/icons-material/Group';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import InsightsIcon from '@mui/icons-material/Insights';
import PaidIcon from '@mui/icons-material/Paid';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ArticleIcon from '@mui/icons-material/Article';
import LockIcon from '@mui/icons-material/Lock';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';


export const data = [
    {
        title:"Nike shoes",
        img:shoes,
        revenue:"$ 940"
    },
    {
        title:"Gucci bag",
        img:bag,
        revenue:"$ 710"
    },
    {
        title:"Daniel wallets",
        img:wallet,
        revenue:"$ 420"
    },
    {
        title:"Ronda's hoodies",
        img:hoody,
        revenue:"$ 240"
    },
    {
        title:"Triumph shirts",
        img:shirt,
        revenue:"$ 125"
    },
    {
        title:"Triumph shirts",
        img:shirt,
        revenue:"$ 125"
    },
    {
        title:"Triumph shirts",
        img:shirt,
        revenue:"$ 125"
    },
    {
        title:"Triumph shirts",
        img:shirt,
        revenue:"$ 125"
    },
    {
        title:"Triumph shirts",
        img:shirt,
        revenue:"$ 125"
    },
    {
        title:"Triumph shirts",
        img:shirt,
        revenue:"$ 125"
    },
    {
        title:"Triumph shirts",
        img:shirt,
        revenue:"$ 125"
    },
    {
        title:"Triumph shirts",
        img:shirt,
        revenue:"$ 125"
    },
    {
        title:"Triumph shirts",
        img:shirt,
        revenue:"$ 125"
    },
    {
        title:"Triumph shirts",
        img:shirt,
        revenue:"$ 125"
    },
    {
        title:"Triumph shirts",
        img:shirt,
        revenue:"$ 125"
    },
    {
        title:"Triumph shirts",
        img:shirt,
        revenue:"$ 125"
    },
    {
        title:"Triumph shirts",
        img:shirt,
        revenue:"$ 125"
    },


]


export const administration = [
    {
        title:"Analytics",
        Icon:<DataUsageIcon className='mr-4' />
    },
    {
        title:"Customers",
        Icon:<GroupIcon className='mr-4' />
    },
    {
        title:"Revenue",
        Icon:<PaidIcon className='mr-4' />
    },
    {
        title:"Graphs",
        Icon:<InsightsIcon className='mr-4' />
    },
    
]

export const pages = [
    {
        title:"Accounts",
        Icon:<LockIcon className='mr-4' />,
    },
    {
        title:"Reviews",
        Icon:<ArticleIcon className='mr-4' />,
    },
    {
        title:" Issues",
        Icon:<ReportProblemIcon className='mr-4' />,
    },
]


export const tableData = [
    {
        id:1,
        name:'Trevos Shirts',
        client:'Maxim textiles',
        createdAt:'12-03-22',
        status:'completed',
        price:'$3500',
        icon:<span className='flex justify-around cursor-pointer text-slate-400'><DownloadIcon/><DeleteIcon/></span>,
    },
    {
        id:2,
        name:'Denim jeans',
        client:'Jeans atheltico',
        createdAt:'18-07-21',
        status:'cancelled',
        price:'$1200',
        icon:<span className='flex justify-around cursor-pointer text-slate-400'><DownloadIcon/><DeleteIcon/></span>,
    },
    {
        id:3,
        name:'Pizza cheese',
        client:'Cheddar brothers',
        createdAt:'25-01-22',
        status:'completed',
        price:'$4300',
        icon:<span className='flex justify-around cursor-pointer text-slate-400'><DownloadIcon/><DeleteIcon/></span>,
    },
    {
        id:4,
        name:'Proxima medicines',
        client:'PharmaTech.',
        createdAt:'02-08-21',
        status:'in process',
        price:'$3500',
        icon:<span className='flex justify-around cursor-pointer text-slate-400'><DownloadIcon/><DeleteIcon/></span>,
    },
    {
        id:5,
        name:'Reebok shoes',
        client:'Reebok',
        createdAt:'12-02-22',
        status:'completed',
        price:'$7500',
        icon:<span className='flex justify-around cursor-pointer text-slate-400'><DownloadIcon/><DeleteIcon/></span>,
    },
    {
        id:5,
        name:'Proxima medicines',
        client:'PharmaTech.',
        createdAt:'02-08-21',
        status:'in process',
        price:'$3500',
        icon:<span className='flex justify-around cursor-pointer text-slate-400'><DownloadIcon/><DeleteIcon/></span>,
    },
    {
        id:6,
        name:'Denim jeans',
        client:'Jeans atheltico',
        createdAt:'18-07-21',
        status:'cancelled',
        price:'$1200',
        icon:<span className='flex justify-around cursor-pointer text-slate-400'><DownloadIcon/><DeleteIcon/></span>,
    },
]