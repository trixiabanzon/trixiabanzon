export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work and Leadership Experience"
    >
      {/* Mobile Sticky Section Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a192f]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-0 lg:w-auto lg:opacity-0">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-200">
          Experience
        </h2>
      </div>

      <div className="space-y-12">
        {/* ---------------- 1. WORK EXPERIENCE ---------------- */}
        <div className="group relative grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
          <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2">
            2023 — Present
          </header>
          <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug text-slate-200">
              <span className="text-base font-medium text-slate-200 group-hover:text-[#64ffda]">
                Software Engineer / Developer · Company Name
              </span>
            </h3>
            <p className="mt-2 text-sm leading-normal text-slate-400">
              Developed full-stack web applications, built RESTful APIs using Node.js and Express.js, and integrated responsive frontend UIs using Tailwind CSS.
            </p>
            <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Technologies used">
              <li className="rounded-full bg-[#64ffda]/10 px-3 py-1 text-xs font-medium text-[#64ffda]">
                Node.js
              </li>
              <li className="rounded-full bg-[#64ffda]/10 px-3 py-1 text-xs font-medium text-[#64ffda]">
                Express.js
              </li>
              <li className="rounded-full bg-[#64ffda]/10 px-3 py-1 text-xs font-medium text-[#64ffda]">
                Tailwind CSS
              </li>
              <li className="rounded-full bg-[#64ffda]/10 px-3 py-1 text-xs font-medium text-[#64ffda]">
                JavaScript
              </li>
            </ul>
          </div>
        </div>

        {/* ---------------- 2. LEADERSHIP ROLE 1 ---------------- */}
        <div className="group relative grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
          <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2">
            2023 — 2024
          </header>
          <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug text-slate-200">
              <span className="text-base font-medium text-slate-200 group-hover:text-[#64ffda]">
                Co-Head, [Committee Name] · Student Organization
              </span>
            </h3>
            <p className="mt-2 text-sm leading-normal text-slate-400">
              Co-led a committee of X members in planning and executing organizational initiatives. Oversaw task delegation, managed project timelines, and coordinated cross-functional teams to ensure smooth delivery.
            </p>
            <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Skills used">
              <li className="rounded-full bg-[#64ffda]/10 px-3 py-1 text-xs font-medium text-[#64ffda]">
                Team Leadership
              </li>
              <li className="rounded-full bg-[#64ffda]/10 px-3 py-1 text-xs font-medium text-[#64ffda]">
                Project Management
              </li>
              <li className="rounded-full bg-[#64ffda]/10 px-3 py-1 text-xs font-medium text-[#64ffda]">
                Event Coordination
              </li>
            </ul>
          </div>
        </div>

        {/* ---------------- 3. LEADERSHIP ROLE 2 ---------------- */}
        <div className="group relative grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
          <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2">
            2022 — 2023
          </header>
          <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug text-slate-200">
              <span className="text-base font-medium text-slate-200 group-hover:text-[#64ffda]">
                Co-Head, [Committee Name] · Student Organization
              </span>
            </h3>
            <p className="mt-2 text-sm leading-normal text-slate-400">
              Spearheaded technical workshops and logistics for major org events, fostering collaboration and ensuring high engagement among participants.
            </p>
            <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Skills used">
              <li className="rounded-full bg-[#64ffda]/10 px-3 py-1 text-xs font-medium text-[#64ffda]">
                Strategic Planning
              </li>
              <li className="rounded-full bg-[#64ffda]/10 px-3 py-1 text-xs font-medium text-[#64ffda]">
                Resource Allocation
              </li>
              <li className="rounded-full bg-[#64ffda]/10 px-3 py-1 text-xs font-medium text-[#64ffda]">
                Cross-Team Collaboration
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}