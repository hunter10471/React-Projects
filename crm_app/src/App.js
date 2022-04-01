import { useState } from "react";
import { Chart } from "./components/Chart";
import { Piechart } from "./components/Piechart";
import { Sidebar } from "./components/Sidebar";
import { Table } from "./components/Table";
import { Topbar } from "./components/Topbar";
import { TopCard } from "./components/TopCard";
import MenuIcon from '@mui/icons-material/Menu'


function App() {
  const [nav,setNav] = useState(true)
  return (
    <>
    <div className="flex bg-slate-100">
    <MenuIcon onClick={()=>setNav(!nav)}  className={`transition-all duration-200 absolute top-5 ${nav ? 'left-[22vw]' : 'left-[75px]'} cursor-pointer text-black`} />
      <Sidebar nav={nav} />
      <div className={` transition-all duration-200 w-full ${nav ? 'ml-[20vw]' : 'ml-[65px]'}  text-secondary`}>
       <Topbar/>
          <h1 className="absolute md:text-4xl font-heading font-semibold m-10">Overview</h1>
        <div className="flex flex-wrap lg:flex-row md:flex-col mt-20">
          <div className="flex md:w-[50vw] items-center justify-center p-5 flex-col flex-wrap" >
            <div className="flex flex-1 flex-wrap justify-center">
          <TopCard title={"Total Profit"} amount={"$54,0675"} percentage={32.75} sign={"+"}  />
          <TopCard title={"Total Expenses"} amount={"$1,04,565"} percentage={16.05} sign={"-"}  />
          <TopCard title={"Total Users"} amount={"2,40,405"} percentage={45.65} sign={"+"}  />
            </div>
          <Chart/>
          <Piechart/>
          </div>
          <div className="overflow-auto flex flex-1 h-fit max-h-[600px] min-w-[400px] mt-7 mx-6 p-5 shadow-lg rounded-md flex-col bg-white">
            <h2 className="text-xl tracking-wide font-bold font-heading  w-full rounded-t px-10 mt-5 my-5">Top trending products</h2>
          <Table/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
