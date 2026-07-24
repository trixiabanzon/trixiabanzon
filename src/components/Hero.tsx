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
        {/* Name - Removed pt-8 here */}
        <h1 className="text-5xl font-normal italic tracking-tight text-slate-100 sm:text-[56px] [font-family:'Playfair_Display',serif]">
          <a href="/">Trixia Mae Banzon</a>
        </h1>

        {/* Job Title */}
        <h2 className="mt-1 text-lg font-semibold tracking-tight text-[#c084fc] sm:text-xl">
          Junior Web Developer
        </h2>

        {/* Bio Text */}
        <p className="mt-4 max-w-xs text-[17px] leading-relaxed text-slate-400">
          I build web applications, reliable APIs, and clean backend systems.
        </p>

        {/* Navigation */}
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max space-y-2">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <li key={item.name}>
                  <a className="group flex items-center py-3" href={item.href}>
                    {/* Expanding Horizontal Indicator Line */}
                    <span
                      className={`mr-4 h-px transition-all ${
                        isActive
                          ? "w-16 bg-[#c084fc]"
                          : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-[#c084fc]"
                      }`}
                    ></span>
                    
                    {/* Section Name Text */}
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

      {/* Social Links — Added -translate-y-2 to nudge it UP slightly */}
      <ul className="ml-1 mt-8 -translate-y-2 flex items-center gap-6 text-sm font-medium text-slate-400">
        <li className="hover:text-[#c084fc] transition-colors">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li className="hover:text-[#c084fc] transition-colors">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>
    </header>
  );
}