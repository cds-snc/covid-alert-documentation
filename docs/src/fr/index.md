---
layout: 'layouts/home.html'
locale: 'fr'
---

# Documentation pour Alerte COVID

Ce dépôt comprend de la documentation à l’appui d’[Alerte COVID](https://www.canada.ca/fr/sante-publique/services/maladies/maladie-coronavirus-covid-19/alerte-covid.html), l’application de notification d’exposition du Canada. Ces documents ont été produits par le [Service numérique canadien](https://numerique.canada.ca/), [Santé Canada](https://www.canada.ca/fr/sante-canada.html) et d’autres partenaires gouvernementaux :

*   [Évaluation de la protection de la vie privée de l’application Alerte COVID](https://github.com/cds-snc/covid-alert-documentation/blob/main/EvaluationViePriveeAlerteCOVID.md)
*   [Liste de vérification de la protection des renseignements personnels : Portail de soins de santé Alerte COVID](https://github.com/cds-snc/covid-alert-documentation/blob/main/ListeVerificationProtectionRenseignementsPersonnelsPortailSoinsSante.md)
*   [Rapport sur l’accessibilité](https://github.com/cds-snc/covid-alert-documentation/blob/main/RapportAccessibilite.md)
*   [Évaluation de sécurité de l'application Alerte COVID](https://github.com/cds-snc/covid-alert-documentation/blob/main/CCCS_ÉvaluationDeSécurité.pdf)
*   [Processus de divulgation des vulnérabilités](https://github.com/cds-snc/covid-alert-documentation/blob/main/PolitiqueDivulgationVulnerabilites.md)
*   [Cadre décisionnel Alerte COVID](https://github.com/cds-snc/covid-alert-documentation/blob/main/CadreDecisionnelAlerteCOVID.md)

Documentation pour le produit:

* [Mesures de performance](https://github.com/cds-snc/covid-alert-documentation/blob/main/produit/mesures-de-performance.md)
* [Codes QR – Notifications d’éclosions sur site](https://github.com/cds-snc/covid-alert-documentation/blob/main/produit/codes-qr.md)

Documentation pour la recherche en conception:

*   [Quelle est la réaction des personnes qui ont la COVID-19 face à la « clé à usage unique »?](https://github.com/cds-snc/covid-alert-documentation/blob/main/recherche/RevueLitterature.md) (Revue de la littérature, le 28 juillet 2020)
*   [Dans quelle mesure l’application aide-t-elle les utilisateurs quand ils reçoivent un résultat positif (et une clé à usage unique) ?](https://github.com/cds-snc/covid-alert-documentation/blob/main/recherche/UtilisabiliteAout2020.md) (Test d'utilisabilité, 25 août 2020)
*   [Recherche et constatations relatives au code QR](https://github.com/cds-snc/covid-alert-documentation/blob/main/recherche/RechercheConstatationsCodeQR.md) (15 février 2021)

Vous pouvez également consulter :

*   [Déclaration d’accessibilité pour Alerte COVID](https://www.canada.ca/fr/sante-publique/services/maladies/maladie-coronavirus-covid-19/alerte-covid/declaration-accessibilite.html)
*   [Obtenir de l’aide avec Alerte COVID](https://www.canada.ca/fr/sante-publique/services/maladies/maladie-coronavirus-covid-19/alerte-covid/aide.html)
*   [Énoncé de confidentialité d’Alerte COVID](https://www.canada.ca/fr/sante-publique/services/maladies/maladie-coronavirus-covid-19/alerte-covid/politique-confidentialite.html)
*   [Documentation technique sur l’application mobile](https://github.com/cds-snc/covid-alert-app#readme)
*   [Documentation technique sur le serveur de clés](https://github.com/cds-snc/covid-alert-server#readme)
*   [Documentation technique sur le portail](https://github.com/cds-snc/covid-alert-portal#readme)
*   [Journal des modifications (changelog) du portail](https://github.com/cds-snc/covid-alert-portal/blob/main/CHANGELOG.md)
*   [Guide de contribution](https://github.com/cds-snc/covid-alert-app/blob/master/CONTRIBUTING.md)
*   [Guide d’accessibilité du SNC](https://numerique.canada.ca/a11y/)

## Installer et utiliser Alerte COVID

Vous pouvez installer Alerte COVID à partir de l’[App Store d’Apple](https://apps.apple.com/ca/app/id1520284227?l=fr) et de [Google Play Store](https://play.google.com/store/apps/details?id=ca.gc.hcsc.canada.stopcovid&hl=fr).

Pour plus d’information sur la façon d’installer et d’utiliser Alerte COVID, consultez [la page d’accueil](https://www.canada.ca/fr/sante-publique/services/maladies/maladie-coronavirus-covid-19/alerte-covid.html) ou [la page d’aide d’Alerte COVID](https://www.canada.ca/fr/sante-publique/services/maladies/maladie-coronavirus-covid-19/alerte-covid/aide.html).

## Au sujet de l’application Alerte COVID

Dans le cadre des efforts pour réduire la propagation du virus de la COVID-19, tout en assouplissant progressivement les restrictions imposées et en permettant à l’économie de recommencer, le gouvernement du Canada s’est engagé à lancer une application nationale unique de notification d’exposition à la COVID-19 (ci-après dénommée Alerte COVID). Cette application sera interopérable entre les provinces et a été conçue pour minimiser la collecte et le stockage de renseignements identificatoires. Afin de minimiser les risques pour les renseignements personnels, il a été déterminé qu’une application de notification d’exposition, par rapport à une application de recherche de contacts, était l’approche privilégiée pour établir une solution numérique pancanadienne soutenant les efforts de réduction de la propagation du virus.

La notification d’exposition est considérée comme une approche peu intrusive destinée à être utilisée en parallèle et en appui aux mesures de santé publique actuellement prises dans tout le Canada en réponse à la pandémie. Alerte COVID suit une approche entièrement décentralisée selon laquelle les renseignements identificatoires ne sont pas collectés ni stockés dans un seul lieu central. Au lieu de cela, lorsqu’un utilisateur télécharge l’application et consent à ses diverses fonctions, son appareil mobile transmet des identifiants aléatoires qui sont utilisés pour enregistrer la proximité avec l’appareil d’un autre utilisateur de l’application. Cette méthode diffère des applications de recherche de contacts qui accèdent aux données de localisation d’un appareil et les signalent aux autorités de santé publique. La section 5 du présent document fournit de plus amples renseignements sur le fonctionnement de l’application.

L’application vise à compléter les mesures existantes pour réduire la propagation du virus, y compris la recherche manuelle des contacts. Elle permet d’informer les Canadiens et Canadiennes s’ils ont été près d’une personne qui a reçu un diagnostic de COVID-19 et qui utilise également l’application, et les encourage à prendre des mesures appropriées (par exemple, se faire tester). Si une personne a eu un test positif pour la COVID-19 dans une province ou un territoire utilisant l’application, les autorités locales de santé publique peuvent la conseiller sur les prochaines étapes et lui fournir une clé à usage unique à entrer dans l’application, ce qui à son tour informera les autres utilisateurs de l’application qui ont été près d’elle au cours des 14 derniers jours. Cette mesure contribuera à réduire la propagation globale du virus.

Les avantages de cette approche en matière de santé publique sont qu’elle encourage les personnes à se faire tester lorsqu’elles apprennent qu’elles ont un risque élevé d’exposition, et elle avise les utilisateurs de l’application qui reçoivent des messages de risque accru d’ajuster leur comportement pour éviter de mettre d’autres personnes en danger, même s’ils ne présentent pas de symptômes à ce moment-là. Par exemple, si une personne reçoit une notification, elle peut décider de ne pas rendre visite à un parent âgé ou assister à un rassemblement social. Cela fournira plus d’autonomie aux Canadiens et Canadiennes et permettra de réduire la propagation de la maladie dans la collectivité.

## Coordonnées

Pour des questions ou de la rétroaction, veuillez envoyer un courriel au Service numérique canadien, à [cds-snc@tbs-sct.gc.ca](mailto:cds-snc@tbs-sct.gc.ca) ou [créer une question (« issue »)](https://github.com/cds-snc/covid-alert-documentation/issues) dans ce dépôt.
