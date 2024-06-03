// import ReservationDetails from "./ReservationDetails";
import Bookings from "./Bookings";
import React, { useState, useReducer } from "react";

const SET_TIME = 'SET_TIME';

export const updateTimes = (state, action) => {
    switch(action.type) {
        case SET_TIME:
            return {...state, availableTimes: action.payload };
        default:
            return state;
    }
}

export const initializeTimes = () => {
  return {availableTimes: '17:00'};
};

export default function Main() {
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");

  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <>
      {/* <ReservationDetails /> */}
      <Bookings
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
