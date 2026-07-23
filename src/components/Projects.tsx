export default function Projects() {
  const projectsList = [
    {
      title: "Alumni Tracking System",
      description:
        "A full-stack web application designed to connect and track university alumni. Features include user authentication, profile management, interactive dashboards, and RESTful API integration.",
      tech: ["Node.js", "Express.js", "MongoDB", "React", "Tailwind CSS"],
      link: "https://github.com/yourusername/alumni-tracker",
      image: "https://via.placeholder.com/200x120", // Replace with your thumbnail path (e.g., ../assets/alumni.png)
    },
    {
      title: "Programming Language Interpreter",
      description:
        "Built a custom programming language interpreter from scratch. Implemented lexical analysis, parsing (AST construction), and evaluation logic to process custom syntax.",
      tech: ["Python", "C++", "Data Structures"],
      link: "https://github.com/yourusername/interpreter",
      image: "https://via.placeholder.com/200x120",
    },
    {
      title: "Agent-Based Traffic Simulation",
      description:
        "Developed a computer simulation modeling agent behavior and vehicle flow in traffic bottlenecks. Used mathematical algorithms to analyze congestion patterns.",
      tech: ["JavaScript", "HTML5 Canvas", "Algorithms"],
      link: "https://github.com/yourusername/traffic-sim",
      image: "https://via.placeholder.com/200x120",
    },
  ];

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

      <div className="space-y-12">
        {projectsList.map((project, index) => (
          <div
            key={index}
            className="group relative grid gap-4 sm:grid-cols-8 sm:gap-8 transition-all hover:!opacity-100 lg:group-hover/projects:opacity-50"
          >
            {/* Project Image / Thumbnail */}
            <div className="z-10 sm:col-span-2 mt-1">
              <img
                src={project.image}
                alt={project.title}
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 w-full object-cover sm:h-20"
              />
            </div>

            {/* Project Details */}
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-slate-200">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-[#64ffda] focus-visible:text-[#64ffda] text-base group/link"
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>
                    {project.title}{" "}
                    <span className="inline-block transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none">
                      ↗
                    </span>
                  </span>
                </a>
              </h3>

              <p className="mt-2 text-sm leading-normal text-slate-400">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <ul
                className="mt-2 flex flex-wrap gap-1.5"
                aria-label="Technologies used"
              >
                {project.tech.map((item, tIndex) => (
                  <li
                    key={tIndex}
                    className="flex items-center rounded-full bg-[#64ffda]/10 px-3 py-1 text-xs font-medium leading-5 text-[#64ffda]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}