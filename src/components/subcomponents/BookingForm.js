import React from 'react';

export default function BookingForm({
    guests,
    setGuests,
    date,
    setDate,
    state,
    dispatch,
    occasion,
    setOccasion,
    onSubmit
}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handleSubmit Activated!")
        alert("Table reserved!");
        clearForm();
      };

      const handleTimeChange = (e) => {
        dispatch({type: 'SET_TIME', payload: e.target.value });
      };

      const clearForm = () => {
        setGuests("");
        setDate("");
        dispatch({type: 'SET_TIME', payload: '17:00' });
        setOccasion("");
      };

      const getIsFormValid = () => {
        return (
          guests &&
          date &&
          state.availableTimes &&
          occasion
        );
      };

    return (
        <>
            <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
                <label htmlFor="date">Choose date</label>
                <input
                type="date"
                id="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                role='Choose date'
                />
                <label htmlFor="availableTimes">Choose time</label>
                <select
                id="availableTimes"
                onChange={handleTimeChange}
                value={state.availableTimes}
                role='Select Time from Available Times'
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
                role='Select number of guests'
                />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion"
                onChange={(e) => setOccasion(e.target.value)}
                role='Select occasion'
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <button
                type="submit"
                disabled={!getIsFormValid()}
                role='Submit your reservation'
                >Make Your Reservation</button>
            </form>
        </>
    );
}