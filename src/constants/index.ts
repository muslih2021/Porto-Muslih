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
  awing
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
    title: "Web Developer (React & Laravel)",
    icon: web,
  },
  {
    title: "Android Developer (Kotlin)",
    icon: mobile,
  },
  {
    title: "UI/UX Designer (Figma,Picsart & Canva)",
    icon: backend, 
  },
  {
    title: "Video Editor (After Effects)",
    icon: creator,
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
    date: "2025 – Present",
    points: [
      "Developing a digital village government platform to support rural communities in Maluku.",
      "Edited corporate and event videos using Adobe After Effects, focusing on brand-aligned visuals and professional animation for client promotion.",
      "Produced a cultural documentary on Citta Village (Soppeng, Central Maluku).",
    ],
  },
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
    name: "Smart Rental",
    description:
      "A desktop application built using Java to manage the rental schedule of various sports fields (e.g., futsal, badminton, volleyball). The system allows administrators to manage booking time slots, track field availability, and generate rental reports. Designed for offline use on Windows to provide a reliable and user-friendly solution for local sports venues.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "java fx",
        color: "green-text-gradient",
      },
    ],
    image: rental,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "InsightCart App",
    description:
      "Designed the UX/UI and developed an Android application to help MSMEs (Micro, Small, and Medium Enterprises) analyze product performance and manage inventory using machine learning. Collaborated in a cross-functional team consisting of members from Cloud Computing and Machine Learning learning paths.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
         {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: insight,
    sourceCodeLink: "https://www.canva.com/design/DAGIqiNxYh8/ZSdO4R62eInNFjapqa4BJA/edit",
  },
  {
    name: "WEB HIMATIKA FMIPA UNHAS",
    description:
   "Designed and developed the official information portal for the HIMATIKA organization, featuring an admin panel, organizational profile, event information system, blog, and organizational database. I was responsible for system design, creating the UI/UX design, and developing the website.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
      {
        name: "MYSQL",
        color: "yellow-text-gradient",
      },
    ],
    image: himatika,
    sourceCodeLink: "https://himatikafmipaunhas.id/",
  },
  {
    name: "Citta Village Tourism Website",
    description:
   "Developed a digital platform to support village tourism promotion. Focused on user research, wireframing, and the implementation of a tourism information system. Contributed to both website design and development.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MYSQL",
        color: "green-text-gradient",
      },
      {
        name: "Prime React",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "red-text-gradient",
      },
    ],
    image: citta,
    sourceCodeLink: "https://himatikafmipaunhas.id/",
  },
  {
    name: "Web Ratu Boga – a Local Culinary MSME",
    description:
    "Actively contributed to the system architecture, UI/UX design, and full-stack development of a website aimed at promoting local culinary businesses.a web-based ordering system to help small food vendors reach more customers and streamline the ordering process.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "MYSQL",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "red-text-gradient",
      },
    ],
    image: ratu,
    sourceCodeLink: "https://himatikafmipaunhas.id/",
  },
  {
    name: "Faculty of Pharmacy Information System (SI-FA)",
    description:
     "Contributed to the development of the SI-FA system at Universitas Hasanuddin by designing UI/UX based on user needs and institutional guidelines, ensuring visual consistency, and improving functionality through UI testing and iteration.",
    tags: [

    ],
    image: sifa,
    sourceCodeLink: "https://himatikafmipaunhas.id/",
  },
  {
    name: "Job Fair – Event Video",
    description:
     "Promotional and documentation video for the first Japan Job Fair in Makassar, featuring Japanese companies. Showcased the event atmosphere and participant engagement while supporting the organizer’s branding. Contributed as a Video Editor in planning and designing the video with a Japanese team, using After Effects for motion graphics and maintaining brand consistency.",
    tags: [

    ],
    image: job,
    sourceCodeLink: "https://drive.google.com/drive/folders/1dRfzl0k380A-5HXK0h6qHmu0O5Q5iCrg?usp=sharing",
  },
  {
    name: "Sustainable Waste Handling – Corporate Video",
    description:
     "Edited a client presentation video on waste management as part of my role at A WING GROUP. Worked with a Japanese team to design and produce the video using Adobe After Effects, focusing on motion graphics, visual clarity, and consistent branding to effectively communicate the project’s goals to the client.",
    tags: [

    ],
    image: sampah,
    sourceCodeLink: "https://drive.google.com/drive/folders/1jSAqFlioTmSg8WfSDCAHHe0Pzpfd_8rk?usp=sharing",
  },
  {
    name: "Website Promotional Video – A WING GROUP",
    description:
     "Edited a promotional video to be featured on A WING GROUP’s website, highlighting the company’s profile, services, and visual branding. Used Adobe After Effects for motion graphics and transitions to ensure a clean, engaging presentation aligned with the company's image.",
    tags: [

    ],
    image: awing,
    sourceCodeLink: "https://www.aai-jp.com/blank-17",
  },
];

export { services, technologies, experiences, testimonials, projects };
