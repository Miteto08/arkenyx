import type { Metadata } from 'next';
import Layout from '@/views/Layout/Layout';
import LegalLayout from '@/views/LegalLayout/LegalLayout';

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation – Arkenyx",
  description: "Conditions d'utilisation du site Arkenyx.",
};

export default function CGUPage() {
  return (
    <Layout>
      <LegalLayout title="Conditions générales d'utilisation (CGU)">
        <p>
          L&#39;utilisation du site arkenyx.fr implique l&#39;acceptation des
          présentes conditions. Ce site est un site vitrine d&#39;un
          micro-entrepreneur.
        </p>

        <h2>Objet</h2>
        <p>
          Le site présente l&#39;activité d&#39;Arkenyx (dépannage et
          réparation, montage PC, récupération de données, conseil, forfaits,
          réseau, création de site web, etc.) et permet de prendre contact par
          e-mail, téléphone, formulaire de contact ou demande de devis en
          ligne.
        </p>

        <h2>Utilisation du site</h2>
        <p>
          Vous vous engagez à utiliser le site de manière conforme à la loi et
          aux présentes CGU. Toute utilisation frauduleuse, abusive ou
          préjudiciable est interdite.
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          Les textes, visuels, logo et la structure du site sont protégés. Toute
          reproduction, représentation ou exploitation non autorisée est
          interdite sans accord écrit.
        </p>

        <h2>Limitation de responsabilité</h2>
        <p>
          L&#39;éditeur s&#39;efforce d&#39;assurer la disponibilité et
          l&#39;exactitude des informations. Il ne peut toutefois être tenu
          responsable des erreurs, omissions ou des dommages résultant de
          l&#39;utilisation du site ou des liens externes.
        </p>

        <h2>Liens</h2>
        <p>
          Des liens vers d&#39;autres sites peuvent être proposés. L&#39;éditeur
          n&#39;exerce aucun contrôle sur ces sites et décline toute
          responsabilité quant à leur contenu.
        </p>

        <h2>Droit applicable</h2>
        <p>
          Les présentes CGU sont régies par le droit français. En cas de litige,
          les tribunaux français seront compétents.
        </p>
      </LegalLayout>
    </Layout>
  );
}
