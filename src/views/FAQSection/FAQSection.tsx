import styles from './FAQSection.module.scss';

const FAQ_ITEMS = [
  {
    question: 'Combien de temps dure une réparation type ?',
    answer: 'La durée d’une réparation varie selon la nature de la panne et la disponibilité des pièces (notamment en cas de commande). Un diagnostic et une estimation des délais sont communiqués au client avant toute intervention. Certaines prestations peuvent être réalisées le jour même ; d’autres sont subordonnées à la réception des pièces. Les délais indiqués restent donnés à titre indicatif. La facturation est établie au forfait ou au tarif convenu dans le devis ; aucun taux horaire n’est appliqué.',
  },
  {
    question: 'Les pièces sont-elles garanties ?',
    answer: 'Les pièces neuves installées bénéficient exclusivement des garanties légales et/ou commerciales du fabricant ou du fournisseur. Aucune garantie commerciale supplémentaire n’est accordée par ARKENYX sur les pièces. Les conditions et durées de garantie applicables vous sont précisées lors de l’établissement du devis ou de la commande.',
  },
  {
    question: 'Que devez-vous faire avant de nous confier votre PC ?',
    answer: 'Il est recommandé de sauvegarder vos données importantes et de conserver une trace de vos identifiants (système d’exploitation et logiciels). La sauvegarde des données relève de la responsabilité du client avant toute prise en charge. Un accompagnement pour la réalisation d’une sauvegarde peut être proposé à titre facultatif ; sa mise en œuvre ne constitue pas une obligation contractuelle d’ARKENYX.',
  },
  {
    question: 'Quels types de matériel prenez-vous en charge ?',
    answer: 'Nous intervenons principalement sur PC fixes, PC portables et périphériques informatiques. Certaines interventions peuvent être réalisées sur des appareils connectés, sous réserve de faisabilité technique et après validation lors du diagnostic. Nous n’intervenons pas sur les solutions de stockage de type NAS en tant que telles, en dehors d’éventuelles opérations de récupération de données sur les supports de stockage lorsqu’elles sont techniquement possibles.',
  },
  {
    question: 'Intervention à domicile ou prise en charge du matériel ?',
    answer: 'Une intervention à domicile peut être prévue lorsque la prestation le justifie (PC fixe, montage sur site, configuration, etc.). Les prestations de récupération de données sont réalisées sur nos locaux : le support de stockage concerné (disque interne ou externe) est confié par le client ou récupéré sur place, puis traité en atelier. Aucune prise en charge à distance (guidage ou intervention à distance) n’est proposée. Les modalités précises (déplacement, remise du matériel) sont fixées lors de l’établissement du devis ou de la commande.',
  },
  {
    question: 'Proposez-vous un suivi après l’intervention ?',
    answer: 'Un suivi ou un accompagnement sur la durée peut être proposé sous forme de prestations contractuelles payantes (devis dédié). Par ailleurs, en cas de dysfonctionnement signalé par le client après une intervention et susceptible d’y être lié, un examen est réalisé pour en identifier la cause. Si la cause est imputable à l’intervention réalisée par ARKENYX, la mise en conformité est prise en charge par ARKENYX. Si la cause est imputable au client, à un tiers ou à un fait extérieur, le diagnostic et toute intervention complémentaire sont facturés selon le tarif en vigueur.',
  },
  {
    question: 'Que faire si mon PC ne démarre plus du tout ?',
    answer: 'Un PC qui ne démarre plus peut avoir plusieurs causes (alimentation, matériel, logiciel). Avant toute intervention de notre part, il est recommandé d’éviter les manipulations hasardeuses et, si possible, de noter les symptômes (message affiché, voyants, bruits anormaux). La prise en charge consiste en un diagnostic pour identifier l’origine du problème. Une proposition de solution et un devis vous sont ensuite communiqués. Aucune réparation ou intervention engageante n’est réalisée sans votre accord préalable et sans acceptation du devis.',
  },
  {
    question: 'Acceptez-vous les interventions urgentes ?',
    answer: 'Des interventions urgentes peuvent être envisagées sous réserve de nos disponibilités, de la nature de la panne et de la localisation de l’intervention. Elles sont réalisées uniquement pendant les horaires d’ouverture habituels, sauf accord spécifique, et ne constituent en aucun cas une obligation pour ARKENYX. Toute demande est d’abord évaluée (type de problème, distance, faisabilité) ; un diagnostic et un devis précisant les délais et, le cas échéant, toute majoration liée au caractère urgent de la demande sont communiqués au client pour acceptation préalable.',
  },
  {
    question: 'Comment sont calculés les tarifs ?',
    answer: 'Les tarifs sont affichés clairement pour chaque prestation. Un devis gratuit est établi avant toute intervention ; aucun coût caché n’est pratiqué. Certaines prestations (création de site, récupération de données, etc.) font l’objet de tarifs variables selon les circonstances — volume de données, difficulté technique, complexité du projet — détaillés et chiffrés dans le devis. Les tarifs d’ARKENYX sont alignés sur les pratiques du marché et s’inscrivent dans une démarche de proximité et de transparence ; le détail et le montant définitif sont toujours fixés dans le devis accepté par le client.',
  },
];

const COLS = 3;
const ROWS = Math.ceil(FAQ_ITEMS.length / COLS);

function FaqItem({ item }: { item: (typeof FAQ_ITEMS)[0] }) {
  return (
    <details className={styles.item}>
      <summary className={styles.question}>{item.question}</summary>
      <p className={styles.answer}>{item.answer}</p>
    </details>
  );
}

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
            <FaqItem key={i} item={item} />
          ))}
        </div>
        <div className={styles.listColumns}>
          {Array.from({ length: COLS }, (_, col) => (
            <div key={col} className={styles.column}>
              {Array.from({ length: ROWS }, (_, row) => {
                const i = row * COLS + col;
                if (i >= FAQ_ITEMS.length) return null;
                return <FaqItem key={i} item={FAQ_ITEMS[i]} />;
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
