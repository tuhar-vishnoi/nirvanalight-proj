import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";

const Banner = () => {
  return (
    <div>
      <div
        style={{
          border: "10px solid orange",
          //   marginBottom: "20px",
        }}
      >
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={2000}
          transitionTime={600}
        >
          <div>
            <img
              src={image1}
              alt="Slide 1"
              style={{
                height: "78vh",
                objectFit: "cover",
              }}
            />
          </div>
          <div>
            <img
              src={image2}
              alt="Slide 2"
              style={{
                height: "78vh",
                objectFit: "cover",
              }}
            />
          </div>
          <div>
            <img
              src={image3}
              alt="Slide 3"
              style={{
                height: "78vh",
                objectFit: "cover",
              }}
            />
          </div>
        </Carousel>
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
