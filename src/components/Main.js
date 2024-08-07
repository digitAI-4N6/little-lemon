import React, { useState, useReducer } from "react";
import Bookings from "./Bookings";

export const SET_TIME = 'SET_TIME';

export const updateTimes = (state, action) => {
    console.log('State before update:', state);
    console.log('Action received:', action);

    switch(action.type) {
        case SET_TIME:
            const updatedState = {...state, availableTimes: action.payload };
            console.log('State after update:', updatedState);
            return updatedState;
        default:
            return state;
    }
}

export const initializeTimes = () => {
  return { availableTimes: '17:00' };
};

export default function Main() {
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");

  const [state, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
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
