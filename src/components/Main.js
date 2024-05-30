// import ReservationDetails from "./ReservationDetails";
import Bookings from "./Bookings";
import React, { useState } from "react";

export default function Main() {
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [availableTimes, setAvailableTimes] = useState("");
  const [occasion, setOccasion] = useState("");

  return (
    <>
      {/* <ReservationDetails /> */}
      <Bookings
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
