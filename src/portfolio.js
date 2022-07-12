/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
};

//Home Page
const greeting = {
  title: "Hello 👋",
  title2: "Wai Kit Phoon",
  logo_name: " waikitphoon",
  nickname: "Wai Kit",
  full_name: "Wai Kit",
  subtitle: "A Software Engineer, Self-taught Programmer 🔥",
  subtitle2:
    "I always spent hours debugging an error on my program, and usually finds the extra full stop I had it misplaced.",
  qualification:
    "BEng. Materials Engineering - University of Malaya (2014-2018)",
  mail: "mailto:keith.phoon@gmail.com",
};

const socialMediaLinks = {
  github: "https://github.com/WaiKitPhoon",
  linkedin: "https://www.linkedin.com/in/wai-kit-phoon-13240a175/",
  instagram: "https://www.instagram.com/whykidphone/",
};

const skills = {
  data: [
    {
      title: "Tech Stack & Experiences",
      fileName: "FullStackImg",
      skills: [
        "⚡ Designs, implements, tests and deploys Microservice applications & RESTful APIs on Cloud Based Architecture",
        "⚡ Architect & implement Event Driven Architecture solutions with Apache Kafka",
        "⚡ Run & maintain enterprise level CI/CD workflow",
        "⚡ Craft, manage and monitor application deployment pipeline on cloud architecture",
        "⚡ Ensure secured, high-performing, resilent, and efficient usage of cloud services",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "SpringBoot",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
      ],
    },
  ],
};

// Experience Page
const experience = {
  title: "Work Experience",
  description:
    "My passion on software engineering after hearing an inspring quote, 'An Engineer is never perfect without Programming'.",
  description2:
    "Though graduated from a different field, I am lucky that I somehow set my first foot on a road to software development.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Software Engineer",
          company: "MoneyLion Malaysia",
          company_url: "https://moneylion.com",
          logo_path: "moneylion.png",
          duration: "March 2022 - Today",
          location: "Office",
          description: [
            `- Backend development works on the Today's Feed feature of the MoneyLion mobile application.`,
            `- Responsible on the Personal Finance Management module to MoneyLion users.`,
            `- To ensure uptime and stability of the application being able to provide financial related contents to the users.`,
            `- Agile practitioner along with continous integrations and developments to ensure high output and maximum efficiency`,
          ],
        },
        {
          title: "Associate Software Engineer - Software Engineer",
          company: "Software International",
          company_url: "https://www.sicmsb.com/",
          logo_path: "software-international.png",
          duration: "Aug 2018 - Feb 2022",
          location: "Office",
          description: [
            `- Project based development - providing solutions to clients across South East Asia.`,
            `- Revamp, enhance, deploy and maintain modern world insurance applications in modules such as Quotation Generators, E-Insurance Forms, Policy Enquiry Systems.`,
            `- Technical debt solutions such as Database Migrations, Software Language Revamp, Migration of Applications to Cloud Based Architecture Solutions with Microservices.`,
          ],
        },
        {
          title: "Intern",
          company: "NXP Semiconductors",
          company_url: "https://www.nxp.com/",
          logo_path: "nxp.png",
          duration: "Jun 2017 - Sept 2017",
          location: "Factory",
          description: [
            `- Data Collection on test IC chips via various test methods`,
            `- Data Analysis on specific metrics retrieved from data collections.`,
          ],
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profpic.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = [];
const projectsHeader = [];

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  experience,
  contactPageData,
  projects,
  projectsHeader,
};
