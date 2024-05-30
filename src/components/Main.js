// import ReservationDetails from "./ReservationDetails";
import Bookings from "./Bookings";

export default function Main({guests, setGuests, date, setDate, availableTimes, setAvailableTimes, occasion, setOccasion}) {
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
    )
}