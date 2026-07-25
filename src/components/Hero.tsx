import resumePdf from "../assets/resume/resume.pdf"; 

interface HeroProps {
  activeSection?: string;
}

export default function Hero({ activeSection = "about" }: HeroProps) {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[45%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        {/* Name */}
        <h1 className="text-5xl font-normal italic tracking-tight text-slate-100 sm:text-[56px] [font-family:'Playfair_Display',serif]">
          <a href="/">Trixia Mae Banzon</a>
        </h1>

        {/* Job Title */}
        <h2 className="mt-2 text-lg font-semibold tracking-tight text-[#c084fc] sm:text-xl">
          Junior Web Developer
        </h2>

        {/* Navigation Links */}
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          {/* Changed mt-16 to mt-24 to push it lower */}
          <ul className="mt-24 w-max space-y-2">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <li key={item.name}>
                  <a className="group flex items-center py-3" href={item.href}>
                    <span
                      className={`mr-4 h-px transition-all ${
                        isActive
                          ? "w-16 bg-[#c084fc]"
                          : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-[#c084fc]"
                      }`}
                    ></span>
                    
                    <span
                      className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                        isActive
                          ? "text-[#c084fc]"
                          : "text-slate-400 group-hover:text-[#c084fc]"
                      }`}
                    >
                      {item.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Footer Section */}
      <div className="mt-8 flex flex-col gap-4">
        {/* Pitch text */}
        <p className="max-w-xs sm:max-w-sm text-sm leading-relaxed text-slate-400">
          Have a project idea, want to collaborate, or just want to say hi? Drop me a message, I'd love to chat!
        </p>

        {/* Social & Resume Icons with Tooltips */}
        <div className="flex items-center gap-5 text-slate-400">
          {/* GitHub */}
          <div className="group relative flex items-center justify-center">
            <a
              href="https://github.com/trixiabanzon"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#c084fc] transition-colors"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-[10px] font-medium text-slate-200 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-top-9 shadow-md border border-slate-700/50">
              GitHub
            </span>
          </div>

          {/* LinkedIn */}
          <div className="group relative flex items-center justify-center">
            <a
              href="https://linkedin.com/in/trixiabanzon"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#c084fc] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-[10px] font-medium text-slate-200 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-top-9 shadow-md border border-slate-700/50">
              LinkedIn
            </span>
          </div>

          {/* Email */}
          <div className="group relative flex items-center justify-center">
            <a
              href="mailto:banzontrixia718@gmail.com"
              className="hover:text-[#c084fc] transition-colors"
              aria-label="Email"
            >
              <svg className="h-5 w-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
            <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-[10px] font-medium text-slate-200 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-top-9 shadow-md border border-slate-700/50">
              Email
            </span>
          </div>

          {/* Resume */}
          <div className="group relative flex items-center justify-center">
            <a
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#c084fc] transition-colors"
              aria-label="Resume"
            >
              <svg className="h-5 w-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </a>
            <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-[10px] font-medium text-slate-200 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-top-9 shadow-md border border-slate-700/50">
              Resume
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}