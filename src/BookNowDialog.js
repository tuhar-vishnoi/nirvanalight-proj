import React, { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  MenuItem,
} from "@mui/material";

const servicesOptions = [
  { value: "pronology", label: "Pronology (Name Numerology)" },
  { value: "personal", label: "Personal Numerology" },
  { value: "corporate", label: "Corporate Numerology" },
  { value: "mobile", label: "Mobile Numerology" },
  { value: "signature", label: "Signature Analysis" },
  { value: "logo", label: "Logo Analysis" },
  { value: "wrist", label: "Wrist Watch Analysis" },
];

const BookNowDialog = ({ open, onClose }) => {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    amount: "",
    message: "",
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    amount: "",
    message: "",
  });
  const [showPayPal, setShowPayPal] = useState(false);
  const paypalRef = useRef();
  useEffect(() => {
    if (open) {
      setFormData(initialFormData); // Reset form data when the dialog opens
      setShowPayPal(false); // Ensure PayPal is hidden when the dialog is reopened
    }
  }, [open]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isFormValid = () => {
    return (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.message &&
      formData.amount &&
      !isNaN(formData.amount)
    );
  };

  useEffect(() => {
    if (showPayPal && window.paypal) {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  description: `Payment for ${formData.service}`,
                  amount: {
                    currency_code: "USD", // Change to "INR" for Indian Rupees
                    value: formData.amount,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            console.log("Order captured:", order);
            alert("Payment Successful!");
            setShowPayPal(false);
            onClose();
          },
          onError: (err) => {
            console.error("PayPal error:", err);
            alert("Something went wrong with the payment.");
          },
        })
        .render(paypalRef.current);
    }
  }, [showPayPal, formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      alert("Please fill out all required fields.");
      return;
    }
    setShowPayPal(true);
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
          />
          <TextField
            label="Phone Number"
            name="phone"
            variant="outlined"
            type="tel"
            fullWidth
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <TextField
            select
            label="Services"
            name="service"
            value={formData.service}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          >
            {servicesOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Date"
            name="date"
            variant="outlined"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            value={formData.date}
            onChange={handleChange}
          />
          <TextField
            label="Amount"
            name="amount"
            variant="outlined"
            type="number"
            fullWidth
            required
            value={formData.amount}
            onChange={handleChange}
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
        {showPayPal && (
          <Box ref={paypalRef} sx={{ mt: 3, textAlign: "center" }}></Box>
        )}
      </DialogContent>
      <DialogActions>
        {!showPayPal && (
          <>
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
              Proceed to PayPal
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default BookNowDialog;
