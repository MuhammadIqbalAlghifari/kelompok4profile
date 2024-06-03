import OurProfile from "./components/Profile";
import FooterComponent from "./components/footer";
import HeroComponent from "./components/hero";
import NavbarComponent from "./components/navbar";

export default function Home() {
  return (
    <>
      <NavbarComponent/>
      <HeroComponent/>
      <OurProfile/>
      <FooterComponent/>
    </>
  );
}
