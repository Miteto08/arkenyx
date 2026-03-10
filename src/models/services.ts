import type { Service } from './types';

export const services: Service[] = [
  {
    id: 'recuperation-sauvegarde',
    title: 'Récupération et sauvegarde de données',
    image: '/images/services/data-recovery.avif',
    description:
      'On récupère vos données quand c’est possible et on vous aide à mettre en place des sauvegardes pour éviter les mauvaises surprises.\n\nLes supports physiquement endommagés (choc, chute, etc.) relèvent d’un laboratoire spécialisé disposant d’équipements et de locaux dédiés ; ces moyens ne sont pas disponibles dans le cadre de cette prestation.',
    items: [
      'Récupération de données supprimées ou perdues',
      'Récupération sur disques durs, SSD, clés USB et cartes mémoire accessibles',
      'Sauvegarde ponctuelle et conseils pour éviter toute perte future',
    ],
  },
  {
    id: 'depannage-reparation',
    title: 'Dépannage et réparation informatique',
    image: '/images/services/pc-repair.avif',
    description:
      'On diagnostique, on répare ou on remplace ce qui peut l’être — PC fixe ou portable, selon ce que le matériel permet d’accéder. Nettoyage interne, optimisation Windows et suivi des programmes au démarrage pour garder la machine fluide.',
    items: [
      'Diagnostic et dépannage PC',
      'Analyse complète des performances et de l’état du PC',
      'Réparation et remplacement de composants standards (ventilateurs, RAM, disques, alimentation, etc.) — PC fixes et portables, selon accessibilité',
      'Nettoyage matériel et dépoussiérage interne (PC fixes et portables selon accessibilité)',
      'Optimisation Windows, suppression des fichiers temporaires, nettoyage logiciel et gestion des programmes au démarrage',
    ],
  },
  {
    id: 'montage-installation',
    title: 'Montage et installation',
    image: '/images/services/pc-assembly.avif',
    description:
      'Montage sur mesure, toute gamme de budget : on assemble et on livre une machine prête à l’emploi, en prenant en charge tout le nécessaire pour qu’elle tourne chez vous. On peut aussi vous conseiller sur le choix des composants avant de monter.',
    items: [
      'Montage de PC complet',
      'Assemblage complet et vérification des composants',
      'Installation du système d’exploitation Windows',
      'Installation des drivers et logiciels de base',
      'Configuration et tests pour assurer performance et stabilité',
    ],
  },
  {
    id: 'conseil-accompagnement',
    title: 'Conseil et accompagnement',
    image: '/images/services/consulting.avif',
    description:
      "On vous aide à y voir clair avant d'acheter, d'upgrader ou d'optimiser : choix des composants en tenant compte de la compatibilité, conseils sur ce qu'il vaut mieux installer ou désinstaller, et suivi pour que le matériel et le logiciel soient bien réglés.",
    items: [
      'Accompagnement et diagnostic',
      'Conseils pour amélioration ou upgrade (composants et compatibilité, logiciels)',
      'Aide au choix de composants pour un nouveau PC',
      'Diagnostic avant achat ou assemblage d’un nouveau système',
      'Accompagnement pour optimisation matérielle et logicielle',
    ],
  },
  {
    id: 'forfaits-optionnels',
    title: 'Forfaits et services optionnels',
    image: '/images/services/optional-packages.avif',
    description:
      "Au-delà des interventions ponctuelles, des forfaits et prestations optionnelles sont proposés pour un suivi adapté à votre usage. Le périmètre et les modalités sont définis selon votre situation.",
    items: [
      'Maintenance régulière : forfaits entretien pour PC fixes et portables',
      'Nettoyage logiciel et matériel, mise à jour système et drivers',
      'Préparation PC gaming ou travail spécifique : configuration standard, sans overclocking (non pris en charge)',
      'Formation et assistance utilisateur : initiation Windows et logiciels bureautiques (Word, Excel…)',
      'Conseils pratiques pour entretien et sauvegarde',
    ],
  },
  {
    id: 'installation-reseau',
    title: 'Installation réseau',
    image: '/images/services/network-setup.avif',
    description:
      "On s'occupe de la mise en service de votre réseau local : tout est configuré pour que les équipements et, le cas échéant, les objets connectés fonctionnent correctement. La prestation se limite à la configuration (box, extensions éventuelles, applications) — pas de travaux d'électricité.",
    items: [
      'Mise en place et configuration de la box (opérateur), vérification du fonctionnement, connexion des équipements (PC, imprimante, etc.) en Wi-Fi ou Ethernet',
      'Installation et configuration de CPL ou d’extenseurs Wi-Fi (relais) pour étendre le réseau et connecter des appareils en Ethernet à distance',
      "Installation et connexion d'objets connectés (Google Home, prises, ampoules, etc.) via l'application dédiée — configuration uniquement",
      'Aide au partage d’imprimante ou de dossiers sur le réseau local (bureau ou domicile)',
    ],
  },
  {
    id: 'logiciels-specifiques',
    title: 'Création de sites web',
    image: '/images/services/website-creation.avif',
    description:
      "Sites vitrines (présentation sans base de données) ou sites dynamiques (avec base de données : formulaires enregistrés, avis clients, contenu géré). Option possible : espace membre avec authentification et profil (email, téléphone). Pas de vente en ligne ni de gestion de paiement.\n\nChaque site est conçu sur mesure selon votre identité visuelle et vos besoins, avec une attention à la lisibilité, à la navigation et à l'expérience utilisateur. Livraison clé en main avec conformité RGPD et tests pratiques des parcours.",
    items: [
      'Sites vitrines : une page (One-page) ou plusieurs pages (multi-pages), formulaire de contact, responsive et RGPD',
      'Sites dynamiques : base de données pour enregistrer des données (avis, demandes, contenu modifiable), sans e-commerce',
      'Option espace membre : inscription et connexion utilisateur, profil (email, téléphone), données protégées (RGPD)',
      'Analyse de vos besoins, structure et design sur mesure, intégration des contenus',
      'Conception responsive (desktop, tablette, smartphone), tests des parcours et formulaires',
      'Conformité RGPD ; hébergement et nom de domaine selon le devis',
    ],
    notePoints: [
      "Pas de plateforme de vente ni de gestion de paiement en ligne (données bancaires hors périmètre).",
      "L'hébergement et le nom de domaine sont précisés au devis (inclus ou à votre charge).",
      'Un devis personnalisé est fourni avant toute réalisation.',
    ],
  },
];
