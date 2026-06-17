import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import CulturalImmersion from "@/components/CulturalImmersion";
import DestinationsGrid from "@/components/DestinationsGrid";
import TourModels from "@/components/TourModels";
import Testimonials from "@/components/Testimonials";
import ConversionFooter from "@/components/ConversionFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <CulturalImmersion />
      <DestinationsGrid />
      <TourModels />
      <Testimonials />
      <ConversionFooter />
    </>
  );
}
