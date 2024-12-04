import React, { useState } from "react";
import {
  Typography,
  useMediaQuery,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

const NumerologyReport = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  // State for form data
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    mobileNumber: "",
    email: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form data, e.g., send it to an API or show a message.
    console.log(formData);
  };

  const data = [
    {
      icon: (
        <FontAwesomeIcon
          icon={faFileAlt}
          style={{ fontSize: isMobile ? "100px" : "300px", color: "orange" }}
        />
      ),
      heading: "Numerology Report",
      text: "A numerology report is a detailed analysis of the numbers that influence various aspects of your life, including your personality, career, relationships, and health. By calculating key numbers such as your Life Path Number, Expression Number, Soul Urge Number, and others derived from your name and birthdate, the report offers personalized insights into your strengths,challenges, and life purpose. It helps you understand your natural tendencies,uncover hidden potentials, and identify the best paths for success and fulfilment. Anumerology report serves as a powerful tool for self-discovery, guiding you towardmaking informed decisions that align with your true self and life's purpose.",
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
        Unlock Your Secrets with a Personalized Numerology Report
      </Typography>
      <div
        style={{
          width: isMobile ? "150px" : "550px",
          height: "4px",
          background: "linear-gradient(to right, #FF7F50, #FFD700)",
          borderRadius: "2px",
          margin: "0 auto 30px auto",
        }}
      ></div>
      {data.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
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
          </div>
        </div>
      ))}

      {/* Form for Numerology Report */}
      <form
        onSubmit={handleSubmit}
        style={{
          marginTop: "30px",
          textAlign: "center",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        {/* Form Heading */}
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Poppins",
            fontWeight: 600,
            color: "#032e42",
            marginBottom: "20px",
          }}
        >
          Enter Your Details to Get Your Numerology Report
        </Typography>

        <Box sx={{ mb: 2 }}>
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <TextField
            label="Date of Birth"
            variant="outlined"
            fullWidth
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            sx={{ mb: 2 }}
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <TextField
            label="Mobile Number"
            variant="outlined"
            fullWidth
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <TextField
            label="Email ID"
            variant="outlined"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          sx={{
            bgcolor: "orange",
            color: "black",
            borderRadius: "30px",
            padding: "8px 24px",
            fontFamily: "Poppins",
            fontSize: "15px",
            fontWeight: "500",
            textTransform: "capitalize",
            "&:hover": {
              color: "white",
              bgcolor: "darkorange",
            },
          }}
        >
          Get Report
        </Button>
      </form>
    </div>
  );
};

export default NumerologyReport;
