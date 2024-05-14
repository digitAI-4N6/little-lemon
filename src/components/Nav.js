import logo from "../images/Logo.svg";

export default function() {
    return (
        <ul>
            <li><img src={logo} alt="Little Lemon Logo"/></li>
            <li className="Nav"><a href="">Home</a></li>
            <li className="Nav"><a href="">About</a></li>
            <li className="Nav"><a href="">Menu</a></li>
            <li className="Nav"><a href="">Reservations</a></li>
            <li className="Nav"><a href="">Order Online</a></li>
            <li className="Nav"><a href="">Login</a></li>
        </ul>
    )
}