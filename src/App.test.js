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
  const initialState = initializeTimes();
  expect(initialState).toEqual({ availableTimes: "17:00" });
});

// Unit test for updateTimes
test("Should Update Times Correctly", () => {
  const initialTimes = { availableTimes: "17:00" };
  const action = { type: SET_TIME, payload: "18:00" };
  const newState = updateTimes(initialTimes, action);
  expect(newState).toEqual({ availableTimes: "18:00" });
});

// import { render, screen } from '@testing-library/react';
// import BookingForm from './components/subcomponents/BookingForm';

// test('Renders the BookingForm heading', () => {
//   render(<BookingForm />);
//   const chooseDate = screen.getAllByRole("Choose date");
//   expect(chooseDate).toBeInTheDocument();
// });

// import { render, fireEvent, screen } from "@testing-library/react";
// import App from "./App";

// test("Adds one", () => {
//   // Render the App component
//   render(<App />);

//   // Save the heading in a variable
//   const heading = screen.getByTestId("currentNumber");

//   // Save the button in a variable
//   const btn = screen.getByTestId("add-one");

//   // Click the button
//   fireEvent.click(btn);

//   // Test assumption
//   expect(heading).toHaveTextContent("2");
// });
