import Logo from "../images/Logo .svg";
import DoormatNavigation from "./subcomponents/DoormatNavigation";
import Contact from "./subcomponents/Contact";
import Socials from "./subcomponents/Socials";

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
