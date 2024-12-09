import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
} from "@mui/material";
import emailjs from "emailjs-com"; // Import EmailJS service

const BookNowDialog = ({ open, onClose }) => {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (open) {
      setFormData(initialFormData); // Reset form data when the dialog opens
    }
  }, [open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isFormValid = () => {
    return (
      formData.name && formData.email && formData.phone && formData.message
    );
  };

  const sendEmail = (formData) => {
    const emailTemplateParams = {
      to_email: "Nirvanalight37@gmail.com", // Replace with recipient's email
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        "service_swhgme8", // Replace with your Service ID
        "template_jyvuela", // Replace with your Template ID
        emailTemplateParams,
        "p6G7HSuuH8rrGdziD" // Replace with your User ID from EmailJS
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Your request has been submitted successfully.");
        onClose();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Error sending the request. Please try again.");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      alert("Please fill out all required fields.");
      return;
    }
    sendEmail(formData); // Send email after validation
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Book Your Slot Now...</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 2,
          }}
        >
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            required
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            type="email"
            fullWidth
            required
            value={formData.email}
            onChange={handleChange}
            error={
              !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
              formData.email
            }
            helperText={
              !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
              formData.email
                ? "Invalid email format."
                : ""
            }
          />
          <TextField
            label="Phone Number"
            name="phone"
            variant="outlined"
            type="tel"
            fullWidth
            required
            value={formData.phone}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d{0,10}$/.test(value)) {
                setFormData({ ...formData, phone: value });
              }
            }}
            helperText={
              formData.phone.length < 10 && formData.phone.length > 0
                ? "Phone number must be 10 digits."
                : ""
            }
          />
          <TextField
            label="Message"
            name="message"
            variant="outlined"
            fullWidth
            required
            value={formData.message}
            onChange={handleChange}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          sx={{
            bgcolor: "red",
            color: "white",
            borderRadius: "30px",
            padding: "8px 24px",
            fontFamily: "Poppins",
            fontSize: "15px",
            fontWeight: "500",
            textTransform: "capitalize",
            "&:hover": {
              color: "black",
              bgcolor: "red",
            },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={!isFormValid()}
          sx={{
            bgcolor: "orange",
            color: "black",
            borderRadius: "30px",
            padding: "8px 24px",
            fontFamily: "Poppins",
            fontSize: "15px",
            fontWeight: "500",
            textTransform: "capitalize",
            "&:hover": {
              color: "white",
              bgcolor: "darkorange",
            },
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookNowDialog;
