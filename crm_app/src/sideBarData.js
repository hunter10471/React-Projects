import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';


const sx = {fontSize:25,marginRight:0.5}

const data = [
    {
        label:'Search',
        highlighted:true,
        icon:<SearchIcon sx={sx} />
    },
    {
        label:'Home',
        highlighted:false,
        icon:<HomeOutlinedIcon sx={sx} />
    },
    {
        label:'Projects',
        highlighted:false,
        icon:<AccountTreeOutlinedIcon sx={sx} />
    },
    {
        label:'Users',
        highlighted:false,
        icon:<PeopleAltOutlinedIcon sx={sx} />,
    },
    {
        label:'Dashboard',
        highlighted:false,
        icon:<LeaderboardOutlinedIcon sx={sx} />
    },
    {
        label:'Tasks',
        highlighted:false,
        icon:<TaskAltOutlinedIcon sx={sx} />
    },
    {
        label:'Support',
        highlighted:false,
        icon:<SupportAgentOutlinedIcon sx={sx} />
    },
    {
        label:'Problems',
        highlighted:false,
        icon:<OutlinedFlagIcon sx={sx} />
    },
    {
        label:'Settings',
        highlighted:false,
        icon:<SettingsOutlinedIcon sx={sx} />
    },
    {
        label:'Logout',
        highlighted:false,
        icon:<LogoutOutlinedIcon sx={sx} />
    }
]


export default data;