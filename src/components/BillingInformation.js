import React, { useState } from "react";
import { validateEmail } from "./subcomponents/BillingInformation/Utilities";
import BookingForm from "./subcomponents/BookingForm";

export default function BillingInformation() {
  // Reservation Details
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const getIsFormValid = () => {
    return (
      guests &&
      date &&
      time
    );
  };

  const clearForm = () => {
    setGuests("");
    setDate("");
    setTime("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Table reserved!");
    clearForm();
  };

  return (
    <>
      <h2>Reservation Details</h2>
      <BookingForm />
    </>
  );
}
