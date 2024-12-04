import React from "react";
import { Typography, useMediaQuery } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBaby } from "@fortawesome/free-solid-svg-icons";

const Babyname = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const data = [
    {
      icon: (
        <FontAwesomeIcon
          icon={faBaby}
          style={{ fontSize: isMobile ? "100px" : "300px", color: "orange" }}
        />
      ),
      heading: "Baby name Design",
      text: "A baby’s name carries immense significance as it shapes their life path, personality, and destiny. The vibrational energy of the name influences the child’s character,emotional responses, and life experiences. By selecting a name based onnumerological principles, you can ensure that your child’s name aligns with positiveenergies that support their growth, success, and overall well-being.\n\nNumerology can help you avoid names with unfavourable numbers, which maycause unnecessary challenges or conflicts in your child’s life. By choosing a namethat harmonizes with their numerological blueprint, you can enhance their personalenergy, helping them navigate life with confidence and clarity.\n\nUltimately, selecting a baby name based on numerology is a thoughtful andempowering decision that can help set the stage for a prosperous, harmonious, andfulfilling life.",
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
        Unlock the Power of Names for Your Baby's Future
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

export default Babyname;
