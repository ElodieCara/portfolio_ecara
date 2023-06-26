import Brackets from "@/assets/skills/support.png";
import Back from "@/assets/skills/back-end.png";
import Design from "@/assets/skills/conception-graphique.png";
import Brain from "@/assets/skills/cerveau.png";
import Booki from "@/assets/works/booki.jpg";
import BookiSite from "@/assets/works/BookiSite.png";
import Ohmyfood from "@/assets/works/ohmyfood.jpg";
import OhmyfoodSite from "@/assets/works/OhmyfoodSite.png";
import Piquante from "@/assets/works/Piquante.jpg";
import PiquanteSite from "@/assets/works/PiquanteSite.png";
import Kanap from "@/assets/works/kanap.png";
import KanapSite from "@/assets/works/KanapSite.png";
import Kasa from "@/assets/works/kasa.jpg";
import KasaSite from "@/assets/works/KasaSite.png";
import Panthere from "@/assets/works/panthere.jpg";
import PanthereSite from "@/assets/works/PanthereSite.png";
import ChezCharlie from "@/assets/works/ChezCharlie.png";
import Portfolio from "@/assets/works/portfolio.png";

export const dataSkills = [
  {
    id: 1,
    image: Brackets,
    title: "Frontend",
    description:
      "J'ai commencé en autodidacte, puis j'ai ensuite suivi une formation à distance pour renforcer mes compétences.",
    logos: [
      { url: "../images/logos/css-3.png" },
      { url: "../images/logos/html-5.png" },
      { url: "../images/logos/sass.png" },
      { url: "../images/logos/js.png" },
      { url: "../images/logos/react.png" },
      { url: "../images/logos/vite.svg" },
    ],
  },
  {
    id: 2,
    image: Back,
    title: "Backend",
    description:
      "Avec une base solide en HTML, CSS et JavaScript, j'ai développé des projets personnels, renforçant mes compétences et ma compréhension des bonnes pratiques de développement, et je suis toujours ouverte à apprendre de nouvelles technologies pour rester à jour.",
    logos: [
      { url: "../../images/logos/express.png" },
      { url: "../../images/logos/mongodb-icon.png" },
      { url: "../../images/logos/node-js.png" },
      { url: "../../images/logos/nodemon.svg" },
    ],
  },
  {
    id: 3,
    image: Design,
    title: "Design & Others",
    description:
      "Mon objectif est de créer des solutions numériques performantes, esthétiques et conviviales qui répondent aux besoins des utilisateurs, en apportant autonomie, créativité et persévérance dans des projets passionnants.",
    logos: [
      { url: "../images/logos/github.svg" },
      { url: "../images/logos/figma.png" },
      { url: "../images/logos/seo.svg" },
      { url: "../images/logos/postman-icon.svg" },
    ],
  },
  {
    id: 4,
    image: Brain,
    title: "Psychologie",
    description:
      "Passionné par la psychologie cognitive et l'ergonomie de conception, motivé à créer des interfaces conviviales et intuitives pour améliorer l'expérience utilisateur, notamment dans les domaines de la pédagogie et des interactions homme-machine.",
    logos: [{ url: "../images/logos/brain.png" }],
  },
];

