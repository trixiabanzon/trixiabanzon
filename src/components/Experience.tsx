import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("work");

  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work and Leadership Experience"
    >
      {/* Mobile Sticky Section Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0d0f17]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-0 lg:w-auto lg:opacity-0">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-200">
          Experience
        </h2>
      </div>

      {/* Horizontal Tabs */}
      <div className="mb-8 flex border-b border-slate-700/60 text-sm font-medium">
        <button
          onClick={() => setActiveTab("work")}
          className={`pb-3 pr-4 transition-colors relative ${
            activeTab === "work"
              ? "text-[#c084fc]"
              : "text-slate-400 hover:text-slate-200"
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
          className={`pb-3 px-4 transition-colors relative ${
            activeTab === "leadership"
              ? "text-[#c084fc]"
              : "text-slate-400 hover:text-slate-200"
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

      {/* Tab Content with Animated Transition */}
      <div className="relative min-h-[200px]">
        <AnimatePresence mode="wait">
          {activeTab === "work" ? (
            <motion.div
              key="work"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="group/jobs space-y-12"
            >
              {/* Work Experience Content */}
              <div className="group relative grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/jobs:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2">
                  2023 — Present
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <span className="text-base font-medium text-slate-200 group-hover:text-[#c084fc]">
                      Software Engineer / Developer · Company Name
                    </span>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    Developed full-stack web applications, built RESTful APIs using Node.js and Express.js, and integrated responsive frontend UIs using Tailwind CSS.
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Technologies used">
                    <li className="rounded-full bg-[#c084fc]/10 px-3 py-1 text-xs font-medium text-[#c084fc]">
                      Node.js
                    </li>
                    <li className="rounded-full bg-[#c084fc]/10 px-3 py-1 text-xs font-medium text-[#c084fc]">
                      Express.js
                    </li>
                    <li className="rounded-full bg-[#c084fc]/10 px-3 py-1 text-xs font-medium text-[#c084fc]">
                      Tailwind CSS
                    </li>
                    <li className="rounded-full bg-[#c084fc]/10 px-3 py-1 text-xs font-medium text-[#c084fc]">
                      JavaScript
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="leadership"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="group/jobs space-y-12"
            >
              {/* Leadership Role 1 */}
              <div className="group relative grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/jobs:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2">
                  2023 — 2024
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <span className="text-base font-medium text-slate-200 group-hover:text-[#c084fc]">
                      Co-Head, [Committee Name] · Student Organization
                    </span>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    Co-led a committee of members in planning and executing organizational initiatives. Oversaw task delegation, managed project timelines, and coordinated cross-functional teams to ensure smooth delivery.
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Skills used">
                    <li className="rounded-full bg-[#c084fc]/10 px-3 py-1 text-xs font-medium text-[#c084fc]">
                      Team Leadership
                    </li>
                    <li className="rounded-full bg-[#c084fc]/10 px-3 py-1 text-xs font-medium text-[#c084fc]">
                      Project Management
                    </li>
                    <li className="rounded-full bg-[#c084fc]/10 px-3 py-1 text-xs font-medium text-[#c084fc]">
                      Event Coordination
                    </li>
                  </ul>
                </div>
              </div>

              {/* Leadership Role 2 */}
              <div className="group relative grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/jobs:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2">
                  2022 — 2023
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <span className="text-base font-medium text-slate-200 group-hover:text-[#c084fc]">
                      Co-Head, [Committee Name] · Student Organization
                    </span>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    Spearheaded technical workshops and logistics for major org events, fostering collaboration and ensuring high engagement among participants.
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Skills used">
                    <li className="rounded-full bg-[#c084fc]/10 px-3 py-1 text-xs font-medium text-[#c084fc]">
                      Strategic Planning
                    </li>
                    <li className="rounded-full bg-[#c084fc]/10 px-3 py-1 text-xs font-medium text-[#c084fc]">
                      Resource Allocation
                    </li>
                    <li className="rounded-full bg-[#c084fc]/10 px-3 py-1 text-xs font-medium text-[#c084fc]">
                      Cross-Team Collaboration
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}