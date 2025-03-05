"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";

const HomePage = () => {
  return (
    <div className="font-kodchasan bg-gray-900 min-h-screen overflow-x-hidden text-white">
      {/* HEADER */}
      <Header />

      {/* SEÇÃO HERO */}
      <Hero />

      {/* SEÇÃO SOBRE MIM */}
      <AboutMe />

      {/* SEÇÃO PROJETOS */}
      <Projects />

      {/* SEÇÃO CONTATO */}
      <Contact />

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default HomePage;
