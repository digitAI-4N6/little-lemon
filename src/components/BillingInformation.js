import React, { useState } from "react";
import { validateEmail } from "./subcomponents/BillingInformation/Utilities";
import BookingForm from "./subcomponents/BookingForm";

export default function BillingInformation() {
  // Reservation Details
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [availableTimes, setAvailableTimes] = useState("");
  const [occasion, setOccasion] = useState("");

  const getIsFormValid = () => {
    return (
      guests &&
      date &&
      availableTimes &&
      occasion
    );
  };

  const clearForm = () => {
    setGuests("");
    setDate("");
    setAvailableTimes("");
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
      time={availableTimes}
      occasion={occasion}
      />
    </>
  );
}
