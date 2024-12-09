import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
  Box,
} from "@mui/material";
import useSupabase from "./useSupabase"; // Custom hook for Supabase

const Blog = () => {
  const supabase = useSupabase();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("id, title, h1_heading, h1_description, created_at, imagepath")
        .order("created_at", { ascending: false });

      if (data) {
        // Fetch public URL for each blog's image
        const blogsWithImageUrls = await Promise.all(
          data.map(async (blog) => {
            if (blog.imagepath) {
              const { data: publicUrlData, error: urlError } = supabase.storage
                .from("banner") // Assuming 'banner' is the storage bucket name
                .getPublicUrl(blog.imagepath);

              if (urlError) {
                console.error("Error fetching image URL:", urlError.message);
              } else {
                blog.imageUrl = publicUrlData.publicUrl; // Attach public URL
              }
            }
            return blog;
          })
        );
        setBlogs(blogsWithImageUrls);
      }
      if (error) console.error("Error fetching blogs:", error.message);
    };

    fetchBlogs();
  }, [supabase]);

  const handleReadMore = (id) => {
    navigate(`/blog/${id}`); // Navigate to the full blog page
  };

  return (
    <Box
      sx={{
        backgroundColor: "#FAEBD7", // Same background color as the "No Blogs Available" div
        minHeight: "100vh", // Full viewport height
        display: "flex",
        justifyContent: "center",
        alignItems: blogs.length === 0 ? "center" : "flex-start", // Center if no blogs
        textAlign: "center",
        paddingTop: blogs.length > 0 ? "2rem" : 0, // Add padding when blogs are available
      }}
    >
      {blogs.length === 0 ? (
        <Typography
          variant="h6"
          sx={{
            cursor: "pointer",
            fontFamily: "Poppins",
            fontWeight: 700,
            color: "orange",
            fontSize: "32px",
          }}
        >
          No Blogs Available Right Now......
        </Typography>
      ) : (
        <Grid container spacing={3} sx={{ padding: 4 }}>
          {blogs.map((blog) => (
            <Grid item xs={12} sm={6} md={4} key={blog.id}>
              <Card sx={{ maxWidth: 345, backgroundColor: "#FFF7E6" }}>
                {blog.imageUrl && (
                  <img
                    src={blog.imageUrl} // Use the public URL for the image
                    alt={blog.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px 8px 0 0",
                    }}
                  />
                )}

                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold", fontFamily: "Poppins" }}
                  >
                    {blog.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontFamily: "Poppins",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 3, // Limit to 3 lines
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {blog.h1_description || "No description available"}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    sx={{
                      backgroundColor: "orange", // Orange button
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#ff9800",
                      },
                      width: "100%", // Full width of the card
                    }}
                    onClick={() => handleReadMore(blog.id)}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Blog;
