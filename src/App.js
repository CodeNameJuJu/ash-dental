import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Main.css';
import Navbar from "./components/navbar";
import Footer from './components/footer';
import WhatsAppButton from "./components/whatsapp"
import ScrollToTop from "./components/scrollToTop";
import Home from './views/home';
import About from './views/about';
import Services from "./views/services";
import Technology from "./views/technology";
import Contact from './views/contact';
import Gallery from './views/gallery';
import CosmeticDentistry  from "./components/subServices/cosmeticDentistry";
import TeethWhitening from "./components/subServices/teethWhitening";
import Orthodontics from "./components/subServices/orthodontics";
import GeneralDentistry from "./components/subServices/generalDentistry";
import Emergencies from "./components/subServices/emergencies";
import Dental from "./components/subServices/dental";
import Crowns from "./components/subServices/crowns";
import Specials from './components/specials/specials';
import FacialAesthetics from "./components/subServices/facialAesthetics";
import SkinHealthBeauty from "./components/subServices/skinHealthBeauty";


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
          <Route path="/facialAesthetics" element={<FacialAesthetics />} />
          <Route path="/orthodontics" element={<Orthodontics />} />
          <Route path="/generalDentistry" element={<GeneralDentistry />} />
          <Route path="/skinHealthBeauty" element={<SkinHealthBeauty />} />
          <Route path="/emergencies" element={<Emergencies />} />
          <Route path="/specials" element={<Specials />} />
        </Routes>
        <WhatsAppButton />
        <Footer /> 
      </BrowserRouter>
    </div>
  );
}

export default App;

// ******************************************************************* EOF ******************************************************************************
