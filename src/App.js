import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Main.css';
import Home from './views/home';
import Services from "./views/services";
import Teams from './views/teams';
import Contact from './views/contact';
import Gallery from './views/gallery';
import Navbar from "./components/navbar";
import Footer from './components/footer';
import TreatmentDetails from "./components/treatmentDetails";
import ScrollToTop from "./components/scrollToTop";

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
          <Route path="/teams" element={<Teams />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
