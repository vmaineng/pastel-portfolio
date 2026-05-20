"use client";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ChatSidebar } from "./components/ChatSidebar";

export default function Home() {
  return (
    <div className="min-h screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        {/* <Skills /> */}
        <Contact />
      </main>
      <ChatSidebar />
      <Footer />
    </div>
  );
}
