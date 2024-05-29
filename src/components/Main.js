// import ReservationDetails from "./ReservationDetails";
import BillingInformation from "./BillingInformation";

export default function Main({guests, setGuests, date, setDate, availableTimes, setAvailableTimes, occasion, setOccasion}) {
    return (
        <>
        {/* <ReservationDetails /> */}
        <BillingInformation 
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