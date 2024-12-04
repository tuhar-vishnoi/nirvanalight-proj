import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ThreeDots } from "react-loader-spinner";
import Header from "./Header";
import Home from "./Home";
import OurServices from "./OurServices";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Blog from "./Blog";
import Privacy from "./Privacy";
import Business from "./Business";
import Individual from "./Individual";
import Babyname from "./Babyname";
import NumerologyReport from "./NumerologyReport";

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
            <Route path="/blog" element={<Blog />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/business" element={<Business />} />
            <Route path="/individual" element={<Individual />} />
            <Route path="/babyName" element={<Babyname />} />
            <Route path="/NumerologyReport" element={<NumerologyReport />} />
          </Routes>
        )}
        <Footer /> {/* Footer will appear on every page */}
      </div>
    </Router>
  );
}

export default App;
