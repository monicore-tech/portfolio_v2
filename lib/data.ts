export const personal = {
  name: "Moses Oluwadamilare Oni",
  shortName: "Moses Oni",
  title: "IT Specialist · Web Developer · UI/UX Designer · Data Analyst",
  tagline: "Building Digital Experiences at the Intersection of Design & Technology",
  location: "Irving, Texas, USA",
  email: "oni.moses01@gmail.com",
  linkedin: "https://www.linkedin.com/in/oni-moses-o/",
  github: "https://github.com/oni-moses-o",
  summary:
    "Computer Science graduate with a Second Class Upper degree and proven experience across IT support, web development, UI/UX design, and data analysis. I've contributed to a 20% increase in user engagement through website redesigns, built production event management systems, and currently serve the Irving public as a Library Assistant. Expanding into cybersecurity and CompTIA A+ certification.",
};

export const experience = [
  {
    role: "Library Assistant (Permanent Part-Time)",
    company: "City of Irving Public Library System — West Irving Library",
    location: "Irving, TX",
    period: "Jun 2025 – Present",
    current: true,
    bullets: [
      "Provide front-line customer service at the circulation desk: check-outs, patron registration, fines, and account resolution.",
      "Maintain collection accuracy through shelving, shelf-reading, holds routing, and damage flagging across branches.",
      "Assist patrons of all ages with public-access PCs, printers, Wi-Fi, the catalog, and e-book platforms.",
      "Support library programs and outreach by setting up displays and running events for children, teens, and adults.",
      "Apply library policies consistently, de-escalate concerns, and refer complex issues to librarians.",
    ],
    tags: ["Customer Service", "IT Support", "Public Service"],
  },
  {
    role: "IT Specialist",
    company: "Institute of Business Administration and Knowledge Management (IBAKM®)",
    location: "Imo State, Nigeria",
    period: "Dec 2023 – Dec 2024",
    current: false,
    bullets: [
      "Managed and secured database systems using access controls and routine maintenance to protect institutional data.",
      "Designed and optimized UI/UX for internal web applications, enhancing usability for staff and members.",
      "Built and deployed IBAKM Eventsphere — a web-based event management system used for trainings and conferences.",
      "Conducted cybersecurity risk assessments and assisted with system integrity implementations.",
      "Administered the institution's websites and hosting platforms, ensuring seamless 24/7 operation.",
    ],
    tags: ["Web Dev", "UI/UX", "Cybersecurity", "Database"],
  },
  {
    role: "Presiding Officer",
    company: "Independent National Electoral Commission (INEC)",
    location: "Imo State, Nigeria",
    period: "Nov 2023",
    current: false,
    bullets: [
      "Managed polling-station operations during the 2023 Imo State gubernatorial election.",
      "Supervised Poll Clerks and ensured strict adherence to electoral procedures and ballot secrecy.",
      "Verified voter IDs, issued ballots, and assisted voters with disabilities while maintaining impartiality.",
    ],
    tags: ["Leadership", "Operations"],
  },
  {
    role: "Data Analyst Intern (IT Security & Asset Analysis)",
    company: "Fidson Healthcare Plc",
    location: "Lagos State, Nigeria",
    period: "Oct 2022 – May 2023",
    current: false,
    bullets: [
      "Optimized IT asset tracking using SQL queries and Excel dashboards, significantly reducing reporting errors.",
      "Analyzed access-control data and system logs to assess security policies and compliance.",
      "Supported help-desk operations by flagging recurring inefficiencies with Python and Excel.",
      "Managed ticket queue end-to-end: documenting issues, resolutions, and follow-ups.",
    ],
    tags: ["Data Analysis", "SQL", "IT Support", "Python"],
  },
  {
    role: "Tech Intern (Virtual)",
    company: "Nibi LLC",
    location: "Texas, USA (Remote)",
    period: "Jul 2020 – Aug 2021",
    current: false,
    bullets: [
      "Redesigned key user interfaces (settings, account profile) to improve UX and functionality.",
      "Created the company logo and app icon, aligning design elements with brand identity.",
      "Conducted SEO keyword research and generated 50+ targeted keywords improving organic traffic.",
      "Collaborated with marketing teams to optimize blog posts and web pages for SEO and campaign launches.",
    ],
    tags: ["UI/UX", "SEO", "Design", "Marketing"],
  },
];

