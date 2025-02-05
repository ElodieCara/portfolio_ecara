import Brackets from "@/assets/skills/support.png";
import Back from "@/assets/skills/back-end.png";
import Design from "@/assets/skills/conception-graphique.png";
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
import Portfolio from "@/assets/works/portfolio.png";
import PortLogo from "@/assets/works/logos/PortLogo.png";
import PortBG from "@/assets/works/TreeBackCont.jpg";
import Alifey from "@/assets/works/portfolio__nuages.png";
import AlifeyBG from "@/assets/AlifeyBG.webp";
import AlifeyLogo from "@/assets/works/logos/Alifey.png";
import AlifeySite from "@/assets/works/Alifey_Site.png";
import Mmd from "@/assets/works/BlogPortfolio.png";
import Tissatout from "@/assets/works/Tissatoutportfolio.png";
import typescriptLogo from "../assets/logos/TypeScript.svg";
import netCore from "../assets/logos/Net Core.svg";
import sqlServer from "../assets/logos/serveur-sql.png";
import mongoDB from "../assets/logos/MongoDB.svg";
import sass from "../assets/logos/sass.png";
import next from "../assets/logos/nextjs.webp";
import Engrenages from "../assets/logos/engrenages.png";
import MicroSolution from "@/assets/works/MicroSolution.jpeg";
import Docker from "@/assets/logos/Docker.svg";
import Azure from "@/assets/logos/Azure.png";
import Linq from "@/assets/logos/Linq.svg";
import Lambazon from "@/assets/works/lambazon.png";
import ExpressVoitures from "@/assets/works/ExpressVoitures.png";
import NexaWorks from "@/assets/works/NexaWorks.png";
import Findexium from "@/assets/works/Findexium.jpeg";
import TourGuide from "@/assets/works/Tour-Guide.png";

