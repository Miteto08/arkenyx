import styles from './FAQSection.module.scss';

const FAQ_ITEMS = [
  {
    question: 'Combien de temps dure une réparation type ?',
    answer: 'Cela dépend du type de panne et des pièces à commander. Un diagnostic et une estimation des délais vous sont proposés avant toute intervention. Certaines réparations peuvent être faites le jour même, d’autres nécessitent une commande de pièces.',
  },
  {
    question: 'Les pièces sont-elles garanties ?',
    answer: 'Les pièces neuves que nous installons sont garanties selon les conditions du fournisseur (généralement 2 ans pour le matériel neuf). Nous vous indiquons les garanties applicables pour chaque prestation.',
  },
  {
    question: 'Que faire avant de nous confier mon PC ?',
    answer: 'Sauvegardez vos données importantes si possible et notez vos identifiants Windows et logiciels. Nous pouvons vous accompagner pour une sauvegarde avant intervention si nécessaire.',
  },
  {
    question: 'Quels types de matériel prenez-vous en charge ?',
    answer: 'Nous intervenons sur PC fixes, portables, périphériques, NAS et certains appareils connectés.',
  },
  {
    question: 'Faut-il prévoir un rendez-vous sur place ou travail à distance ?',
    answer: 'Selon la prestation, nous pouvons intervenir sur place ou guider à distance certaines opérations.',
  },
  {
    question: 'Proposez-vous un suivi après l’intervention ?',
    answer: 'Oui, nous accompagnons vos équipements sur la durée et pouvons vous conseiller pour éviter les pannes ou pertes de données.',
  },
  {
    question: 'Que faire si mon PC ne démarre pas du tout ?',
    answer: 'Nous réalisons un diagnostic pour identifier le problème et vous proposons la meilleure solution avant toute réparation.',
  },
  {
    question: 'Acceptez-vous les interventions urgentes ?',
    answer: 'Selon les disponibilités et le type de panne, certaines interventions peuvent être réalisées rapidement. Un diagnostic permet de confirmer les délais.',
  },
  {
    question: 'Comment sont calculés les tarifs ?',
    answer: 'Nos tarifs sont affichés clairement pour chaque prestation, avec devis gratuit avant intervention. Aucun coût caché.',
  },
];

export default function FAQSection() {
  return (
    <section className={styles.section} id="faq" aria-labelledby="faq-title">
      <div className="container">
        <h2 id="faq-title" className={styles.heading}>Questions fréquentes</h2>
        <p className={styles.intro}>
          Quelques réponses pour vous aider. Une autre question ? N’hésitez pas à nous contacter.
        </p>
        <div className={styles.list}>
          {FAQ_ITEMS.map((item, i) => (
            <details key={i} className={styles.item}>
              <summary className={styles.question}>{item.question}</summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
