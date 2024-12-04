import React from "react";
import image4 from "./images/image4.jpg";
import { Box, Stack, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  return (
    <>
      <div
        className="footer-container"
        style={{
          backgroundImage: `url(${image4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "black",
          padding: "20px 30px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "flex-start",
          gap: "20px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "2rem",
              margin: "0",
              fontWeight: "bold",
              color: "#032e42",
              paddingLeft: "70px",
            }}
          >
            Quick Links
          </h1>
          <div
            style={{
              width: "100px",
              height: "4px",
              background: "linear-gradient(to right, #FF7F50, darkorange)",
              margin: "10px 0 20px 70px",
              borderRadius: "2px",
            }}
          ></div>
          <ul
            style={{
              listStyle: "none",
              padding: "0",
              margin: "0",
              fontSize: "1rem",
              lineHeight: "2",
              fontWeight: "500",
              paddingLeft: "70px",
            }}
          >
            <li
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ marginRight: "10px", color: "darkorange" }}>
                {">"}
              </span>
              <a
                href="/"
                style={{
                  color: "black",
                  textDecoration: "none",
                  transition: "color 0.3s",
                  fontSize: "20px",
                }}
                onMouseEnter={(e) => (e.target.style.color = "darkorange")}
                onMouseLeave={(e) => (e.target.style.color = "black")}
              >
                Home
              </a>
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ marginRight: "10px", color: "darkorange" }}>
                {">"}
              </span>
              <a
                href="/services"
                style={{
                  color: "black",
                  textDecoration: "none",
                  transition: "color 0.3s",
                  fontSize: "20px",
                }}
                onMouseEnter={(e) => (e.target.style.color = "darkorange")}
                onMouseLeave={(e) => (e.target.style.color = "black")}
              >
                Services
              </a>
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ marginRight: "10px", color: "darkorange" }}>
                {">"}
              </span>
              <a
                href="/aboutus"
                style={{
                  color: "black",
                  textDecoration: "none",
                  transition: "color 0.3s",
                  fontSize: "20px",
                }}
                onMouseEnter={(e) => (e.target.style.color = "darkorange")}
                onMouseLeave={(e) => (e.target.style.color = "black")}
              >
                About Us
              </a>
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ marginRight: "10px", color: "darkorange" }}>
                {">"}
              </span>
              <a
                href="/privacy"
                style={{
                  color: "black",
                  textDecoration: "none",
                  transition: "color 0.3s",
                  fontSize: "20px",
                }}
                onMouseEnter={(e) => (e.target.style.color = "darkorange")}
                onMouseLeave={(e) => (e.target.style.color = "black")}
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            maxWidth: "300px",
          }}
        >
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "flex" },
              font: "Poppins",
              fontWeight: 700,
              textDecoration: "none",
              color: "orange",
              flexGrow: 1,
              fontSize: "32px",
            }}
          >
            Nirvana Light
          </Typography>
          <Stack direction="row" gap={3}>
            <CallIcon
              sx={{ color: "Orange", paddingTop: "25px", fontSize: "28px" }}
            />
            <p style={{ fontSize: "20px" }}>9711120664</p>
          </Stack>
          <Stack direction="row" gap={3}>
            <MailIcon
              sx={{ color: "Orange", paddingTop: "4px", fontSize: "28px" }}
            />
            <p style={{ fontSize: "20px", marginTop: "-1px" }}>
              Nirvanalight37@gmail.com
            </p>
          </Stack>
        </div>
      </div>
      <Box
        sx={{
          textAlign: "center",
          borderTop: "1px solid #ddd",
          backgroundColor: "black",
          pt: 2,
        }}
      >
        <Typography variant="body2" sx={{ color: "orange" }}>
          © {new Date().getFullYear()} Nirvana Light. All Rights Reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
