/**
 * Locale française : agrégat de tous les textes du site.
 * Clés utilisées dans l'app via get('section.key') ou get('section.sub.key').
 * Pour une autre langue, créer locales/en/ et basculer currentLocale dans lib/i18n.ts.
 */
import common from './common';
import site from './site';
import home from './home';
import legalLayout from './legalLayout';
import notFound from './notFound';
import quoteModal from './quoteModal';
import legal from './legal';
import faq from './faq';
import { services } from '@/models/services';
import { priceGroups } from '@/models/prices';

const fr = {
  common,
  site,
  home,
  legalLayout,
  notFound,
  quoteModal,
  legal,
  faq,
  services,
  priceGroups,
};

export default fr;
