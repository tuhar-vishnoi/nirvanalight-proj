import React from "react";
import { Typography, useMediaQuery } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DevicesIcon from "@mui/icons-material/Devices";

const Business = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const data = [
    {
      icon: (
        <ApartmentIcon
          sx={{ fontSize: isMobile ? "100px" : "350px", color: "orange" }}
        />
      ),
      heading: "Company Name",
      text: "When it comes to building a brand, every detail counts, and one of the mostpowerful, yet often overlooked, aspects of business success is the energy of yourcompany name. Numerology, the ancient science of numbers and their vibrationalfrequencies, plays a crucial role in how a business name can influence growth,reputation, and overall success.\n\nThe wrong company name can inadvertently bring negative vibrations, leading tostruggles in growth, financial difficulties, or poor customer relations. Numerology canhelp you avoid these pitfalls by showing you how a name’s numbers might clash withyour business’s objectives. You may also uncover insights into timing (e.g., optimalmoments for launching) or potential challenges that can be addressed early on.\n\nBy working with numerology, you can identify a name that mirrors your company core values and goals. Whether you’re launching a startup, rebranding, or simplychoosing a new venture name, numerology helps align your brand with the universalenergies that can help attract the right customers and opportunities..",
    },
    {
      icon: (
        <AcUnitIcon
          sx={{ fontSize: isMobile ? "100px" : "350px", color: "orange" }}
        />
      ),
      heading: "Company logo",
      text: "Your company logo is much more than just a visual symbol—it is the first impression,the face of your brand, and a powerful tool that communicates the essence of yourbusiness to the world. When combined with the principles of numerology, your logocan resonate with specific energies and vibrations that align with your company’smission, values, and growth aspirations.\n\njust like with the business name, numerology can also be used to analyze yourcompany’s logo by evaluating its overall vibrational frequency. By ensuring that yourlogo’s design (from shapes to colors to number influences) aligns with thenumerological energy of your company’s name or mission, you create a brandidentity that is energetically cohesive.\n\nA numerologically attuned logo does more than just look good; it works as a magnetfor the right customers, partners, and opportunities. By intentionally designing yourlogo with numerology in mind, you align your business with its highest potential,infusing it with energies that can help foster success, recognition, and growth.",
    },
    {
      icon: (
        <CalendarMonthIcon
          sx={{ fontSize: isMobile ? "100px" : "350px", color: "orange" }}
        />
      ),
      heading: "Launch Dates",
      text: "Choosing the right launch date is more than just picking a day on the calendar—it’sabout aligning with the universal energies that will support your business’s growth.Numerology provides valuable insights into the best times for action, ensuring thatyour launch is in harmony with the vibrational frequencies needed for success,abundance, and smooth progress.\n\nWhether your business aims to be a leader in its field, creatively inspire others, ormake a global impact, numerology helps you choose a launch date that enhancesyour natural strengths and aligns you with positive outcomes.\n\nBy taking the time to understand the numerological energy of your launch date, youcan set the stage for a prosperous and impactful business journey.",
    },
    {
      icon: (
        <DevicesIcon
          sx={{ fontSize: isMobile ? "100px" : "350px", color: "orange" }}
        />
      ),
      heading: "Mobile Number & Account Number",
      text: "Your mobile number is one of the most consistent numbers you use daily, and it’sassociated with your ability to communicate, connect, and be present in the world.By understanding the numerological value of your mobile number, you can enhanceits ability to positively influence your life. Through numerology, you can understandhow to align these numbers to optimize your personal and financial well-being. Theprocess involves examining the numerological vibrations of these numbers andadjusting them to suit your personal goals, whether it’s achieving financialabundance, fostering better communication, or attracting the right opportunities.\n\nAccount numbers, whether personal bank accounts, business accounts, or financialIDs, are an essential part of your financial life. These numbers have their own uniquevibrational frequency that can either support or hinder the flow of money, financialstability, and business success.\n\nThe alignment of your mobile number and account number with numerologicalprinciples can help create a life of balance, prosperity, and success. Just as yourname and business carry a certain energy, the numbers tied to your communicationand financial systems can work to either support or hinder your growth.",
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
        Business Insights Using Numerology
      </Typography>
      <div
        style={{
          width: isMobile ? "150px" : "450px",
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
              Book An Appointment
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Business;
