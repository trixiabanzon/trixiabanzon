// data.ts
export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
  skills?: string[];
}

export const ABOUT_PARAGRAPHS: string[] = [
  "Hello there! I'm Trixia, a Computer Science graduate from the **University of the Philippines Los Baños** specializing in full-stack web development. My focus lies in building scalable backends using **Node.js** and **Express.js**, while crafting responsive, modern interfaces with **Tailwind CSS** and **React**. I'm eager to build real-world software alongside passionate developers.",
  "I strive to write clean, maintainable code for smooth UI/UX, constantly exploring new tools and best practices to keep applications fast and reliable.",
  "I've built web and mobile applications, as well as an agent-based simulation model for my academic projects. I've also been part of my student organization's web development team and took on leadership roles that helped strengthen my communication and collaboration skills.",
  "Outside of development, you'll usually find me playing with my cats, reading horror books, or playing video games like **Hades II** and **Genshin Impact**.",
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "work-1",
    period: "June — July 2025",
    role: "Website Developer Intern",
    company: "DOST-SEI",
    description:
      "Developed full-stack web applications, built RESTful APIs using Laravel and PHP, and integrated responsive frontend UIs using WordPress and JavaScript.",
    skills: ["Laravel", "PHP", "WordPress", "JavaScript"],
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
  },
  {
    id: "leadership-2",
    period: "2022 — 2023",
    role: "Co-Head, [Committee Name]",
    company: "Student Organization",
    description:
      "Spearheaded technical workshops and logistics for major org events, fostering collaboration and ensuring high engagement among participants.",
  },
];