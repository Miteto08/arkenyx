import styles from './FAQSection.module.scss';
import {
  FAQ_CATEGORIES,
  FAQ_ITEMS,
  type FAQCategoryId,
  type FAQItem,
} from '@/models/faq';

function getItemsByCategory() {
  const map = new Map<FAQCategoryId, FAQItem[]>();
  for (const item of FAQ_ITEMS) {
    const list = map.get(item.categoryId) ?? [];
    list.push(item);
    map.set(item.categoryId, list);
  }
  return map;
}

function FaqItem({ item }: { item: FAQItem }) {
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
          Quelques réponses pour vous aider. Une autre question ? N&#39;hésitez pas à nous contacter.
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
                  <div className={styles.questionsGridTablet}>
                    {[0, 1].map((col) => (
                      <div key={col} className={styles.questionsColumn}>
                        {items.map((item, i) => (i % 2 === col ? <FaqItem key={`${cat.id}-${i}`} item={item} /> : null))}
                      </div>
                    ))}
                  </div>
                  <div className={styles.questionsGridDesktop}>
                    {[0, 1, 2].map((col) => (
                      <div key={col} className={styles.questionsColumn}>
                        {items.map((item, i) => (i % 3 === col ? <FaqItem key={`${cat.id}-${i}`} item={item} /> : null))}
                      </div>
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
