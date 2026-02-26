export interface PriceItem {
  label: string;
  price: string;
  details?: string[];
  itemNote?: string;
  recommended?: boolean;
  separatorBefore?: boolean;
}

export interface PriceGroup {
  id: string;
  title: string;
  intro?: string;
  items: PriceItem[];
  note?: string | string[];
}

export const priceIntro = [
  'Devis gratuit avant intervention',
  'Aucune réparation sans accord',
  'Explications détaillées',
  'Transparence totale',
];

export const priceGroups: PriceGroup[] = [
  {
    id: 'recuperation',
    title: 'Récupération de données',
    intro:
      "Nous savons à quel point vos fichiers sont importants. Qu'il s'agisse de documents personnels, de souvenirs ou de données professionnelles, nous évaluons chaque situation avec rigueur pour maximiser les chances de récupération.",
    items: [
      {
        label: 'Récupération logique',
        price: 'À partir de 69€',
        details: ['Fichiers supprimés', 'Corbeille vidée', 'Formatage simple', 'Support accessible'],
      },
      {
        label: 'Récupération système (PC non bootable)',
        price: 'À partir de 99€',
        details: ['Windows bloqué ou corrompu', 'Accès au disque démonté si nécessaire', 'Extraction des données utilisateur'],
      },
      {
        label: 'Récupération complexe avec tri approfondi',
        price: 'À partir de 129€',
        details: ['Données non organisées', 'Volume important', 'Recherche manuelle approfondie'],
      },
    ],
    note:
      'Les supports physiquement endommagés (chocs, disques HS mécaniquement) nécessitent un laboratoire spécialisé disposant de moyens spécifiques. Cette prestation ne fait pas partie de notre offre standard.',
  },
  {
    id: 'conseil',
    title: 'Conseil & Accompagnement',
    intro:
      "Nous vous aidons à y voir clair avant tout achat, upgrade ou optimisation : choix de composants adaptés, compatibilité matérielle et logicielle, et recommandations pour tirer le meilleur parti de votre PC.",
    items: [
      {
        label: 'Diagnostic avant achat',
        price: '39€',
        details: [
          'Analyse de vos besoins et vérification de l\'existant',
          'Identification des points forts et faibles',
          'Conseils de base pour choisir ou compléter votre matériel',
        ],
      },
      {
        label: 'Conseils composants & upgrade',
        price: '59€',
        details: [
          'Recommandations sur composants adaptés pour upgrade ou nouvel achat',
          'Vérification de compatibilité avec votre matériel et logiciels existants',
          'Optimisation du rapport performance / budget',
        ],
      },
      {
        label: 'Audit & optimisation stratégique',
        price: '69€',
        details: [
          'Diagnostic complet de votre PC et de l\'interaction entre ses composants',
          'Conseils concrets pour améliorer performance et fiabilité globale',
          'Plan d\'optimisation simple et priorisé : quelles actions réaliser en premier pour le meilleur gain',
        ],
      },
      {
        label: 'Pack Accompagnement complet avant achat / assemblage',
        price: '89€',
        separatorBefore: true,
        recommended: true,
        details: [
          'Pack complet combinant diagnostic avancé, conseils composants et compatibilité',
          'Simulation de configuration et recommandations avant achat ou assemblage',
          'Feedback détaillé et accompagnement jusqu\'à la mise en œuvre finale',
        ],
      },
    ],
    note:
      "Les tarifs concernent uniquement la consultation et le conseil. Ils ne comprennent aucune intervention matérielle ou logicielle. Un devis personnalisé peut être fourni pour des prestations mixtes. Le diagnostic de 39 € est inclus si vous validez une intervention complète.",
  },
  {
    id: 'depannage',
    title: 'Dépannage & Réparation Informatique',
    intro:
      "Un PC lent, bruyant ou instable n'est pas forcément bon à remplacer. Nous identifions la cause du problème et intervenons de manière claire, transparente et efficace.",
    items: [
      {
        label: 'Diagnostic & Dépannage',
        price: '49€',
        details: [
          'Analyse complète du problème',
          'Vérification matérielle et logicielle',
          'Identification précise de la cause',
          'Explication claire de la solution proposée',
        ],
      },
      {
        label: 'Optimisation Windows Complète',
        price: '59€',
        details: [
          'Nettoyage des fichiers temporaires',
          'Suppression des programmes inutiles',
          'Gestion des programmes au démarrage',
          'Vérification des mises à jour',
          'Amélioration de la réactivité générale',
        ],
      },
      {
        label: 'Nettoyage Interne & Entretien Matériel',
        price: '69€',
        details: [
          'Dépoussiérage complet',
          'Nettoyage des ventilateurs',
          'Vérification du système de refroidissement',
          'Contrôle des températures',
        ],
      },
      {
        label: 'Remplacement de Composants (hors pièce)',
        price: '49€',
        details: [
          'Installation RAM',
          'Remplacement disque dur / SSD',
          'Remplacement ventilateur',
          'Remplacement alimentation',
          'Intervention possible sur PC fixe et portable selon accessibilité',
        ],
      },
      {
        label: 'Remplacement de Pâte Thermique',
        price: '39€',
        details: [
          "Retrait de l'ancienne pâte",
          'Application d\'une pâte thermique haute performance',
          'Optimisation des températures',
        ],
      },
      {
        label: 'Pack "Entretien Performance"',
        price: '89€',
        separatorBefore: true,
        details: [
          'Idéal pour un PC qui chauffe ou devient bruyant.',
          'Nettoyage interne complet',
          'Remplacement de la pâte thermique',
          'Contrôle des températures après intervention',
        ],
      },
      {
        label: 'Pack "Nouvelle Vie" – Recommandé',
        price: '119€',
        recommended: true,
        details: [
          'Diagnostic complet',
          'Nettoyage interne approfondi',
          'Remplacement de la pâte thermique',
          'Optimisation Windows complète',
          'Vérification des performances et stabilité',
        ],
      },
    ],
    note:
      'Le montant du diagnostic (49€) est inclus si vous validez une intervention. Les pièces ou consommables nécessaires ne sont pas inclus dans les tarifs affichés.',
  },
  {
    id: 'montage',
    title: 'Montage & Installation PC',
    intro:
      "Nous assemblons votre machine sur mesure, quelle que soit votre gamme de composants. Que ce soit un PC neuf ou une mise à niveau complète, nous livrons une machine prête à l'emploi.",
    items: [
      {
        label: 'Montage PC seul',
        price: '99€',
        details: [
          'Assemblage et vérification des composants',
          'Vérification des branchements internes',
          'Test de bon fonctionnement matériel',
        ],
        itemNote: "Le prix du matériel n'est pas inclus dans cette prestation.",
      },
      {
        label: 'Installation Windows seule',
        price: '69€',
        details: [
          'Installation du système d\'exploitation Windows',
          'Mise à jour du système',
          'Préparation initiale du PC',
        ],
        itemNote: "Le prix de la licence Windows n'est pas inclus.",
      },
      {
        label: 'Installation des drivers & logiciels de base',
        price: '39€',
        details: [
          'Installation des pilotes indispensables',
          'Installation des logiciels de base (ex : navigateur, utilitaires)',
          'Vérification que tout est opérationnel',
        ],
      },
      {
        label: 'Pack "PC prêt à l\'emploi"',
        price: '149€',
        separatorBefore: true,
        recommended: true,
        details: [
          'Montage complet',
          'Installation Windows',
          'Installation des drivers & logiciels de base',
          'Configuration initiale complète',
          'Tests de performance et de stabilité',
        ],
        itemNote: "Le prix du matériel et des licences logicielles n'est pas inclus.",
      },
    ],
    note:
      "Tous les composants (RAM, GPU, SSD, etc.) doivent être fournis par le client. Le prix du matériel et des licences (Windows, logiciels, etc.) n'est pas inclus dans les tarifs affichés. Un devis complet est proposé avant toute intervention.",
  },
  {
    id: 'forfaits',
    title: 'Forfaits et services optionnels',
    intro:
      'Des prestations complémentaires pour un suivi adapté à vos besoins, avec possibilité de contrat sans engagement.',
    items: [
      {
        label: 'Maintenance régulière',
        price: '59€ / visite',
        details: [
          'Entretien logiciel & matériel, mises à jour système et drivers',
          'Vérification périodique de l\'état général de votre PC',
          'Nettoyage logiciel et matériel',
          'Mises à jour Windows et drivers',
        ],
        itemNote:
          'Recommandation : 1 à 2 interventions par an. Peut être intégré dans un contrat sans engagement. Cette prestation est idéale pour garder votre machine performante sur le long terme.',
      },
      {
        label: 'Nettoyage logiciel & matériel',
        price: '79€ / visite',
        details: [
          'Nettoyage complet avec optimisation et contrôle matériel',
          'Nettoyage des fichiers temporaires',
          'Optimisation du système',
          'Dépoussiérage complet, vérification des ventilateurs et températures',
          'Contrôle du système de refroidissement',
        ],
        itemNote:
          'Recommandation : 1 à 2 interventions par an. Peut être intégré dans un contrat sans engagement. Ce service inclut l\'intérieur du PC et complète la maintenance régulière pour un suivi optimal.',
      },
      {
        label: 'Préparation PC gaming ou travail spécifique',
        price: '89€',
        details: [
          'Configuration standard optimisée',
          'Réglages système pour performance stable',
          'Vérification compatibilité matérielle et logicielle',
          'Configuration standard adaptée au gaming ou aux applications lourdes',
        ],
        itemNote:
          "Note : Overclocking non pris en charge. Ce service est conçu pour que votre PC dédié aux jeux ou au travail intensif soit configuré pour performance maximale sans dépasser les limites de sécurité du matériel. À noter : prestation ponctuelle, réalisée une seule fois. À renouveler uniquement si le matériel change.",
      },
      {
        label: 'Formation & assistance utilisateur',
        price: '39€ / heure',
        details: [
          'Initiation Windows et logiciels bureautiques',
          'Prise en main du système Windows',
          'Utilisation des fonctions de base',
          'Formation sur logiciels comme Word et Excel (fonctions de base uniquement)',
        ],
        itemNote:
          'Cette prestation est destinée à un public débutant ou intermédiaire. Ne comprend pas les fonctions avancées ou spécifiques.',
      },
      {
        label: 'Conseil pratique pour entretien & sauvegarde',
        price: '49€',
        details: [
          'Recommandations personnalisées',
          'Stratégie personnalisée pour maintenir le PC en bon état',
          'Conseils pour éviter les pertes de données et améliorer la sécurité',
          'Mise en place de solutions de sauvegarde fiables',
        ],
        itemNote:
          "Important : La sauvegarde complète des données nécessite un support de stockage fourni par le client (disque dur externe ou solution cloud). Le coût du support n'est pas inclus.",
      },
      {
        label: 'Pack Protection & Sauvegarde',
        price: '99€',
        separatorBefore: true,
        details: [
          'Sauvegarde complète des données (support fourni par le client)',
          'Vérification de l\'état du disque',
          'Mise en place d\'une solution de sauvegarde automatique',
          'Conseils personnalisés',
        ],
        itemNote: 'Ce pack est conçu pour les utilisateurs qui veulent être sereins sur leurs données.',
      },
    ],
    note:
      'Les tarifs sont donnés hors coût du matériel ou support de stockage lorsque celui-ci est nécessaire. Un devis personnalisé peut être fourni pour des interventions mixtes ou complexes.',
  },
  {
    id: 'reseau',
    title: 'Installation & configuration réseau',
    intro:
      "Un réseau simple, stable et fonctionnel. Sans prise de tête.\n\nQue ce soit pour une nouvelle box, un changement d'opérateur ou simplement un Wi-Fi capricieux, on configure votre installation pour que tout fonctionne correctement — ordinateur, imprimante, objets connectés.",
    items: [
      {
        label: 'Installation box + PC principal (fixe ou portable)',
        price: '39€',
        details: ['Configuration box, Wi-Fi et PC principal incluse'],
      },
      {
        label: 'Appareil supplémentaire connecté',
        price: '+10€ / appareil',
        details: ['Imprimante', 'Smartphone / tablette', 'Smart TV', 'Objets connectés'],
      },
      {
        label: "Installation ou configuration d'un répéteur Wi-Fi / CPL",
        price: '49€',
      },
    ],
    note: [
      "La configuration de votre box, du Wi-Fi et de votre PC principal est incluse dans notre forfait réseau. Chaque appareil supplémentaire connecté peut être ajouté pour un petit tarif, afin de rester adapté à vos besoins et à votre budget.",
      "Chaque appareil supplémentaire inclus dans le forfait est configuré et connecté uniquement. L'achat, la réparation ou le remplacement de l'appareil n'est pas compris.",
    ],
  },
  {
    id: 'site-vitrine',
    title: 'Création de site vitrine',
    items: [
      {
        label: 'Site vitrine One-page (simple)',
        price: 'À partir de 800€',
        details: [
          'Site entièrement conçu en 1 page',
          'Design adapté à votre identité visuelle',
          'Mise en forme du contenu (sections services, contact, présentation)',
          'Version responsive (mobile/tablette/desktop)',
          'Formulaire de contact fonctionnel',
          'Mise en conformité RGPD de base',
        ],
        itemNote:
          'Idéal pour les artisans, indépendants et petites entreprises qui veulent une présence professionnelle simple sur Internet.',
      },
      {
        label: 'Site vitrine Multi-pages (standard)',
        price: 'À partir de 1 500€',
        recommended: true,
        details: [
          'Structure sur plusieurs pages (Home, Services, À propos, Contact…)',
          'Design personnalisé responsive',
          'Mise en place de formulaire(s) et de contenu textuel',
          'Référencement de base (SEO on-page)',
          'Intégration graphique cohérente avec votre charte',
        ],
        itemNote:
          'Recommandé pour les TPE/PME souhaitant un site structuré plus complet.',
      },
      {
        label: 'Options complémentaires (ajoutables)',
        price: 'Sur devis',
        details: [
          'Rédaction de contenu (texte, titres, arguments)',
          'Intégration d\'images ou visuels fournis',
          'Hébergement & nom de domaine (configuration)',
          'Maintenance annuelle (mises à jour, sauvegardes)',
          'Intégration Google Analytics ou Search Console',
        ],
        itemNote:
          'Ces options sont sur devis car elles dépendent des besoins spécifiques du projet.',
      },
    ],
    note:
      "Les tarifs ci-dessus sont des tarifs indicatifs de départ, basés sur des pratiques du marché freelance en 2025/2026. Le coût final varie selon la complexité, le design, la rédaction et les fonctionnalités demandées. L'hébergement, le nom de domaine et toute maintenance post-mise en ligne ne sont pas inclus dans ces tarifs de base.",
  },
];
