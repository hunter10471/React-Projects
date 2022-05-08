import ReorderIcon from '@mui/icons-material/Reorder';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import PieChartIcon from '@mui/icons-material/PieChart';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const sx = {fontSize:{lg:25,sm:20},marginRight:1}

export const sidebarData = [
    {
        label:'Dashboard',
        icon:<LeaderboardOutlinedIcon sx={sx} />
    },
    {
        label:'Orders',
        icon:<ReorderIcon sx={sx} />
    },
    {
        label:'Users',
        icon:<PeopleAltOutlinedIcon sx={sx} />,
    },
    {
        label:'Products',
        icon:<ShoppingBagIcon sx={sx} />
    },
    {
        label:'Support',
        icon:<SupportAgentOutlinedIcon sx={sx} />
    },
    {
        label:'Problems',
        icon:<OutlinedFlagIcon sx={sx} />
    },
    {
        label:'Settings',
        icon:<SettingsOutlinedIcon sx={sx} />
    },
    {
        label:'Logout',
        icon:<LogoutOutlinedIcon sx={sx} />
    }
]


export const cardData = [
    {
        title:'Total Sales',
        money:'$27,03,000',
        icon:<ShoppingBagIcon sx={sx} />,
        profit: '30',
        iconColor:'text-orange-500'
    },
    {
        title:'Total Expenses',
        money:'$12,800',
        icon:<PieChartIcon sx={sx} />,
        iconColor:'text-indigo-500',
        loss:'10'
    },
    {
        title:'Total Visitors',
        money:'153,25,000',
        icon:<SupervisedUserCircleIcon sx={sx} />,
        profit:'34',
        iconColor:'text-blue-500',
    },
    {
        title:'Total Orders',
        money:'11,200',
        icon:<ShoppingCartIcon sx={sx} />,
        loss:'5',
        iconColor:'text-rose-500'
    }
]



