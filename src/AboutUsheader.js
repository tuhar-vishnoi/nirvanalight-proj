import React, { useEffect, useState } from "react";
import image6 from "./images/image6.jpg";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
  Box,
  Container,
} from "@mui/material";
import useSupabase from "./useSupabase"; // Custom hook for Supabase
import Marquee from "react-fast-marquee";

const AboutUsheader = () => {
  const supabase = useSupabase();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [imageUrls, setImageUrls] = useState({});

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("id, title, h1_heading, h1_description, created_at, imagepath")
        .order("created_at", { ascending: false });

      if (data) {
        setBlogs(data);

        // Fetch the image URL for each blog
        const urls = {};
        for (const blog of data) {
          if (blog.imagepath) {
            const { data: imageUrlData, error: urlError } = supabase.storage
              .from("banner")
              .getPublicUrl(blog.imagepath);

            if (urlError) {
              console.error("Error fetching image URL:", urlError.message);
            } else {
              urls[blog.id] = imageUrlData.publicUrl;
            }
          }
        }
        setImageUrls(urls); // Store all URLs in state
      }
      if (error) console.error("Error fetching blogs:", error.message);
    };

    fetchBlogs();
  }, [supabase]);

  const handleReadMore = (id) => {
    navigate(`/blog/${id}`); // Navigate to the full blog page
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${image6})`,
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
          About Us
        </h1>
        <div
          style={{
            width: "100px",
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
            fontWeight: "500",
            color: "#676767",
          }}
        >
          Welcome to Nirvana Light , where the timeless power of numerology is
          harnessed to shape your future and elevate your business.
          Understanding and aligning with your unique numerical blueprint can
          unlock extraordinary possibilities. Our tailored services are designed
          to help you navigate life's journey with confidence, whether through
          personalized insights from your birth numbers and planetary influences
          or by optimizing names and logos to resonate with your deepest
          aspirations.
          <br />
          <br />
          Imagine transforming your signature into a powerful tool that attracts
          success, or aligning your business strategies with numerological
          principles to boost growth and harmony. Our expertise extends to
          mobile numerology, ensuring your contact number vibrates with positive
          energy and attracting abundance , also crafting logos that perfectly
          reflect and enhance your brand’s essence and vision.
          <br />
          <br />
          By integrating the wisdom of numerology into your personal and
          professional life, we help you make informed decisions and embrace
          opportunities that align with your true potential. Step into a world
          where numbers guide you to a more fulfilling and prosperous future
          with Nirvana Light .
        </p>
      </div>
      <Container sx={{ marginTop: "3rem", textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Poppins",
            fontWeight: "700",
            color: "#032e42",
            marginBottom: "20px",
          }}
        >
          Our Latest Blogs
        </Typography>

        {/* Blog Section */}
        <Box
          sx={{
            backgroundColor: "#FAEBD7",
            minHeight: "60vh", // Increased height for the blog container
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            paddingTop: blogs.length > 0 ? "2rem" : 0,
            overflowX: "hidden", // Hide scrollbars
            paddingBottom: "2rem", // Add bottom padding
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
                margin: "auto", // Center the text if no blogs
              }}
            >
              No Blogs Available Right Now......
            </Typography>
          ) : (
            <Marquee>
              <Box
                sx={{
                  display: "flex", // Flexbox for horizontal scrolling
                  gap: "16px", // Space between the cards
                }}
              >
                {blogs.map((blog) => (
                  <Card
                    sx={{
                      maxWidth: 345,
                      backgroundColor: "#FFF7E6",
                      flexShrink: 0, // Prevent cards from shrinking
                    }}
                    key={blog.id}
                  >
                    <CardContent>
                      {/* Display the image if available */}
                      {imageUrls[blog.id] && (
                        <Box
                          sx={{
                            width: "100%",
                            height: "200px",
                            overflow: "hidden",
                            borderRadius: "8px",
                          }}
                        >
                          <img
                            src={imageUrls[blog.id]}
                            alt={blog.title}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </Box>
                      )}
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
                ))}
              </Box>
            </Marquee>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default AboutUsheader;
