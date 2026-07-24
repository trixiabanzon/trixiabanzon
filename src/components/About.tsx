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

        {/* Right Side Paragraph */}
        <div className="text-[17px] leading-7 text-slate-400 text-justify">
          <p>
            Hello there! I'm Trixia, a Computer Science graduate from the{" "}
            <span className="font-medium text-slate-200">
              University of the Philippines Los Baños
            </span>{" "}
            specializing in full-stack web development. My focus lies in building scalable backends using{" "}
            <span className="font-medium text-slate-200">Node.js</span> and{" "}
            <span className="font-medium text-slate-200">Express.js</span>, while crafting responsive, modern interfaces with{" "}
            <span className="font-medium text-slate-200">Tailwind CSS</span> and{" "}
            <span className="font-medium text-slate-200">React</span>.
            I'm eager to build real-world software alongside passionate developers.          
          </p>
        </div>
      </div>

      {/* BOTTOM ROW: Extended Paragraphs */}
      <div className="mt-6 space-y-4 text-[17px] leading-7 text-slate-400 text-justify">
        {/* Paragraph 2: Technical Philosophy */}
        <p>
          I strive to write clean, maintainable code for smooth UI/UX, constantly exploring new tools and 
          best practices to keep applications fast and reliable.        
        </p>

        {/* Paragraph 3: Projects, Org Experience & Leadership */}
        <p>
          I've built web and mobile applications, as well as an agent-based simulation model for my academic projects. 
          I've also been part of my student organization's web development team and took on leadership roles that helped 
          strengthen my communication and collaboration skills.
        </p>

        {/* Paragraph 4: Hobbies & Personal Interests */}
        <p>
          Outside of development, you'll usually find me playing with my cats, reading horror books, or playing video games like 
          <span className="font-medium text-slate-200"> Hades II</span> and  
          <span className="font-medium text-slate-200"> Genshin Impact</span>. 
        </p>
      </div>
    </section>
  );
}