import Brackets from "@/assets/skills/support.png";
import Back from "@/assets/skills/back-end.png";
import Design from "@/assets/skills/conception-graphique.png";
import Brain from "@/assets/skills/cerveau.png";
import Booki from "@/assets/works/booki.jpg";
import BookiSite from "@/assets/works/BookiSite.png";
import BookiLogo from "@/assets/works/logos/Booki.png";
import Ohmyfood from "@/assets/works/ohmyfood.jpg";
import OhmyfoodSite from "@/assets/works/OhmyfoodSite.png";
import OhmyfoodLogo from "@/assets/works/logos/ohmyfood.png";
import Piquante from "@/assets/works/Piquante.jpg";
import PiquanteSite from "@/assets/works/PiquanteSite.png";
import PiquanteLogo from "@/assets/works/logos/piiquante.png";
import Kanap from "@/assets/works/kanap.png";
import KanapSite from "@/assets/works/KanapSite.png";
import KanapLogo from "@/assets/works/logos/Kanap.svg";
import Kasa from "@/assets/works/kasa.jpg";
import KasaSite from "@/assets/works/KasaSite.png";
import KasaLogo from "@/assets/works/logos/Kasa.png";
import Panthere from "@/assets/works/panthere.jpg";
import PanthereSite from "@/assets/works/PanthereSite.png";
import PanthereLogo from "@/assets/works/logos/panthere.svg";
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
      { url: "https://i.imgur.com/k2nbB4r.png", alt: "css" },
      { url: "https://i.imgur.com/eeo0swQ.png", alt: "html" },
      { url: "https://i.imgur.com/FpcX7G3.png", alt: "Sass" },
      { url: "https://i.imgur.com/IWDNGMz.png", alt: "JS" },
      { url: "https://i.imgur.com/Cpm2Ays.png", alt: "React" },
      { url: "https://i.imgur.com/sjXaKpc.png", alt: "Vite" },
    ],
  },
  {
    id: 2,
    image: Back,
    title: "Backend",
    description:
      "Avec une base solide en HTML, CSS et JavaScript, j'ai développé des projets personnels",
    logos: [
      { url: "https://i.imgur.com/MiVJaU7.png", alt: "express" },
      { url: "https://i.imgur.com/hdQ0ixn.png", alt: "NodeJS" },
      { url: "https://i.imgur.com/FYlTosm.png", alt: "MongodB" },
      { url: "https://i.imgur.com/jJJhkIO.png", alt: "nodemon" },
    ],
  },
  {
    id: 3,
    image: Design,
    title: "Design & Others",
    description:
      "Mon objectif est de renforçer mes compétences et ma compréhension des bonnes pratiques de développement, je suis toujours ouverte à apprendre de nouvelles technologies pour rester à jour.",
    logos: [
      { url: "https://i.imgur.com/gCpZUZ7.png", alt: "Github" },
      { url: "https://i.imgur.com/vrVEaDW.png", alt: "Figma" },
      { url: "https://i.imgur.com/rUOLgyE.png", alt: "SEO" },
      { url: "https://i.imgur.com/FYFZUZ8.png", alt: "Postman" },
    ],
  },
  {
    id: 4,
    image: Brain,
    title: "Psychologie",
    description:
      "Passionnée par la psychologie cognitive et l'ergonomie de conception, la pédagogie et des interactions homme-machine.",
    logos: [{ url: "https://i.imgur.com/WxwLREE.png", alt: "brain" }],
  },
];

