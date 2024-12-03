import React, { useState } from "react";
import axios from "axios";
import image3 from "./images/image3.jpg";

const HoroscopeApp = () => {
  const [zodiacSign, setZodiacSign] = useState("");
  const [horoscope, setHoroscope] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!zodiacSign) {
      setError("Please select a Rashi (zodiac sign).");
      return;
    }
    setError(""); // Clear error before making request
    setLoading(true); // Start loading

    try {
      const options = {
        method: "GET",
        url: "https://best-daily-astrology-and-horoscope-api.p.rapidapi.com/api/Detailed-Horoscope/",
        params: { zodiacSign },
        headers: {
          "x-rapidapi-key":
            "95d59d6291mshcb391d98f057a4fp119169jsn6fffddcbf19e",
          "x-rapidapi-host":
            "best-daily-astrology-and-horoscope-api.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      setHoroscope(response.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch horoscope. Please try again later.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div
      style={{
        fontFamily: "Poppins",
        padding: "20px",
        backgroundColor: "#FAEBD7",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#032e42" }}>
        Horoscope Viewer
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "400px", margin: "0 auto" }}
      >
        <label
          htmlFor="zodiacSign"
          style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
        >
          Select Your Rashi (Zodiac Sign):
        </label>
        <select
          id="zodiacSign"
          value={zodiacSign}
          onChange={(e) => setZodiacSign(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">-- Select --</option>
          <option value="aries">Aries</option>
          <option value="taurus">Taurus</option>
          <option value="gemini">Gemini</option>
          <option value="cancer">Cancer</option>
          <option value="leo">Leo</option>
          <option value="virgo">Virgo</option>
          <option value="libra">Libra</option>
          <option value="scorpio">Scorpio</option>
          <option value="sagittarius">Sagittarius</option>
          <option value="capricorn">Capricorn</option>
          <option value="aquarius">Aquarius</option>
          <option value="pisces">Pisces</option>
        </select>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "orange",
            color: "black",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            position: "relative",
            fontSize: "18px",
            fontWeight: "bold",
          }}
          disabled={loading}
        >
          {loading ? "Loading..." : "Get Horoscope"}
        </button>
      </form>
      {error && (
        <p style={{ color: "red", marginTop: "10px", textAlign: "center" }}>
          {error}
        </p>
      )}
      {horoscope === null && !loading && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <img
            src={image3}
            alt="No data"
            style={{ width: "350px", height: "200px", objectFit: "cover" }}
          />
          <p style={{ fontSize: "1.4rem" }}>No horoscope data available.</p>
        </div>
      )}
      {horoscope && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            // backgroundColor: "#f9f9f9",
            // border: "1px solid #ddd",
            // borderRadius: "4px",
          }}
        >
          <h2 style={{ color: "#032e42" }}>Your Horoscope</h2>
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
          <p
            style={{
              fontSize: "1.3rem",
              lineHeight: "1.5",
              color: "black",
              // fontWeight: "400",
            }}
          >
            <strong style={{ color: "orange" }}>Color:</strong>{" "}
            {horoscope.color}
          </p>
          <p
            style={{
              fontSize: "1.3rem",
              lineHeight: "1.5",
              color: "black",
            }}
          >
            <strong style={{ color: "orange" }}>Lucky Numbers:</strong>{" "}
            {horoscope.number}
          </p>
          <p
            style={{
              fontSize: "1.3rem",
              lineHeight: "1.5",
              color: "black",
            }}
          >
            <strong style={{ color: "orange" }}>Prediction:</strong>{" "}
            {horoscope.prediction}
          </p>
          <p
            style={{
              fontSize: "1.3rem",
              lineHeight: "1.5",
              color: "black",
            }}
          >
            <strong style={{ color: "orange" }}>Status:</strong>{" "}
            {horoscope.status ? "Active" : "Inactive"}
          </p>
          <p
            style={{
              fontSize: "1.3rem",
              lineHeight: "1.5",
              color: "black",
            }}
          >
            <strong style={{ color: "orange" }}>Strength:</strong>{" "}
            {horoscope.strength}
          </p>
          <p
            style={{
              fontSize: "1.3rem",
              lineHeight: "1.5",
              color: "black",
            }}
          >
            <strong style={{ color: "orange" }}>Weakness:</strong>{" "}
            {horoscope.weakness}
          </p>
        </div>
      )}
    </div>
  );
};

export default HoroscopeApp;
