import About from '@/components/About'
import Contact from '@/components/Contact';
import Hero from '@/components/Hero'
import Projects from '@/components/Projects';
import Skills from '@/components/Skills'
import React from 'react'

export default function HomePage() {
  return (
    <main
      className="
        min-h-screen
        bg-gradient-to-br
        from-slate-950
        via-slate-900
        to-blue-900
      "
    >
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}