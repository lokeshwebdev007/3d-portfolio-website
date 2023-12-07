import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  next,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  carrent,
  jobit,
  tripguide,
  airbnb,
  testwin,
  codeflicks,
  spotify,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
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
    name: "Next",
    icon: next,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-stack intern",
    company_name: "Wolooka technologies",
    icon: testwin,
    iconBg: "#383E56",
    date: "March 2023 - July 2023",
    points: [
      "Individually developed admin panels using react, redux and bootstrap.",
      "Developed REST apis using nodejs, express and mongodb (microservices architecture).",
      "Integrated Cashfree payment gateway and implemented data caching with redis.",
    ],
  },
  {
    title: "Front-end intern",
    company_name: "Codeflicks technology",
    icon: codeflicks,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Jan 2023",
    points: [
      "Developed a blog website with admin panel using html, css, bootstrap and javascript.",
    ],
  },
];

const projects = [
  {
    name: "Airbnb clone",
    description:
      "A next.js full-stack property booking web-app in which authenticated users can add their property and book other properties.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: airbnb,
    source_code_link: "https://property-booking-webapp.vercel.app/",
  },
  {
    name: "Lyriks - Music app",
    description:
      "A spotify like music web-app where users can play music, filter by genres and search for a specific song.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: spotify,
    source_code_link: "https://react-lyriks-musicapp.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