export const dataSkills = [
  {
    id: 1,
    image: Brackets,
    title: "Langages de programmation",
    description:
      "Expertise en langages essentiels au développement d’applications modernes, garantissant performance et maintenabilité.",
    logos: [
      { url: "https://i.imgur.com/epFnsm4.png", alt: "C#" },
      {
        url: "https://i.imgur.com/IWDNGMz.png",
        alt: "JavaScript (React, TypeScript)",
      },
      { url: typescriptLogo, alt: "TypeScript" },
      { url: "https://i.imgur.com/eeo0swQ.png", alt: "HTML" },
      { url: "https://i.imgur.com/k2nbB4r.png", alt: "CSS" },
    ],
  },
  {
    id: 2,
    image: Engrenages,
    title: "Frameworks & Environnements",
    description:
      "Maîtrise des frameworks et environnements modernes pour le développement d’applications évolutives et performantes.",
    logos: [
      { url: netCore, alt: ".NET Core" },
      { url: "https://i.imgur.com/Cpm2Ays.png", alt: "React" },
      { url: next, alt: "Next.js" },
      { url: sass, alt: "SASS" },
    ],
  },
  {
    id: 3,
    image: Back,
    title: "Bases de données & Stockage",
    description:
      "Conception et optimisation de bases de données relationnelles et NoSQL pour assurer scalabilité et performance.",
    logos: [
      { url: sqlServer, alt: "SQL Server" },
      { url: mongoDB, alt: "MongoDB" },
    ],
  },
  {
    id: 4,
    image: Design,
    title: "Outils",
    description:
      "Utilisation des outils indispensables pour le développement, la gestion de versions et l’intégration continue en environnement professionnel.",
    logos: [
      { url: "https://i.imgur.com/gCpZUZ7.png", alt: "GitHub" },
      { url: "https://i.imgur.com/1EdSMty.png", alt: "Visual Studio" },
      { url: "https://i.imgur.com/FYFZUZ8.png", alt: "Postman" },
    ],
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
    date: "2022-05-23",
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
    date: "2022-07-10",
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
    date: "2022-08-09",
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
    date: "2022-10-25",
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
      "Intégrer de manière dynamique les maquettes du site de Kanap avec JavaScript.",
    libellé: "Construire un site e-commerce en JavaScript",
    date: "2022-10-03",
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
    date: "2022-11-17",
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
  {
    id: 16,
    image: Lambazon,
    title: "Lambazon",
    date: "2024-03-01",
    github: [
      {
        url: "https://github.com/ElodieCara/DotNetprojet2",
        name: "Code Lambazon",
      },
    ],
    techno: [
      { url: netCore, alt: "Dot NEt" },
      { url: sqlServer, alt: "SQL Server" },
    ],
  },
  {
    id: 17,
    image: ExpressVoitures,
    title: "Voitures",
    date: "2024-03-01",
    github: [
      {
        url: "https://github.com/ElodieCara/P5-Express-Voitures",
        name: "ExpressVoitures",
      },
    ],
    techno: [
      { url: netCore, alt: "Dot NEt" },
      { url: Azure, alt: "Azure" },
    ],
  },
  {
    id: 18,
    image: NexaWorks,
    title: "NexaWorks",
    date: "2024-03-01",
    github: [
      {
        url: "https://github.com/ElodieCara/NexaWorks",
        name: "NexaWorks",
      },
    ],
    techno: [
      { url: netCore, alt: "Dot NEt" },
      { url: Linq, alt: "Linq" },
    ],
  },
  {
    id: 19,
    image: Findexium,
    title: "Findexium",
    date: "2024-10-23",
    github: [
      {
        url: "https://github.com/ElodieCara/Back-end.NET_API_REST/tree/dev",
        name: "Findexium",
      },
    ],
    techno: [
      { url: netCore, alt: "Dot NEt" },
      { url: sqlServer, alt: "SQL Server" },
    ],
  },
  {
    id: 20,
    image: TourGuide,
    title: "Tour Guide",
    date: "2024-12-23",
    github: [
      {
        url: "https://github.com/ElodieCara/backend-dot-NET_P8/tree/dev",
        name: "Tour Guide",
      },
    ],
    techno: [
      { url: netCore, alt: "Dot NEt" },
      { url: sqlServer, alt: "SQL Server" },
    ],
  },
  {
    id: 21,
    image: MicroSolution,
    title: "MicroServices",
    logo: "",
    description:
      "Développement d'une solution en architecture microservices avec ASP.NET Core, React et MongoDB.",
    libellé: "Développement d'une application médicale en microservices",
    date: "2025-01-25",
    capture: "",
    techno: [
      { url: netCore, alt: "Dot Net" },
      { url: Docker, alt: "Docker" },
    ],
    github: [
      {
        url: "https://github.com/ElodieCara/MicroservicesSolution",
        name: "Code KASA",
      },
    ],
  },
];

export const dataDesign = [
  {
    id: 30,
    image: Alifey,
    title: "Alifey",
    color: "linear-gradient(to top, #7e4793, #c7ecff, #d07fbf)",
    bg: AlifeyBG,
    logo: AlifeyLogo,
    capture: AlifeySite,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    date: "28/11/2023",
    techno: [
      { url: "https://i.imgur.com/Cpm2Ays.png", alt: "React" },
      { url: "https://i.imgur.com/FpcX7G3.png", alt: "Sass" },
      { url: "https://i.imgur.com/sjXaKpc.png", alt: "Vite" },
    ],
    link: [
      {
        icon: "/images/logos/link.svg",
        url: "https://elodiecara.github.io/projet-pink/",
        name: "Lien Alifey",
      },
    ],
    github: [
      {
        icon: "/images/logos/github.svg",
        url: "https://github.com/ElodieCara/projet-pink",
        name: "Code Alifey",
      },
    ],
    maquette: [
      {
        icon: "/images/logos/figma.png",
        url: "https://www.figma.com/proto/e8oFLY0WbN62cjh2UBH0gr/Chez-Charlie?type=design&scaling=scale-down&page-id=0%3A1&node-id=1-4",
        name: "Prototype Alifey",
      },
    ],
    status: "Terminé",
  },
  {
    id: 31,
    image: Portfolio,
    title: "Portfolio",
    color: "linear-gradient(to top, #00c3ff, #77e190, #ffff1c)",
    logo: PortLogo,
    bg: PortBG,
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
        url: "https://elodiecara.github.io/portfolio_ecara/",
        name: "Lien vers le portfolio",
      },
    ],
    github: [
      {
        icon: "/images/logos/github.svg",
        url: "https://github.com/ElodieCara/portfolio_ecara",
        name: "Code du portfolio",
      },
    ],
    maquette: [
      {
        icon: "/images/logos/figma.png",
        url: "https://www.figma.com/proto/zpOh34P302zPQ9Ao4AyLRp/MYPORTFOLIO?type=design&node-id=20-2&scaling=min-zoom&page-id=0%3A1",
        name: "Prototype du portfolio",
      },
    ],
    status: "Terminé",
  },
  {
    id: 32,
    image: Tissatout,
    title: "Tissatout",
    color: "linear-gradient(to top, #ff8c00, #ffb700, #ffdc00)",
    logo: PortLogo,
    bg: PortBG,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    date: "01/01/22",
    techno: [
      { url: next, alt: "Next.js" },
      { url: typescriptLogo, alt: "Typescript" },
      { url: "https://i.imgur.com/FpcX7G3.png", alt: "Sass" },
    ],
    link: [
      {
        icon: "/images/logos/link.svg",
        url: "https://github.com/ElodieCara/Tissatout-next",
        name: "Lien vers le github",
      },
    ],
    github: [
      {
        icon: "",
        url: "https://github.com/ElodieCara/Tissatout-next",
        name: "Lien Github",
      },
    ],
    maquette: [
      {
        icon: "",
        url: "",
        name: "",
      },
    ],
    status: "En cours",
  },
  {
    id: 33,
    image: Mmd,
    title: "Mmd",
    color: "linear-gradient(to top, #ff4b1f, #ff9068, #ffd1a4)",
    logo: PortLogo,
    bg: PortBG,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    date: "01/01/22",
    techno: [
      { url: "https://i.imgur.com/Cpm2Ays.png", alt: "React" },
      // { url: next, alt: "Next.js" },
      { url: "https://i.imgur.com/sjXaKpc.png", alt: "Vite" },
      { url: "https://i.imgur.com/FpcX7G3.png", alt: "Sass" },
    ],
    link: [
      {
        icon: "",
        url: "https://github.com/ElodieCara/mmd",
        name: "Lien github",
      },
    ],
    github: [
      {
        icon: "",
        url: "https://github.com/ElodieCara/mmd",
        name: "Lien github",
      },
    ],
    maquette: [
      {
        icon: "",
        url: "",
        name: "",
      },
    ],
    status: "En cours",
  },
];
