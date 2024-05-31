import React, { useState } from "react";
import { validateEmail } from "./subcomponents/BillingInformation/Utilities.js";
import BookingForm from "./subcomponents/BookingForm.js";
import App from "../App.js";

export default function Bookings({
  guests,
  setGuests,
  date,
  setDate,
  state,
  dispatch,
  occasion,
  setOccasion
}) {

  return (
    <>
      <h2>Reservation Details</h2>
      <BookingForm
      guests={guests}
      setGuests={setGuests}
      date={date}
      setDate={setDate}
      state={state}
      dispatch={dispatch}
      occasion={occasion}
      setOccasion={setOccasion}
      />
    </>
  );
}
