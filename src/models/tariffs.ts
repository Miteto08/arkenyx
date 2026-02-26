export interface TariffItem {
  label: string;
  price: string;
  details?: string[];
  itemNote?: string;
  recommended?: boolean;
}

export interface TariffGroup {
  id: string;
  title: string;
  intro?: string;
  items: TariffItem[];
  note?: string;
}

export const tariffIntro = [
  'Devis gratuit avant intervention',
  'Aucune réparation sans accord',
  'Explications détaillées',
  'Transparence totale',
];

export const tariffGroups: TariffGroup[] = [
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
    title: 'Montage',
    items: [
      { label: 'Montage seul', price: '99€' },
      { label: 'Installation Windows seule', price: '69€' },
      { label: 'Pack PC prêt à l\'emploi', price: '149€', details: ['Montage complet', 'Windows', 'Drivers', 'Configuration', 'Tests stabilité'] },
    ],
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
    note:
      "La configuration de votre box, du Wi-Fi et de votre PC principal est incluse dans notre forfait réseau. Chaque appareil supplémentaire connecté peut être ajouté pour un petit tarif, afin de rester adapté à vos besoins et à votre budget.",
  },
  {
    id: 'forfaits',
    title: 'Forfaits',
    items: [
      { label: 'Pack Protection & Sauvegarde', price: '99€', details: ['Sauvegarde complète', 'Vérification disque', 'Solution sauvegarde automatique', 'Conseils personnalisés'] },
      { label: 'Pack Gaming prêt à jouer', price: '159€', details: ['Montage', 'Windows', 'Drivers', 'Optimisation performances', 'Tests stabilité'] },
    ],
  },
];
