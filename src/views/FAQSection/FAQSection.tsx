import styles from './FAQSection.module.scss';

const FAQ_CATEGORIES = [
  { id: 'reparations', label: 'Réparations et délais' },
  { id: 'garanties', label: 'Garanties' },
  { id: 'avant-intervention', label: 'Avant l’intervention' },
  { id: 'prestations', label: 'Prestations et matériel' },
  { id: 'deplacement', label: 'Déplacement et zone' },
  { id: 'contact', label: 'Contact et rendez-vous' },
  { id: 'suivi', label: 'Suivi après intervention' },
  { id: 'depannage', label: 'Dépannage et urgences' },
  { id: 'tarifs', label: 'Tarifs et devis' },
  { id: 'paiement', label: 'Paiement et facturation' },
  { id: 'donnees', label: 'Données et confidentialité' },
] as const;

type CategoryId = (typeof FAQ_CATEGORIES)[number]['id'];

const FAQ_ITEMS: Array<{ categoryId: CategoryId; question: string; answer: string }> = [
  { categoryId: 'reparations', question: 'Combien de temps dure une réparation type ?', answer: 'La durée d’une réparation varie selon la nature de la panne et la disponibilité des pièces (notamment en cas de commande). Un diagnostic et une estimation des délais sont communiqués au client avant toute intervention. Certaines prestations peuvent être réalisées le jour même ; d’autres sont subordonnées à la réception des pièces. Les délais indiqués restent donnés à titre indicatif. La facturation est établie au forfait ou au tarif convenu dans le devis ; aucun taux horaire n’est appliqué.' },
  { categoryId: 'garanties', question: 'Les pièces sont-elles garanties ?', answer: 'Les pièces neuves installées bénéficient exclusivement des garanties légales et/ou commerciales du fabricant ou du fournisseur. Aucune garantie commerciale supplémentaire n’est accordée par ARKENYX sur les pièces. Les conditions et durées de garantie applicables vous sont précisées lors de l’établissement du devis ou de la commande.' },
  { categoryId: 'garanties', question: 'Proposez-vous une garantie sur l’intervention ?', answer: 'L’intervention ne comprend pas de garanties commerciales sur la main d’œuvre. Les pièces installées ne bénéficient que de la garantie constructeur. Toute nouvelle panne indépendante de l’intervention fera l’objet d’un nouveau diagnostic. L’obligation de moyens et la responsabilité civile professionnelle restent applicables.' },
  { categoryId: 'avant-intervention', question: 'Que devez-vous faire avant de nous confier votre PC ?', answer: 'Il est recommandé de sauvegarder vos données importantes et de conserver une trace de vos identifiants (système d’exploitation et logiciels). La sauvegarde des données relève de la responsabilité du client avant toute prise en charge. Un accompagnement pour la réalisation d’une sauvegarde peut être proposé à titre facultatif ; sa mise en œuvre ne constitue pas une obligation contractuelle d’ARKENYX.' },
  { categoryId: 'prestations', question: 'Quels types de matériel prenez-vous en charge ?', answer: 'Nous intervenons principalement sur PC fixes, PC portables et périphériques informatiques. Certaines interventions peuvent être réalisées sur des appareils connectés, sous réserve de faisabilité technique et après validation lors du diagnostic. Nous n’intervenons pas sur les solutions de stockage de type NAS en tant que telles, en dehors d’éventuelles opérations de récupération de données sur les supports de stockage lorsqu’elles sont techniquement possibles.' },
  { categoryId: 'prestations', question: 'Intervenez-vous pour les particuliers et les professionnels ?', answer: 'Oui. Les prestations s’adressent aux particuliers comme aux professionnels. Elles restent toutefois à échelle humaine et adaptées à une structure d’indépendant : les projets d’envergure (par exemple infrastructure réseau complète, parc de nombreux postes, déploiements massifs) ne relèvent pas de notre périmètre et sont à confier à des structures adaptées.' },
  { categoryId: 'deplacement', question: 'Intervention à domicile ou prise en charge du matériel ?', answer: 'Une intervention à domicile peut être prévue lorsque la prestation le justifie (PC fixe, montage sur site, configuration, etc.). Les prestations de récupération de données sont réalisées sur nos locaux : le support de stockage concerné (disque interne ou externe) est confié par le client ou récupéré sur place, puis traité en atelier. Aucune prise en charge à distance (guidage ou intervention à distance) n’est proposée. Les modalités précises (déplacement, remise du matériel) sont fixées lors de l’établissement du devis ou de la commande.' },
  { categoryId: 'deplacement', question: 'Intervenez-vous partout, dans quelle zone ?', answer: "Non. Les interventions se font en Mayenne et, dans une moindre mesure, sur le secteur est d'Ile-et-Vilaine. La zone exacte et les conditions de déplacement peuvent être précisées à la demande ou lors du devis." },
  { categoryId: 'deplacement', question: 'Le déplacement est-il facturé ?', answer: 'Oui. Le déplacement est gratuit dans un rayon de 10 km autour d’Ahuillé. Au-delà, il est facturé 0,50 € par kilomètre. Le détail et le montant sont à définir et à rappeler sur le devis.' },
  { categoryId: 'contact', question: 'Comment vous joindre ou prendre rendez-vous ?', answer: 'Plusieurs moyens : par e-mail (contact@arkenyx.fr), par téléphone (06 45 65 84 48), ou via le site (bouton « Demander un devis » ou formulaire en bas de page). La prise de rendez-vous et les modalités sont convenues avec vous après votre demande.' },
  { categoryId: 'contact', question: 'Sous quel délai recevrai-je une réponse ou un devis ?', answer: 'ARKENYX s’engage à répondre à toute demande dans les meilleurs délais possibles. Aucun délai contractuel n’est garanti : le délai de réponse ou d’établissement du devis varie selon l’activité et les demandes en cours, et reste à titre indicatif.' },
  { categoryId: 'suivi', question: 'Proposez-vous un suivi après l’intervention ?', answer: 'Un suivi ou un accompagnement sur la durée peut être proposé sous forme de prestations contractuelles payantes (devis dédié). Par ailleurs, en cas de dysfonctionnement signalé par le client après une intervention et susceptible d’y être lié, un examen est réalisé pour en identifier la cause. Si la cause est imputable à l’intervention réalisée par ARKENYX, la mise en conformité est prise en charge par ARKENYX. Si la cause est imputable au client, à un tiers ou à un fait extérieur, le diagnostic et toute intervention complémentaire sont facturés selon le tarif en vigueur.' },
  { categoryId: 'depannage', question: 'Que faire si mon PC ne démarre plus du tout ?', answer: 'Un PC qui ne démarre plus peut avoir plusieurs causes (alimentation, matériel, logiciel). Avant toute intervention de notre part, il est recommandé d’éviter les manipulations hasardeuses et, si possible, de noter les symptômes (message affiché, voyants, bruits anormaux). La prise en charge consiste en un diagnostic pour identifier l’origine du problème. Une proposition de solution et un devis vous sont ensuite communiqués. Aucune réparation ou intervention engageante n’est réalisée sans votre accord préalable et sans acceptation du devis.' },
  { categoryId: 'depannage', question: 'Acceptez-vous les interventions urgentes ?', answer: 'Des interventions urgentes peuvent être envisagées sous réserve de nos disponibilités, de la nature de la panne et de la localisation de l’intervention. Elles sont réalisées uniquement pendant les horaires d’ouverture habituels, sauf accord spécifique, et ne constituent en aucun cas une obligation pour ARKENYX. Toute demande est d’abord évaluée (type de problème, distance, faisabilité) ; un diagnostic et un devis précisant les délais et, le cas échéant, toute majoration liée au caractère urgent de la demande sont communiqués au client pour acceptation préalable.' },
  { categoryId: 'tarifs', question: 'Comment sont calculés les tarifs ?', answer: 'Les tarifs sont affichés clairement pour chaque prestation. Un devis gratuit est établi avant toute intervention ; aucun coût caché n’est pratiqué. Certaines prestations (création de site, récupération de données, etc.) font l’objet de tarifs variables selon les circonstances — volume de données, difficulté technique, complexité du projet — détaillés et chiffrés dans le devis. Les tarifs d’ARKENYX sont alignés sur les pratiques du marché et s’inscrivent dans une démarche de proximité et de transparence ; le détail et le montant définitif sont toujours fixés dans le devis accepté par le client.' },
  { categoryId: 'tarifs', question: 'Le devis est-il gratuit et combien de temps reste-t-il valable ?', answer: 'L’établissement du devis est gratuit. La durée de validité de l’offre figure parmi les mentions portées sur chaque devis et lie ARKENYX pendant ce délai aux tarifs et conditions indiqués. À l’expiration de cette durée, l’offre devient caduque ; toute nouvelle demande fera l’objet d’un nouveau devis. Une durée de validité de 30 jours est appliquée sauf mention contraire sur le document.' },
  { categoryId: 'tarifs', question: 'Les tarifs sont-ils TTC ou HT ?', answer: 'ARKENYX est en régime micro-entreprise et relève de la franchise en base de TVA (article 293 B du CGI). Les tarifs indiqués sont donc hors taxes : la TVA n’est pas applicable et ne peut être facturée. En cas de dépassement des seuils de chiffre d’affaires prévus par la réglementation (pour les prestations de services : 37 500 € l’année précédente / 41 250 € en cours d’année), ARKENYX serait soumis à la TVA et les tarifs seraient alors communiqués en conséquence (HT ou TTC selon le cas).' },
  { categoryId: 'paiement', question: 'Quels moyens de paiement acceptez-vous ?', answer: 'Les règlements sont acceptés par carte bancaire, virement et espèces. Les paiements par chèque ne sont pas acceptés. Les modalités de paiement (acompte, solde, délais) sont précisées sur le devis ou la facture.' },
  { categoryId: 'paiement', question: 'Fournissez-vous une facture ?', answer: 'Oui. Une facture est établie après chaque prestation. Elle comporte le détail des prestations réalisées, les éventuelles majorations (déplacement, etc.) et les mentions légales obligatoires, notamment la mention de franchise de TVA (TVA non applicable, article 293 B du CGI) lorsque ARKENYX n’est pas assujetti à la TVA.' },
  { categoryId: 'donnees', question: 'Que deviennent mes données pendant l’intervention ?', answer: 'L’accès aux données est strictement limité à ce qui est nécessaire à la réalisation de la prestation. Aucune copie ni conservation des données n’est effectuée sans accord préalable du client. Les données sont traitées dans le respect du secret professionnel et des obligations applicables en matière de protection des données personnelles (RGPD). Aucune utilisation ni divulgation à des tiers n’est pratiquée en dehors du cadre de l’intervention.' },
];

