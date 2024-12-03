import React from "react";
import { Typography } from "@mui/material";

const Blog = () => {
  return (
    <div
      style={{
        backgroundColor: "#FAEBD7",
        display: "flex", // Use flexbox
        justifyContent: "center", // Horizontally center
        alignItems: "center", // Vertically center
        height: "100vh", // Take full viewport height
        textAlign: "center",
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          cursor: "pointer",
          fontFamily: "Poppins",
          fontWeight: 700,
          textDecoration: "none",
          color: "orange",
          fontSize: "32px",
        }}
      >
        No Blog Available Right Now......
      </Typography>
    </div>
  );
};

export default Blog;
