import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Main.css';
import Home from './views/home';
import About from './views/about';
import Services from "./views/services";
import Technology from "./views/technology";
import Contact from './views/contact';
import Gallery from './views/gallery';
import Navbar from "./components/navbar";
import Footer from './components/footer';
import ScrollToTop from "./components/scrollToTop";
import CosmeticDentistry  from "../src/components/subServices/cosmeticDentistry";
import TeethWhitening from  "../src/components/subServices/teethWhitening";
import Orthodontics from  "../src/components/subServices/orthodontics";
import GeneralDentistry from  "../src/components/subServices/generalDentistry";
import Emergencies from  "../src/components/subServices/emergencies";
import Dental from  "../src/components/subServices/dental";
import Crowns from  "../src/components/subServices/crowns";


function App() {
  return (
    <div>
      <BrowserRouter>
       <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/cosmeticDentistry" element={<CosmeticDentistry />} />
          <Route path="/teethWhitening" element={<TeethWhitening />} />
          <Route path="/crowns" element={<Crowns />} />
          <Route path="/dental" element={<Dental />} />
          <Route path="/orthodontics" element={<Orthodontics />} />
          <Route path="/generalDentistry" element={<GeneralDentistry />} />
          <Route path="/emergencies" element={<Emergencies />} />
        </Routes>
        <Footer /> 
      </BrowserRouter>
    </div>
  );
}

export default App;

// ******************************************************************* EOF ******************************************************************************