export const dataWorks = [
  {
    id: 10,
    image: Booki,
    title: "Booki",
    description:
      "Le premier projet consiste à intégrer une page web en HTML et CSS pour une plateforme de réservation de vacances.",
    date: "01/01/22",
    capture: BookiSite,
    techno: [
      { url: "../images/logos/html-5.png", alt: "Html" },
      { url: "../images/logos/css-3.png", alt: "CSS" },
    ],
    link: [
      {
        url: "https://elodiecara.github.io/P2-Booki/",
        name: "Site Booki",
      },
    ],
    github: [
      {
        url: "https://github.com/ElodieCara/P2-Booki",
        name: "Code Booki",
      },
    ],
    maquette: [
      {
        url: "https://www.figma.com/file/r9YJyUkpVdrxzBBKGH7reY/Maquettes-Booki-(desktop%2C-mobile%2C-tablette)?type=design&node-id=3-0&mode=design&t=sPSo8Iij5WQkLckw-0",
        name: "Maquette Booki",
      },
    ],
  },
  {
    id: 11,
    image: Ohmyfood,
    title: "Ohmyfood",
    description:
      "L'objectif est de mettre en œuvre la version mobile d'un site de foodtech en utilisant des animations CSS. Le site est conçu de manière responsive en suivant l'approche mobile first.",
    date: "01/01/22",
    capture: OhmyfoodSite,
    techno: [
      { url: "../images/logos/html-5.png", alt: "Html" },
      { url: "../images/logos/sass.png", alt: "Sass" },
    ],
    link: [
      {
        url: "https://elodiecara.github.io/P3-OhMyFood/",
        name: "Site OhMyFood",
      },
    ],
    github: [
      {
        url: "https://github.com/ElodieCara/P3-OhMyFood",
        name: "Code OhMyFood",
      },
    ],
    maquette: [
      {
        url: "https://www.figma.com/file/t4449fzDnwGYmzuwQdu87V/Maquettes-Ohmyfood-(mobile-et-desktop)?type=design&node-id=0-1&mode=design&t=DdPhlrxoB7y1RWzA-0",
        name: "Maquette OhMyFood",
      },
    ],
  },
  {
    id: 12,
    image: Panthere,
    title: "La Panthere",
    description:
      "L'objectif est d'améliorer le classement d'un site web dans les résultats de recherche de Google en mettant en œuvre les bonnes pratiques de référencement (SEO).",
    date: "01/01/22",
    capture: PanthereSite,
    techno: [{ url: "../images/logos/seo.svg", alt: "Seo" }],
    link: [
      {
        url: "https://elodiecara.github.io/P4-La_Panthere/",
        name: "Site La Panthere",
      },
    ],
    gitub: [
      {
        url: "https://github.com/ElodieCara/P4-La_Panthere",
        name: "Code La Panthere",
      },
    ],
  },
  {
    id: 13,
    image: Piquante,
    title: "Piquante",
    description:
      "Il s'agit de créer le backend et l'API d'une application d'avis gastronomiques de sauces piquantes. De construire la base de données NoSQL, puis de sécuriser les données grâce aux normes de l'OWASP.",
    date: "01/01/22",
    capture: PiquanteSite,
    techno: [
      { url: "../images/logos/express.svg", alt: "Express" },
      { url: "../images/logos/node-js.png", alt: "NodeJS" },
      { url: "../images/logos/mongodb-icon.png", alt: "MongoDB" },
    ],
    link: [
      {
        url: "none",
        name: "none",
      },
    ],
    github: [
      {
        url: "https://github.com/ElodieCara/P6-PIIQUANTE",
        name: "Code Piiquante",
      },
    ],
  },
  {
    id: 14,
    image: Kanap,
    title: "Kanap",
    description:
      "L'objectif est d'intégrer de manière dynamique les maquettes du site de Kanap avec JavaScript. J'utilise l'API pour récupérer les produits et leurs détails, et je m'occupe également de la gestion l'ajout des produits au panier.",
    date: "03/10/22",
    capture: KanapSite,
    techno: [{ url: "../images/logos/js.png", alt: "JS" }],
    link: [
      {
        url: "none",
        name: "none",
      },
    ],
    github: [
      {
        url: "https://github.com/ElodieCara/P5-Kanap",
        name: "Code Kanap",
      },
    ],
  },
  {
    id: 15,
    image: Kasa,
    title: "Kasa",
    description:
      "J'ai réalisé la mise en œuvre du front-end de Kasa, une application de location de logements, en utilisant React. J'ai développé différents composants pour construire l'interface utilisateur de l'application, et j'ai également configuré les routes de navigation à l'aide de React Router. ",
    date: "17/11/22",
    capture: KasaSite,
    techno: [
      { url: "../images/logos/react.png", alt: "React" },

      { url: "../images/logos/sass.png", alt: "Sass" },
    ],
    link: [
      {
        url: "https://elodiecara.github.io/P7-KASA/",
        name: "Site KASA",
      },
    ],
    github: [
      {
        url: "https://github.com/ElodieCara/P7-KASA",
        name: "Code KASA",
      },
    ],
    maquette: [
      {
        url: "https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/ARCHIVE-UI-Design-Kasa-FR?type=design&node-id=3-0&mode=design&t=MFMCpFNtgDJyCCIT-0",
        name: "Maquette Kasa",
      },
    ],
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
      { url: "../images/logos/react.png", alt: "React" },

      { url: "../images/logos/sass.png", alt: "Sass" },
    ],
    link: [
      { icon: "../images/logos/link.svg", url: "", name: "Lien Chez Charlie" },
      {
        icon: "../images/logos/github.svg",
        url: "https://github.com/ElodieCara/chez-charlie",
        name: "Code Chez Charlie",
      },
      {
        icon: "../images/logos/figma.png",
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
      { url: "../images/logos/react.png", alt: "React" },
      { url: "../images/logos/vite.svg", alt: "Vite" },
      { url: "../images/logos/sass.png", alt: "Sass" },
    ],
    link: [
      {
        icon: "../images/logos/link.svg",
        url: "none",
        name: "Lien vers le portfolio",
      },
      {
        icon: "../images/logos/github.svg",
        url: "https://github.com/ElodieCara/portfolio_ecara",
        name: "Code du portfolio",
      },
      {
        icon: "../images/logos/figma.png",
        url: "https://www.figma.com/proto/zpOh34P302zPQ9Ao4AyLRp/MYPORTFOLIO?type=design&node-id=20-2&scaling=min-zoom&page-id=0%3A1",
        name: "Prototype du portfolio",
      },
    ],
  },
];
