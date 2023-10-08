import { Project } from "./types";

import { reactjs, nextjs, materialUI, reduxjs, bootstrap } from "./constants";

const projectsData: Project[] = [
  {
    id: "ctm",
    name: "Creditamina",
    description: "Lead generator for financial services",
    imageURL:
      "https://storage.googleapis.com/creditamina/images/creditamina-mx.jpg",
    imageAlt: "Crexitamina alt",
    repositoryURL: "https://github.com/rrorrolfo/creditamina",
    liveUrl: "https://creditamina.mx/",
    technologiesUsed: [reactjs, nextjs, materialUI],
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
    id: "dec",
    name: "Dance Estonia",
    description: "Dancing events promotion",
    imageURL:
      "https://storage.googleapis.com/creditamina/landing/amor-y-amistad-febrero.jpg",
    imageAlt: "Crexitamina alt",
    repositoryURL: "https://github.com/rrorrolfo/creditamina",
    liveUrl: "https://creditamina.mx/",
    technologiesUsed: [reactjs, reduxjs, bootstrap],
    technicalSpecifications: ["This is alead generator", "it is very cool"],
  },
  {
    id: "kg",
    name: "Karla Garrido Portfolio",
    description: "Profesisonal portfolio of actress Karla Garrido.",
    imageURL:
      "https://storage.googleapis.com/creditamina/landing/amor-y-amistad-febrero.jpg",
    imageAlt: "Crexitamina alt",
    repositoryURL: "https://github.com/rrorrolfo/creditamina",
    liveUrl: "https://creditamina.mx/",
    technologiesUsed: [reactjs, nextjs, "MA"],
    technicalSpecifications: ["This is alead generator", "it is very cool"],
  },
];

export default projectsData;
