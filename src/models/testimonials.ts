export interface Testimonial {
  stars: number;
  services: string[];
  text: string;
}

export const testimonialsList: Testimonial[] = [
  {
    stars: 5,
    services: ['Dépannage & Réparation', 'Optimisation Windows'],
    text: 'Intervention rapide et très pro. Mon PC tourne à nouveau nickel. Je recommande.',
  },
  {
    stars: 4,
    services: ['Récupération logique', 'Conseils composants & upgrade', 'Diagnostic avant achat'],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam faucibus ligula congue sollicitudin. Vestibulum ac condimentum elit. Cras sit amet orci diam. Etiam sagittis est erat, at pulvinar ante faucibus et. Quisque facilisis.',
  },
  {
    stars: 5,
    services: ['Récupération logique', 'Diagnostic avant achat'],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dolor tellus, blandit et erat in, ultrices laoreet dolor. Donec et ipsum nec purus volutpat tempus ac non metus. Duis dapibus orci nec justo tristique sodales. Phasellus vulputate.',
  },
  {
    stars: 3,
    services: ['Dépannage & Réparation'],
    text: 'Prestation correcte, délai un peu long mais résultat au rendez-vous.',
  },
  {
    stars: 5,
    services: ['Optimisation Windows', 'Conseils composants & upgrade'],
    text: 'Très satisfait des conseils et de l’optimisation. Mon ordinateur est beaucoup plus réactif. Je reviendrai pour d’autres prestations.',
  },
];
