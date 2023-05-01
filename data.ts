import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, IService, ISkill } from "./type";

import { BsCircleFill } from "react-icons/bs";
import { ICertificates } from "./type";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b>,<b>Next.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Django </b>,<b>PostgreSQL</b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Codewars</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX Designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Continuous Learning ",
    about:
      "Every day, I improve myself by practicing current trends in <b>IT</b> world",
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45%",
  },
  {
    Icon: BsCircleFill,
    name: "Type Script",
    level: "60%",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "80%",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "70%",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "80%",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind",
    level: "75%",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "80%",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45%",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60%",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "50%",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Stock App",
    description:
      "The project, which helps a user to follow the product flow, is not only an inventory tracking system, but also has a user panel feature",
    image_path: "/images/stock-app.png",
    deployed_url: "https://stock-app-roan.vercel.app/",
    github_url: "https://github.com/Yunus-Emre-Tasci/STOCK_APP",
    category: ["react", "django"],
    key_techs: ["React", "Redux", "Material UI", "Django", "Tremor"],
  },
  {
    id: 2,
    name: "Rent A Car App",
    image_path: "/images/rentcar-app.png",
    deployed_url: "https://github.com/Yunus-Emre-Tasci/Rent_A_Car_App",
    github_url: "https://github.com/Yunus-Emre-Tasci/Rent_A_Car_App",
    category: ["django"],
    description:
      "There are two type of users exits in system, first one is admin who has full rights and he can perform any type of operation in the project such as adding a new car, reporting etc ",
    key_techs: [
      "Django",
      "djangorestframework",
      "dj-rest-auth",
      "sqlparse",
      "asgiref",
      "Django REST API",
    ],
  },

  {
    id: 3,
    name: "Movie App",
    image_path: "/images/movie-app.png",
    deployed_url: "https://movie-app-tailwind.vercel.app/",
    github_url: "https://github.com/Yunus-Emre-Tasci/Movie_App_Tailwind",
    category: ["firebase", "react"],
    description:
      "Movie search feature is available according to the entered word.",
    key_techs: [
      "React",
      "React-router-dom",
      "Firebase",
      "Tailwind",
      "Axios",
      "Firebase Auth",
    ],
  },

  {
    id: 4,
    name: "Twitter Clone",
    image_path: "/images/twitter-clone.png",
    deployed_url: "https://twitter-clone-beta-two.vercel.app/",
    github_url: "https://github.com/Yunus-Emre-Tasci/Twitter-Clone",
    category: ["typescript", "react", "firebase"],
    description:
      "In this project, the data obtained by using Firebase/Firestore are shown as list. ",
    key_techs: ["React", "Typescript", "Firestore", "Tailwind"],
  },

  {
    id: 5,
    name: "Last FM",
    image_path: "/images/last-fm.png",
    deployed_url: "https://last-fm-m7q24vi5s-f4151-yunus-emre.vercel.app/",
    github_url: "https://github.com/Yunus-Emre-Tasci/Last_FM_App",
    category: ["react"],
    description:
      "Artist and album search feature is available according to the entered word.",
    key_techs: ["React", "Redux", "Storybook", "Tailwind"],
  },

  {
    id: 6,
    name: "Weather App",
    image_path: "/images/weather-app.png",
    deployed_url: "https://chex-weather.vercel.app/",
    github_url: "https://github.com/Yunus-Emre-Tasci/Next.js_Weather_App",
    category: ["react"],
    description:
      "There is a feature to search for weather details according to the entered location.",
    key_techs: ["React", "Next.js", "Bootstrap", "SASS", "Axios"],
  },
  {
    id: 7,
    name: "To Do App",
    image_path: "/images/todo-app.png",
    deployed_url: "https://to-do-type-script-puce.vercel.app/",
    github_url: "https://github.com/Yunus-Emre-Tasci/ToDo_TypeScript",
    category: ["react", "typescript"],
    description:
      "To-do list is prepared using Mock API. Typescript is used, lists can be deleted and updated. ",
    key_techs: ["React", "Typescript", "Axios", "Mock API"],
  },
  {
    id: 8,
    name: "Fire Contact",
    image_path: "/images/fire-contact.png",
    deployed_url: "https://fire-contact-one.vercel.app/",
    github_url: "https://github.com/Yunus-Emre-Tasci/Fire-Contact",
    category: ["react", "firebase"],
    description:
      "I made this project using bootstrap CSS. Skills/Tools: React-router library, Bootstrap library, Toastify library and Firebase Database.",
    key_techs: ["React", "Firebase", "Firestore", "Material UI"],
  },
  {
    id: 9,
    name: "Recipe App",
    image_path: "/images/recipe-app.png",
    deployed_url: "https://recipe-app-react-n76u.vercel.app/",
    github_url: "https://github.com/Yunus-Emre-Tasci/Recipe_App_React",
    category: ["react"],
    description:
      "In this project, the data obtained by using the edamam API are displayed as menu lists, meal selection and calorie display.",
    key_techs: ["React", "Reacr-router-dom", "Axios", "Styled-component"],
  },
];

export const certificates: ICertificates[] = [
  {
    id: 1,
    name: "Frontend Developer",
    image_path: "/certificates/frontend.png",
    url: "https://c11n.clarusway.com/en/verify/33669291764546",
  },
  {
    id: 2,
    name: "Backend Developer",
    image_path: "/certificates/backend.png",
    url: "https://c11n.clarusway.com/en/verify/51960530068331",
  },
  {
    id: 3,
    name: "React",
    image_path: "/certificates/react.png",
    url: "https://c11n.clarusway.com/en/verify/12278927084681 ",
  },
  {
    id: 4,
    name: "JavaScript",
    image_path: "/certificates/javascript.png",
    url: "https://c11n.clarusway.com/en/verify/93460447764827 ",
  },
  {
    id: 5,
    name: "HTML & CSS",
    image_path: "/certificates/html-css.png",
    url: "https://c11n.clarusway.com/en/verify/04996128175604 ",
  },
];