import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import { TopCard } from "./components/TopCard";

function App() {
  return (
    <>
    <div className="flex h-screen w-screen">
      <Sidebar/>
      <div className="text-secondary w-full">
       <Topbar/>
        <div className="flex relative bg-slate-100">
          <h1 className="absolute md:text-4xl font-heading font-semibold m-5">Overview</h1>
          <div className="flex flex-wrap mt-20" >
          <TopCard title={"Total Profit"} amount={"$54,0675"} percentage={32.75} sign={"+"}  />
          <TopCard title={"Total Expenses"} amount={"$1,04,565"} percentage={16.05} sign={"-"}  />
          <TopCard title={"Total Users"} amount={"2,40,405"} percentage={45.65} sign={"+"}  />
          </div>
          <div className="flex flex-col items-center mt-20">
            <h2 className="text-lg font-medium font-heading">Top trending products</h2>
          <table>
            <tr>
              <th></th>
            </tr>
          </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
