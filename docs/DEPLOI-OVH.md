# Déployer le site Arkenyx sur OVH

Site Next.js en **export statique** : après `npm run build`, tout est dans le dossier `out/`. Hébergement sur **hébergement web OVH** (pas de Node.js côté serveur).

---

## Étapes de déploiement

### 1. Build

À la racine du projet :

```bash
npm run build
```

→ Dossier **`out/`** créé (index.html, _next/, images…). On envoie **le contenu** de ce dossier, pas le dossier `out` lui-même.

### 2. Connexion FTP

- **Où trouver les identifiants** : Espace client OVH → Hébergements web → ton hébergement → onglet **FTP - SSH**.
- **Hôte** : `ftp.cluster***.hosting.ovh.net` (*** = numéro de ton cluster, indiqué dans l’onglet FTP-SSH ; bien **ftp.** au début, pas le préfixe du login).
- **Port** : 21 — **Utilisateur** et **Mot de passe** : ceux de l’onglet FTP-SSH.
- **Client** : WinSCP recommandé ([winscp.net/eng/download.php](https://winscp.net/eng/download.php)). Protocole FTP. **Chiffrement** : essayer d’abord **TLS/SSL explicite** ; si la connexion échoue, choisir **Aucun chiffrement**. Ne pas cocher « Connexion anonyme ».

### 3. Envoi des fichiers

- **Serveur (droite)** : ouvrir le dossier **`www`**.
- **PC (gauche)** : ouvrir le dossier **`out/`** du projet.
- Sélectionner **tout le contenu** de `out/` (Ctrl+A) → glisser-déposer (ou Envoyer) dans **`www`**. Accepter d’**écraser** si un fichier existe déjà (ex. index.html).
- Vérifier : dans `www` doivent se trouver à la racine `index.html`, `_next/`, etc.

### 4. Zone DNS (si OVH envoie un email)

OVH peut demander de mettre à jour la zone DNS (enregistrements **A** et **AAAA**) pour que le domaine pointe vers l’hébergement. **Noms de domaine** → **arkenyx.fr** → **Zone DNS** → modifier les lignes **A** (et **AAAA** si indiqué) pour **arkenyx.fr** et **www.arkenyx.fr** avec les cibles fournies dans l’email (ex. A → `51.91.236.255`). Ne pas toucher aux enregistrements NS, MX, SPF, TXT, CNAME.

### 5. Certificat SSL (HTTPS)

Si le navigateur affiche **« Non sécurisé »** : Hébergements web → ton hébergement → onglet **Certificats SSL** → **Activer SSL Let's Encrypt** pour le domaine. Attendre que l’état passe de « En création » à « Actif » (quelques minutes à 1 h).

### 6. Mise à jour du site (après modifications)

1. `npm run build`
2. WinSCP : connexion comme avant → dossier **`www`** à droite, **contenu de `out/`** à gauche → tout envoyer en acceptant d’**écraser**.
