[English](https://github.com/cds-snc/covid-alert-documentation/blob/main/product/qr-codes.md)

# Codes QR - Notifications d’éclosions sur site

L’objectif d’Alerte COVID est d’aviser les personnes lorsqu’elles risquent d’avoir été exposées à des cas positifs de COVID-19. Une exposition à la COVID-19 peut se produire lors d’un contact étroit avec une personne ayant la COVID-19, ou par la transmission d’aérosols et le contact de matières contaminées à des sites où il y a une éclosion. Actuellement, l’application ne permet d’aviser les personnes que pour des expositions par contact étroit. Alerte COVID pourrait toutefois notifier les utilisateurs d’une éclosion dans un endroit qu’ils ont visités grâce à la lecture de codes QR affichés aux sites participants, tout en préservant son principe de respect de la vie privée. Ce travail est fondé sur les applications de notification du Royaume-Uni et de la Nouvelle-Zélande, et de leur adaptation aux éclosions sur site.

## Comment ça marche?
Les sites participants (restaurants, commerces, événements, etc.) impriment un code QR Alerte COVID et l’affichent à leur entrée. Les utilisateurs de l’application qui visitent le site peuvent utiliser Alerte COVID pour lire le code QR au moment d’entrer. Le code est stocké de façon sécurisée sur leur appareil. S’ils lisent le code QR, les utilisateurs n’ont pas besoin de laisser leurs coordonnées dans le registre du site dédié à la recherche de contacts.

Si une éclosion de COVID-19 se produit sur un site, un responsable de la santé publique peut indiquer que le site est un foyer d’éclosion. Les utilisateurs ayant lu le code QR du site pendant la période d’éclosion recevront une notification qui les en avise. Les utilisateurs peuvent ensuite suivre les consignes sanitaires pour limiter la propagation de la COVID-19.

## On dirait qu’Alerte COVID suit les mouvements des gens.
Non. Cette fonctionnalité fonctionne à peu près de la même manière que le reste de l’application en matière de protection de la vie privée. La liste des lieux «lus» par un utilisateur n’est enregistrée que sur le téléphone et n’est jamais téléversée sur un serveur. Le téléphone télécharge régulièrement la liste des lieux signalés comme foyers d’éclosion par les autorités sanitaires, et vérifie s’il existe des correspondances. S’il y a correspondance, l’utilisateur reçoit une notification. Le gouvernement du Canada n’a jamais accès à l’historique de codes QR des utilisateurs.

## En quoi est-ce utile?

* Les codes QR permettent d’envoyer des notifications d’éclosion aux personnes qui se sont trouvées dans un lieu au moment de l’éclosion, ce qui leur permet de prendre les mesures nécessaires pour se protéger et protéger les autres. Ce processus peut être plus rapide que d’appeler chacune des personnes.
* Ce service pourrait alléger le fardeau de la recherche de contacts pour les entreprises et les chercheurs de contacts.
* La vie privée est protégée. Il n’y a pas de données de géolocalisation ou de renseignements identificatoires sur les utilisateurs de l’application qui sont transmis au gouvernement du Canada. Les utilisateurs qui lisent un code QR n’ont pas à laisser leurs informations personnelles à l’entrée d’un site.
* L’ajout des codes QR peut faire augmenter l’adoption de l’application, et ainsi faire de l’application un service plus efficace. Au Royaume-Uni, où les codes QR sont obligatoires pour les sites, le niveau d’adoption a augmenté considérablement.
* Ce service permet de tenir compte d’autres types de transmission de la COVID-19 : surfaces contaminées et aérosols (dans les lieux fermés, bondés de gens, peu aérés).

## Quelles sont les prochaines étapes?
Les équipes d’Alerte COVID commencent la recherche, ainsi que la conception et le développement des parties techniques du service. Au cours des prochaines semaines, nous publierons de la documentation plus détaillée sur cette fonctionnalité et les parcours utilisateurs. Le travail se déroule dans les dépôts suivants :

* https://github.com/cds-snc/covid-alert-app
* https://github.com/cds-snc/covid-alert-qr-codes
