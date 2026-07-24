import { useState } from "react";

export default function Projects() {
  const projectsList = [
    {
      id: "alumni",
      title: "Alumni Tracking System",
      description:
        "A full-stack web application designed to connect and track university alumni. Features include user authentication, profile management, interactive dashboards, and RESTful API integration.",
      tech: ["Node.js", "Express.js", "MongoDB", "React", "Tailwind CSS"],
      link: "https://github.com/yourusername/alumni-tracker",
      image: "https://via.placeholder.com/600x300",
    },
    {
      id: "interpreter",
      title: "Programming Language Interpreter",
      description:
        "Built a custom programming language interpreter from scratch. Implemented lexical analysis, parsing (AST construction), and evaluation logic to process custom syntax.",
      tech: ["Python", "C++", "Data Structures"],
      link: "https://github.com/yourusername/interpreter",
      image: "https://via.placeholder.com/600x300",
    },
    {
      id: "traffic-sim",
      title: "Traffic Simulation",
      description:
        "Developed a computer simulation modeling agent behavior and vehicle flow in traffic bottlenecks. Used mathematical algorithms to analyze congestion patterns.",
      tech: ["JavaScript", "HTML5 Canvas", "Algorithms"],
      link: "https://github.com/yourusername/traffic-sim",
      image: "https://via.placeholder.com/600x300",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const activeProject = projectsList[activeTab];

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected Projects"
    >
      {/* Mobile Sticky Section Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a192f]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-0 lg:w-auto lg:opacity-0">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-200">
          Projects
        </h2>
      </div>

      {/* Top Tab Navigation Bar */}
      <div className="mb-8 flex overflow-x-auto border-b border-slate-800 pb-px scrollbar-none">
        <div className="flex gap-2">
          {projectsList.map((project, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={project.id}
                onClick={() => setActiveTab(index)}
                className={`relative whitespace-nowrap px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#64ffda]"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {project.title}

                {/* Active Underline Highlight */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#64ffda]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Project Content Display */}
      <div className="rounded-lg border border-slate-800/80 bg-slate-900/30 p-6 backdrop-blur-sm transition-all">
        <div className="grid gap-6 md:grid-cols-12 md:items-center">
          {/* Project Details */}
          <div className="md:col-span-7">
            <h3 className="text-xl font-semibold text-slate-200">
              <a
                href={activeProject.link}
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex items-center gap-1 hover:text-[#64ffda] focus-visible:text-[#64ffda]"
              >
                <span>{activeProject.title}</span>
                <span className="inline-block text-sm transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 motion-reduce:transition-none">
                  ↗
                </span>
              </a>
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {activeProject.description}
            </p>

            {/* Tech Stack Pills */}
            <ul
              className="mt-4 flex flex-wrap gap-1.5"
              aria-label="Technologies used"
            >
              {activeProject.tech.map((item, tIndex) => (
                <li
                  key={tIndex}
                  className="flex items-center rounded-full bg-[#64ffda]/10 px-3 py-1 text-xs font-medium text-[#64ffda]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Optional Project Image/Preview */}
          {activeProject.image && (
            <div className="md:col-span-5">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full rounded border border-slate-700/50 object-cover opacity-80 transition hover:opacity-100"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}