export default function ReservationDetails() {
    return (
        <>
        <h2>Reservation Details</h2>
        <label>Number of Guests</label>
        <input type="number" min="0" max="10"/>
        <label>Date</label>
        <input type="date" value="2024-05-16" min="2024-05-16" max="2024-12-16"/>
        <label>Time</label>
        <input type="time" min="9:00" max="21:00"/>
        </>
    )
}