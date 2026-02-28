const quoteModal = {
  title: 'Demander un devis',
  closeAria: 'Fermer',
  intro: "Cochez une ou plusieurs prestations pour lesquelles vous souhaitez recevoir un devis. Un e-mail sera pré-rempli avec votre sélection.",
  cancel: 'Annuler',
  submit: 'Envoyer ma demande',
  submitWithCount: 'Envoyer ma demande ({count})',
  emailSubject: 'Demande de devis pour : {labels}',
  emailBody: `Bonjour,

Je souhaite un devis pour les prestations suivantes :

{items}

Cordialement`,
};

export default quoteModal;
