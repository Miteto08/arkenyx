# Arkenyx – Site vitrine

Site vitrine pour la micro-entreprise Arkenyx (stockage informatique, montage PC, etc.).

- **Stack** : Next.js 14 (App Router), React, TypeScript, SASS
- **Type** : Single Page Application (export statique)
- **Structure** : inspirée MVC (models, views, controllers)
- **UI** : responsive (mobile-first)

---

## Premières étapes

### 1. Installer les dépendances

À la racine du projet :

```bash
npm install
```

(Si `npx`/`npm` ne sont pas reconnus, ouvrir un terminal dans le dossier du projet après avoir lancé Node.js depuis son installation, ou utiliser **Node.js** depuis le PATH de votre session.)

### 2. Lancer en développement

```bash
npm run dev
```

Ou, pour des recompilations plus rapides (Turbopack) :

```bash
npm run dev:turbo
```

Ouvrir [http://localhost:3000](http://localhost:3000).

### Variables d'environnement (optionnel)

| Variable | Rôle |
|----------|------|
| `NEXT_PUBLIC_SITE_URL` | URL publique du site (ex. `https://www.arkenyx.fr`). Utilisée pour le sitemap, les métadonnées et le canonical. Par défaut : `https://www.arkenyx.fr`. |

Créer un fichier `.env.local` à la racine si besoin (ne pas le committer si il contient des secrets).

### 3. Build SPA (export statique)

```bash
npm run build
```

Les fichiers statiques sont générés dans le dossier **`out/`**. Ce dossier peut être déployé sur GitHub Pages, Netlify, Vercel, ou tout hébergeur de fichiers statiques.

**Déploiement** : Sur Vercel ou Netlify, connecter le dépôt Git et configurer la commande de build `npm run build` et le dossier de sortie `out`. Configurer le domaine et, si besoin, `NEXT_PUBLIC_SITE_URL` dans les variables d'environnement de l'hébergeur.

### 4. Structure du projet (MVC)

| Dossier / rôle | Rôle |
|----------------|------|
| **`src/models/`** | Données et types (services, produits, textes) |
| **`src/views/`** | Composants React + fichiers `.module.scss` (présentation) |
| **`src/controllers/`** | Hooks et logique (liaison models ↔ views) |
| **`src/app/`** | Pages Next.js (App Router), `layout.tsx`, `globals.scss` |

- **Une seule page** : tout le contenu vitrine peut vivre sur `src/app/page.tsx` (sections : hero, services, contact, etc.).
- **SASS** : variables et mixins dans `src/app/globals.scss` ; styles par composant dans `src/views/**/*.module.scss`.
- **Responsive** : breakpoints déjà définis dans `globals.scss` (`$breakpoint-mobile`, `$breakpoint-tablet`, etc.).

---

## Suite possible

- Ajouter les sections de la vitrine (hero, services, contact) dans `src/views/`.
- Renseigner les textes et données dans `src/models/`.
- Utiliser les controllers pour la logique (formulaires, état) et garder les views uniquement présentation.
