import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative bg-[#0a192f] text-slate-400 selection:bg-[#64ffda] selection:text-[#0a192f]">
      {/* Background Mouse Spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      {/* Main Container */}
      <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-16 lg:py-0">
        {/* lg:gap-20 creates a wide gutter between the columns */}
        <div className="lg:flex lg:justify-between lg:gap-20">
          
          {/* LEFT COLUMN: Fixed/Sticky Header */}
          <Hero />

          {/* RIGHT COLUMN: Scrollable Content */}
          <main id="content" className="pt-24 lg:w-[55%] lg:py-24">
            <About />
            <Experience />
            <Projects />
          </main>

        </div>
      </div>
    </div>
  );
}