import { get } from '@/lib/i18n';

const FAQ_CATEGORIES = get<readonly { id: string; label: string }[]>('faq.categories');
export { FAQ_CATEGORIES };

export type FAQCategoryId = (typeof FAQ_CATEGORIES)[number]['id'];

export interface FAQItem {
  categoryId: FAQCategoryId;
  question: string;
  answer: string;
}

export const FAQ_ITEMS = get<FAQItem[]>('faq.items');
