import type { Metadata } from 'next';
import Layout from '@/views/Layout/Layout';
import LegalLayout from '@/views/LegalLayout/LegalLayout';

export const metadata: Metadata = {
  title: 'Politique de confidentialité – Arkenyx',
  description: 'Politique de confidentialité et protection des données.',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <Layout>
      <LegalLayout title="Politique de confidentialité">
        <p>
          Cette page décrit comment sont traitées les données personnelles
          collectées via le site arkenyx.fr, dans le respect du RGPD.
        </p>

        <h2>Responsable du traitement</h2>
        <p>
          Lechevalier Julien – contact : contact@arkenyx.fr ou
          06.45.65.84.48.
        </p>

        <h2>Données collectées</h2>
        <p>
          Lorsque vous nous contactez via le site (lien « Envoyer un message »
          ou bouton « Demander un devis »), l&#39;ouverture de votre messagerie
          nous permet de recevoir votre adresse e-mail et le contenu de votre
          message (et, pour les demandes de devis, les prestations
          sélectionnées). Aucune donnée n&#39;est enregistrée sur un serveur du
          site : les échanges nous parviennent par e-mail.
        </p>

        <h2>Finalité et base légale</h2>
        <p>
          Ces données sont utilisées uniquement pour répondre à vos demandes
          (devis, questions, projets). La base légale est votre consentement
          implicite (envoi du message) ou l&#39;exécution de mesures précontractuelles.
        </p>

        <h2>Données lors des interventions</h2>
        <p>
          Dans le cadre d&#39;une prestation, l&#39;accès aux données présentes
          sur votre équipement est strictement limité à ce qui est nécessaire
          à la réalisation de la prestation. Aucune copie ni conservation de
          vos données n&#39;est effectuée sans votre accord préalable. Les
          données sont traitées dans le respect du secret professionnel et du
          RGPD.
        </p>

        <h2>Durée de conservation</h2>
        <p>
          Les e-mails et coordonnées liés à une demande sont conservés le temps
          nécessaire à la relation commerciale, puis supprimés ou archivés selon
          les obligations légales (comptabilité, etc.).
        </p>

        <h2>Vos droits</h2>
        <p>Vous disposez des droits suivants :</p>
        <ul>
          <li>Accès à vos données</li>
          <li>Rectification</li>
          <li>Effacement</li>
          <li>Limitation du traitement</li>
          <li>Opposition</li>
          <li>Portabilité (quand applicable)</li>
        </ul>
        <p>
          Pour les exercer, contactez-nous à contact@arkenyx.fr. Vous pouvez
          également introduire une réclamation auprès de la CNIL (cnil.fr).
        </p>

        <h2>Cookies et stockage local</h2>
        <p>
          Ce site n&#39;utilise pas de cookies analytics ou publicitaires. Un
          stockage local (navigateur) peut être utilisé pour mémoriser votre
          préférence d&#39;affichage (thème clair ou sombre). Aucune donnée
          n&#39;est cédée à des tiers à des fins marketing.
        </p>
      </LegalLayout>
    </Layout>
  );
}
