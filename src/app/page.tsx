"use client";
import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ChatSidebar } from "./components/ChatSidebar";

export default function Home() {
  return (
    <div className="min-h screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <ChatSidebar />
      <Footer />
    </div>
  );
}
