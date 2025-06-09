![Vercel](https://vercelbadge.vercel.app/api/WilfriedFahim/portfolio-wilfried)
![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

# 🌐 Portfolio – Wilfried KOUASSI

> Développeur Front-end en reconversion | React/Next.js | TypeScript

[![Aperçu](./public/images/projet_portfolio.jpg)](https://portfolio-wilfried-chi.vercel.app)

Bienvenue sur mon portfolio de développeur front-end, construit avec une stack moderne utilisée en entreprise.

Ce projet est ma vitrine technique : il regroupe mes premiers clones de sites web, une mini-app mobile et les premières pages de mon SaaS personnel **EdgeMind**.

---

## 🚀 Stack utilisée

- **Next.js 15 (App Router)** - Framework React moderne
- **React** (via Next.js) - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides
- **ESLint** - Linting du code
- **PostCSS** - Processing CSS
- **Git & GitHub** - Versioning
- **Vercel** - Déploiement continu

---

## 🧠 Objectifs du projet

- Présenter mes compétences en développement front-end
- Servir de socle pour mes futures intégrations back-end (FastAPI)
- Préparer mon entrée sur le marché du travail (job ou mission freelance)
- Mettre en avant mon SaaS en cours : **EdgeMind** (coach IA pour traders)

---

## 📄 Fonctionnalités

- Interface rapide, responsive et moderne
- Routing avec App Router (Next.js 15)
- Design utilitaire avec Tailwind CSS
- Animations fluides avec Framer Motion
- Layout global (`layout.tsx`)
- Configuration TypeScript stricte
- Linting avec ESLint
- Déploiement continu via GitHub + Vercel
- Sections : Accueil, Projets, Compétences, À propos, Contact

---

## 🔗 Démo en ligne

[![Portfolio Demo](https://img.shields.io/badge/Démo-Visiter%20le%20site-blue)](https://portfolio-wilfried-chi.vercel.app)

---

## 📂 Architecture du projet

```
/
├─ app/                    # Dossier principal Next.js (App Router)
│  ├─ layout.tsx          # Layout global
│  ├─ page.tsx            # Page d'accueil
│  ├─ projects/           # Page projets
│  └─ globals.css         # Styles globaux
│
├─ components/            # Composants React réutilisables
│  ├─ ui/                # Composants UI de base
│  ├─ ProjectCard.tsx    # Carte de projet
│  ├─ ProjectList.tsx    # Liste des projets
│  ├─ SkillsSection.tsx  # Section compétences
│  ├─ AboutSection.tsx   # Section à propos
│  └─ ContactSection.tsx # Section contact
│
├─ mock/                 # Données mockées
│  ├─ data/             # Données statiques
│  └─ types/            # Types TypeScript
│
├─ public/              # Ressources statiques
│  └─ images/          # Images du projet
│
├─ .next/              # Dossier de build Next.js (généré)
├─ node_modules/       # Dépendances (généré)
│
├─ next.config.ts      # Configuration Next.js
├─ next-env.d.ts       # Types Next.js
├─ tailwind.config.js  # Configuration Tailwind
├─ tsconfig.json       # Configuration TypeScript
├─ postcss.config.mjs  # Configuration PostCSS
├─ eslint.config.mjs   # Configuration ESLint
├─ package.json        # Dépendances et scripts
├─ package-lock.json   # Verrouillage des versions
├─ .gitignore         # Fichiers ignorés par Git
└─ LICENSE            # Licence MIT
```

---

## 🧱 Projets en cours

### 🌐 Clones Web

- **LinkedIn Clone** - [GitHub](https://github.com/WilfriedFahim/linkedin-clone)

  - Authentification, feed dynamique, profils, messagerie
  - Stack: Next.js, React, Tailwind CSS, Firebase
  - Status: En développement

- **Twitch Clone** - [GitHub](https://github.com/WilfriedFahim/twitch-clone)

  - Streaming vidéo, chat en direct, page streamer
  - Stack: React, Next.js, Tailwind CSS, TypeScript
  - Status: Prochainement

### 💼 Applications Web

- **Yamo** - Localisation de pharmacies

  - Géolocalisation en temps réel
  - Recherche de pharmacies ouvertes
  - Stack: Next.js, React, TypeScript, Tailwind CSS
  - Status: Prochainement

- **CarEasy** - Transport en Afrique
  - Mise en relation conducteurs/passagers
  - Navigation et paiement intégrés
  - Stack: Next.js, React, TypeScript, Tailwind CSS
  - Status: Prochainement

### 💼 Applications Métier

- **Jarvis** - Gestion de contrats clients
  - Dashboard pour commerciaux et managers
  - Suivi des contrats, analytics, notifications
  - Stack: React, Node.js, PostgreSQL
  - Status: En conception

### 📱 Applications Mobile

- **Portfolio Mobile** - [GitHub](https://github.com/WilfriedFahim/portfolio-mobile)

  - Version mobile du portfolio
  - Stack: React Native, Expo, TypeScript
  - Status: En développement

### 🧠 Intelligence Artificielle

- **EdgeMind** - Coach IA pour traders
  - Analyse comportementale en temps réel
  - Mentor IA personnalisé
  - Stack: Next.js, Python, FastAPI
  - Status: MVP en cours

---

## 🙋‍♂️ À propos

[![GitHub](https://img.shields.io/badge/GitHub-WilfriedFahim-black?logo=github)](https://github.com/WilfriedFahim)

Je suis développeur front-end en reconversion, formé en autodidacte, et déterminé à livrer des projets concrets.

- 🎯 **Objectif** : décrocher une première mission ou un poste front-end (React/Next.js)
- 🧱 **Projet phare** : EdgeMind – un dashboard pour traders avec logique IA (ça arrive ;)

---

## 🧰 Scripts utiles

| Commande        | Description                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Lancer le serveur en développement |
| `npm run build` | Créer le build de production       |
| `npm run start` | Lancer l'app en mode production    |
| `npm run lint`  | Vérifier le code avec ESLint       |

---

## 📝 Prochaines étapes

1. Mise en place de la structure des composants
2. Implémentation des tests unitaires
3. Ajout des animations avec Framer Motion
4. Intégration d'un backend avec FastAPI
5. Mise en place d'une base de données

---

## 📄 License

Ce projet est sous licence [MIT](LICENSE).
