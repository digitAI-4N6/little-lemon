import Logo from "../images/Logo .svg";

export default function Footer() {
  return (
    <>
      <img src={Logo} alt="Logo" />
      <h3>Doormat Navigation</h3>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Menu</a>
        </li>
        <li>
          <a href="">Reservations</a>
        </li>
        <li>
          <a href="">Order Online</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
      </ul>
      <h3>Contact</h3>
      <ul>
        <li>Address</li>
        <li>Phone Number</li>
        <li>Email</li>
      </ul>
      <h3>Social Media Links</h3>
      <li>
        <a href="">Fakebook</a>
      </li>
      <li>
        <a href="">Infogram</a>
      </li>
      <li>
        <a href="">Punterest</a>
      </li>
    </>
  );
}
