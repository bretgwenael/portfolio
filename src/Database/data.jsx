import SophieBluel from '../assets/sophie-bluel.webp';
import BankTree from '../assets/bank-tree.webp';
import Nina from '../assets/nina.webp';
import OhMyFood from '../assets/ohmyfood.webp';
import Kasa1 from '../assets/Kasa1.webp'
import Kasa2 from '../assets/Kasa2.webp'
import Kasa3 from '../assets/Kasa3.webp'
import SophieBluel1 from '../assets/SophieBluel1.webp'
import SophieBluel2 from '../assets/SophieBluel2.webp'
import SophieBluel3 from '../assets/SophieBluel3.webp'
import ArgentBank1 from '../assets/ArgentBank1.webp'
import ArgentBank2 from '../assets/ArgentBank2.webp'
import ArgentBank3 from '../assets/ArgentBank3.webp'
import NinaCarducci1 from '../assets/NinaCarducci1.webp'
import NinaCarducci2 from '../assets/NinaCarducci2.webp'
import NinaCarducci3 from '../assets/NinaCarducci3.webp'
import OhMyFood1 from '../assets/OhMyFood1.webp'
import OhMyFood2 from '../assets/OhMyFood2.webp'
import OhMyFood3 from '../assets/OhMyFood3.webp'

const items = [
  {
    id: 1,
    cover: SophieBluel,
    images: [
      SophieBluel1,
      SophieBluel2,
      SophieBluel3
    ],
    name: 'Sophie Bluel',
    description: "Architecte d'interieur a son compte",
    scenario: "Developpeur front-end pour l'agence ArchiWebos, vous etes envoye en renfort dans une equipe qui travaille sur la conception du site portfolio d'une architecte d'interieur.",
    objectifs: [
      "Création d'une page web dynamique pour présenter les travaux de l'architecte d'intérieur",
      "Développement d'une page de connexion et d'une modale d'upload",
      "Utilisation des outils de développement modernes et bonnes pratiques"
    ],
    Langages: [
      "HTML",
      "CSS",
      "Sass",
      "Javascript"
    ],
    githubLink: 'https://github.com/bretgwenael/Sophie-Bluel'
  },
  {
    id: 2,
    cover: BankTree,
    images: [
      ArgentBank1,
      ArgentBank2,
      ArgentBank3
    ],
    name: 'Argent Bank',
    description: 'Site de visualisation de comptes et transactions bancaires',
    scenario: "Developpeur front-end chez ArgentBank, en colaboration avec cheffe de projet vous travaillew sur la mise en place du tableau de bord des utilisateurs.",
    objectifs: [
      "Intégration front-end et back-end via des appels API",
      "Développement d'une interface utilisateur complète avec React",
      "Utilisation de Redux pour gérer l'état global de l'application"
    ],
    Langages: [
      "React",
      "Mongodb",
      "Sass",
      "Javascript"
    ],
    githubLink: 'https://github.com/bretgwenael/ArgentBank-website'
  },
  {
    id: 3,
    cover: Nina,
    images: [
      NinaCarducci1,
      NinaCarducci2,
      NinaCarducci3
    ],
    name: 'Nina Carducci',
    description: 'Photographe passionne a son compte pour evenements',
    scenario: "Developpeur freelance vous proposer vos services d'optimisation SEO a de nouveaux clients.",
    objectifs: [
      "Analyse et identification des problèmes de chargement et de référencement",
      "Proposition et mise en œuvre de recommandations d'amélioration",
      "Création d'un rapport détaillé des résultats avant et après les modifications"
    ],
    Langages: [
      "HTML",
      "CSS",
      "Javascript"
    ],
    githubLink: 'https://github.com/bretgwenael/ninacarducci'
  },
  {
    id: 4,
    cover: 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg',
    images: [
      Kasa1,
      Kasa2,
      Kasa3
    ],
    name: 'Kasa',
    description: 'Location appartements entre particuliers',
    scenario: "Developpeur front-end freelance pour Kasa ( entreprise de location d'appartements entre particuliers ), vous etes missionne pour developper l'application en React.",
    objectifs: [
      "Implémentation du front-end avec React et React Router",
      "Gestion de la logique de présentation des données",
      "Utilisation de Create React App et Node.js pour la configuration et le développement"
    ],
    Langages: [
      "React",
      "Sass",
      "Javascript"
    ],
    githubLink: 'https://github.com/bretgwenael/kasa'
  },
  {
    id: 5,
    cover: OhMyFood,
    images: [
      OhMyFood1,
      OhMyFood2,
      OhMyFood3
    ],
    name: 'OhMyFood',
    description: 'Startup de restauration gastronomique',
    scenario: "Developpeur Junior chez OhMyFood ( startup marche restauration ), vous etes charge de developper un site en mobile first qui repertorie les menus de restaurants gastronomique.",
    objectifs: [
      "Intégration d'une maquette mobile-first avec Sass",
      "Implémentation d'animations CSS pour améliorer l'expérience utilisateur",
      "Versionnement du projet avec Git et GitHub"
    ],
    Langages: [
      "HTML",
      "CSS",
      "Sass"
    ],
    githubLink: 'https://github.com/bretgwenael/ohmyfood'
  },
];

export default items;