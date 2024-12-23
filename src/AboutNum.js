import React, { useEffect, useState } from "react";
import useSupabase from "./useSupabase"; // Custom hook to initialize Supabase
import image4 from "./images/image4.jpg"; // Import the image

const AboutNum = () => {
  const supabase = useSupabase();
  const [data, setData] = useState({
    heading: "",
    pera1: "",
    pera2: "",
    pera3: "",
    pera4: "",
  });

  // Fetch data from the section1 table
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("section1")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setData({
          heading: data.heading || "",
          pera1: data.pera1 || "",
          pera2: data.pera2 || "",
          pera3: data.pera3 || "",
          pera4: data.pera4 || "",
        });
      }
    };

    fetchData();
  }, [supabase]);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${image4})`,
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
          {data.heading}
        </h1>
        <div
          style={{
            width: "300px",
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
          {data.pera1}
        </p>
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
          {data.pera2}
        </p>
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
          {data.pera3}
        </p>
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
          {data.pera4}
        </p>
      </div>
    </div>
  );
};

export default AboutNum;
