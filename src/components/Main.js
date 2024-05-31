// import ReservationDetails from "./ReservationDetails";
import Bookings from "./Bookings";
import React, { useState, useReducer } from "react";

const SET_TIME = 'SET_TIME';
const UPDATE_TIMES = 'UPDATE_TIMES';

const reducer = (state, action) => {
    switch(action.type) {
        case SET_TIME:
            return {...state, availableTimes: action.payload };
        default:
            return state;
    }
}

const updateTimes = (date, state.availableTimes) => {
    // Logic to determine the new availableTimes based on the selected date
    const newAvailableTimes = '17:00';
  
    // Update the availableTimes state variable using the state-changing function
    dispatch({ type: 'UPDATE_TIMES', payload: newAvailableTimes });
  }

const initialState = { availableTimes: '17:00' }



export default function Main() {
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");

  const [state, dispatch] = useReducer(reducer, initialState);

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
