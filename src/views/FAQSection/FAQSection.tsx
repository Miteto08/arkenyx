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
    answer: 'Sauvegardez vos données importantes sur un support externe si possible. Pensez à noter vos identifiants (Windows, logiciels) si une réinstallation est envisagée. Nous pouvons aussi vous accompagner pour une sauvegarde avant intervention.',
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
