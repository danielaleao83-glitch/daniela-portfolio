import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import ArtificialIntelligence from "@/components/ai/ArtificialIntelligence";
import ResumeCard from "@/components/resume/ResumeCard/ResumeCard";
import QuizAtualidades from "@/components/quizzes/QuizAtualidades";
import QuizBrasil from "@/components/quizzes/QuizBrasil";
import GitHubProjects from "@/components/github/GitHubProjects";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <ArtificialIntelligence />
      <ResumeCard />
      <QuizAtualidades />
      <QuizBrasil />
      <GitHubProjects />
      <Contact />
      <Footer />
    </>
  );
}