# Déployer le site Arkenyx sur OVH

Ton site Next.js est configuré en **export statique** : après le build, tout est généré en fichiers HTML/CSS/JS. Tu peux les héberger sur un **hébergement web OVH** (offre Pro, Perso, etc.) sans serveur Node.js.

## 1. Générer les fichiers à déployer

Sur ton PC, à la racine du projet :

```bash
npm run build
```

Cela crée le dossier **`out/`** avec tout le site (HTML, CSS, JS, images). C’est ce dossier que tu envoies sur OVH.

## 2. Sur OVH : hébergement web

- Si tu as déjà un **hébergement web** (multisite ou associé à un autre domaine), ajoute le **multisite** pour `arkenyx.fr` (ou le domaine que tu utilises).
- Si tu n’as pas encore d’hébergement web : dans ton manager OVH, prends une offre **Hébergement web** (Perso ou Pro). Tu pourras y associer le domaine `arkenyx.fr` (déjà acheté chez OVH).

Une fois le multisite (ou l’hébergement) configuré pour `arkenyx.fr`, tu as un **répertoire** dédié (souvent `www` ou le nom du multisite).

## 3. Envoyer les fichiers (FTP / SFTP / Gestionnaire de fichiers)

- **Connexion** : OVH te donne un identifiant FTP (ou SFTP) et le serveur (ex. `ftp.cluster0XX.hosting.ovh.net` ou `ssh.cluster0XX.hosting.ovh.net`).
- **Logiciel** : FileZilla, WinSCP, ou le **Gestionnaire de fichiers** dans l’espace client OVH.
- **Où envoyer** : ouvre le dossier **`out/`** de ton projet et envoie **tout son contenu** à la **racine du répertoire web** du site (souvent `www` ou `public_html` pour le multisite).

Important : ce sont les **fichiers à l’intérieur** de `out/` qui doivent être à la racine du site, pas le dossier `out` lui-même.

```
out/
  index.html      → à la racine du site
  _next/          → à la racine du site
  arkenyx-logo.png
  ...
```

## 4. Domaine arkenyx.fr

- Si le domaine et l’hébergement sont sur le **même compte OVH**, tu peux lier le domaine à l’hébergement (multisite) depuis l’assistant OVH : le DNS sera configuré pour pointer vers ton hébergement.
- Si tu as un sous-domaine **www** : en général OVH propose de créer `www.arkenyx.fr` en redirection ou en alias ; garde **www** et **arkenyx.fr** pointant vers le même hébergement si tu veux les deux.

## 5. Après mise à jour du site

À chaque modification du site :

1. Relancer `npm run build`.
2. Re-envoyer **tout le contenu** du dossier `out/` sur l’hébergement (en écrasant les anciens fichiers).

## 6. Tract /flyer (non déployé par défaut)

Le **contenu** du tract est dans le dossier **`flyer/`** à la racine du projet (comme `docs/`). La **route** qui l’affiche (`src/app/flyer/`) est dans le `.gitignore` : elle n’est pas versionnée, donc en clonant le dépôt et en faisant `npm run build`, la page `/flyer/` **n’existe pas** dans `out/` et ne sera pas en ligne. Seul le site public est déployé. Pour afficher le tract en local, voir `flyer/README.md`.

## En résumé

| Étape | Action |
|-------|--------|
| 1 | `npm run build` → dossier `out/` |
| 2 | Hébergement web OVH + multisite (ou domaine) pour arkenyx.fr |
| 3 | Envoyer le **contenu** de `out/` à la racine du site (FTP / Gestionnaire de fichiers) |
| 4 | Vérifier que arkenyx.fr et www.arkenyx.fr pointent vers cet hébergement |

Aucune configuration PHP ni Node.js n’est nécessaire : OVH sert uniquement les fichiers statiques.
