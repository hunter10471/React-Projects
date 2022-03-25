import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { Footer } from "./components/Footer";

function App() {
  return ( 
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/blog" element={<Blog/> } />
    </Routes>
    <Footer/>
    </Router>
    
  );
}

export default App;
