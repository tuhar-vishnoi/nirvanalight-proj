import React from "react";
import image4 from "./images/image4.jpg"; // Import the image

const AboutNum = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${image4})`,
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
          Discover the Power of Numerology
        </h1>
        <div
          style={{
            width: "300px",
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
          Numerology is the ancient study of numbers and their hidden meanings,
          offering profound insights into our lives. It is based on the belief
          that numbers have unique vibrations and energies that influence
          everything from our personalities to our life paths. By understanding
          these patterns, you can unlock deep insights into your destiny,
          strengths, challenges, and relationships. Every individual has a Life
          Path Number, calculated from their birthdate, which reveals their core
          purpose and direction in life. The Destiny Number, derived from your
          full name, uncovers your true potential and what you are meant to
          accomplish in this lifetime.The Soul Urge Number dives into your
          innermost desires, revealing what your heart truly seeks, while Karmic
          Numbers highlight the lessons you need to learn, shedding light on how
          past actions influence your present journey.
        </p>
      </div>
    </div>
  );
};

export default AboutNum;
