import React, { useState } from 'react';

export default function BookingForm() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState([
        {
            time: "17:00",
        },
        {
            time: "18:00",
        },
        {
            time: "19:00",
        },
        {
            time: "20:00",
        },
        {
            time: "21:00",
        },
        {
            time: "22:00",
        },
    ]);
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState([
        {
            occasion: "Birthday",
        },
        {
            occasion: "Anniversary",
        },
    ])

    const getIsFormValid = () => {
        return (
          guests &&
          date &&
          time &&
          occasion
        );
      };

      const clearForm = () => {
        setGuests("");
        setDate("");
        setTime("");
        setOccasion("")
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        alert("Table reserved!");
        clearForm();
      };

    return (
        <>
            <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
                <label htmlFor="date">Choose date</label>
                <input
                type="date"
                id="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                />
                <label htmlFor="time">Choose time</label>
                <select
                id="time"
                onChange={(e) => setTime(e.target.value)}
                value={time}
                >
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input
                type="number"
                placeholder="1"
                onChange={(e) => setGuests(e.target.value)}
                min="1"
                max="10"
                id="guests"
                value={guests}
                />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion"
                onChange={(e) => setOccasion(e.target.value)}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <button
                type="submit"
                disabled={!getIsFormValid()}
                >Make Your Reservation</button>
            </form>
        </>
    );
}