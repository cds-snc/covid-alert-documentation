[English](https://github.com/cds-snc/covid-alert-documentation/blob/main/AccessibilityReport.md)

# Rapport d’accessibilité pour l’application Alerte COVID (application mobile d’alerte d’exposition)

_Service numérique canadien_

Le présent rapport décrit le niveau de conformité de l’application mobile Alerte COVID aux [Règles pour l’accessibilité des contenus Web (WCAG) de W3C](https://www.w3.org/Translations/WCAG20-fr/). Le processus d’examen est fondé sur le processus d’évaluation décrit dans les [ressources d’évaluation de la l’accessibilité](https://www.w3.org/WAI/eval/).

D’après l’évaluation, l’application mobile Alerte COVID est près de respecter la conformité de niveau AA des WCAG 2.1. Les résultats détaillés de l’évaluation seront disponibles sous peu. Vos commentaires sur l’évaluation sont les bienvenus.

L’évaluation de la conformité à l’accessibilité de l’application mobile comprenait une combinaison d’outils d’évaluation semi-automatisés et d’évaluations manuelles menées par une équipe expérimentée de testeurs d’accessibilité. L’évaluation s’est également appuyée sur les commentaires de personnes handicapées concernant l’accessibilité qui ont eu recours à des méthodes à la fois informelles et formelles. Des examens de la conception inclusive ont été menés avec l’équipe des produits pour s’assurer que les pratiques exemplaires ont été suivies, et que les résultats de la recherche ont été itérés et intégrés dans l’application. Les résultats de l’évaluation décrits dans le présent rapport sont fondés sur une évaluation effectuée avant le lancement de l’application. Des modifications ont pu être apportées à l’application depuis. Le présent document sera fréquemment mis à jour afin de refléter l’état de l’application à un moment précis.

Prenez connaissance de notre énoncé sur l’accessibilité pour connaître l’état actuel de l’accessibilité et les problèmes connus concernant l’application Alerte COVID, ainsi que notre approche en matière d’accessibilité. 

## Évaluation de la conformité de niveau AA des WCAG 2.1

L’application mobile Alerte COVID respecte 95 % des critères de conformité de niveau AA des WCAG 2.1. Certains écrans de l’application ne satisfont pas encore aux critères de réussite suivants :

*   1.4.11 Contraste des éléments non textuels (AA) 
*   1.4.3 Contraste (minimum) (niveau AA) 
*   2.4.3 Parcours du focus (niveau A) 

### Considérations relatives aux limitations

Nous avons tenu compte des types de limitations suivants pour assurer l’accessibilité de Alerte COVID :

*   **Troubles de la vue :** Cécité totale ou partielle, daltonisme ou autres problèmes liés à la vision.
*   **Déficience auditive :** Troubles auditifs qui entraînent une surdité totale ou partielle ou autres déficiences auditives.
*   **Handicaps physiques :** Difficulté à utiliser un clavier, une souris ou d’autres outils physiques couramment utilisés par l’utilisateur d’un ordinateur ou d’un appareil mobile.
*   **Troubles cognitifs :** Troubles d’apprentissage ou de mémoire
*   **Alphabétisme :** Troubles de lecture ou de compréhension


### Processus et outils d’évaluation

Nous avons utilisé les processus d’évaluation suivants pour améliorer l’accessibilité de l’application mobile Alerte COVID :

*   **Tests manuels :** Utilisation des services d’accessibilité Android.
*   **Tests à l’aide d’outils d’analyse :** Pour cerner les possibilités d’amélioration de l’accessibilité de votre application.
*   **Tests automatisés :** dans Espresso et Robolectric.
*   **Tests menés auprès des utilisateurs :** Nous avons obtenu les commentaires de vraies personnes qui ont interagi avec l’application.

Nous avons utilisé les outils suivants pour évaluer l’accessibilité :

*   Accessibility Scanner d’Android 
*   Accessibility Inspector 
*   Testflight 
*   Google Firebase
*   Test multi-plateforme réalisé sur différents appareils Android et iPhone.

### Résultats

*   Plus de 70 problèmes ont été signalés dans le [répertoire GitHub](https://github.com/cds-snc/covid-alert-app/issues?q=label%3Aa11y+) et corrigés.
*   Deux évaluations de la conception inclusive.
*   Énoncé sur l’accessibilité avec rétroaction de la collectivité.
*   Travail effectué sur l’intégration des commentaires sur l’accessibilité et la convivialité de la version bêta.

### Ressources utilisées à l’appui de notre processus d’évaluation

* [Guide d’évaluation pour les applications mobiles Android et iOS (en anglais)](https://developer.paciellogroup.com/downloads/TPG_Mobile_Testing_Guide.pdf) 
* [Accessibilité des applications mobiles : Comment les WCAG 2.0 et les autres règles de W3C/WAI s’appliquent aux applications mobiles (en anglais)](https://www.w3.org/TR/mobile-accessibility-mapping/) 
* [Exécuter des applications mobiles dans un émulateur Android (en anglais)](https://developer.android.com/studio/run/emulator) 
* [Check-list pour l’accessibilité mobile de Mozilla](https://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/Checklist_accessibilite_mobile)

## Vos commentaires S.V.P.

Nous serions heureux de recevoir vos commentaires et vos idées. Pour nous faire part de problèmes d’accessibilité dans Alerte COVID, veuillez procéder de l’une des manières suivantes :

*   [Créez un billet dans notre répertoire public GitHub pour signaler un problème](https://github.com/cds-snc/covid-alert-app/issues).
*   Faites parvenir un courriel à [a11y@cds-snc.ca](mailto:a11y@cds-snc.ca).
