import type { Metadata } from 'next';
import Layout from '@/views/Layout/Layout';
import LegalLayout from '@/views/LegalLayout/LegalLayout';

export const metadata: Metadata = {
  title: 'Conditions générales de vente – Arkenyx',
  description: 'Conditions générales de vente des prestations Arkenyx.',
};

export default function CGVPage() {
  return (
    <Layout>
      <LegalLayout title="Conditions générales de vente (CGV)">
        <p>
          Les présentes CGV s&#39;appliquent aux prestations de services
          réalisées par Arkenyx, micro-entreprise (dépannage, réparation,
          montage PC, récupération de données, conseil, forfaits, réseau,
          création de site web, etc.). Elles complètent le devis ou le bon de
          commande accepté par le client.
        </p>

        <h2>Préambule</h2>
        <p>
          Le client est la personne physique ou morale qui commande une
          prestation. Le prestataire est Lechevalier Julien, exerçant
          sous le nom Arkenyx. Contact : contact@arkenyx.fr, 06.45.65.84.48.
        </p>

        <h2>Services</h2>
        <p>
          Les services proposés sont décrits sur le site (dépannage et
          réparation, montage PC, récupération de données, conseil, forfaits,
          réseau, création de site web, etc.). Le détail et le périmètre de
          chaque prestation sont fixés dans le devis ou la proposition remis au
          client.
        </p>

        <h2>Devis et commande</h2>
        <p>
          Un devis ou une proposition est établi sur demande (e-mail ou
          téléphone). La commande est réputée acceptée à réception du devis
          signé ou d&#39;un accord explicite du client (e-mail, oral confirmé).
          La durée de validité du devis est indiquée sur le document (30 jours
          par défaut sauf mention contraire) ; à son expiration, l&#39;offre
          est caduque. Les tarifs sont indiqués en euros hors taxes (TVA non
          applicable, art. 293 B du CGI) tant que le prestataire relève de la
          franchise en base de TVA.
        </p>

        <h2>Déplacement</h2>
        <p>
          Le déplacement est gratuit dans un rayon de 10 km autour
          d&#39;Ahouillé. Au-delà, il est facturé 0,50 € par kilomètre. Le détail
          est rappelé sur le devis.
        </p>

        <h2>Paiement</h2>
        <p>
          Les modalités de paiement (acompte, solde, délais) sont précisées dans
          le devis. Le règlement s&#39;effectue par virement, carte bancaire ou
          espèces. Les chèques ne sont pas acceptés. En cas de retard de
          paiement, des pénalités de retard pourront être appliquées
          conformément aux articles L.441-6 et L.441-10 du Code de commerce.
        </p>

        <h2>Facturation</h2>
        <p>
          Une facture est établie après chaque prestation. Elle comporte le
          détail des prestations, les éventuelles majorations (déplacement,
          etc.) et les mentions légales obligatoires (dont la mention de
          franchise de TVA lorsque le prestataire n&#39;est pas assujetti).
        </p>

        <h2>TVA</h2>
        <p>
          La micro-entreprise n&#39;est pas assujettie à la TVA tant que son
          chiffre d&#39;affaires ne dépasse pas les seuils de la franchise en
          base de TVA (pour les prestations de services : 37 500 € sur l&#39;année
          civile, avec seuil de tolérance à 41 250 € en cas de dépassement en
          cours d&#39;année). Les tarifs sont donc indiqués hors taxes (TVA non
          applicable, art. 293 B du Code général des impôts – CGI).
        </p>

        <h2>Délais et exécution</h2>
        <p>
          Les délais indiqués dans le devis sont donnés à titre indicatif. Le
          prestataire s&#39;engage à informer le client en cas de retard
          prévisible. La prestation est réalisée avec soin et conformément aux
          usages de la profession.
        </p>

        <h2>Droit de rétractation</h2>
        <p>
          Pour les prestations de services à la personne (B2C), le client
          dispose d&#39;un droit de rétractation de 14 jours à compter de
          l&#39;acceptation du devis, sauf si l&#39;exécution a commencé avec
          son accord avant la fin de ce délai (articles L.221-18 et suivants du
          Code de la consommation). Pour les professionnels (B2B), le droit de
          rétractation ne s&#39;applique pas selon les dispositions en vigueur.
        </p>

        <h2>Litiges</h2>
        <p>
          En cas de litige, les parties s&#39;efforcent de trouver une solution
          à l&#39;amiable. À défaut, les tribunaux français sont compétents.
          Le droit français est applicable.
        </p>

        <h2>Médiation de la consommation</h2>
        <p>
          L&#39;entreprise est actuellement en cours d&#39;immatriculation.
          À ce titre, aucun contrat de prestation n&#39;est conclu à ce jour
          avec des consommateurs.
        </p>
        <p>
          Conformément aux articles L.612-1 et suivants du Code de la
          consommation, un dispositif de médiation de la consommation sera mis
          en place dès le début effectif de l&#39;activité commerciale auprès
          des particuliers.
        </p>
        <p>
          Les coordonnées du médiateur compétent seront alors communiquées dans
          les présentes Conditions Générales de Vente.
        </p>
      </LegalLayout>
    </Layout>
  );
}
