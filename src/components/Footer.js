import Logo from "../images/Logo .svg";
import DoormatNavigation from "./footer-subcomponents/DoormatNavigation";
import Contact from "./footer-subcomponents/Contact";
import Socials from "./footer-subcomponents/Socials";

export default function Footer() {
  return (
    <>
      <main className="foot">
        <img src={Logo} alt="Logo" />
        <DoormatNavigation />
        <Contact />
        <Socials />
      </main>
    </>
  );
}