export const dataWorks = [
  {
    id: 10,
    image: Booki,
    title: "Booki",
    logo: BookiLogo,
    description:
      "Intégration d'une page web en HTML et CSS pour une plateforme de réservation de vacances.",
    libellé: "Transformer une maquette en site web avec HTML & CSS",
    date: "23/05/22",
    capture: BookiSite,
    techno: [
      { url: "https://i.imgur.com/eeo0swQ.png", alt: "Html" },
      { url: "https://i.imgur.com/k2nbB4r.png", alt: "CSS" },
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
    logo: OhmyfoodLogo,
    description:
      "La version mobile d'un site de foodtech en utilisant des animations CSS. Le site est conçu de manière responsive en suivant l'approche mobile first.",
    libellé: "Dynamiser une page web avec des animations CSS",
    date: "10/07/22",
    capture: OhmyfoodSite,
    techno: [
      { url: "https://i.imgur.com/eeo0swQ.png", alt: "Html" },
      { url: "https://i.imgur.com/FpcX7G3.png", alt: "Sass" },
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
    logo: PanthereLogo,
    description:
      "L'objectif est d'améliorer le classement d'un site web dans les résultats de recherche de Google.",
    libellé: "Optimiser un site web existant",
    date: "09/08/22",
    capture: PanthereSite,
    techno: [{ url: "https://i.imgur.com/rUOLgyE.png", alt: "Seo" }],
    link: [
      {
        url: "https://elodiecara.github.io/P4-La_Panthere/",
        name: "Site La Panthere",
      },
    ],
    github: [
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
    logo: PiquanteLogo,
    description:
      "Création du backend de l'API d'une application d'avis gastronomiques de sauces piquantes.",
    libellé:
      "Construire une API sécurisée pour une application d'avis gastronomiques",
    date: "25/10/22",
    capture: PiquanteSite,
    techno: [
      { url: "https://i.imgur.com/MiVJaU7.png", alt: "Express" },
      { url: "https://i.imgur.com/hdQ0ixn.png", alt: "NodeJS" },
      { url: "https://i.imgur.com/FYlTosm.png", alt: "MongoDB" },
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
    logo: KanapLogo,
    description:
      "Lintégrer de manière dynamique les maquettes du site de Kanap avec JavaScript.",
    libellé: "Construire un site e-commerce en JavaScript",
    date: "03/10/22",
    capture: KanapSite,
    techno: [{ url: "https://i.imgur.com/IWDNGMz.png", alt: "JS" }],
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
    logo: KasaLogo,
    description:
      "Mise en œuvre du front-end de Kasa, application de location de logements, en utilisant React.",
    libellé: "Créer une application web de location immobilière avec React",
    date: "17/11/22",
    capture: KasaSite,
    techno: [
      { url: "https://i.imgur.com/Cpm2Ays.png", alt: "React" },

      { url: "https://i.imgur.com/FpcX7G3.png", alt: "Sass" },
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
      { url: "https://i.imgur.com/Cpm2Ays.png", alt: "React" },

      { url: "https://i.imgur.com/FpcX7G3.png", alt: "Sass" },
    ],
    link: [
      {
        icon: "/images/logos/link.svg",
        url: "Lien",
        name: "Lien Chez Charlie",
      },
      {
        icon: "/images/logos/github.svg",
        url: "https://github.com/ElodieCara/chez-charlie",
        name: "Code Chez Charlie",
      },
      {
        icon: "/images/logos/figma.png",
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
      { url: "https://i.imgur.com/Cpm2Ays.png", alt: "React" },
      { url: "https://i.imgur.com/sjXaKpc.png", alt: "Vite" },
      { url: "https://i.imgur.com/FpcX7G3.png", alt: "Sass" },
    ],
    link: [
      {
        icon: "/images/logos/link.svg",
        url: "none",
        name: "Lien vers le portfolio",
      },
      {
        icon: "/images/logos/github.svg",
        url: "https://github.com/ElodieCara/portfolio_ecara",
        name: "Code du portfolio",
      },
      {
        icon: "/images/logos/figma.png",
        url: "https://www.figma.com/proto/zpOh34P302zPQ9Ao4AyLRp/MYPORTFOLIO?type=design&node-id=20-2&scaling=min-zoom&page-id=0%3A1",
        name: "Prototype du portfolio",
      },
    ],
  },
];
