import { Sidebar } from "./components/Sidebar";
import { Table } from "./components/Table";
import { Topbar } from "./components/Topbar";
import { TopCard } from "./components/TopCard";

function App() {
  return (
    <>
    <div className="flex h-screen w-screen">
      <Sidebar/>
      <div className=" ml-60 md:ml-96 text-secondary w-full">
       <Topbar/>
        <div className="flex relative bg-slate-100">
          <h1 className="absolute md:text-4xl font-heading font-semibold m-5">Overview</h1>
          <div className="flex flex-1 flex-wrap mt-20" >
          <TopCard title={"Total Profit"} amount={"$54,0675"} percentage={32.75} sign={"+"}  />
          <TopCard title={"Total Expenses"} amount={"$1,04,565"} percentage={16.05} sign={"-"}  />
          <TopCard title={"Total Users"} amount={"2,40,405"} percentage={45.65} sign={"+"}  />
          </div>
          <div className="flex max-w-[500px] min-w-[300px] mr-4 shadow-lg rounded-md flex-col items-center mt-20 bg-white">
            <h2 className="text-xl tracking-wide font-bold font-heading  w-full rounded-t p-10">Top trending products</h2>
          <Table/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
