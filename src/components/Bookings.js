import React, { useState } from "react";
import { validateEmail } from "./subcomponents/BillingInformation/Utilities.js";
import BookingForm from "./subcomponents/BookingForm.js";
import App from "../App.js";

export default function Bookings({
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
      />
    </>
  );
}
