import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WORK_EXPERIENCE, LEADERSHIP_EXPERIENCE } from "../data/data"; 
import type { ExperienceItem } from "../data/data";
import externalLink from "../assets/external-link.svg";

// Helper function to convert **text** to styled <span> elements
function renderFormattedText(text: string) {
  const parts = text.split("**");
  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <span key={index} className="font-medium text-slate-200">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"work" | "leadership">("work");

  const currentData = activeTab === "work" ? WORK_EXPERIENCE : LEADERSHIP_EXPERIENCE;

  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
      aria-label="Work and Leadership Experience"
    >
      {/* Mobile Sticky Section Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0d0f17]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-0 lg:w-auto lg:opacity-0 lg:sr-only">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-200">
          Experience
        </h2>
      </div>

      {/* Tabs */}
      <div className="mb-5 flex border-b border-slate-700/60 text-base font-medium">
        <button
          onClick={() => setActiveTab("work")}
          className={`relative px-4 pb-3 transition-colors ${
            activeTab === "work" ? "text-[#c084fc]" : "text-slate-400 hover:text-slate-200"
          }`}
        >
          Work Experience
          {activeTab === "work" && (
            <motion.span
              layoutId="activeTabUnderline"
              className="absolute bottom-0 left-0 h-[2px] w-full bg-[#c084fc]"
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
            />
          )}
        </button>

        <button
          onClick={() => setActiveTab("leadership")}
          className={`relative px-4 pb-3 transition-colors ${
            activeTab === "leadership" ? "text-[#c084fc]" : "text-slate-400 hover:text-slate-200"
          }`}
        >
          Leadership
          {activeTab === "leadership" && (
            <motion.span
              layoutId="activeTabUnderline"
              className="absolute bottom-0 left-0 h-[2px] w-full bg-[#c084fc]"
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
            />
          )}
        </button>
      </div>

      {/* Content Container */}
      <div className="relative min-h-[380px] sm:min-h-[420px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="group/jobs space-y-4"
          >
            {currentData.map((item: ExperienceItem) => (
              <div
                key={item.id}
                className="group relative grid p-5 sm:px-6 sm:py-5 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/jobs:opacity-50 cursor-pointer"
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                {/* PERIOD / DATES */}
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2">
                  {item.period}
                </header>

                <div className="z-10 sm:col-span-6">
                  {/* ROLE & COMPANY */}
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold leading-snug text-slate-200 transition-colors group-hover:text-[#c084fc] flex items-center justify-between">
                      <span>{item.role}</span>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`Visit website for ${item.company}`}
                          className="inline-flex items-center focus-visible:outline-none"
                        >
                          {/* Stretched link to make the whole card clickable */}
                          <span className="absolute inset-0 z-20 rounded-md" aria-hidden="true" />
                          <img
                            src={externalLink}
                            alt=""
                            className="relative z-30 h-4 w-4 shrink-0 transition-all brightness-0 invert-[60%] group-hover:filter-[invert(63%)_sepia(45%)_saturate(2500%)_hue-rotate(225deg)_brightness(102%)_contrast(98%)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </a>
                      )}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm font-medium text-slate-400">
                      {item.company}
                    </p>
                  </div>

                  {/* DESCRIPTION */}
                  <ul className="mt-2.5 space-y-1.5 list-disc list-outside pl-5 text-xs sm:text-sm leading-relaxed text-slate-400">
                    {item.description.map((desc, idx) => (
                      <li key={idx}>
                        {renderFormattedText(desc)}
                      </li>
                    ))}
                  </ul>

                  {/* SKILL TAGS */}
                  {item.skills && item.skills.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Skills used">
                      {item.skills.map((skill) => (
                        <li
                          key={skill}
                          className="relative z-30 rounded-full bg-[#c084fc]/10 px-3 py-1 text-xs font-medium text-[#c084fc]"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}