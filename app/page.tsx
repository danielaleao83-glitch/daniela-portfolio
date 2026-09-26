import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import SoftwareEngineering from "@/components/SoftwareEngineering";
import FrontendDatabase from "@/components/FrontendDatabase";
import CloudDevOps from "@/components/CloudDevOps";
import Infrastructure from "@/components/Infrastructure";
import VidaSaude from "@/components/VidaSaude";
import GitHubPortfolio from "@/components/GitHubPortfolio";
import ArtificialIntelligence from "@/components/ArtificialIntelligence";
import Governance from "@/components/Governance";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Profile />
        <SoftwareEngineering />
        <FrontendDatabase />
        <CloudDevOps />
        <Infrastructure />
        <VidaSaude />
        <GitHubPortfolio />
        <ArtificialIntelligence />
        <Governance />
        <Education />
        <Contact />
      </main>
    </>
  );
}
