import React from "react";
import { Typography, useMediaQuery } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faHeart,
  faRing,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Individual = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const data = [
    {
      icon: (
        <FontAwesomeIcon
          icon={faBriefcase}
          style={{ fontSize: isMobile ? "100px" : "300px", color: "orange" }}
        />
      ),
      heading: "Carrer and Job",
      text: "Numerology for career offers insights into your natural strengths, talents, and idealwork environment by analyzing key numbers, such as your Life Path Number andExpression Number. These numbers help identify career paths and roles that alignwith your innate abilities, increasing your chances of success and fulfillment.\n\nNumerology also guides timing, helping you choose the best periods for careerchanges, promotions, or new ventures. By aligning your professional decisions withfavorable numerological influences, you can navigate your career path with greaterclarity, ensuring your choices resonate with your true potential and lead to lastingsuccess",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faHeart}
          style={{ fontSize: isMobile ? "100px" : "350px", color: "orange" }}
        />
      ),
      heading: "Relationship and compatibility",
      text: "Numerology can offer deep insights into relationship compatibility by examining theunique vibrational energies of each person. By studying your core numbers—suchas the Life Path, Expression, and Soul Urge Numbers—you can betterunderstand your partner’s emotional needs, communication style, and life goals. Thisknowledge helps to reveal areas of harmony as well as potential challenges in therelationship. Numerology can also guide you in recognizing the strengths eachpartner brings, fostering a more balanced and supportive connection. Ultimately, itprovides a blueprint for enhancing understanding, improving communication, andbuilding a lasting, fulfilling relationship.",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faRing}
          style={{ fontSize: isMobile ? "100px" : "350px", color: "orange" }}
        />
      ),
      heading: "Marriage",
      text: "Numerology can guide the best timing for marriage, partner compatibility, andchoosing an ideal marriage year. By analyzing personal numbers, numerologyreveals the right age and time for a successful union. It highlights the years mostfavorable for marriage ,ensuring alignment with harmonious energies. Compatibilitybetween partners can also be assessed through numerology, identifying emotionalharmony and areas of growth. Ultimately, numerology helps couples make informeddecisions for a blissful, balanced, and enduring marriage.",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faUser}
          style={{ fontSize: isMobile ? "100px" : "300px", color: "orange" }}
        />
      ),
      heading: "Name Numerology",
      text: "Name numerology is one of the most powerful components of numerology, as it reveals the deep influence your name has on your personality, life path, and overalldestiny. Every letter in your name carries a specific numerical vibration, and bycalculating the numbers associated with your full birth name, you uncover the hiddenenergies that shape your life’s experiences.",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#FAEBD7",
        padding: "20px",
        display: "grid",
        gap: "20px",
        gridTemplateColumns: "1fr",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Poppins",
          fontWeight: 600,
          color: "#032e42",
          textAlign: "center",
        }}
      >
        Unlock Your Potential with Numerology Insights
      </Typography>
      <div
        style={{
          width: isMobile ? "150px" : "550px",
          height: "4px",
          background: "linear-gradient(to right, #FF7F50, #FFD700)",
          borderRadius: "2px",
          animation: "fadeIn 2s",
          margin: "0 auto 30px auto",
        }}
      ></div>
      {data.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row", // Changed to column for mobile-first
            alignItems: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          {/* Icon for mobile view first */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
              flex: 1,
            }}
          >
            {item.icon}
          </div>

          {/* Text content */}
          <div
            style={{
              flex: 1,
              padding: "20px",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Heading */}
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Poppins",
                fontWeight: 600,
                color: "orange",
                marginBottom: "10px",
                fontSize: "25px",
              }}
            >
              {item.heading}
            </Typography>

            {/* Description - Multiple paragraphs */}
            {item.text.split("\n\n").map((paragraph, pIndex) => (
              <Typography
                key={pIndex}
                variant="body1"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  color: "#032e42",
                  marginBottom:
                    pIndex !== item.text.split("\n\n").length - 1
                      ? "20px"
                      : "0",
                }}
              >
                {paragraph}
              </Typography>
            ))}

            {/* Button */}
            <a
              href="https://wa.me/9711120664"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "orange",
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
                borderRadius: "5px",
                marginTop: "15px",
                transition: "background-color 0.3s",
                textTransform: "capitalize",
              }}
            >
              Contact Now
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Individual;
