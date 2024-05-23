import restaurant from "../images/restaurant.jpg";

export default function Header() {
    return (
        <><h1 className="header">Make a Reservation</h1>
        <img src={restaurant} alt="restaurant" className="heroImg" height="500px" ></img>
        </>
    )
}
