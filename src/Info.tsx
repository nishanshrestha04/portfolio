import { IconBrandGithub, IconBrandInstagram, IconBrandFacebook, IconBrandLinkedin, IconBrandXFilled } from "@tabler/icons-react";

const Info =  {
  name: 'Nishan Shrestha',
  stack: ['Student', 'AI Enthusiast', 'Frontend Developer', ],
  bio: "Hello, I'm Nishan Shrestha, a tech enthusiast passionate about Software Engineer and AI. I'm currently honing my skills in Python, HTML, and CSS, and I believe in the power of data to drive meaningful solutions. I continuously seek to learn and apply my skills to stay at the forefront of technological advancements. Let's connect and explore the exciting realms of Data Science, AI, and technology together."
}

const ProjectInfo = [
  {
      title: "Website Clone",
      desc: "I have replicated the ochi.design website using React, Tailwind CSS, and Framer Motion for animations. Currently, the site is fully static and lacks proper responsiveness, but I plan to make updates in the future to address this. The goal of this project was to practice and enhance my skills in modern web development technologies. Although the initial version is static, future iterations will focus on improving responsiveness and user experience. Additionally, I aim to incorporate more dynamic features and optimize the performance to create a more polished and professional final product.",
      image: "ochi.png",
      live: true,
      technologies: ["React", "Tailwind", "Framer Motion",],
      link: "https://grand-bonbon-2087ab.netlify.app/",
      github: "https://github.com/nishanshrestha04/Ochi-Colne"
  },
  {
      title: "AI News",
      desc: "This is a static website I built using HTML and CSS, dedicated to providing the latest news and articles on artificial intelligence. The site is designed to be fully responsive, ensuring an optimal viewing experience across various devices and screen sizes. With a focus on delivering a clean and modern user interface, the website offers an engaging and intuitive browsing experience for users interested in AI. Whether you're accessing it from a desktop, tablet, or smartphone, you'll find that the layout and functionality are consistently well-maintained, making it easy to stay informed about the latest developments in the field of AI.",
      image: "ai.png",
      live: false,
      technologies: ["HTML" , "CSS"],
      link: "#",
      github: "https://github.com/nishanshrestha04/Web-Development"
  },
  {
      title: "Netflix Signup",
      desc: "This project is a replica of the Netflix Signup Page, meticulously crafted using HTML and CSS. It faithfully mimics the design and functionality of the original site, ensuring a visually appealing and user-friendly interface. Notably, the site is fully responsive, meaning it adapts seamlessly to various screen sizes and devices, providing an optimal viewing experience whether accessed on a desktop, tablet, or smartphone. This responsiveness ensures that users can enjoy a consistent and engaging experience regardless of how they access the site.",
      image: "signup.png",
      live: false,
      technologies: ["Python"],
      link: "#",
      github: "https://github.com/nishanshrestha04/Hospital-Management"
  },
]

const SkillInfo = [
  {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS", "Bootstrap"
      ]
  },
  {
      title: "Backend",
      skills: [ "Node JS", "Express JS", "MySQL", "MongoDB", "Firebase", "PostgresSQL"]
  },
  {
      title: "Languages",
      skills: ["Python", 'PHP', "JavaScript", "TypeScript"]
  },
  {
      title: "Tools",
      skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass"]
  }
]

const ExperienceInfo = [
  {
      role: "Event Executive",
      company: "Sunway Student Representative Council",
      date: "May 2024 - Present",
      desc: "As an Event Executive for a student club, I plan, organize, and execute various events, ensuring they run smoothly from start to finish. I negotiate with vendors and coordinate logistics while working closely with club members to meet their vision and expectations. With strong organizational and communication skills, I handle multiple projects simultaneously and resolve issues swiftly. My proficiency in event management tools and creative strategies ensures engaging and memorable events, consistently delivering high-quality results and satisfied participants.",
      skills: ["Project Managaement", "Creativity", "Leadership", "Teamwork", "Communication"]
  },
  {
      role: "General Member",
      company: "Rotaract Club of Budhanilkantha",
      date: "Mar 2024 - Present",
      desc: " As a General Member of the Rotaract Club, I actively participate in club meetings, events, and service projects aimed at community impact and personal development. I contribute to planning and executing initiatives such as community service projects, fundraising activities, and professional development events. My responsibilities include attending regular meetings, volunteering for club activities, supporting leadership initiatives, and promoting our events and causes. I foster fellowship among members and collaborate with community organizations to achieve shared goals, aiming to make a meaningful difference in our community.",
      skills: ["Networking", "Community Engagement", "Service Leadership", "Team Collaboration", "Event Planning"]
  }
]

const socialLinks = [{link:'https://github.com/nishanshrestha04', icons: IconBrandGithub}
    , {link:'https://www.linkedin.com/in/shresthanishan/', icons: IconBrandLinkedin},
    {link:'https://www.instagram.com/nishanshrestha40/', icons: IconBrandInstagram},
    {link:'https://www.facebook.com/nishan.stha.7589', icons: IconBrandFacebook},
    {link:'https://x.com/shresthanishan5', icons: IconBrandXFilled}
];


const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo, SkillInfo, ExperienceInfo, Slugs, socialLinks };