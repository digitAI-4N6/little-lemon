import restaurant from "../images/restaurant.jpg";
import ReservationDetails from "./ReservationDetails";
import BillingInformation from "./BillingInformation";

export default function Main() {
    return (
        <>
        <article>
        <img src={restaurant} alt="restaurant"></img>
        </article>
        <ReservationDetails />
        <BillingInformation />
        </>
    )
}