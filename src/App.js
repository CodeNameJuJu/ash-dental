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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
