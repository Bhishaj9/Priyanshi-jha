import React from 'react';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Credentials from './components/Credentials';

function App() {
  return (
    <main className="relative min-h-screen bg-[#2F4F4F] text-white selection:bg-[#9932CC] selection:text-white">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#9932CC]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#4B0082]/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      {/* Navigation (Optional/Simple) */}
      <nav className="fixed top-0 w-full z-50 glass border-b-0 rounded-none bg-opacity-80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-wider">
            ORGANIC<span className="text-[#9932CC]">FINANCE</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#journey" className="hover:text-[#DA70D6] transition-colors">Journey</a>
            <a href="#skills" className="hover:text-[#DA70D6] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#DA70D6] transition-colors">Projects</a>
            <a href="#credentials" className="hover:text-[#DA70D6] transition-colors">Credentials</a>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <Hero />
      <Journey />
      <Skills />
      <Projects />
      <Credentials />
      
      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-gray-400 text-sm glass border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Priyanshi Jha. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default App;
