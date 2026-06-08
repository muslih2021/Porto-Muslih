import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  placeholderIcon,
  rental,
  insight,
  himatika,
  citta,
  ratu,
  sifa,
  job,
  sampah,
  awing,
  trubers,pnm,imedit,wajo,faceRecognition,nakamura,persuratan
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const services: TService[] = [
  {
    title: "Video Editor (After Effects & CapCut)",
    icon: creator,
  },
  {
    title: "Graphic Designer (Figma, Picsart & Canva)",
    icon: backend, 
  },
  {
    title: "Motion Graphics (After Effects)",
    icon: web,
  },
  {
    title: "Visual Storytelling",
    icon: mobile,
  },
];


const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Java Developer",
    companyName: "Windows Rental System",
    icon: placeholderIcon,
    iconBg: "#E6DEDD",
    date: "2021",
    points: [
      "Developed a desktop-based Java application for managing sports field rentals such as soccer, volleyball, and others.",
      "Included features like booking management, transaction reports, and inventory tracking.",
    ],
  },
  {
    title: "Laravel Developer",
    companyName: "Ratu Boga Digital System",
    icon: placeholderIcon,
    iconBg: "#383E56",
    date: "Jan - Jun 2022",
    points: [
      "Built a digital restaurant system using Laravel for food ordering and sales management.",
      "Implemented dynamic menus, transaction workflows, and multi-level user access.",
    ],
  },
  {
    title: "Web Designer & Developer",
    companyName: "Faculty of Pharmacy – Hasanuddin University",
    icon: placeholderIcon,
    iconBg: "#E6DEDD",
    date: "Jul - Dec 2022",
    points: [
      "Designed and developed a final project management system and digital correspondence platform.",
      "Created a faculty information system with user-friendly UI/UX and efficient data flow.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Mathematics Student Association – Hasanuddin University",
    icon: placeholderIcon,
    iconBg: "#383E56",
    date: "Early 2023",
    points: [
      "Developed a Laravel-based website for the student organization.",
      "Provided features such as news management, event scheduling, and documentation.",
    ],
  },
  {
    title: "Android Developer & ML Collaborator",
    companyName: "Automated Inventory Prediction System",
    icon: placeholderIcon,
    iconBg: "#E6DEDD",
    date: "Mid 2023",
    points: [
      "Collaborated with the Machine Learning team to develop a predictive system for inventory management.",
      "Integrated Kotlin with predictive models for real-time insights.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Citta Tourism Village Website",
    icon: placeholderIcon,
    iconBg: "#383E56",
    date: "Early 2024",
    points: [
      "Created a tourism website for Citta Village to promote local destinations and culture.",
      "Built an admin dashboard with responsive design for public access.",
    ],
  },
  {
    title: "Web Developer & Video Editor",
    companyName: "Digital Village Platform & A-Wing Group",
    icon: placeholderIcon,
    iconBg: "#E6DEDD",
    date: "Mid 2025",
    points: [
      "Developing a digital village government platform to support rural communities in Maluku.",
      "Edited corporate and event videos using Adobe After Effects, focusing on brand-aligned visuals and professional animation for client promotion.",
      "Produced a cultural documentary on Citta Village (Soppeng, Central Maluku).",
    ],
  },
 {
  title: "Internship Experience – Full Stack Web Developer",
  companyName: "Telkomsel Regional Sulawesi",
  icon: placeholderIcon,
  iconBg: "#E6DEDD",
  date: "August 4, 2025 – December 5, 2025",
  points: [
    "Developed and maintained The Communal (thecommunal.id) as a digital community platform to support Telkomsel’s business expansion targeting youth and community segments through event collaboration, sponsorship programs, and community engagement initiatives across Sulawesi.",

    "Developed Trubers Sulawesi, an internal web application to monitor Trust Builder social media performance, featuring automated scoring, leaderboard generation for incentive distribution, and public data scraping from TikTok and Instagram, built using ReactJS, ExpressJS, JavaScript, and cPanel, and deployed at trubers.id.",

    "Built WAJO (WhatsApp Web Automation), a system integrated into The Communal platform to schedule messages, manage broadcasts, and automate WhatsApp communications, enabling communities to deliver messages efficiently without manual sending using React for frontend and ExpressJS for backend.",

    "Developed a Face Recognition Gallery System within The Communal website that enables users to automatically find their photos from community event documentation using facial detection, while maintaining user privacy, implemented using Laravel for backend services and Python for facial processing in a two-person development team.",

    "Developed an automated WhatsApp Chatbot integrated with WhatsApp Business API to support Direct Sales in handling customer inquiries regarding Telkomsel packages, particularly in high-traffic environments such as airports, with multi-user access and escalation to customer service when needed, built using JavaScript and ExpressJS.",

    "Conducted data scraping and analysis of educational institutions in remote and underdeveloped (3T) areas across the Talaud Islands and Sangihe Islands, North Sulawesi, to support digital education expansion, internet coverage planning, and digital inclusion initiatives.",

    "Collected, organized, and analyzed contact data and social media accounts of Student Executive Board (BEM) leaders across Sulawesi at both faculty and university levels to support campus activation strategies and strengthen Telkomsel’s brand presence among university students.",

    "Participated in online MOM briefings for Direct Sales clusters in Makassar, New Banggai, Talaud, Parigi Moutong, and New Gorontalo, analyzing business performance insights, operational challenges, and IT-related pain points to identify opportunities for improving sales effectiveness and digital system support."
  ],
},
{
  title: "Video Editor",
  companyName: "Nakamura Culinary School • PT Permodalan Nasional Madani (PNM) • Imare Imedit Japan • A Wing Group",
  icon: placeholderIcon,
  iconBg: "#E6DEDD",
  date: "Late 2025 – Present",
  points: [
    "Edited promotional video content for Nakamura Culinary School to support business expansion into the Indonesian market, focusing on brand positioning, cultural relevance, and clear messaging to introduce the institution to a new international audience.",

    "Produced and edited video content for PT Permodalan Nasional Madani (PNM) as part of a women empowerment program, highlighting the impact of entrepreneurship initiatives for housewives through storytelling that emphasizes social value and economic inclusion.",

    "Collaborated with Imare Imedit Japan to edit promotional videos for AI-based therapeutic technology, presenting complex technological concepts through clear visuals, structured narratives, and professional motion graphics tailored for a global audience.",

    "Edited business and investor-focused promotional videos for A Wing Group to support company expansion, delivering concise, persuasive, and visually polished content aimed at attracting potential investors and strategic partners."
  ],
}


];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Job Fair – Event Video",
    description:
      "Promotional and documentation video for the first Japan Job Fair in Makassar, featuring Japanese companies. Showcased the event atmosphere and participant engagement while supporting the organizer’s branding. Contributed as a Video Editor in planning and designing the video with a Japanese team, using After Effects for motion graphics and maintaining brand consistency.",
    tags: [],
    image: job,
    sourceCodeLink: "https://drive.google.com/drive/folders/1dRfzl0k380A-5HXK0h6qHmu0O5Q5iCrg?usp=sharing",
  },
  {
    name: "Sustainable Waste Handling – Corporate Video",
    description:
      "Edited a client presentation video on waste management as part of my role at A WING GROUP. Worked with a Japanese team to design and produce the video using Adobe After Effects, focusing on motion graphics, visual clarity, and consistent branding to effectively communicate the project’s goals to the client.",
    tags: [],
    image: sampah,
    sourceCodeLink: "https://drive.google.com/drive/folders/1jSAqFlioTmSg8WfSDCAHHe0Pzpfd_8rk?usp=sharing",
  },
  {
    name: "Website Promotional Video – A WING GROUP",
    description:
      "Edited a promotional video to be featured on A WING GROUP’s website, highlighting the company’s profile, services, and visual branding. Used Adobe After Effects for motion graphics and transitions to ensure a clean, engaging presentation aligned with the company's image.",
    tags: [],
    image: awing,
    sourceCodeLink: "https://www.aai-jp.com/service",
  },
  {
    name: "Promotional Video – Nakamura Culinary School",
    description:
      "Edited a promotional video to support Nakamura Culinary School’s business expansion into the Indonesian market. The video introduces the institution’s culinary programs, values, and brand identity, with storytelling adapted for a new international audience using clean transitions and engaging motion graphics.",
    tags: [
      { name: "video-editing", color: "blue-text-gradient" },
      { name: "brand-promotion", color: "green-text-gradient" },
      { name: "international-expansion", color: "pink-text-gradient" },
    ],
    image: nakamura,
    sourceCodeLink: "https://drive.google.com/drive/folders/1ZzsZYTM-ziEzotyPG_jbEs_hNKI35yic?usp=sharing",
  },
  {
    name: "Empowerment Program Video – PT Permodalan Nasional Madani (PNM)",
    description:
      "Produced and edited video content for PT Permodalan Nasional Madani (PNM) as part of a women empowerment program for housewives. The video highlights entrepreneurial activities, social impact, and economic empowerment through emotional storytelling and informative visual composition.",
    tags: [
      { name: "video-editing", color: "blue-text-gradient" },
      { name: "social-impact", color: "green-text-gradient" },
      { name: "corporate-program", color: "pink-text-gradient" },
    ],
    image: pnm,
    sourceCodeLink: "https://drive.google.com/drive/folders/1i1jdH_loh1s757eHVT0YU0FgABrXgUK7?usp=sharing",
  },
  {
    name: "AI Therapy Technology Promotional Video – Imare Imedit Japan",
    description:
      "Edited a promotional video for AI-based therapeutic technology developed by Imare Imedit Japan. The video presents complex technology concepts in a clear and accessible way through structured storytelling, professional motion graphics, and visually clean animations for global audiences.",
    tags: [
      { name: "video-editing", color: "blue-text-gradient" },
    ],
    image: imedit,
    sourceCodeLink: "https://drive.google.com/drive/folders/1V_ruzogZryuCHt19QcSYJqXsUc51qAQn?usp=sharing",
  },
  {
    name: "Organization Project (Unpaid) – HIMATIKA FMIPA UNHAS",
    description:
      "Contributed as a volunteer video editor for HIMATIKA FMIPA UNHAS (Mathematics Student Association). Responsible for editing videos across various organizational events, delivering engaging event documentation, and producing promotional content to support the organization's activities and visual branding.",
    tags: [
      { name: "video-editing", color: "blue-text-gradient" },
      { name: "event-documentation", color: "green-text-gradient" },
      { name: "organization", color: "pink-text-gradient" },
    ],
    image: placeholderIcon,
    sourceCodeLink: "https://drive.google.com/drive/folders/1oHqd9UZMeHLkEdBQb1-0Ji0IFN6gUwLv?usp=sharing",
  },
  {
    name: "App Promo Video (Unpaid) – Eduternak",
    description:
      "Produced a promotional video for the 'Eduternak' application as part of a competition entry. The video was designed to showcase how the app helps farmers, using clear storytelling and engaging visuals to highlight the application's core features and social impact.",
    tags: [
      { name: "video-editing", color: "blue-text-gradient" },
      { name: "app-promo", color: "green-text-gradient" },
      { name: "competition", color: "pink-text-gradient" },
    ],
    image: placeholderIcon,
    sourceCodeLink: "https://drive.google.com/drive/folders/1flp1SAXq8XYLYgXa92ESAmr98wlYliNR?usp=sharing",
  }
];

export { services, technologies, experiences, testimonials, projects };
