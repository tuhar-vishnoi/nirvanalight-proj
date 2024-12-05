import React from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import image5 from "./images/image5.jpg"; // Ensure this is the correct path to your image

const services = [
  {
    id: 1,
    title: "For Business",
    description:
      "Unlock the full potential of your business by understanding the hidden numerological influence behind your business name, logo, and more. Learn how numerology can guide your business decisions, timing, and brand identity for greater success.",
    route: "/business",
  },
  {
    id: 2,
    title: "For Individual",
    description:
      "Explore how numerology offers deep insights into your personality and destiny. Learn about your life path, soul urge, and expression number to understand your core strengths and challenges, empowering you to make informed life choices.",
    route: "/individual",
  },
  {
    id: 3,
    title: "Baby Name Design",
    description:
      "Choosing the perfect name for your baby is more than a personal decision—it can have a profound impact on their future. Learn how numerology can help you select a name that aligns with your baby’s life purpose and destiny.",
    route: "/babyName",
  },
  {
    id: 4,
    title: "Numerology Report",
    description:
      "Gain insight into the influence of numbers in your life by receiving a detailed numerology report. Learn how to choose the most harmonious number for your mobile, name, and other aspects to enhance fortune, luck, and personal growth.",
    route: "/mobilenumerology",
  },
];

const OurServices = () => {
  const navigate = useNavigate();

  // Check if the screen width is below 768px (mobile view)
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        position: "relative",
        backgroundImage: `url(${image5})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#ffffff",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "20px",
          color: "#032e42",
        }}
      >
        Our Services
      </h1>
      <div
        style={{
          width: "150px",
          height: "4px",
          background: "linear-gradient(to right, #FF7F50, #FFD700)",
          margin: "20px auto",
          borderRadius: "2px",
          animation: "fadeIn 2s",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: isMobile ? "center" : "space-between",
          gap: "20px",
        }}
      >
        {services.map((service, index) => (
          <div
            key={service.id}
            style={{
              flex: isMobile ? "1 1 100%" : "1 1 calc(30% - 20px)",
              maxWidth: isMobile ? "100%" : "30%",
              margin: index === 3 && !isMobile ? "0 auto" : "0", // Center 4th div horizontally
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              border: "4px solid orange",
              transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
              color: "#032e42",
            }}
            className="service-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
              e.currentTarget.style.borderColor = "#e67e22";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
              e.currentTarget.style.borderColor = "orange";
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                marginBottom: "10px",
              }}
            >
              {service.title}
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.5",
                color: "#676767",
              }}
            >
              {service.description}{" "}
              <span
                onClick={() => {
                  navigate(service.route);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                style={{
                  color: "#e67e22",
                  fontWeight: "bold",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Know More
              </span>
            </p>
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
              Book An Appointment
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
