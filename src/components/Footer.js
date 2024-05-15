import Logo from "../images/Logo .svg";
import DoormatNavigation from "./subcomponents/footer-subcomponents/DoormatNavigation";
import Contact from "./subcomponents/footer-subcomponents/Contact";
import Socials from "./subcomponents/footer-subcomponents/Socials";

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
