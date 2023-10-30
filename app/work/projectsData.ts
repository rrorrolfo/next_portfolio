import { Project } from "./types";

import {
  reactjs,
  nextjs,
  materialUI,
  reduxjs,
  bootstrap,
  css,
  nodejs,
  mongoDB,
  mongoose,
  express,
  draftjs,
  cssjs,
  firebase,
  reactRouter,
} from "./constants";

const projectsData: Project[] = [
  {
    id: "ctm",
    name: "Creditamina",
    description: "Lead generator for financial services in Mexico",
    imageURL:
      "https://storage.googleapis.com/creditamina/images/creditamina-mx.jpg",
    imageAlt: "Creditamina México",
    repositoryURL: "https://github.com/rrorrolfo/creditamina",
    isPrivate: true,
    liveUrl: "https://creditamina.mx/",
    technologiesUsed: [reactjs, nextjs, materialUI, cssjs, firebase],
    technicalSpecifications: [
      "Launched a full-stack web application using Next.js, React.js, and Material UI",
      "Designed and developed responsive, mobile-first layouts following SEO and UX best practices.",
      "Continuous website optimization based on technical insight from analytics and user behaviours, reaching a score of 90+ in performance, SEO practices, and best practices, according to Google Lighthouse in desktop and mobile versions.",
      "Integrated Google services such as Firebase (for authentication and Firestore Database), Google Analytics (for conversions and events tracking), and Google AdSense (for Ads).",
      "Currently, the site has 6000+ users per month",
      "Appearance in Google search results in the top 3 positions for several search queries as of Google Search Console data",
    ],
  },
  {
    id: "de",
    name: "Dance Estonia",
    description:
      "Portal for promoting local dancing parties and international dancing festivals",
    imageURL:
      "https://storage.googleapis.com/creditamina/images/dance-estonia-image.jpg",
    imageAlt: "Dance Estonia Client",
    repositoryURL:
      "https://github.com/rrorrolfo/danceEstoniaClient/tree/master/client",
    isPrivate: false,
    liveUrl: "https://danceestonia.netlify.app/",
    technologiesUsed: [reactjs, reduxjs, reactRouter, bootstrap, draftjs],
    technicalSpecifications: [
      "React.js and React bootstrap for creating mobile first layouts and components.",
      "Redux.js used for the application state management.",
      "React router used for client side routing.",
      "Draft.js used to add a rich text editor.",
      "Create, Read, Update, and Delete of data is posible.",
    ],
  },
  {
    id: "deAPI",
    name: "Dance Estonia API",
    description: "REST API to be consumed by Dance Estonia client",
    imageURL:
      "https://storage.googleapis.com/creditamina/images/dance-estonia-api.jpg",
    imageAlt: "Dance estonia api",
    repositoryURL: "https://github.com/rrorrolfo/danceEstonia",
    isPrivate: false,
    liveUrl: "https://dance-estonia-api.onrender.com",
    technologiesUsed: [nodejs, express, mongoDB, mongoose],
    technicalSpecifications: [
      "REST API created with Node.js on the Express framework for routing and serving content.",
      "CRUD operations available for all collections (events and festivals).",
      "Mongoose ORM used for data modeling, validation , and persistence.",
      "MongoDB used for storing data.",
      "Google cloud storage used for storing images.",
    ],
  },
  {
    id: "kg",
    name: "Karla Garrido Portfolio",
    description: "Profesisonal portfolio of actress Karla Garrido",
    imageURL:
      "https://storage.googleapis.com/creditamina/images/karla-garrido-portfolio.jpg",
    imageAlt: "Portfolio of actress Karla Garrido",
    repositoryURL: "https://github.com/rrorrolfo/karlaGarrido_ReactPortfolio",
    isPrivate: false,
    liveUrl: "https://www.karlagarrido.com/",
    technologiesUsed: [reactjs, reactRouter, css],
    technicalSpecifications: [
      "Mobile first layout created from scratch using React.js",
      "React router used for client side routing",
      "Website styled with CSS",
    ],
  },
];

export default projectsData;
