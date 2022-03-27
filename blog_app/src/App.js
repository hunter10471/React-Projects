import { Navbar } from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { Footer } from "./components/Footer";
import { useEffect } from "react";

function App() {

  const ScrollToTop = () =>{
    const {pathname} = useLocation()
    useEffect(()=>{
      window.scrollTo(0,0)
    },[pathname])
    return null
  }
  
  return ( 
    <Router>
      <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/blog/:id" element={<Blog/> } />
    </Routes>
    <Footer/>
    </Router>
    
  );
}

export default App;
