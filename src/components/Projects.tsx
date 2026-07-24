import { motion } from "framer-motion";
import externalLink from "../assets/external-link.svg";

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  skills: string[];
  link: string;
  image: string;
}

// 4 Sample Projects with placeholder photos
const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "E-Commerce Dashboard",
    description:
      "A full-stack admin dashboard with real-time analytics, inventory management, and sales reporting.",
    skills: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
    link: "https://github.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "proj-2",
    title: "RESTful API Auth Engine",
    description:
      "High-throughput backend service with JWT authentication, RBAC, and rate limiting.",
    skills: ["Node.js", "Express", "PostgreSQL", "Docker"],
    link: "https://github.com",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "proj-3",
    title: "Task & Workflow Tracker",
    description:
      "Collaborative task manager featuring Kanban boards, permissions, and live WebSocket updates.",
    skills: ["React", "Tailwind CSS", "Socket.io", "MongoDB"],
    link: "https://github.com",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "proj-4",
    title: "AI Portfolio Showcase",
    description:
      "Interactive modern portfolio featuring fluid Framer Motion animations and dark mode aesthetic.",
    skills: ["React", "TypeScript", "Framer Motion"],
    link: "https://github.com",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
      aria-label="Featured Projects"
    >
      {/* Mobile Sticky Section Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0d0f17]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-0 lg:w-auto lg:opacity-0 lg:sr-only">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-200">
          Projects
        </h2>
      </div>

      {/* 2x2 GRID CONTAINER */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PROJECTS.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noreferrer noopener"
            className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-700/60 bg-[#112240] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c084fc]"
          >
            {/* BASE IMAGE */}
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
            />

            {/* HOVER OVERLAY (Fades and slides in on hover) */}
            <motion.div className="absolute inset-0 z-10 flex flex-col justify-between bg-[#0d0f17]/90 p-5 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
              {/* Top Row: Title & External Icon */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-semibold text-slate-100 group-hover:text-[#c084fc] transition-colors">
                  {project.title}
                </h3>
                <img
                  src={externalLink}
                  alt=""
                  className="h-4 w-4 shrink-0 brightness-0 invert-[60%] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>

              {/* Middle: Description */}
              <p className="my-auto text-xs leading-relaxed text-slate-300 line-clamp-3">
                {project.description}
              </p>

              {/* Bottom: Skill Badges */}
              <ul className="flex flex-wrap gap-1.5 pt-2" aria-label="Technologies used">
                {project.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-[#c084fc]/15 px-2.5 py-0.5 text-[11px] font-medium text-[#c084fc]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
}