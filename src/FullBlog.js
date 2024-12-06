import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, CircularProgress } from "@mui/material";
import useSupabase from "./useSupabase";

const FullBlog = () => {
  const { id } = useParams(); // Get blog ID from the URL
  const supabase = useSupabase();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("id", id)
        .single();

      if (data) setBlog(data);
      if (error) console.error("Error fetching blog:", error.message);
      setLoading(false);
    };

    fetchBlog();
  }, [id, supabase]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!blog) {
    return (
      <Typography variant="h6" color="error" textAlign="center">
        Blog not found!
      </Typography>
    );
  }

  return (
    <Box sx={{ padding: 4, backgroundColor: "#FAEBD7" }}>
      {/* Center-aligned title */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          textAlign: "center", // Center the title
        }}
      >
        {blog.title}
      </Typography>
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
      {/* Other headings and descriptions */}
      {[1, 2, 3, 4, 5, 6].map((i) => {
        const heading = blog[`h${i}_heading`];
        const description = blog[`h${i}_description`];

        if (!heading && !description) return null;

        return (
          <Box key={i} sx={{ marginBottom: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontFamily: "Poppins",
                textAlign: "left", // Left-align all headings
              }}
            >
              {heading}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Poppins",
                textAlign: "left", // Left-align all descriptions
              }}
            >
              {description}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default FullBlog;
