# ✈️ Aéroclub du Soleil - Site Internet

Bienvenue sur le dépôt GitHub du site internet de l'**Aéroclub du Soleil**, basé sur l'Aérodrome d'Aix-les-Milles. Ce site vitrine moderne et responsive permet de présenter notre flotte, nos formations au pilotage, nos tarifs ainsi que nos actualités médias.

## 🚀 Fonctionnalités

* **Page d'accueil dynamique** : Intégration d'un arrière-plan animé (`.gif`) sur la section Hero pour une immersion immédiate.
* **Gestion centralisée des tarifs** : Les prix des cotisations, de la licence FFA et du vol découverte sont chargés dynamiquement depuis un fichier central `tarifs.json`.
* **Présentation de la Flotte & Formations** : Détails complets sur les avions (DR400) et les conditions d'inscription au club.
* **Galerie Médias** : Section photos avec un effet de zoom fluide au survol et intégration de vidéos (YouTube Shorts).
* **Design Responsive** : Site entièrement adaptatif (smartphones, tablettes, ordinateurs) propulsé par **Bootstrap 5**.

## 📁 Structure du Projet

```text
├── assets/
│   ├── css/
│   │   └── style.css          # Styles personnalisés (effets de zoom, ombres)
│   └── img/                   # Photos de la flotte, captures et fichiers GIF
│       ├── aerodrome.gif
│       ├── image_short.jpg
│       ├── flotte             # dossier contenant les photos des 3 avions
│       └── medias             # dossier contenant les vidéos et photos du club
├── tarifs.json                # Fichier de configuration unique pour les prix et l'année
├── index.html                 # Page d'accueil
├── la-flotte.html             # Présentation des avions et tarifs
├── formations.html            # Conditions d'inscription et brevets (LAPL, PPL...)
├── medias.html                # Galerie photos et vidéos
├── contact.html               # Formulaire de contact et accès au club
└── README.md                  # Documentation du dépôt
```

## ⚙️ Mise à jour des Tarifs (Maintenance)

Pour simplifier la gestion du club d'une année sur l'autre, il n'est pas nécessaire de modifier le code HTML pour changer les prix ou l'année. Tout est centralisé dans le fichier tarifs.json.

Pour mettre à jour le site, ouvrez le fichier tarifs.json et modifiez simplement les valeurs :

JSON
{
  "annee": "2026",
  "cotisation_club": 150,
  "licence_ffa": 89,
  "vol_decouverte": 150
}
Les modifications se répercuteront automatiquement sur l'ensemble des pages concernées (la-flotte.html, formations.html...) grâce aux scripts de synchronisation asynchrones (fetch).

## 🛠️ Technologies utilisées

HTML5 & CSS3

Bootstrap 5.3.3 (Framework CSS & Icônes)

JavaScript (ES6) (Requêtes Fetch pour le chargement du JSON)

## 📦 Déploiement

Ce site est configuré pour être hébergé gratuitement et en un clic via GitHub Pages.

Rendez-vous dans les Settings de ce dépôt GitHub.

Dans le menu de gauche, cliquez sur Pages.

Sous Build and deployment, choisissez la branche main (ou master) et le dossier / (root).

Cliquez sur Save. Votre site sera en ligne en quelques instants.
