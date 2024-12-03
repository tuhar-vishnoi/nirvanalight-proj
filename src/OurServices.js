// import React from "react";
// import image5 from "./images/image5.jpg"; // Ensure this is the correct path to your image

// const services = [
//   {
//     id: 1,
//     title: "Pronology (Name Numerology)",
//     description:
//       "Discover the hidden power of your name with name numerology. Learn how it affects your life, relationships, and career choices. Unlock your hidden potential with our expert insights.",
//   },
//   {
//     id: 2,
//     title: "Personal Numerology",
//     description:
//       "Gain insights into your personality, life path, and destiny. Discover your core strengths and challenges based on your birthdate. Personalized guidance tailored to you.",
//   },
//   {
//     id: 3,
//     title: "Corporate Numerology",
//     description:
//       "Optimize your business success using numerology principles. Understand how the numbers behind your business can guide your growth and help make key decisions. Achieve higher profitability and success.",
//   },
//   {
//     id: 4,
//     title: "Mobile Numerology",
//     description:
//       "Choose the perfect number for your mobile to enhance fortune. Your mobile number can influence your luck, success, and communication. Learn how numerology can guide your choice.",
//   },
//   {
//     id: 5,
//     title: "Signature Analysis",
//     description:
//       "Unlock the secrets of your personality through your signature. The way you sign your name holds deep psychological meanings. Understand the subconscious messages behind it.",
//   },
//   {
//     id: 6,
//     title: "Logo Analysis",
//     description:
//       "Create impactful logos that align with numerology principles. A well-designed logo with the right numerological alignment can elevate your brand. We help you create logos that resonate with your audience.",
//   },
//   {
//     id: 7,
//     title: "Wrist Watch Analysis",
//     description:
//       "Understand how the position of your wristwatch influences you. Your wristwatch can have an impact on your life path. Learn the significance of wearing your watch in a numerologically optimal position.",
//   },
// ];

// const OurServices = () => {
//   return (
//     <div
//       style={{
//         padding: "20px",
//         textAlign: "center",
//         position: "relative",
//         backgroundImage: `url(${image5})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         color: "#ffffff",
//       }}
//     >
//       <h1
//         style={{
//           fontSize: "2.5rem",
//           marginBottom: "20px",
//           color: "#032e42",
//         }}
//       >
//         Our Services
//       </h1>
//       <div
//         style={{
//           width: "150px",
//           height: "4px",
//           background: "linear-gradient(to right, #FF7F50, #FFD700)",
//           margin: "20px auto",
//           borderRadius: "2px",
//           animation: "fadeIn 2s",
//         }}
//       ></div>
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           gap: "20px",
//         }}
//       >
//         {services.map((service) => (
//           <div
//             key={service.id}
//             style={{
//               flex: "1 1 calc(30% - 20px)",
//               maxWidth: "30%",
//               backgroundColor: "rgba(255, 255, 255, 0.9)",
//               padding: "20px",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//               borderRadius: "8px",
//               border: "4px solid orange",
//               transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
//               color: "#032e42",
//             }}
//             className="service-card"
//           >
//             <h2
//               style={{
//                 fontSize: "1.5rem",
//                 marginBottom: "10px",
//               }}
//             >
//               {service.title}
//             </h2>
//             <p
//               style={{
//                 fontSize: "1rem",
//                 lineHeight: "1.5",
//                 display: "-webkit-box",
//                 WebkitBoxOrient: "vertical",
//                 overflow: "hidden",
//                 WebkitLineClamp: 5,
//                 fontWeight: "bold",
//                 color: "#676767",
//               }}
//             >
//               {service.description}
//             </p>
//             <a
//               href="https://wa.me/0000000000"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 display: "inline-block",
//                 padding: "10px 20px",
//                 backgroundColor: "orange",
//                 color: "black",
//                 textDecoration: "none",
//                 fontWeight: "bold",
//                 borderRadius: "5px",
//                 marginTop: "15px",
//                 transition: "background-color 0.3s",
//                 textTransform: "capitalize",
//               }}
//             >
//               Contact Now
//             </a>
//           </div>
//         ))}
//       </div>

//       <style>
//         {`
//           .service-card:hover {
//             transform: scale(1.05); /* Slightly enlarge card */
//             box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Stronger shadow */
//             border-color: #e67e22; /* Darker orange border */
//           }

//           @media (max-width: 768px) {
//             .service-card {
//               flex: 1 1 100%; /* Full width on smaller screens */
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default OurServices;
import React from "react";
import { useNavigate } from "react-router-dom";
import image5 from "./images/image5.jpg"; // Ensure this is the correct path to your image

const services = [
  {
    id: 1,
    title: "Pronology (Name Numerology)",
    description:
      "Discover the hidden power of your name with name numerology. Learn how it affects your life, relationships, and career choices.",
    route: "/namenumerology",
  },
  {
    id: 2,
    title: "Personal Numerology",
    description:
      "Gain insights into your personality, life path, and destiny. Discover your core strengths and challenges based on your birthdate.",
    route: "/personalnumerology",
  },
  {
    id: 3,
    title: "Corporate Numerology",
    description:
      "Optimize your business success using numerology principles. Understand how the numbers behind your business can guide your growth.",
    route: "/corporatenumerology",
  },
  {
    id: 4,
    title: "Mobile Numerology",
    description:
      "Choose the perfect number for your mobile to enhance fortune. Your mobile number can influence your luck, success, and communication.",
    route: "/mobilenumerology",
  },
  {
    id: 5,
    title: "Signature Analysis",
    description:
      "Unlock the secrets of your personality through your signature. The way you sign your name holds deep psychological meanings.",
    route: "/signatureanalysis",
  },
  {
    id: 6,
    title: "Logo Analysis",
    description:
      "Create impactful logos that align with numerology principles. A well-designed logo with the right numerological alignment can elevate your brand.",
    route: "/logoanalysis",
  },
  {
    id: 7,
    title: "Wrist Watch Analysis",
    description:
      "Understand how the position of your wristwatch influences you. Your wristwatch can have an impact on your life path.",
    route: "/wrist-watch-analysis",
  },
];

const OurServices = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        position: "relative",
        backgroundImage: `url(${image5})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#ffffff",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "20px",
          color: "#032e42",
        }}
      >
        Our Services
      </h1>
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
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {services.map((service) => (
          <div
            key={service.id}
            style={{
              flex: "1 1 calc(30% - 20px)",
              maxWidth: "30%",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              border: "4px solid orange",
              transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
              color: "#032e42",
            }}
            className="service-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
              e.currentTarget.style.borderColor = "#e67e22";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
              e.currentTarget.style.borderColor = "orange";
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                marginBottom: "10px",
              }}
            >
              {service.title}
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.5",
                color: "#676767",
              }}
            >
              {service.description}{" "}
              <span
                onClick={() => navigate(service.route)}
                style={{
                  color: "#e67e22",
                  fontWeight: "bold",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Know More
              </span>
            </p>
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
              Contact Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
