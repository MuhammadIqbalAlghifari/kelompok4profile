import BestSellingProductComponent from "./components/bestProducts";
import ExperienceComponent from "./components/experiences";
import FooterComponent from "./components/footer";
import HeroComponent from "./components/hero";
import MaterialsComponent from "./components/materials";
import NavbarComponent from "./components/navbar";
import SloganComponent from "./components/slogan";
import TestimonialsComponent from "./components/testimonials";

export default function Home() {
  return (
    <>
      <NavbarComponent/>
      <HeroComponent/>
      <SloganComponent/>
      <BestSellingProductComponent/>
      <ExperienceComponent/>
      <MaterialsComponent/>
      <TestimonialsComponent/>
      <FooterComponent/>
    </>
  );
}
