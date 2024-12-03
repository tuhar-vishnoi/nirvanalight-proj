import React from "react";
import image6 from "./images/image6.jpg";

const AboutUs = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${image6})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          paddingTop: "50px",
          paddingBottom: "50px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            margin: "0",
            fontWeight: "bold",
            color: "#032e42",
          }}
        >
          About Us
        </h1>
        <div
          style={{
            width: "100px",
            height: "4px",
            background: "linear-gradient(to right, #FF7F50, #FFD700)",
            margin: "20px auto",
            borderRadius: "2px",
            animation: "fadeIn 2s",
          }}
        ></div>
        <p
          style={{
            fontSize: "1rem",
            marginTop: "15px",
            lineHeight: "1.5",
            paddingLeft: "10%",
            paddingRight: "10%",
            // color: "black",
            fontWeight: "500",
            color: "#676767",
          }}
        >
          Welcome to Nirvana Light , where the timeless power of numerology is
          harnessed to shape your future and elevate your business.
          Understanding and aligning with your unique numerical blueprint can
          unlock extraordinary possibilities. Our tailored services are designed
          to help you navigate life's journey with confidence, whether through
          personalized insights from your birth numbers and planetary influences
          or by optimizing names and logos to resonate with your deepest
          aspirations.
          <br />
          <br />
          Imagine transforming your signature into a powerful tool that attracts
          success, or aligning your business strategies with numerological
          principles to boost growth and harmony. Our expertise extends to
          mobile numerology, ensuring your contact number vibrates with positive
          energy and attracting abundance , also crafting logos that perfectly
          reflect and enhance your brand’s essence and vision.
          <br />
          <br />
          By integrating the wisdom of numerology into your personal and
          professional life, we help you make informed decisions and embrace
          opportunities that align with your true potential. Step into a world
          where numbers guide you to a more fulfilling and prosperous future
          with Nirvana Light .
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
