import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeFix from "@/components/WhatWeFix";
import ModelsOfEngagement from "@/components/ModelsOfEngagement";
import Playbook from "@/components/Playbook";
import Results from "@/components/Results";
import AboutLab from "@/components/AboutLab";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <Hero />
      <WhatWeFix />
      <ModelsOfEngagement />
      <Playbook />
      <Results />
      <AboutLab />
      <Footer />
    </div>
  );
}
