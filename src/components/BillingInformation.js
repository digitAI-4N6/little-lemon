import React, { useState } from "react";
import { validateEmail } from "./subcomponents/BillingInformation/Utilities";
import BookingForm from "./subcomponents/BookingForm";
import App from "../App.js";

export default function BillingInformation({
  guests,
  setGuests,
  date,
  setDate,
  availableTimes,
  setAvailableTimes,
  occasion,
  setOccasion
}) {
  // Reservation Details

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
    console.log("handleSubmit Activated!")
    alert("Table reserved!");
    clearForm();
  };

  return (
    <>
      <h2>Reservation Details</h2>
      <BookingForm
      guests={guests}
      setGuests={setGuests}
      date={date}
      setDate={setDate}
      availableTimes={availableTimes}
      setAvailableTimes={setAvailableTimes}
      occasion={occasion}
      setOccasion={setOccasion}
      onSubmit={handleSubmit}
      />
    </>
  );
}
