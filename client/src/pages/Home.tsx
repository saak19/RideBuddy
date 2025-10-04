import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Features from "@/components/Features";
import RoleDifferentiation from "@/components/RoleDifferentiation";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 md:pt-20">
        <Hero />
        <StatsBar />
        <Features />
        <RoleDifferentiation />
        <HowItWorks />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
