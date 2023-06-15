import Brackets from "@/assets/skills/support.png";
import Back from "@/assets/skills/back-end.png";
import Design from "@/assets/skills/conception-graphique.png";
import Brain from "@/assets/skills/cerveau.png";
import Booki from "@/assets/works/booki.jpg";
import Ohmyfood from "@/assets/works/ohmyfood.jpg";
import Piquante from "@/assets/works/piquante.jpg";
import Kanap from "@/assets/works/kanap.png";
import Kasa from "@/assets/works/kasa.jpg";
import Panthere from "@/assets/works/panthere.jpg";
import ChezCharlie from "@/assets/works/ChezCharlie.png";
import Portfolio from "@/assets/works/portfolio.png";

export const dataSkills = [
  {
    id: 1,
    image: Brackets,
    title: "Frontend",
    description:
      "J'ai commencé en autodidacte, puis j'ai ensuite suivi une formation à distance pour approfondir mes connaissances en développement web et acquérir une expertise complète dans les langages de programmation et les frameworks modernes.",
    logos: [
      { url: "images/logos/css-3.png" },
      { url: "images/logos/html-5.png" },
      { url: "images/logos/sass.png" },
      { url: "images/logos/js.png" },
      { url: "images/logos/react.png" },
      { url: "images/logos/vite.svg" },
    ],
  },
  {
    id: 2,
    image: Back,
    title: "Backend",
    description:
      "Avec une base solide en HTML, CSS et JavaScript, j'ai développé des projets personnels, renforçant mes compétences et ma compréhension des bonnes pratiques de développement, et je suis toujours ouverte à apprendre de nouvelles technologies pour rester à jour.",
    logos: [
      { url: "images/logos/express.png" },
      { url: "images/logos/mongodb-icon.png" },
      { url: "images/logos/node-js.png" },
      { url: "images/logos/nodemon.svg" },
    ],
  },
  {
    id: 3,
    image: Design,
    title: "Design & Others",
    description:
      "Mon objectif est de créer des solutions numériques performantes, esthétiques et conviviales qui répondent aux besoins des utilisateurs, en apportant autonomie, créativité et persévérance dans des projets passionnants.",
    logos: [
      { url: "images/logos/github.svg" },
      { url: "images/logos/figma.png" },
      { url: "images/logos/seo.svg" },
      { url: "images/logos/postman-icon.svg" },
    ],
  },
  {
    id: 4,
    image: Brain,
    title: "Psychologie",
    description:
      "Au cours de ma réorientation professionnelle, j'ai été captivée par les aspects de psychologie cognitive et d'ergonomie de conception dans le développement, et je suis motivée à créer des interfaces conviviales et intuitives qui facilitent l'expérience des utilisateurs, notamment dans les domaines de la pédagogie, de l'expérience utilisateur et des interactions homme-machine.",
    logos: [{ url: "images/logos/brain.png" }],
  },
];

export const dataWorks = [
  {
    id: 10,
    image: Booki,
    title: "Booki",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    date: "01/01/22",
  },
  {
    id: 11,
    image: Ohmyfood,
    title: "Ohmyfood",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    date: "01/01/22",
  },
  {
    id: 12,
    image: Panthere,
    title: "La Panthere",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    date: "01/01/22",
  },
  {
    id: 13,
    image: Piquante,
    title: "Piquante",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    date: "01/01/22",
  },
  {
    id: 14,
    image: Kanap,
    title: "Kanap",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    date: "01/01/22",
  },
  {
    id: 15,
    image: Kasa,
    title: "Kasa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    date: "01/01/22",
  },
];

export const dataDesign = [
  {
    id: 20,
    image: ChezCharlie,
    title: "Chez Charlie",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    date: "01/01/22",
    techno: [
      { url: "images/logos/react.png" },

      { url: "images/logos/sass.png" },
    ],
    link: [
      { icon: "images/logos/link.svg", url: "", name: "Lien Chez Charlie" },
      {
        icon: "images/logos/github.svg",
        url: "https://github.com/ElodieCara/chez-charlie",
        name: "Code Chez Charlie",
      },
      {
        icon: "images/logos/figma.png",
        url: "https://www.figma.com/proto/e8oFLY0WbN62cjh2UBH0gr/Chez-Charlie?type=design&scaling=scale-down&page-id=0%3A1&node-id=1-4",
        name: "Prototype Chez Charlie",
      },
    ],
  },
  {
    id: 21,
    image: Portfolio,
    title: "Portfolio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    date: "01/01/22",
    techno: [
      { url: "images/logos/react.png" },
      { url: "images/logos/vite.svg" },
      { url: "images/logos/sass.png" },
    ],
    link: [
      {
        icon: "images/logos/link.svg",
        url: "",
        name: "Lien vers le portfolio",
      },
      {
        icon: "images/logos/github.svg",
        url: "https://github.com/ElodieCara/portfolio_ecara",
        name: "Code du portfolio",
      },
      {
        icon: "images/logos/figma.png",
        url: "https://www.figma.com/proto/zpOh34P302zPQ9Ao4AyLRp/MYPORTFOLIO?type=design&node-id=20-2&scaling=min-zoom&page-id=0%3A1",
        name: "Prototype du portfolio",
      },
    ],
  },
];
