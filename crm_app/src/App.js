import { SearchBar } from "./components/SearchBar";
import { Sidebar } from "./components/Sidebar";
import { UserSection } from "./components/UserSection";
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Spinner } from './components/Spinner';
import { AnimatePresence } from "framer-motion";



const Dashboard = lazy(()=> import('./pages/Dashboard'));
const Orders = lazy(()=>import('./pages/Orders'));
const Users = lazy(()=>import('./pages/Users'));
const Products = lazy(()=>import('./pages/Products'));


function App() {
  return (

      <Router>
    <div className="w-full h-screen z-[10] text-[#1a1d1d]">
      <Sidebar />
      <div className="flex">
      <div className="w-[70%] border-r-2 my-5 ml-[55px] z-[10] p-8">
      <SearchBar/>
        <Suspense fallback={<Spinner/>} >
          <AnimatePresence exitBeforeEnter >
    <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/Orders' element={<Orders/>} />
        <Route path='/Users' element={<Users/>} />
        <Route path='/Products' element={<Products/>} /> 
    </Routes>
          </AnimatePresence>
        </Suspense>
      </div>
      <UserSection/>
      </div>
    </div>
    </Router>
  );
}

export default App;
