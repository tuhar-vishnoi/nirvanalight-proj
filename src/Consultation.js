import React from "react";
import image7 from "./images/image7.jpg";
import image8 from "./images/image8.jpg";

const Consultation = () => {
  return (
    <>
      <div
        className="consultation-container"
        style={{ backgroundImage: `url(${image7})` }}
      >
        <div>
          <img
            src={image8}
            alt="image8"
            className="consultation-image"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className="consultation-content">
          <h1
            style={{
              fontSize: "1.8rem",
              margin: "0",
              fontWeight: "bold",
              color: "#032e42",
            }}
          >
            Discover the Advice You Need
          </h1>
          <div
            style={{
              width: "50%",
              height: "4px",
              background: "linear-gradient(to right, #FF7F50, #FFD700)",
              margin: "20px auto",
              borderRadius: "2px",
            }}
          ></div>
          <p
            style={{
              fontSize: "1rem",
              marginTop: "15px",
              lineHeight: "1.6",
              color: "#676767",
              fontWeight: "500",
            }}
          >
            Unlock clarity and confidence in your journey through personalized
            guidance. Whether you're seeking answers to life's pressing
            questions, strategies to overcome challenges, or insights to help
            you thrive, we are here to provide expert advice tailored to your
            unique needs. With a compassionate approach and proven methods, we
            help you navigate complexities, make informed decisions, and create
            a roadmap to success and fulfillment. Let’s embark on this
            transformative journey together!
          </p>
        </div>
      </div>
      <style>
        {`
          .consultation-container {
            display: flex;
            flex-wrap: wrap; 
            gap: 20px;
            padding: 20px;
            justify-content: center;
            align-items: center;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            color: #ffffff;
          }

          .consultation-image {
            flex: 1 1 100%;
            max-width: 400px;
            border-radius: 8px;
          }

          .consultation-content {
            flex: 1 1 100%;
            max-width: 600px;
            border: 4px solid orange;
            padding: 20px;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 8px;
            text-align: center;
          }

          .consultation-content:hover {
            transform: scale(1.05); 
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
            border-color: #e67e22; 
            transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
          }

          @media (min-width: 768px) {
            .consultation-container {
              flex-direction: row;
              gap: 300px;
            }

            .consultation-image {
              flex: 1 1 40%;
            }

            .consultation-content {
              flex: 1 1 50%;
            }
          }
        `}
      </style>
    </>
  );
};

export default Consultation;
