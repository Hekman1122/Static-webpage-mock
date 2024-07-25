import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import CorBrand from "@/components/Hero/CorBrand";
import Commercial from "@/components/Commercial/Commercial";
import Brand from "@/components/Brand/Brand";
import CaseContainer from "@/components/Case/CaseContainer";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Hero />
      <CorBrand />
      <Commercial />
      <Brand />
      <CaseContainer />
      <Footer />
    </div>
  );
}
