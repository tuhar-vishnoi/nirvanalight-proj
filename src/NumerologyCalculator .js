import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  MenuItem,
  Select,
} from "@mui/material";
import image6 from "./images/image6.jpg";

const NumerologyCalculator = () => {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [calculationType, setCalculationType] = useState("lifePath");
  const [result, setResult] = useState("");

  // Utility to reduce to a single digit
  const reduceToSingleDigit = (num) => {
    while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
      num = num
        .toString()
        .split("")
        .reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return num;
  };

  // Lucky Days and Colors mapping
  const luckyProperties = {
    1: { day: "Sunday", color: "Red" },
    2: { day: "Monday", color: "White" },
    3: { day: "Thursday", color: "Yellow" },
    4: { day: "Saturday", color: "Blue" },
    5: { day: "Wednesday", color: "Green" },
    6: { day: "Friday", color: "Pink" },
    7: { day: "Monday", color: "Purple" },
    8: { day: "Saturday", color: "Dark Blue" },
    9: { day: "Tuesday", color: "Red" },
  };

  // Calculate Life Path Number
  const calculateLifePathNumber = (date) => {
    const digits = date.replace(/-/g, "").split("");
    const sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);
    return reduceToSingleDigit(sum);
  };

  // Calculate Expression Number
  const calculateExpressionNumber = (name) => {
    const letterValues = {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5,
      F: 6,
      G: 7,
      H: 8,
      I: 9,
      J: 1,
      K: 2,
      L: 3,
      M: 4,
      N: 5,
      O: 6,
      P: 7,
      Q: 8,
      R: 9,
      S: 1,
      T: 2,
      U: 3,
      V: 4,
      W: 5,
      X: 6,
      Y: 7,
      Z: 8,
    };
    const sum = name
      .toUpperCase()
      .replace(/[^A-Z]/g, "")
      .split("")
      .reduce((acc, char) => acc + letterValues[char], 0);
    return reduceToSingleDigit(sum);
  };

  // Calculate Soul Urge Number (Vowels only)
  const calculateSoulUrgeNumber = (name) => {
    const vowels = ["A", "E", "I", "O", "U"];
    const letterValues = { A: 1, E: 5, I: 9, O: 6, U: 3 };
    const sum = name
      .toUpperCase()
      .replace(/[^A-Z]/g, "")
      .split("")
      .filter((char) => vowels.includes(char))
      .reduce((acc, char) => acc + letterValues[char], 0);
    return reduceToSingleDigit(sum);
  };

  // Calculate Personality Number (Consonants only)
  const calculatePersonalityNumber = (name) => {
    const vowels = ["A", "E", "I", "O", "U"];
    const letterValues = {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5,
      F: 6,
      G: 7,
      H: 8,
      I: 9,
      J: 1,
      K: 2,
      L: 3,
      M: 4,
      N: 5,
      O: 6,
      P: 7,
      Q: 8,
      R: 9,
      S: 1,
      T: 2,
      U: 3,
      V: 4,
      W: 5,
      X: 6,
      Y: 7,
      Z: 8,
    };
    const sum = name
      .toUpperCase()
      .replace(/[^A-Z]/g, "")
      .split("")
      .filter((char) => !vowels.includes(char))
      .reduce((acc, char) => acc + letterValues[char], 0);
    return reduceToSingleDigit(sum);
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (calculationType === "lifePath" && birthDate) {
      const lifePathNumber = calculateLifePathNumber(birthDate);
      const { day, color } = luckyProperties[lifePathNumber];
      setResult(
        `Your Life Path Number is: ${lifePathNumber}. 
        Lucky Day: ${day}. 
        Lucky Color: ${color}.`
      );
    } else if (calculationType === "expression" && name) {
      const expressionNumber = calculateExpressionNumber(name);
      setResult(`Your Expression Number is: ${expressionNumber}`);
    } else if (calculationType === "soulUrge" && name) {
      const soulUrgeNumber = calculateSoulUrgeNumber(name);
      setResult(`Your Soul Urge Number is: ${soulUrgeNumber}`);
    } else if (calculationType === "personality" && name) {
      const personalityNumber = calculatePersonalityNumber(name);
      setResult(`Your Personality Number is: ${personalityNumber}`);
    } else {
      setResult(
        "Please provide valid inputs for the selected calculation type."
      );
    }
  };

  return (
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
      <Box
        sx={{
          maxWidth: 400,
          mx: "auto",
          mt: 4,
          p: 3,
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h5" sx={{ mb: 3, textAlign: "center" }}>
          Numerology Calculator
        </Typography>
        <form onSubmit={handleSubmit}>
          <Select
            fullWidth
            value={calculationType}
            onChange={(e) => setCalculationType(e.target.value)}
            sx={{ mb: 2 }}
          >
            <MenuItem value="lifePath">Life Path Number</MenuItem>
            <MenuItem value="expression">Expression Number</MenuItem>
            <MenuItem value="soulUrge">Soul Urge Number</MenuItem>
            <MenuItem value="personality">Personality Number</MenuItem>
          </Select>
          {["expression", "soulUrge", "personality"].includes(
            calculationType
          ) && (
            <TextField
              label="Name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ mb: 2 }}
            />
          )}
          {calculationType === "lifePath" && (
            <TextField
              label="Birth Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              sx={{ mb: 2 }}
            />
          )}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ bgcolor: "orange" }}
          >
            Calculate
          </Button>
        </form>
        {result && (
          <Typography variant="h6" sx={{ mt: 3, textAlign: "center" }}>
            {result}
          </Typography>
        )}
      </Box>
    </div>
  );
};

export default NumerologyCalculator;
