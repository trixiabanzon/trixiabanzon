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