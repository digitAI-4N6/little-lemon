import React, { useState } from "react";
import { validateEmail } from "./subcomponents/BillingInformation/Utilities";
import BookingForm from "./subcomponents/BookingForm";

export default function BillingInformation() {
  // Reservation Details
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [occasion, setOccasion] = useState("");

  const getIsFormValid = () => {
    return (
      guests &&
      date &&
      time &&
      occasion
    );
  };

  const clearForm = () => {
    setGuests("");
    setDate("");
    setTime("");
    setOccasion("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Table reserved!");
    clearForm();
  };

  return (
    <>
      <h2>Reservation Details</h2>
      <BookingForm
      guests={guests}
      date={date}
      time={time}
      occasion={occasion}
      />
    </>
  );
}
