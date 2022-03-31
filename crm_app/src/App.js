import { Chart } from "./components/Chart";
import { Sidebar } from "./components/Sidebar";
import { Table } from "./components/Table";
import { Topbar } from "./components/Topbar";
import { TopCard } from "./components/TopCard";

function App() {
  return (
    <>
    <div className="flex h-screen">
      <Sidebar/>
      <div className=" ml-60 md:ml-96 bg-slate-100 text-secondary">
       <Topbar/>
          <h1 className="absolute md:text-4xl font-heading font-semibold m-10">Overview</h1>
        <div className="flex flex-1 mt-20 h-fit w-full ">
          <div className="flex h-full justify-between flex-wrap" >
          <TopCard title={"Total Profit"} amount={"$54,0675"} percentage={32.75} sign={"+"}  />
          <TopCard title={"Total Expenses"} amount={"$1,04,565"} percentage={16.05} sign={"-"}  />
          <TopCard title={"Total Users"} amount={"2,40,405"} percentage={45.65} sign={"+"}  />
          <Chart/>
          </div>
          <div className="flex flex-2 h-full px-5 max-w-[500px] min-w-[300px] shadow-lg rounded-md flex-col items-center my-3 mx-2 bg-white">
            <h2 className="text-xl tracking-wide font-bold font-heading  w-full rounded-t px-10 mt-10 my-5">Top trending products</h2>
          <Table/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
