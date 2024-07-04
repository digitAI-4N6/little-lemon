import { render, screen } from "@testing-library/react";
import BookingForm from "./components/subcomponents/BookingForm";
import { initializeTimes, updateTimes, SET_TIME } from "./components/Main";
import React from "react";
import { act } from "react";

const initialState = {
  availableTimes: "17:00",
};

const mockDispatch = jest.fn();

test("Renders the BookingForm elements", () => {
  act(() => {
    render(
      <BookingForm
        guests=""
        setGuests={jest.fn()}
        date=""
        setDate={jest.fn()}
        state={initialState}
        dispatch={mockDispatch}
        occasion=""
        setOccasion={jest.fn()}
        onSubmit={jest.fn()}
      />
    );
  });

  // Get by Label Text
  const dateElement = screen.getByLabelText(/Choose date/i);
  expect(dateElement).toBeInTheDocument();
});

// Unit test for initializeTimes
test("Should Initialize Times Correctly", () => {
  const state = initializeTimes();
  expect(state).toEqual({ availableTimes: "17:00" });
});

// Unit test for updateTimes
test("Should Update Times Correctly", () => {
  const initialTimes = { availableTimes: "17:00" };
  const action = { type: SET_TIME, payload: "18:00" };
  const newState = updateTimes(initialTimes, action);

  console.log('Initial state:', initialTimes);
  console.log('Action:', action);
  console.log('New state:', newState);

  expect(newState).toEqual({ availableTimes: "18:00" });
});
