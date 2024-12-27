import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/JobPortal1.png";
import project6 from "../assets/projects/Gemini.png";
import project7 from "../assets/projects/Youtube.png";
import project8 from "../assets/projects/Amazon.png";

export const HERO_CONTENT = `I am a Software Engineer with 3 years of experience in frontend development, specializing in creating visually appealing and responsive web applications. My expertise includes HTML, CSS, and JavaScript, which I use to design and implement stunning, user-centric interfaces. I have hands-on experience with modern frameworks like React.js, Next.js, and Tailwind CSS, enabling me to build scalable and efficient web solutions.

I am passionate about delivering innovative and functional designs while adhering to the latest web development trends and best practices. My focus is on crafting seamless user experiences that combine performance with aesthetics.

I am dedicated to continuous learning and staying updated with emerging technologies. I enjoy collaborating in dynamic teams where creativity and problem-solving are encouraged. Driven by a desire for personal and professional growth, I aim to contribute my skills and enthusiasm to impactful projects that make a difference.`;

export const ABOUT_TEXT = `A motivated and detail-oriented Software Engineer, I specialize in crafting dynamic, responsive, and user-friendly web applications. My expertise spans HTML, CSS, and JavaScript, along with a strong foundation in TypeScript, enabling me to build maintainable and scalable solutions.
I excel in leveraging modern frameworks like React.js and Next.js to deliver seamless, high-performance user experiences. My skills in Tailwind CSS, Bootstrap 5, and shadcn/ui empower me to design aesthetically pleasing and efficient interfaces tailored to user needs.
On the backend, I work with Node.js and databases like Firebase and Supabase, ensuring real-time data handling and scalability. I effectively manage state with Redux and implement secure user authentication with tools like Clerk.  
Proficient in version control using Git and GitHub, I thrive in collaborative environments and follow best practices to streamline development workflows. Familiarity with tools like NPM and Babel enables me to manage dependencies and optimize builds efficiently.  
Continuously striving to expand my knowledge, I am committed to delivering high-quality software solutions that solve real-world problems and make a meaningful impact.`;

export const EXPERIENCES = [
  {
    year: "2022 - 2024",
    role: "Software Developer",
    company: " Mindtech iSolutions",
    description: `Partnered with cross-functional teams to design, build, and maintain modern web applications, prioritizing responsive and visually engaging user interfaces using Tailwind CSS and Shadcn/ui. Developed reusable UI components using Tailwind CSS, Shadcn/ui, and other libraries, reducing development time for new projects while maintaining design consistency.`,
    technologies: ["HTML", "CSS", "Javascript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    year: "2021 - 2022",
    role: "Frontend Developer",
    company: " Zuperr",
    description: `Worked closely with teams to create, enhance, and sustain intuitive web applications, prioritizing responsive design and seamless user experience. Converted wireframe into clean, efficient code using React JS and front-end libraries, achieving precise visual fidelity`,
    technologies: ["HTML", "CSS", "React.js", "Git", "Tailwind CSS"],
  },
  /*
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },*/
];

export const PROJECTS = [
  {
    title: "Hirrd - A Job Portal App",
    image: project5,
    description:
      "The Hirrd React App is a job portal platform designed to streamline the hiring process, offering intuitive features for both candidates seeking jobs and recruiters managing applications.",
    technologies: ["React", "Tailwind CSS", "Shadcn/ui", "Supabase", "Clerk"],
    url: "https://hirrd-job-portal.vercel.app",
  },
  {
    title: "Gemini Clone App",
    image: project6,
    description:
      "This is a Gemini Clone React App that brings the cosmos to your fingertips! It's interactive, tapping into Google's Gemini API for live celestial data. Crafted with CSS and driven by Context API for seamless state management.",
    technologies: ["HTML", "CSS", "React", "Google Gemini API"],
    url: "https://gemini-clone1.vercel.app/",
  },
  {
    title: "Online Video Streaming App",
    image: project7,
    description:
      "This is a web application that allows users to search for videos using the YouTube Data API provided by Rapid API. Users can enter search queries, view a list of videos based on the search results, and play selected videos.",
    technologies: ["HTML", "Tailwind", "React", "Rapid API"],
    url: "https://youtube-clone67.netlify.app/",
  },
  {
    title: "Amazon Clone App",
    image: project8,
    description:
      "Developed an Amazon Clone application featuring user authentication, product listing, and a functional shopping cart. Integrated Firebase for hosting, authentication, and storage, with Material-UI for an enhanced user interface and React-Currency-Tool for price formatting.",
    technologies: ["HTML", "CSS", "React", "Material UI", "Firebase"],
    url: "https://clone-app-d9564.web.app/",
  },
];

export const CONTACT = {
  address: "Mumbai, Maharashtra ",
  phoneNo: "+91 9167268267 ",
  email: "unmeshpawar680@gmail.com",
};
