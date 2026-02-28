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
          Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance
          dans l&#39;économie numérique (LCEN), les informations suivantes sont
          portées à la connaissance des utilisateurs du site arkenyx.fr. Le site
          est édité par un micro-entrepreneur, dans le cadre d&#39;une activité
          de prestations de services informatiques (dépannage et réparation,
          montage PC, récupération de données, conseil, forfaits, mise en place
          de réseau, création de site web, etc.).
        </p>

        <h2>Éditeur du site</h2>
        <p>
          Lechevalier Julien<br />
          Micro-entreprise – SIRET : [SIRET]
        </p>

        <h2>Contact</h2>
        <p>
          La politique de confidentialité, les conditions générales de vente
          (CGV) et les conditions générales d&#39;utilisation (CGU) sont
          accessibles via les liens en pied de page du site.
        </p>
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
          Conformément à l&#39;article 6 de la LCEN, l&#39;hébergeur du site
          est :
        </p>
        <p>
          [Nom de l&#39;hébergeur]<br />
          [Adresse de l&#39;hébergeur]
        </p>
        <p>
          Les données transmises par e-mail via le site ne sont pas hébergées
          sur un serveur tiers dédié au site ; seules les pages web sont
          hébergées par l&#39;hébergeur indiqué ci-dessus.
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