export const skills = [
  {
    category: "Data & Analytics",
    icon: "📊",
    items: ["SQL", "Python (Pandas, NumPy)", "Microsoft Excel", "Tableau", "Power BI", "Cohort Analysis"],
  },
  {
    category: "Web Development",
    icon: "💻",
    items: ["HTML/CSS", "Tailwind CSS", "Bootstrap", "PHP", "JavaScript", "React / Next.js"],
  },
  {
    category: "Design Tools",
    icon: "🎨",
    items: ["Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator", "Canva"],
  },
  {
    category: "IT & Infrastructure",
    icon: "🔧",
    items: ["Windows 10/11", "TCP/IP Networking", "Hardware Troubleshooting", "WordPress", "XAMPP", "Git / GitHub"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    items: ["MySQL", "SQL Server (SSMS)", "Database Design", "Access Controls"],
  },
  {
    category: "Soft Skills",
    icon: "🤝",
    items: ["Technical Communication", "Documentation", "Team Collaboration", "Problem Solving", "Leadership"],
  },
];

export const projects = [
  {
    name: "Nextrade-core",
    year: "2026",
    type: "Personal Project",
    description:
      "A live web repository launched on Vercel exploring advanced front-end design patterns and modern web functionality.",
    tags: ["Next.js", "Vercel", "Frontend"],
    link: "#",
    featured: true,
  },
  {
    name: "IBAKM Eventsphere",
    year: "2024",
    type: "Professional",
    description:
      "Full-stack event management system designed and built for IBAKM®. Handles registrations, scheduling, and conference logistics for a globally recognized professional body.",
    tags: ["PHP", "MySQL", "UI/UX", "Web App"],
    link: "#",
    featured: true,
  },
  {
    name: "SGA Auto Repair Website",
    year: "2025",
    type: "Freelance",
    description:
      "Designed and deployed a branded landing page for a local Irving automotive repair shop with service listings and contact integration.",
    tags: ["HTML", "CSS", "Tailwind", "Freelance"],
    link: "#",
    featured: false,
  },
  {
    name: "School Management System",
    year: "2021",
    type: "Academic",
    description:
      "Final-year capstone project — a full-stack web application for managing student records, courses, and academic reporting. Built with HTML, Bootstrap, PHP, and MySQL on XAMPP.",
    tags: ["PHP", "MySQL", "Bootstrap", "XAMPP"],
    link: "#",
    featured: false,
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Regent University College of Science and Technology",
    location: "Accra, Ghana",
    period: "Feb 2018 – Dec 2021",
    grade: "Second Class Upper (CWA: 69.43)",
    highlights: [
      "Database Management Systems",
      "Web Development",
      "Human-Computer Interaction (HCI)",
      "Ethical Hacking",
    ],
    capstone: "School Management System — HTML, Bootstrap, PHP, MySQL on XAMPP",
  },
  {
    degree: "High School Diploma, Mechanical Engineering",
    institution: "Government Technical College",
    location: "Ado Ekiti, Nigeria",
    period: "Jul 2013 – Jul 2017",
    grade: "",
    highlights: [],
    capstone: "",
  },
];

export const certifications = [
  {
    name: "CompTIA A+",
    issuer: "CompTIA",
    status: "In Progress",
    year: "Expected 2026",
    badge: "🎓",
  },
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    status: "Completed",
    year: "2024",
    badge: "📜",
  },
  {
    name: "Business Analysis & Process Management",
    issuer: "Coursera",
    status: "Completed",
    year: "2024",
    badge: "📜",
  },
];

export const community = [
  {
    role: "Staff Volunteer",
    org: "North Texas Teen Book Festival",
    period: "Mar 2026",
    detail: "Room monitor and event-logistics volunteer at a major regional teen-literature festival.",
  },
  {
    role: "Active Member",
    org: "Irving Toastmasters Club",
    period: "Oct 2025 – Present",
    detail: "Developing public-speaking and leadership skills through speeches, evaluations, and club roles.",
  },
];
