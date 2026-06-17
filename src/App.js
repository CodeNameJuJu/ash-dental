import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './Main.css';
import Navbar from "./components/navbar";
import Footer from './components/footer';
import WhatsAppButton from "./components/whatsapp"
import ScrollToTop from "./components/scrollToTop";

const Home = lazy(() => import('./views/home'));
const About = lazy(() => import('./views/about'));
const Services = lazy(() => import("./views/services"));
const Technology = lazy(() => import("./views/technology"));
const Contact = lazy(() => import('./views/contact'));
const Gallery = lazy(() => import('./views/gallery'));
const CosmeticDentistry = lazy(() => import("./components/subServices/cosmeticDentistry"));
const TeethWhitening = lazy(() => import("./components/subServices/teethWhitening"));
const Orthodontics = lazy(() => import("./components/subServices/orthodontics"));
const GeneralDentistry = lazy(() => import("./components/subServices/generalDentistry"));
const Emergencies = lazy(() => import("./components/subServices/emergencies"));
const Dental = lazy(() => import("./components/subServices/dental"));
const Crowns = lazy(() => import("./components/subServices/crowns"));
const Specials = lazy(() => import("./components/specials/specials"));
const FacialAesthetics = lazy(() => import("./components/subServices/facialAesthetics"));
const SkinHealthBeauty = lazy(() => import("./components/subServices/skinHealthBeauty"));


function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
       <Navbar />
        <ScrollToTop />
        <Suspense fallback={<div className="text-center pt-5 mt-5"><h2 className="gold">Loading...</h2></div>}>
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
        </Suspense>
        <WhatsAppButton />
        <Footer /> 
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
