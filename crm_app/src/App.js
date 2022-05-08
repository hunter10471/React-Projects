import { Card } from "./components/Card";
import { SearchBar } from "./components/SearchBar";
import { Sidebar } from "./components/Sidebar";
import { BarChart } from "./components/BarChart";
import {cardData} from './Data';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Tooltip } from "@mui/material";
import img from './imgs/bg.png'
import { ProductsAndUsers } from "./components/ProductsAndUsers";
import { Goal } from "./components/Goal";

function App() {
  return (<>
    <div className="w-full h-screen z-[10] text-[#1a1d1d]">
      <Sidebar />
      <div className="flex">
      <div className="w-[70%] border-r-2 my-5 ml-[55px] z-[10] p-8">
      <SearchBar/>
        <h1 className="font-heading text-2xl font-medium">Dashboard</h1>
        <div className="flex flex-wrap justify-between my-5">
          {
            cardData.map(el=>{
              return <Card title={el.title} loss={el.loss} profit={el.profit} money={el.money} iconColor={el.iconColor} icon={el.icon} />
            })
          }
        </div>
          <div className="border-2 my-5 p-4 rounded-md shadow-sm">
            <BarChart/>
          </div>
      </div>
      <div className="ml-[55px] sm:ml-0 w-[30%] my-5 p-8 z-[100] ">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <Tooltip title='Notifications' placement="right" arrow>
            <span className="p-2 border-2 rounded-[50%] text-gray-500 hover:text-gray-700 cursor-pointer w-fit mb-2">
              <NotificationsIcon sx={{fontSize:25}} />
            </span>
            </Tooltip>
            <Tooltip title='Edit profile' placement="right" arrow >
            <span className="p-2 border-2 rounded-[50%] text-gray-500 hover:text-gray-700 cursor-pointer w-fit mt-2">
              <DriveFileRenameOutlineIcon sx={{fontSize:25}} />
            </span>
            </Tooltip>
          </div>
          <div className="flex">
            <Tooltip title='Privacy Settings' placement="left" >
            <span className="p-2 border-2 rounded-[50%] text-gray-500 hover:text-gray-700 cursor-pointer w-fit">
            <AdminPanelSettingsIcon sx={{fontSize:25}} />
            </span>
            </Tooltip>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={img} className="pointer-events-none rounded-[50%] w-[180px] h-[180px]" alt="profile" />
          <h2 className="my-5 text-2xl capitalize font-medium tracking-wide font-heading ">Rafay Zia</h2>
          <ProductsAndUsers/>
        </div>
        <div className="w-full">
          <h2 className="m-4 text-xl font-semibold">Goals</h2>
          <Goal/>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}

export default App;
