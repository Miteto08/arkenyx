import type { Service } from './types';

export const services: Service[] = [
  {
    id: 'nettoyage',
    title: 'Nettoyage matériel et logiciel',
    description:
      'Votre PC chauffe, rame ou s’encrasse ? Nous nettoyons l’intérieur (poussière, ventilateurs) et le logiciel (virus, fichiers inutiles) pour qu’il retrouve de la fluidité.',
  },
  {
    id: 'demontage-remontage',
    title: 'Démontage et remontage PC',
    description:
      'Réparation, upgrade ou simple révision : nous démontons et remontons votre machine avec soin, en expliquant les étapes si vous souhaitez comprendre.',
  },
  {
    id: 'recuperation',
    title: 'Récupération de données',
    description:
      'Disque endommagé, fichiers supprimés par erreur ou ordinateur qui ne démarre plus ? Nous tentons de récupérer vos données avant qu’il ne soit trop tard.',
  },
  {
    id: 'conseil',
    title: 'Conseil et accompagnement',
    description:
      'Vous ne savez pas quel matériel choisir ou comment entretenir votre PC ? Nous vous conseillons en fonction de vos besoins et de votre usage.',
  },
];
