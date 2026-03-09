const reviewModal = {
  title: 'Laisser un avis',
  closeAria: 'Fermer',
  intro:
    'Votre avis nous intéresse. Notez votre expérience et précisez les prestations concernées.',
  starsLabel: 'Note (1 à 5 étoiles)',
  servicesLabel: 'Prestations réalisées (choisir au moins une)',
  servicesMaxHint: 'Maximum 5 prestations.',
  commentLabel: 'Votre avis (min. 20 caractères)',
  commentPlaceholder: 'Quelques mots sur votre expérience...',
  charCount: '{current}/{max}',
  cancel: 'Annuler',
  submit: 'Envoyer mon avis',
  emailSubject: 'Avis client Arkenyx',
  emailBodyTemplate: 'Note : {stars}/5\nPrestations : {services}\n\nAvis :\n{comment}',
};

export default reviewModal;
