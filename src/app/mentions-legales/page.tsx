import type { Metadata } from 'next';
import Layout from '@/views/Layout/Layout';
import LegalLayout from '@/views/LegalLayout/LegalLayout';

export const metadata: Metadata = {
  title: 'Mentions légales – Arkenyx',
  description: 'Mentions légales du site Arkenyx.',
};

export default function MentionsLegalesPage() {
  return (
    <Layout>
      <LegalLayout title="Mentions légales">
        <p>
          Le site arkenyx.fr est édité par un micro-entrepreneur, dans le cadre
          d&#39;une activité de prestations de services informatiques (dépannage
          et réparation, montage PC, récupération de données, conseil, forfaits,
          mise en place de réseau, création de site web, etc.).
        </p>

        <h2>Éditeur du site</h2>
        <p>
          Lechevalier Julien<br />
          Micro-entreprise – SIRET : [SIRET]
        </p>

        <h2>Contact</h2>
        <p>
          Pour toute demande, vous pouvez nous contacter uniquement par :
        </p>
        <ul>
          <li>E-mail : contact@arkenyx.fr</li>
          <li>Téléphone : 06.45.65.84.48</li>
        </ul>
        <p>
          L&#39;adresse du siège n&#39;est pas publiée sur le site pour des
          raisons de confidentialité. Les échanges se font par e-mail et
          téléphone.
        </p>

        <h2>Hébergeur</h2>
        <p>
          [Nom de l&#39;hébergeur]<br />
          [Adresse de l&#39;hébergeur]
        </p>

        <h2>Directeur de la publication</h2>
        <p>Lechevalier Julien</p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L&#39;ensemble du contenu de ce site (textes, visuels, logo) est
          protégé par le droit d&#39;auteur. Toute reproduction non autorisée
          est interdite.
        </p>
      </LegalLayout>
    </Layout>
  );
}
