import React, { useState, useEffect } from "react";
import useSupabase from "./useSupabase"; // Custom hook for Supabase
import image6 from "./images/image6.jpg";

const AboutUs = () => {
  const supabase = useSupabase();
  const [content, setContent] = useState({
    pera1: "",
    pera2: "",
    pera3: "",
    pera4: "",
    pera5: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutUsContent = async () => {
      try {
        const { data, error } = await supabase
          .from("aboutUs")
          .select("*")
          .single();

        if (error) {
          console.error("Error fetching About Us content:", error);
        } else {
          setContent(data || {});
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutUsContent();
  }, [supabase]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>Loading About Us content...</p>
      </div>
    );
  }

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
          {content.pera1}
          <br />
          <br />
          {content.pera2}
          <br />
          <br />
          {content.pera3}
          <br />
          <br />
          {content.pera4}
          <br />
          <br />
          {content.pera5}
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