function getItemsByCategory() {
  const map = new Map<CategoryId, typeof FAQ_ITEMS>();
  for (const item of FAQ_ITEMS) {
    const list = map.get(item.categoryId) ?? [];
    list.push(item);
    map.set(item.categoryId, list);
  }
  return map;
}

function FaqItem({ item }: { item: (typeof FAQ_ITEMS)[0] }) {
  return (
    <details className={styles.item}>
      <summary className={styles.question}>{item.question}</summary>
      <p className={styles.answer}>{item.answer}</p>
    </details>
  );
}

export default function FAQSection() {
  const itemsByCategory = getItemsByCategory();

  return (
    <section className={styles.section} id="faq" aria-labelledby="faq-title">
      <div className={styles.faqWrap}>
        <h2 id="faq-title" className={styles.heading}>Questions fréquentes</h2>
        <p className={styles.intro}>
          Quelques réponses pour vous aider. Une autre question ? N’hésitez pas à nous contacter.
        </p>
        <div className={styles.categoryList}>
          {FAQ_CATEGORIES.map((cat) => {
            const items = itemsByCategory.get(cat.id) ?? [];
            if (items.length === 0) return null;
            return (
              <details key={cat.id} className={styles.category}>
                <summary className={styles.categoryTitle}>{cat.label}</summary>
                <div className={styles.categoryContent}>
                  <div className={styles.questionsGrid}>
                    {items.map((item, i) => (
                      <FaqItem key={`${cat.id}-${i}`} item={item} />
                    ))}
                  </div>
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
