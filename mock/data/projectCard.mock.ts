import { ProjectCardType } from "../types/projectCard.types";

export const projectCardsMock: ProjectCardType[] = [
  {
    title: "Portfolio Builder",
    description:
      "Vitrine interactive de mes compétences : découvrez mes clones (LinkedIn, Twitch), mon SaaS EdgeMind, des mini-apps, et bien plus. Portfolio développé en Next.js, Tailwind, TypeScript et animations Framer Motion. Responsive et entièrement personnalisé.",
    stack: ["React", "Next.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://portfolio-wilfried-chi.vercel.app/",
    githubUrl: "https://github.com/WilfriedFahim/portfolio-wilfried",
    logo: "/images/projet_portfolio.jpg",
    badge: "Production",
    lastUpdate: new Date("2024-03-15"),
    stats: [
      { label: "DÉPLOIEMENTS", value: "28" },
      { label: "COMMITS", value: "132" },
      { label: "VERSIONS", value: "v1.0" }
    ],
  },
  {
    title: "EdgeMind (SaaS trading IA)",
    description:
      "EdgeMind est une plateforme SaaS de coaching mental assistée par IA, dédiée aux traders : analyse comportementale en temps réel, mentor IA personnalisé, détection d’erreurs psychologiques et suivi des performances pour progresser durablement.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Python", "FASTAPI"],
    liveUrl: "https://edgemind.app/", // à ajuster si tu as une vraie URL live
    githubUrl: "", // privé ou en cours : laisse vide pour test bouton désactivé
    logo: "/images/projet_edgemind.jpg", // change le nom/image si besoin
    badge: "Production",
    lastUpdate: new Date("2024-03-14"),
    stats: [
      { label: "USERS", value: "15+" },
      { label: "COMMITS", value: "245" },
      { label: "TESTS", value: "78%" }
    ],
  },
  {
    title: "LinkedIn Clone",
    description:
      "Clone complet de LinkedIn : authentification sécurisée, feed dynamique, profils, messagerie et notifications en temps réel. Construit en Next.js/Firebase, responsive, avec animations soignées et design moderne.",
    stack: ["Next.js", "React", "Tailwind CSS", "Firebase", "TypeScript", "JavaScript (ES6+)"],
    liveUrl: "https://linkedin-clone-wilfried.vercel.app/", // fictif ou vrai
    githubUrl: "https://github.com/WilfriedFahim/linkedin-clone",
    logo: "/images/project_linkedin.png",
    badge: "Perso",
    lastUpdate: new Date("2024-03-13"),
    stats: [
      { label: "UTILISATEURS", value: "5+" },
      { label: "COMMITS", value: "102" },
      { label: "DERNIÈRE MAJ", value: "03/24" }
    ],
  },
  {
    title: "Twitch Clone",
    description:
      "Reproduction de la plateforme Twitch : streaming vidéo, chat en direct, page streamer, dashboard utilisateur et système de follow. Stack moderne React/Next, Tailwind CSS, intégration API mock pour la démo.",
    stack: ["React", "Next.js", "Tailwind CSS", "TypeScript", "API Rest"],
    liveUrl: "https://twitch-clone-wilfried.vercel.app/", // fictif ou vrai
    githubUrl: "https://github.com/WilfriedFahim/twitch-clone",
    logo: "/images/project_twitch.png",
    badge: "Beta",
    lastUpdate: new Date("2024-03-12"),
    stats: [
      { label: "FPS", value: "60" },
      { label: "COMMITS", value: "77" },
      { label: "USERS", value: "3+" }
    ],
  },
  {
    title: "Portfolio Mobile",
    description:
      "Version mobile dédiée de mon portfolio, optimisée pour smartphone : navigation simplifiée, design épuré, animations adaptées, accessibilité renforcée. Stack React Native & Expo.",
    stack: ["React Native", "Expo", "TypeScript", "Tailwind CSS"],
    liveUrl: "", // bientôt en prod ? bouton désactivé
    githubUrl: "https://github.com/WilfriedFahim/portfolio-mobile",
    logo: "/images/projet_portfolio_mobile.jpg",
    badge: "Beta",
    lastUpdate: new Date("2024-03-10"),
    stats: [
      { label: "DÉPLOIEMENTS", value: "3" },
      { label: "COMMITS", value: "19" },
      { label: "VERSION", value: "v0.8" }
    ],
  },
];
