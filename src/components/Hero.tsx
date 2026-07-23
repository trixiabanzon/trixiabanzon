export default function Hero() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[45%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        {/* Added pt-8 here for space above the name */}
        <h1 className="pt-8 text-4xl font-bold tracking-tight text-slate-200 sm:text-[44px]">
          <a href="/">Trixia Mae Banzon</a>
        </h1>

        {/* Job Title */}
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Full-Stack Developer
        </h2>

        {/* Bio Text */}
        <p className="mt-4 max-w-xs text-[17px] leading-relaxed text-slate-400">
          I build web applications, reliable APIs, and clean backend systems.
        </p>

        {/* Navigation */}
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max space-y-2">
            <li>
              <a className="group flex items-center py-3" href="#about">
                <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-[#64ffda]"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-[#64ffda]">
                  About
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#experience">
                <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-[#64ffda]"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-[#64ffda]">
                  Experience
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#projects">
                <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-[#64ffda]"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-[#64ffda]">
                  Projects
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center gap-6 text-sm font-medium text-slate-400">
        <li className="hover:text-[#64ffda] transition">
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </li>
        <li className="hover:text-[#64ffda] transition">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        </li>
      </ul>
    </header>
  );
}