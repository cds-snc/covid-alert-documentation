---
  title: Travailler ouvertement
  translationUrl: 0001-working-in-the-open
---

# Résumé

Le présent document vise à instaurer une façon de « travailler ouvertement » qui est plus ordonnée, de sorte que nous puissions montrer davantage le processus décisionnel derrière le système Alerte COVID. Le document vise aussi à définir une norme de pratique pour les projets aussi bien au Service numérique canadien que dans l’ensemble du gouvernement du Canada.

Il ne s’agit en aucun cas d’une solution parfaite, aussi nous ne présentons pas cette démarche ainsi. Tous les retours, commentaires et questions sur nos pratiques sont les bienvenus. Nous demandons simplement que vous reconnaissiez que travailler ouvertement est un défi en soi, surtout lorsqu’il s’agit d’un projet d’aussi grande envergure, qui plus est en situation de pandémie.

Afin d’être complètement transparents, mentionnons que la prestation du service aura priorité sur ces pratiques, mais nous ferons de notre mieux pour assurer l’équilibre entre ces deux besoins et améliorer nos processus au fur et à mesure.

Aux fins du présent document, « nous » représente les membres des équipes d’Alerte COVID du Service numérique canadien.

Pour les personnes qui ne connaissent pas les « demandes de commentaires » (*Request For Comments*, RFC), vous pouvez consulter la page https://fr.wikipedia.org/wiki/Request_for_comments. Nous suivrons *grosso modo* les principes qui y sont décrits.

# Motivation

*Pourquoi faisons-nous cela? Quels cas d’utilisation cette démarche soutient-elle? Quel est le résultat escompté?*

Nous travaillons ouvertement parce que nous valorisons la transparence, les rondes de test rapides, la collaboration et la communication qui visent explicitement à inspirer confiance dans les services sur lesquels nous travaillons. Par conséquent, tout le code source de nos projets est accessible dans un dépôt ouvert sur GitHub, notre code peut être dupliqué (*forked*) par d’autres organisations (provinces, pays, etc.), et nous fournissons un degré de transparence en temps opportun pour ce qui touche les bogues ou les problèmes qui nécessitent une action des utilisateurs pour être corrigés.

Nous nous inspirons du travail des autres : ['Rendre une chose accessible, c’est l’améliorer (en anglais seulement)'](https://gds.blog.gov.uk/2017/09/04/the-benefits-of-coding-in-the-open/)

# Concept détaillé

*Il s’agit de la majeure partie de la RFC. Expliquez le concept en détail, de sorte qu’une personne connaissant le cadre puisse bien comprendre et qu’une personne habituée aux mises en oeuvre puisse mettre en oeuvre le concept. D’amples détails devraient être fournis, de même que des exemples d’utilisation de la fonctionnalité, et les cas limites devraient être traités.*

Nos équipes utilisent actuellement un mélange d’outils publics et privés pour assurer le suivi de leurs activités quotidiennes. Bien que ces outils soient parfaits pour leurs besoins, ils posent plusieurs difficultés au travail ouvert.

Nous comptons utiliser GitHub (par l’intermédiaire des projets [*Projects*], des discussions [*Discussions*] et des questions ou problèmes [*Issues*]) pour rendre accessible par défaut une plus grande quantité d’informations, et nous adapterons nos façons de travailler en équipe en conséquence.

Nous utiliserons le dépôt Documentation (https://github.com/cds-snc/covid-alert-documentation) en tant que source de vérité pour les activités et discussions générales relatives au projet.

- Projects : Informations générales de feuille de route (à l’étude [*Investigating*], en implémentation [*Implementing*], en essai [*Testing*], terminé [*Done*])
- Discussions : Commentaires et retours de la communauté sur des questions générales.
- Issues : Changements précis demandés par notre équipe pour le dépôt en question.

Chaque équipe continuera d’utiliser son dépôt spécifique (-app, -server ou -portal) pour faire le suivi de ses pratiques. La page des questions et problèmes (*Issues*) sera soit limitée à l’équipe soit ouverte, mais les questions et problèmes seront redirigés vers la page de discussion dans le dépôt -documentation.

Toutes les (grandes) décisions relatives au produit (produit, développement, conception, recherche, sécurité, politiques, etc.), à partir de maintenant, seront conformes à notre nouvelle norme de consignation des décisions de RFC (dans la mesure du possible), et seront stockées dans le dépôt -documentation, dans un dossier RFC commun, jusqu’à preuve d’inefficacité du processus.

Nous encourageons les membres de nos équipes à travailler dans la langue de leur choix et à répondre aux membres de la communauté dans la langue de ces derniers. Les éléments généraux comme les feuilles de route, les fonctionnalités de produit et la documentation doivent être accessibles dans les deux langues. Si vous repérez des endroits où ce n’est pas le cas, n’hésitez pas à nous le mentionner et nous ferons de notre mieux pour régler la situation rapidement.

# Inconvénients

*Pourquoi devrions-nous éviter cette approche?*

[insérer des chants de criquets]

# Autres solutions

*Quels sont les autres concepts envisagés?

Nous sommes ouverts à d’autres suggestions, mais d’ici là, nous croyons qu’il s’agit d’une bonne mesure à court terme.

*Quelles seraient les conséquences de ne pas adopter cette approche?

Nous perdrions des occasions de bâtir une plus grande confiance chez les Canadiens et Canadiennes, et nous perdrions aussi la chance de montrer aux autres fonctionnaires notre façon d’aborder les difficultés liées à la prestation de services.

# Questions en suspens

*Quelles parties du concept reste-t-il à déterminer?*

[Liste de questions en suspens / questions à ajouter à la présente RFC au fil du temps grâce aux commentaires d’autres personnes]
