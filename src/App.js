import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ThreeDots } from "react-loader-spinner";
import Header from "./Header";
import Home from "./Home";
import OurServices from "./OurServices";
import AboutUs from "./AboutUs";
import NameNumerology from "./NameNumerology";
import Footer from "./Footer";
import PersonalNumerology from "./PersonalNumerology";
import CorporateNumerology from "./CorporateNumerology";
import MobileNumerology from "./MobileNumerology";
import SignatureAnalysis from "./SignatureAnalysis";
import LogoAnalysis from "./LogoAnalysis";
import HoroscopeApp from "./HoroscopeApp ";
import Blog from "./Blog";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        {loading ? (
          <div className="loader-container">
            <ThreeDots
              color="orange"
              height={130}
              width={130}
              ariaLabel="loading-indicator"
            />
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<OurServices />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/namenumerology" element={<NameNumerology />} />
            <Route
              path="/personalnumerology"
              element={<PersonalNumerology />}
            />
            <Route
              path="/corporatenumerology"
              element={<CorporateNumerology />}
            />
            <Route path="/mobilenumerology" element={<MobileNumerology />} />
            <Route path="/signatureanalysis" element={<SignatureAnalysis />} />
            <Route path="/logoanalysis" element={<LogoAnalysis />} />
            <Route path="/horoscope" element={<HoroscopeApp />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        )}
        <Footer /> {/* Footer will appear on every page */}
      </div>
    </Router>
  );
}

export default App;
