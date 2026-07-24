// data.ts
export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string[];
  skills?: string[];
  link?: string;
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
      ["Contributed to the **development and redesign of the new official DOST website**, ensuring a modern UI/UX, responsive layouts, and cross-browser accessibility.",
        "Built a **customizable WordPress Quick Links plugin** with a user-friendly admin dashboard, enabling non-technical staff to easily manage and publish forms, announcements, and site content.",
        "Developed an **interactive map of DOST agencies** with dynamic filtering by region and specialty, improving user navigation across desktop and mobile devices."
      ],
    skills: ["Laravel", "PHP", "WordPress", "JavaScript"],
    link: "https://www.sei.dost.gov.ph/"
  },
];

export const LEADERSHIP_EXPERIENCE: ExperienceItem[] = [
  {
    id: "leadership-1",
    period: "Aug 2025 — Feb 2026",
    role: "Co-Head, Job Fair Committee",
    company: "UPLB Computer Science Society (COSS)",
    description: [
        "Maintained active communication with partner companies for the **42nd Computer Science Week**, assisting representatives with documentation, logistics, and on-site support to ensure a smooth experience.",
        "Handled event permits, legal compliance documents, and venue arrangements for seamless on-ground execution."
      ],
    link: "https://www.facebook.com/uplbcossph"
  },
  {
    id: "leadership-2",
    period: "Aug 2024 — Mar 2025",
    role: "Co-Head, Marketing and Advertising Committee",
    company: "UPLB Computer Science Society (COSS)",
    description:
      ["Co-led content scheduling and marketing strategies for the organization's flagship event, **41st Computer Science Week**, driving event visibility and audience engagement across digital platforms."],
    link: "https://www.facebook.com/uplbcossph"
  },
];