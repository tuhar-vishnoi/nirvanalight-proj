import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useSupabase from "./useSupabase";

const Banner = () => {
  const supabase = useSupabase();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBannerImages = async () => {
      try {
        const { data, error } = await supabase
          .from("banner")
          .select("imageurl")
          .order("id", { ascending: true });

        if (error) {
          console.error("Error fetching images:", error);
          return;
        }

        setImages(data.map((item) => item.imageurl)); // Extract image URLs
      } catch (error) {
        console.error("Unexpected error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBannerImages();
  }, []);

  return (
    <div>
      <div
        style={{
          border: "10px solid orange",
        }}
      >
        {loading ? (
          <p>Loading...</p> // Show a loading message while images are fetched
        ) : (
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={2000}
            transitionTime={600}
          >
            {images.map((url, index) => (
              <div key={index}>
                <img
                  src={url}
                  alt={`Slide ${index + 1}`}
                  style={{
                    height: "78vh",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </Carousel>
        )}
      </div>

      {/* Add CSS for mobile responsiveness */}
      <style>
        {`
          /* Mobile view adjustments */
          @media (max-width: 768px) {
            .carousel .slide img {
              height: 50vh; /* Adjust image height for smaller screens */
            }
          }
        `}
      </style>
    </div>
  );
};

export default Banner;
