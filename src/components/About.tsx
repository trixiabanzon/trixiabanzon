const technologies = [
  "TypeScript",
  "React",
  "Node.js",
  "Laravel",
  "PHP",
  "Java",
  "Python",
  "SQL",
  "WordPress",
  "MongoDB",
];

export default function About() {
  return (
    <section id="about" className="min-h-screen py-28">
      <p className="mb-6 font-mono text-sm font-semibold uppercase tracking-widest text-[#64ffda]">
        About
      </p>

      <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 className="mb-6 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-[#e6f1ff]">
            I build web applications with clean backend logic.
          </h2>

          <p className="mb-5 max-w-2xl leading-8 text-[#8892b0]">
            I’m Trixia Mae Banzon, a Computer Science graduate from the
            University of the Philippines Los Baños with experience in
            full-stack development, backend systems, API integration, and
            WordPress development.
          </p>

          <p className="mb-5 max-w-2xl leading-8 text-[#8892b0]">
            My work focuses on building functional, maintainable, and
            user-friendly applications. I enjoy working on backend features,
            database logic, and system flows, but I can also contribute to
            frontend implementation when needed.
          </p>

          <p className="mb-5 max-w-2xl leading-8 text-[#8892b0]">
            Recently, I worked on projects involving alumni tracking systems,
            WordPress plugins, Laravel-based web systems, programming language
            interpretation, and agent-based traffic simulation.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#64ffda]/25 bg-[#64ffda]/5 px-4 py-2 text-sm text-[#64ffda]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="h-fit rounded-2xl border border-[#8892b0]/20 bg-[#112240] p-7 shadow-2xl md:sticky md:top-28">
          <div className="mb-5 h-[3px] w-12 bg-[#64ffda]" />

          <h3 className="mb-3 text-xl font-semibold text-[#e6f1ff]">
            Current focus
          </h3>

          <p className="leading-7 text-[#8892b0]">
            Backend development, full-stack web applications, API design, and
            building portfolio projects that show real system functionality.
          </p>
        </div>
      </div>
    </section>
  );
}