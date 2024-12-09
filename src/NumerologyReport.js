import React, { useState, useEffect, useRef } from "react";
import {
  Typography,
  useMediaQuery,
  TextField,
  Button,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";

const NumerologyReport = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    mobileNumber: "",
    email: "",
  });

  const [currency, setCurrency] = useState("INR"); // Default to INR
  const [paypalScriptLoaded, setPaypalScriptLoaded] = useState(false); // Track PayPal script load
  const [razorpayScriptLoaded, setRazorpayScriptLoaded] = useState(false); // Track Razorpay script load
  const paypalRef = useRef();

  // Check field validity
  const isMobileNumberValid =
    formData.mobileNumber.length === 10 &&
    /^\d{10}$/.test(formData.mobileNumber);
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  // Check if all required fields are filled
  const isFormComplete =
    formData.fullName.trim() &&
    formData.dob.trim() &&
    isMobileNumberValid &&
    isEmailValid;

  const isCurrencyDisabled = !isFormComplete;

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  // Dynamically load PayPal and Razorpay scripts
  useEffect(() => {
    if (currency === "USD" && !paypalScriptLoaded) {
      const script = document.createElement("script");
      script.src =
        "https://www.paypal.com/sdk/js?client-id=AQ0YLhXrktaG5bU6RX9b0lt-5XL7acIv3VLY5zC7Nq0laJyctTLkZhpm2vD3escAc5xKmIk1ayNSTs9U";
      script.async = true;
      script.onload = () => setPaypalScriptLoaded(true);
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }

    if (currency === "INR" && !razorpayScriptLoaded) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => setRazorpayScriptLoaded(true);
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [currency, paypalScriptLoaded, razorpayScriptLoaded]);

  // Initialize PayPal button once script is loaded
  useEffect(() => {
    if (paypalScriptLoaded && currency === "USD") {
      if (window.paypal) {
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                intent: "CAPTURE",
                purchase_units: [
                  {
                    description: "Payment for Numerology Report",
                    amount: {
                      currency_code: "USD",
                      value: "21", // Replace with actual amount
                    },
                  },
                ],
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
              console.log("Order captured:", order);
              alert("Payment Successful!");

              sendEmail();
            },
            onError: (err) => {
              console.error("PayPal error:", err);
              alert("Something went wrong with the payment.");
            },
          })
          .render(paypalRef.current);
      }
    }
  }, [paypalScriptLoaded, currency]);

  // Handle Razorpay payment
  const handlePayment = () => {
    if (currency === "INR" && razorpayScriptLoaded) {
      const options = {
        key: "rzp_live_Rpa2wue2bjO6i9", // Replace with your Razorpay Key
        amount: "99900",
        currency: "INR",
        name: "Numerology Report Payment",
        description: "Payment for Numerology Report",
        handler: function (response) {
          console.log(response);
          alert("Payment successful!");

          sendEmail();
        },
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.mobileNumber,
        },
        notes: {
          address: "Test Address",
        },
        theme: {
          color: "#F37254",
        },
      };

      try {
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      } catch (error) {
        console.error("Error initializing Razorpay:", error);
      }
    }
  };

  // Send email using EmailJS
  const sendEmail = () => {
    const templateParams = {
      from_name: formData.fullName,
      to_name: "Nirvanalight37",
      message: "Payment for Numerology Report completed successfully.",
      email: formData.email,
      mobile_number: formData.mobileNumber,
    };

    emailjs
      .send(
        "service_swhgme8", // Replace with your service ID
        "template_ceeewz9", // Replace with your template ID
        templateParams,
        "p6G7HSuuH8rrGdziD" // Replace with your user ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    handlePayment();
  };
  const data = [
    {
      icon: (
        <FontAwesomeIcon
          icon={faFileAlt}
          style={{ fontSize: isMobile ? "100px" : "300px", color: "orange" }}
        />
      ),
      heading: "Numerology Report",
      text: "A numerology report is a detailed analysis of the numbers that influence various aspects of your life, including your personality, career, relationships, and health. By calculating key numbers such as your Life Path Number, Expression Number, Soul Urge Number, and others derived from your name and birthdate, the report offers personalized insights into your strengths,challenges, and life purpose. It helps you understand your natural tendencies,uncover hidden potentials, and identify the best paths for success and fulfilment. Anumerology report serves as a powerful tool for self-discovery, guiding you towardmaking informed decisions that align with your true self and life's purpose.",
    },
  ];
  return (
    <div
      style={{
        backgroundColor: "#FAEBD7",
        padding: "20px",
        display: "grid",
        gap: "20px",
        gridTemplateColumns: "1fr",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Poppins",
          fontWeight: 600,
          color: "#032e42",
          textAlign: "center",
        }}
      >
        Unlock Your Secrets with a Personalized Numerology Report
      </Typography>
      <div
        style={{
          width: isMobile ? "150px" : "550px",
          height: "4px",
          background: "linear-gradient(to right, #FF7F50, #FFD700)",
          borderRadius: "2px",
          margin: "0 auto 30px auto",
        }}
      ></div>
      {data.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
              flex: 1,
            }}
          >
            {item.icon}
          </div>

          <div
            style={{
              flex: 1,
              padding: "20px",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Poppins",
                fontWeight: 600,
                color: "orange",
                marginBottom: "10px",
                fontSize: "25px",
              }}
            >
              {item.heading}
            </Typography>

            {item.text.split("\n\n").map((paragraph, pIndex) => (
              <Typography
                key={pIndex}
                variant="body1"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  color: "#032e42",
                  marginBottom:
                    pIndex !== item.text.split("\n\n").length - 1
                      ? "20px"
                      : "0",
                }}
              >
                {paragraph}
              </Typography>
            ))}
          </div>
        </div>
      ))}

      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "500px", margin: "0 auto" }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Poppins",
            fontWeight: 600,
            color: "#032e42",
            marginBottom: "20px",
          }}
        >
          Enter Your Details to Get Your Numerology Report
        </Typography>
        <p
          style={{
            fontFamily: "Poppins",
            // fontWeight: 600,
            color: "orange",
            marginBottom: "20px",
          }}
        >
          Please first fill Full Name, Dath Of Birth ,Mobile No. and Email then
          only you are available to select currency{" "}
        </p>
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Date of Birth"
          variant="outlined"
          fullWidth
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Mobile Number"
          variant="outlined"
          fullWidth
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d{0,10}$/.test(value)) {
              setFormData({ ...formData, mobileNumber: value });
            }
          }}
          helperText={
            formData.mobileNumber.length > 0 && !isMobileNumberValid
              ? "Mobile number must be 10 digits."
              : ""
          }
          error={formData.mobileNumber.length > 0 && !isMobileNumberValid}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Email ID"
          variant="outlined"
          fullWidth
          name="email"
          value={formData.email}
          onChange={handleChange}
          helperText={
            formData.email.length > 0 && !isEmailValid
              ? "Invalid email format."
              : ""
          }
          error={formData.email.length > 0 && !isEmailValid}
          sx={{ mb: 2 }}
        />
        <FormControl fullWidth>
          <InputLabel>Currency</InputLabel>
          <Select
            value={currency}
            onChange={handleCurrencyChange}
            disabled={isCurrencyDisabled}
          >
            <MenuItem value="INR">INR</MenuItem>
            <MenuItem value="USD">USD</MenuItem>
          </Select>
        </FormControl>

        {currency === "USD" && (
          <Box ref={paypalRef} sx={{ mt: 2, mb: 2 }}></Box>
        )}

        <Button
          variant="contained"
          type="submit"
          sx={{
            mt: 3,
            backgroundColor: "#F37254",
            "&:hover": { backgroundColor: "#FF7F50" },
          }}
          startIcon={<FontAwesomeIcon icon={faFileAlt} />}
          disabled={!isFormComplete}
        >
          Generate Numerology Report
        </Button>
      </form>
    </div>
  );
};

export default NumerologyReport;
