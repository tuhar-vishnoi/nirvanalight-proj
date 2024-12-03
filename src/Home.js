import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "./Banner";
import AboutNum from "./AboutNum";
import OurServices from "./OurServices";
import AboutUs from "./AboutUs";
import Consultation from "./Consultation";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div>
      <section id="home" data-aos="fade-in">
        <Banner />
      </section>
      <section data-aos="fade-up">
        <AboutNum />
      </section>
      <section id="services" data-aos="zoom-in">
        <OurServices />
      </section>
      <section id="about-us" data-aos="fade-left">
        <AboutUs />
      </section>
      <section id="contact" data-aos="slide-up">
        <Consultation />
      </section>
    </div>
  );
};

export default Home;
