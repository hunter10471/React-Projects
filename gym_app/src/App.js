import { CardCarousel } from "./components/CardCarousel";
import { EquipmentImgs } from "./components/EquipmentImgs";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { PricingContainer } from "./components/PricingContainer";

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <CardCarousel/>
    <EquipmentImgs/>
    <PricingContainer/>
    <Footer/>
    </>
  );
}

export default App;
