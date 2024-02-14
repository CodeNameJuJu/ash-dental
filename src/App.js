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
import TreatmentDetails from "./components/treatmentDetails";
import ScrollToTop from "./components/scrollToTop";
import CosmeticDentistry  from "../src/components/subServices/cosmeticDentistry";
import TeethWhitening from  "../src/components/subServices/teethWhitening";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:treatId" element={<TreatmentDetails />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/cosmeticDentistry" element={<CosmeticDentistry />} />
          <Route path="/teethWhitening" element={<TeethWhitening />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
