import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import IndiaRussiaTrust from "@/components/IndiaRussiaTrust";
import CulturalImmersion from "@/components/CulturalImmersion";
import DestinationsGrid from "@/components/DestinationsGrid";
import TourModels from "@/components/TourModels";
import Testimonials from "@/components/Testimonials";
import ConversionFooter from "@/components/ConversionFooter";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <IndiaRussiaTrust />
      <CulturalImmersion />
      <DestinationsGrid />
      <TourModels />
      <Testimonials />
      <ConversionFooter />
    </>
  );
}
