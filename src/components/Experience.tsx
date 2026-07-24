import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WORK_EXPERIENCE, LEADERSHIP_EXPERIENCE } from "../data/experience"; // Adjust path if needed
import type { ExperienceItem } from "../data/experience"; // Inline/Type-only import

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

      {/* Horizontal Tabs */}
      <div className="mb-8 flex border-b border-slate-700/60 text-sm font-medium">
        <button
          onClick={() => setActiveTab("work")}
          className={`relative pb-3 pr-4 transition-colors ${
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

      {/* FIXED CONTAINER HEIGHT */}
      <div className="relative min-h-[380px] sm:min-h-[420px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="group/jobs space-y-12"
          >
            {currentData.map((item: ExperienceItem) => (
              <div
                key={item.id}
                className="group relative grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/jobs:opacity-50"
              >
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2">
                  {item.period}
                </header>

                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <span className="text-base font-medium text-slate-200 group-hover:text-[#c084fc]">
                      {item.role} · {item.company}
                    </span>
                  </h3>

                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    {item.description}
                  </p>

                  {item.bullets && item.bullets.length > 0 && (
                    <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-slate-400">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  )}

                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Skills used">
                    {item.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full bg-[#c084fc]/10 px-3 py-1 text-xs font-medium text-[#c084fc]"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}