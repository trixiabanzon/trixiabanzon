import type { ReactNode } from "react";

// ==========================================
// ABOUT TYPES & DATA
// ==========================================
export const ABOUT_PARAGRAPHS: ReactNode[] = [
  // Paragraph 1 (Top right beside photo)
  <>
    Hello there! I'm Trixia, a Computer Science graduate from the{" "}
    <span className="font-medium text-slate-200">
      University of the Philippines Los Baños
    </span>{" "}
    specializing in full-stack web development. My focus lies in building
    scalable backends using{" "}
    <span className="font-medium text-slate-200">Node.js</span> and{" "}
    <span className="font-medium text-slate-200">Express.js</span>, while
    crafting responsive, modern interfaces with{" "}
    <span className="font-medium text-slate-200">Tailwind CSS</span> and{" "}
    <span className="font-medium text-slate-200">React</span>. I'm eager to build
    real-world software alongside passionate developers.
  </>,

  // Paragraph 2
  <>
    I strive to write clean, maintainable code for smooth UI/UX, constantly
    exploring new tools and best practices to keep applications fast and
    reliable.
  </>,

  // Paragraph 3
  <>
    I've built web and mobile applications, as well as an agent-based
    simulation model for my academic projects. I've also been part of my student
    organization's web development team and took on leadership roles that helped
    strengthen my communication and collaboration skills.
  </>,

  // Paragraph 4
  <>
    Outside of development, you'll usually find me playing with my cats, reading
    horror books, or playing video games like{" "}
    <span className="font-medium text-slate-200">Hades II</span> and{" "}
    <span className="font-medium text-slate-200">Genshin Impact</span>.
  </>,
];

// ==========================================
// EXPERIENCE TYPES & DATA
// ==========================================
export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
  bullets?: string[];
  skills: string[];
}

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "work-1",
    period: "2023 — Present",
    role: "Software Engineer / Developer",
    company: "Company Name",
    description:
      "Developed full-stack web applications, built RESTful APIs using Node.js and Express.js, and integrated responsive frontend UIs using Tailwind CSS.",
    bullets: [
      "Engineered scalable API endpoints reducing latency across client platforms.",
      "Collaborated with design teams to implement modern responsive user interface components.",
    ],
    skills: ["Node.js", "Express.js", "Tailwind CSS", "JavaScript"],
  },
];

export const LEADERSHIP_EXPERIENCE: ExperienceItem[] = [
  {
    id: "leadership-1",
    period: "2023 — 2024",
    role: "Co-Head, [Committee Name]",
    company: "Student Organization",
    description:
      "Co-led a committee of members in planning and executing organizational initiatives. Oversaw task delegation, managed project timelines, and coordinated cross-functional teams to ensure smooth delivery.",
    skills: ["Team Leadership", "Project Management", "Event Coordination"],
  },
  {
    id: "leadership-2",
    period: "2022 — 2023",
    role: "Co-Head, [Committee Name]",
    company: "Student Organization",
    description:
      "Spearheaded technical workshops and logistics for major org events, fostering collaboration and ensuring high engagement among participants.",
    skills: ["Strategic Planning", "Resource Allocation", "Cross-Team Collaboration"],
  },
];