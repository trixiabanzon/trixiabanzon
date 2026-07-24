import sablayPic from "../assets/sablay.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      {/* Mobile Sticky Section Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0d0f17]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-0 lg:w-auto lg:opacity-0">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-200">
          About
        </h2>
      </div>

      {/* TOP ROW: Profile Image + Main Intro */}
      <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-[auto_1fr]">
        {/* Profile Image Container */}
        <div className="group relative h-44 w-40 shrink-0 sm:h-56 sm:w-52">
          <div className="h-full w-full overflow-hidden rounded-2xl border border-slate-700/60 bg-[#112240] shadow-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:border-[#c084fc]/50">
            <img
              src={sablayPic}
              alt="Trixia Mae Banzon"
              className="h-full w-full object-cover object-center"
            />
          </div>
          {/* Ambient Glow */}
          <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-tr from-[#c084fc]/20 to-transparent blur opacity-0 transition duration-300 group-hover:opacity-100" />
        </div>

        {/* Right Side Paragraph - Added text-justify */}
        <div className="text-[17px] leading-7 text-slate-400 text-justify">
          <p>
            Hello there! I'm Trixia, a Computer Science graduate from the{" "}
            <span className="font-medium text-slate-200">
              University of the Philippines Los Baños
            </span>{" "}
            specializing in full-stack web development. My primary focus lies in building scalable backends using{" "}
            <span className="font-medium text-slate-200">Node.js</span> and{" "}
            <span className="font-medium text-slate-200">Express.js</span>, while crafting responsive, modern interfaces with{" "}
            <span className="font-medium text-slate-200">Tailwind CSS</span> and{" "}
            <span className="font-medium text-slate-200">React</span>.
          </p>
        </div>
      </div>

      {/* BOTTOM ROW: Extended Paragraphs - Added text-justify */}
      <div className="mt-6 space-y-4 text-[17px] leading-7 text-slate-400 text-justify">
        <p>
          At the core of everything I build, I strive to write clean, maintainable code that delivers smooth user experiences. To achieve this, I stay curious and adaptable by constantly exploring modern tools, refining backend logic, and applying industry best practices to ensure applications are fast, secure, and reliable.
        </p>

        {/* --- NEW CONTENT SUGGESTION 1: Engineering Philosophy --- */}
        <p>
          Whether designing RESTful APIs, structuring database schemas, or fine-tuning frontend animations, I enjoy solving complex problems from end to end. I thrive in collaborative environments where I can brainstorm solutions, learn from mentors, and contribute to meaningful projects.
        </p>
      </div>

      {/* --- NEW CONTENT SUGGESTION 2: Quick Highlights Grid --- */}
      <div className="mt-8 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-[#111827]/40 p-4 transition-colors hover:border-[#c084fc]/30">
          <h3 className="font-semibold text-slate-200">🎓 Education</h3>
          <p className="mt-1 text-slate-400">
            BS Computer Science — UP Los Baños
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-[#111827]/40 p-4 transition-colors hover:border-[#c084fc]/30">
          <h3 className="font-semibold text-slate-200">⚙️ Main Tech</h3>
          <p className="mt-1 text-slate-400">
            JavaScript (ES6+), TypeScript, Node.js, React, SQL/NoSQL
          </p>
        </div>
      </div>
    </section>
  );
}