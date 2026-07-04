type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Muslih Sahmat Portfolio",
    fullName: "Moh Muslih Sahmat",
    email: "sahmatmuslih@mail.com",
  },
  hero: {
    name: "Muslih Sahmat",
    p: ["I'm a Video Editor", "& Graphic Designer"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a creative video editor and graphic designer with expertise in Adobe After Effects, Figma, Canva, and Picsart. I specialize in crafting engaging visual content, motion graphics, and compelling storytelling to bring ideas to life.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `"These projects highlight my skills in video editing, motion graphics, and visual design. Click on a project to explore a detailed example. Please note that some works are not publicly displayed due to client confidentiality or sensitive internal data."`,
    },
  },

};

export type RoleKey = "general" | "data_analis" | "video_editor" | "programmer";

export const roleConfigs: Record<RoleKey, {
  heroTexts: string[];
  aboutContent: string;
  worksContent: string;
}> = {
  general: {
    heroTexts: [
      "Hi, I'm Muslih Sahmat",
      "I'm a Video Editor",
      "& Data Analyst",
      "& Programmer"
    ],
    aboutContent: `I'm a creative professional with a diverse skill set spanning video editing, graphic design, and programming. I specialize in crafting engaging visual content, motion graphics, and building interactive web applications to bring ideas to life.`,
    worksContent: `"These projects highlight my comprehensive skills in video editing, motion graphics, visual design, and web development. Click on a project to explore a detailed example. Please note that some works are not publicly displayed due to client confidentiality or sensitive internal data."`,
  },
  data_analis: {
    heroTexts: [
      "Hi, I'm Muslih Sahmat",
      "I'm a Data Analyst"
    ],
    aboutContent: `I'm a detail-oriented Data Analyst with a passion for turning complex datasets into actionable insights. I specialize in data visualization, statistical analysis, and creating interactive dashboards to support data-driven decision making.`,
    worksContent: `"These projects highlight my skills in data analysis, visualization, and strategic insights generation. Click on a project to explore a detailed example."`,
  },
  video_editor: {
    heroTexts: [
      "Hi, I'm Muslih Sahmat",
      "I'm a Video Editor",
      "& Graphic Designer"
    ],
    aboutContent: `I'm a creative video editor and graphic designer with expertise in Adobe After Effects, Figma, Canva, and Picsart. I specialize in crafting engaging visual content, motion graphics, and compelling storytelling to bring ideas to life.`,
    worksContent: `"These projects highlight my skills in video editing, motion graphics, and visual design. Click on a project to explore a detailed example. Please note that some works are not publicly displayed due to client confidentiality or sensitive internal data."`,
  },
  programmer: {
    heroTexts: [
      "Hi, I'm Muslih Sahmat",
      "I'm a Full Stack Web Developer",
      "& Mobile Application Developer"
    ],
    aboutContent: `I'm a passionate  web developer and  Mobile Application Developer experienced in building responsive, user-friendly applications. With strong foundations in modern web technologies, I focus on writing clean code and developing efficient software solutions.`,
    worksContent: `"These projects highlight my technical skills in web development, backend systems, and application design. Click on a project to explore a detailed example. Please note that some works are not publicly displayed due to client confidentiality or sensitive internal data."`,
  }
};

export const getRoleFromPath = (pathname: string): RoleKey => {
  if (pathname.includes("data_analis")) return "data_analis";
  if (pathname.includes("video_editor")) return "video_editor";
  if (pathname.includes("programmer")) return "programmer";
  return "general";
};
