import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../data/data";
import type { ProjectItem } from "../data/data";

// Helper to generate a live website screenshot preview URL via Microlink
const getScreenshotUrl = (link?: string, fallbackImage?: string) => {
  if (!link || link === "https://trixia.vercel.app" || link === "#" || link.startsWith("/")) {
    return fallbackImage || "/placeholder.jpg";
  }
  return `https://api.microlink.io/?url=${encodeURIComponent(
    link
  )}&screenshot=true&meta=false&embed=screenshot.url`;
};

// Check if project has a valid external live website link
const isValidExternalLink = (link?: string) => {
  return Boolean(link && link !== "https://trixia.vercel.app" && link !== "#" && !link.startsWith("/"));
};

export default function Projects() {
  // State for image lightbox modal
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  return (
    <section
      id="projects"
      className="mt-8 sm:mt-12 mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
      aria-label="Featured Projects"
    >
      {/* Mobile Sticky Section Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0d0f17]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-0 lg:w-auto lg:opacity-0 lg:sr-only">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-200">
          Projects
        </h2>
      </div>

      {/* 2x2 GRID CONTAINER */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {PROJECTS.map((project: ProjectItem) => {
          const imageSrc = getScreenshotUrl(project.link, project.image);
          const hasLiveLink = isValidExternalLink(project.link);

          // Click handler to decide whether to navigate or expand image
          const handleCardClick = (e: React.MouseEvent) => {
            if (!hasLiveLink) {
              e.preventDefault();
              setSelectedImage({ src: imageSrc, title: project.title });
            }
          };

          return (
            <div key={project.id} className="flex flex-col gap-2 group/card">
              {/* TOP HEADER: Title Outside Container */}
              <div>
                {hasLiveLink ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-base font-semibold text-slate-100 group-hover/card:text-[#c084fc] transition-colors break-words"
                  >
                    {project.title}
                  </a>
                ) : (
                  <button
                    onClick={() => setSelectedImage({ src: imageSrc, title: project.title })}
                    className="text-left text-base font-semibold text-slate-100 group-hover/card:text-[#c084fc] transition-colors break-words"
                  >
                    {project.title}
                  </button>
                )}
              </div>

              {/* SINGLE UNIFIED CONTAINER (Picture + Description + Tech Stack on Mobile) */}
              <div className="flex flex-col border border-slate-800 bg-[#121624] sm:bg-transparent sm:border-0 overflow-hidden shadow-lg sm:shadow-none">
                
                {/* 1. PICTURE */}
                <a
                  href={hasLiveLink ? project.link : "#"}
                  target={hasLiveLink ? "_blank" : "_self"}
                  rel={hasLiveLink ? "noreferrer noopener" : undefined}
                  onClick={handleCardClick}
                  className="group relative aspect-[16/9] overflow-hidden border-b border-slate-800 sm:border sm:border-[#c084fc]/50 bg-[#112240] transition-colors duration-300 sm:group-hover/card:border-[#c084fc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c084fc] cursor-pointer"
                >
                  <img
                    src={imageSrc}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 ease-out sm:group-hover/card:scale-105"
                  />

                  {/* DESKTOP HOVER OVERLAY (Only visible on sm: screens and up) */}
                  <motion.div className="hidden sm:flex absolute inset-0 z-10 flex-col justify-between bg-[#0d0f17]/90 p-4 opacity-0 sm:group-hover/card:opacity-100 backdrop-blur-sm transition-all duration-300 overflow-hidden">
                    <p className="text-xs leading-relaxed text-slate-300 line-clamp-6">
                      {project.description}
                    </p>
                    <ul className="flex flex-nowrap gap-1 pt-2 overflow-hidden items-center" aria-label="Technologies used">
                      {project.skills.map((skill) => (
                        <li
                          key={skill}
                          className="shrink-0 rounded-none bg-[#c084fc]/10 px-1.5 py-0.5 text-[9px] font-medium text-[#c084fc]"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </a>

                {/* 2. DESCRIPTION & 3. TECH STACK (Inside the same container box on mobile) */}
                <div className="flex flex-col gap-3 p-4 sm:hidden">
                  <p className="text-xs leading-relaxed text-slate-300 text-justify">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-1.5 pt-1" aria-label="Technologies used">
                    {project.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-none bg-[#c084fc]/15 px-2 py-0.5 text-[10px] font-medium text-[#c084fc] border border-[#c084fc]/20"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* FULL-SCREEN IMAGE MODAL LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] overflow-hidden border border-[#c084fc]/50 bg-[#0d0f17] p-2"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 rounded-full bg-black/60 px-3 py-1 text-xs text-white hover:bg-[#c084fc] transition-colors"
              >
                ✕ Close
              </button>

              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[80vh] w-auto object-contain mx-auto"
              />
              <p className="mt-2 text-center text-xs font-semibold text-slate-300">
                {selectedImage.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}