[English](https://github.com/cds-snc/covid-alert-documentation/blob/main/COVIDAlertPrivacyAssessment.md)

# Alerte COVID : Évaluation de la protection de la vie privée de l’application de notification d’exposition à la COVID-19

_Division de la gestion de la protection des renseignements personnels de Santé Canada et de l’Agence de la santé publique du Canada_

Octobre 2020 – [Historique des versions](https://github.com/cds-snc/covid-alert-documentation/commits/main/EvaluationViePriveeAlerteCOVID.md) – [Également publiée sur Canada.ca](https://www.canada.ca/fr/sante-publique/services/maladies/maladie-coronavirus-covid-19/alerte-covid/politique-confidentialite/evaluation.html)

* [1. Objectif](#1-objectif)
* [2. Portée](#2-portée)
* [3. Contexte](#3-contexte)
* [4. Partenaires et intervenants](#4-partenaires-et-intervenants)
* [5. Fonctionnement de l’application Alerte COVID](#5-fonctionnement-de-lapplication-alerte-covid)
* [6. Analyse de la protection des renseignements personnels](#6-analyse-de-la-protection-des-renseignements-personnels)
* [Annexe A : Liste des données sur l’application Alerte COVID](#annexea-liste-des-données-sur-lapplication-alerte-covid)
* [Notes de bas de page](#notes-de-bas-de-page)

## 1\. Objectif

Évaluer les répercussions liées à la vie privée de la mise en œuvre d’une application nationale unique de notification d’exposition à la COVID-19 fondée sur l’interface de programmation d’applications (API) de notification d’exposition de Google/Apple.

## 2\. Portée 

Cette évaluation portera sur les répercussions de l’application sur la vie privée, particulièrement en ce qui a trait aux renseignements ou aux données qui seront sous le contrôle du gouvernement du Canada, y compris les données qui seront transmises au serveur du gouvernement du Canada (serveur de clés). Elle n’examinera aucun renseignement sous le contrôle des provinces et territoires (PT), comme le mécanisme par lequel les clés à usage unique sont distribuées aux particuliers dans le cas des PT qui distribuent eux-mêmes les clés à usage unique.<sup id="f1">[[1]](#portail)</sup>

Certains processus qui se déroulent au niveau des PT, sur un appareil, ou à destination et en provenance d’un appareil, lorsque le gouvernement du Canada n’aura accès à aucune des données, sont décrits dans la présente évaluation afin de décrire la circulation complète des renseignements, même si ces données ne sont pas considérées comme étant sous le contrôle du gouvernement du Canada. 

## 3\. Contexte

Dans le cadre des efforts pour réduire la propagation du virus de la COVID-19 tout en assouplissant progressivement les restrictions imposées et en permettant à l’économie de recommencer, le gouvernement du Canada a lançé le 31 juillet 2020 une application nationale unique de notification d’exposition à la COVID-19 (ci-après dénommée Alerte COVID). Cette application est interopérable entre les provinces et a été conçue pour minimiser la collecte et le stockage de renseignements qui permettraient d’identifier les utilisateurs. Afin de minimiser les risques relatifs à la vie privée, on a déterminé qu’une application de notification d’exposition, par rapport à une application de recherche de contacts, était l’approche privilégiée pour établir une solution numérique pancanadienne afin de soutenir les efforts visant à réduire la propagation du virus.

La notification d’exposition est considérée comme une approche peu intrusive destinée à être utilisée en combinaison avec et à l’appui des mesures de santé publique actuellement prises dans tout le Canada en réponse à la pandémie. Alerte COVID suit une approche entièrement décentralisée selon laquelle les renseignements identifiables ne sont pas collectés et stockés dans un seul lieu central. Au lieu de cela, lorsqu’un utilisateur télécharge l’application et consent à ses diverses fonctions, son appareil mobile transmet des identifiants aléatoires qui sont utilisés pour enregistrer la proximité avec l’appareil d’un autre utilisateur de l’application. Cette méthode diffère des applications de recherche de contacts qui accèdent aux données de localisation d’un appareil et les signalent aux autorités de santé publique. La section 5 du présent document fournit de plus amples renseignements sur le fonctionnement de l’application. 

L’application vise à compléter les mesures existantes pour réduire la propagation du virus, y compris la recherche manuelle des contacts. Elle permet d’informer les Canadiens s’ils ont été près d’une personne qui a reçu un diagnostic de COVID-19 et qui utilise également l’application, et les encourage à prendre des mesures appropriées (par exemple, se faire tester). Si quelqu’un a eu un test positif pour la COVID-19 dans une province ou un territoire utilisant l’application, les autorités locales de santé publique peuvent le conseiller sur les prochaines étapes et lui fournir une clé unique à entrer dans l’application, ce qui à son tour informera les autres utilisateurs de l’application qui ont été proches d’eux. Cette mesure aidera à réduire la propagation globale du virus.

Les avantages de cette approche en matière de santé publique comprennent l’encouragement des tests pour ceux qui apprennent qu’ils ont un risque élevé d’exposition, et la mise en garde des utilisateurs d’applications qui reçoivent des messages de risque accru d’ajuster leur comportement pour éviter de mettre d’autres personnes en danger, même s’ils ne présentent pas actuellement de symptômes. Par exemple, si quelqu’un reçoit une notification, il peut décider de ne pas rendre visite à un parent âgé ou d’assister à un rassemblement social. Cela permet aux Canadiens d’assumer leurs responsabilités et de réduire la propagation de la maladie dans la collectivité.

Chaque PT a la possibilité d’adopter l’application aux besoins de sa compétence. Aucune donnée provenant d’une application de notification d’exposition ou de recherche des contacts préexistante que les PT pourraient déjà avoir en place ne sera transférée à l’application nationale de notification d’exposition à la COVID-19.

## 4\. Partenaires et intervenants

Voici la liste des partenaires et des intervenants qui participent au développement et à la diffusion de l’application, ainsi que leurs rôles et responsabilités respectifs :

### Santé Canada (SC) 

SC est responsable de la mise en œuvre globale de l’application. Son rôle consiste à collaborer avec les provinces et les territoires pour encourager la participation et faciliter l’intégration de l’application. SC est également responsable d’évaluer les répercussions et les risques relatifs à la vie privée associés à la mise en œuvre de l’application et d’engager le Commissariat à la protection de la vie privée à des consultations valables et d’obtenir une rétroaction significative. De plus, SC met en œuvre une stratégie de communication pour stimuler l’adoption de l’application, appuyée par d’autres entités.

### Secrétariat du Conseil du Trésor – Service numérique canadien (SNC)

Le SNC est responsable de fournir des services de soutien interne (services de technologie de l’information) à Santé Canada. Il est responsable du développement des composantes technologiques de l’application de notification d’exposition. En plus de développer l’application, le SNC exploite le serveur de clé du gouvernement du Canada (situé au Canada) qui stocke des clés chiffrées de diagnostic qui reflètent les cas positifs à la COVID-19. Le serveur fonctionne sur une solution infonuagique achetée par le biais du service de courtage en nuage de Services partagés Canada (SPC). Le SNC apporte également un soutien aux partenaires des provinces et des territoires pour l’intégration de la distribution de clés uniques dans leurs processus de notification des résultats. Il s’agit notamment de fournir aux PT l’accès à des clés à usage unique que les utilisateurs entreront dans l’application lorsqu’ils reçoivent un diagnostic positif, par le biais d’une API ou d’un portail géré par le gouvernement fédéral à l’intention des professionnels de la santé autorisés.

Le SNC est appuyé par la Division de la cybersécurité du Bureau du dirigeant principal de l’information (BDPI). La Division de la cybersécurité prête son expertise en matière de sécurité pour appuyer les efforts du SNC en matière d’assurance de la sécurité, de modélisation des menaces et d’évaluation des risques.

### Innovation, Sciences et Développement économique (ISDE)

ISDE est responsable de l’élaboration, de la mise en œuvre et du soutien d’un modèle de gouvernance pour appuyer le déploiement efficace de l’application avec SC. Plus précisément, ISDE a joué un rôle en tant que responsable conjoint avec SC dans la mise en place d’un secrétariat et continue de jouer un rôle en assurant les fonctions au Conseil consultatif de l’application d’avis d’exposition à la COVID-19.

### Centre canadien pour la cybersécurité (CCC / Centre pour la cybersécurité)

Conformément à son mandat de fournir des conseils et une orientation en matière de cybersécurité aux partenaires fédéraux et des infrastructures essentielles, le Centre pour la cybersécurité fournit une aide spécialisée en matière de cybersécurité sous la forme d’un examen de la conception et de l’architecture des systèmes, d’une analyse et d’un examen du code source, ainsi que d’activités connexes d’assurance de la sécurité. L’application bénéficie des solides mesures de protection de la sécurité des systèmes fédéraux gérés par divers organismes, dont SPC et le Centre pour la cybersécurité. Le Centre pour la cybersécurité ne participe pas à l’exploitation de l’application et ne recueillera ni n’analysera les renseignements sur les utilisateurs dans le cadre de l’initiative gouvernementale de notification d’exposition à la COVID-19.

### Google/Apple 

Google et Apple ont développé conjointement l’API de l’application de notification d’exposition adoptée, sous réserve des conditions générales de [Google](https://blog.google/documents/72/Exposure_Notifications_Service_Additional_Terms.pdf) et d’[Apple](https://developer.apple.com/contact/request/download/Exposure_Notification_Addendum.pdf) (hyperliens en anglais seulement) par le gouvernement du Canada pour l’application Alerte COVID. Ni Google ni Apple n’ont accès aux données. Le SNC consulte Google et Apple lorsque les deux entreprises publient de nouveaux changements à un système d’exploitation ou à un cadriciel.

### Shopify

Les volontaires de Shopify ont développé un [code de logiciel à source libre](https://github.com/CovidShield) (hyperlien en anglais seulement) compatible avec l’API Google/Apple, disponible pour toute compétence qui souhaite développer un système de notification d’exposition. Alerte COVID a été développé à l’aide de ce code source. En aucun moment Shopify n’a pu et ne peut ajouter de code dans le référentiel de codes administré par le SNC, qu’il s’agisse de l’entreprise comme telle ou d’employés volontaires de Shopify. Tout le personnel pouvant être intégré à l’équipe du SNC pour l’aider sera géré conformément aux politiques de dotation du Conseil du Trésor.

### BlackBerry

BlackBerry a fourni un soutien à titre consultatif et gracieux pour examiner la sécurité du code source. On leur a donné accès en lecture seule au code source du SNC et à l’infrastructure d’essai afin de découvrir explicitement les vulnérabilités ou les faiblesses de notre mise en œuvre. En aucun moment BlackBerry n’a eu ou n’a ou n’exigera un accès aux données pour effectuer son audit de sécurité.

## 5\. Fonctionnement de l’application Alerte COVID

Le système de l’application Alerte COVID comporte trois éléments :

1. l’application mobile (au niveau fédéral) ;
2. le serveur clé (au niveau fédéral) ;
3. le processus de distribution des clés à usage unique (au niveau provincial).

Les utilisateurs téléchargent volontairement l’application à partir de la boutique Google Play ou de la boutique Apple iOS sur leur appareil et donneront leur consentement pour participer au processus de notification d’exposition. Plus précisément, ils devront examiner et accepter une déclaration claire et accessible qui leur fournira des renseignements sur le fonctionnement de l’application, la manière dont les renseignements sur l’exposition seront reçus par l’utilisateur et transmis aux autres utilisateurs, les données qui seront recueillies à leur sujet, la manière dont ces données seront utilisées et le lieu où elles seront stockées. 

Le téléchargement et l’installation de l’application ne lancent pas le processus de notification d’exposition. Lorsqu’un utilisateur ouvre l’application pour la première fois, on lui présente une procédure sur le fonctionnement des notifications d’exposition et le partage des données. On lui demande ensuite s’il souhaite activer les notifications d’exposition. Une boîte de dialogue de consentement du système d’exploitation de son appareil s’affiche. S’il active les notifications d’exposition, la « couche » de notification d’exposition de l’API Google/Apple (couche GAOS) de l’appareil est activée. Cela active également la fonction Bluetooth de l’appareil, de sorte que l’appareil commence à envoyer et recevoir des signaux mobiles vers d’autres utilisateurs qui ont téléchargé l’application. Cette communication Bluetooth entre les utilisateurs participants est une communication d’appareil à appareil de courte portée; rien n’est transmis à un serveur. 

La conception de l’API Google/Apple est telle que cette couche protégée du système d’exploitation est isolée, de sorte qu’aucune autre application sur l’appareil ne peut accéder à ses données, et même l’application de notification d’exposition ne peut pas accéder aux données sans le consentement explicite de l’utilisateur. Une seule application par appareil peut accéder à la couche Google/Apple, et une seule application par région géographique est autorisée.

### Qu’est-ce qui est communiqué exactement entre les utilisateurs participants?

Chaque appareil sur lequel l’application est installée envoie et reçoit des codes aléatoires appelés des identifiants de proximité variable (IPV) qui ne sont pas statiques : chaque jour, la couche Google/Apple génère automatiquement une clé d’exposition temporaire (CET). La CET du jour génère ensuite un nouvel IPV toutes les 5 à 20 minutes. Ce sont ces IPV en constante évolution qui sont communiqués avec d’autres appareils.

La génération quotidienne de CET et la génération fréquente d’IPV sont des caractéristiques de conception visant à atténuer le risque de réidentification des utilisateurs. (De plus, ils sont conçus pour réduire au minimum transfert de données afin de conserver la bande passante.) Les IPV ne sont pas identifiables et ne sont pas accessibles à l’application ou transmises au serveur de clés. Par conception, les IPV sont censés être publics (ils sont partagés avec d’autres appareils par Bluetooth), et ne fournissent donc aucune forme de renseignements d’identifiables en l’absence d’autres renseignements. Même si un IPV était intercepté par un appareil exploité par un acteur malveillant, il serait un nombre totalement insignifiant, et ne serait pas relié à un appareil sans effort significatif. Les CET sont stockées sur l’appareil, mais l’on ne peut les communiquer au serveur de clés qu’en cas de résultat positif et de consentement explicite de l’utilisateur.

Lorsqu’un utilisateur reçoit un résultat positif au test de la COVID-19, les autorités de la santé PT qui ont adopté l’application lui fournissent une clé unique<sup id="f2">[[2]](#jetons-api)</sup> et des instructions sur la manière de l’entrer dans l’application.<sup id="f3">[[3]](#variation-pt)</sup> Certaines PT ont la capacité d’extraire des clés à usage unique du serveur de clés à l’aide de leur infrastructure informatique actuelle (par exemple, certaines provinces et territoires disposent d’une plateforme pour donner aux particuliers en ligne des résultats de la COVID-19 et la même plateforme peut être utilisée pour livrer des clés à usage unique), alors que d’autres PT ne dispose pas de cette capacité (par exemple, certains donnent les résultats des tests au téléphone). Dans le cas des PT qui ne disposent pas de la capacité d’extraire les clés à usage unique, le SNC a développé le portail Alerte COVID (le portail) que les provinces et territoires peuvent utiliser pour extraire les clés et les remettre aux utilisateurs de l’application qui ont testés positifs pour la COVID-19.

Bien que le portail dépendra de l’extraction de clés à usage unique provenant du serveur clé, il n’est pas connecté à l’application d’aucune façon et ne sera pas connecté à aucun système informatique d’une province ou d’un territoire. Seuls les renseignements personnels des administrateurs et des professionnels de la santé des provinces et des territoires seront recueillis de sorte qu’ils puissent créer des comptes au portail et extraire les clés à usage unique. Le portail ne recueillera ni ne conservera des renseignements sur les patients.

Une fois qu’un clé à usage unique est entré dans l’application, celle-ci validera la clé et demandera à l’utilisateur s’il souhaite que ses CET soient envoyées au serveur de clés.<sup id="f4">[[4]](#processus-envoie)</sup> Si la personne répond par l’affirmative, l’application communique avec la couche Google/Apple. La couche Google/Apple demande une seconde fois si la personne consent à envoyer leurs CETs au serveur de clés. Si la personne y consent, les CET sont envoyées au serveur de clés, ce qui permet aux autres utilisateurs avec lesquels elle a été en contact au cours des 14 derniers jours d’être avisés, une fois que leur application a téléchargé ces clés. Les utilisateurs de l’application ont également la possibilité de télécharger leurs clés de diagnostic pendant les 14 jours _suivant_ la réception d’un diagnostic positif, dans le scénario malheureux où une personne qui a la COVID-19 ne peut pas se mettre en quarantaine (par exemple, n’a pas de congé de maladie; vit seul et doit faire des emplettes).

### Option d’entrer la date d’apparition de symptômes et de la date du test

Après avoir entré une clé à usage unique, l’on demandera à l’utilisateur s’il y a des symptômes et, si c’est le cas, la date d’apparition de ses symptômes. Si l’utilisateur ne sait pas avec certitude s’il a des symptômes ou s’il est asymptomatique, on lui demandera la date de son test. L’utilisateur peut choisir de ne pas répondre à ces questions.

Si l’utilisateur entre la date d’apparition de symptômes ou la date d’un test, l’application se sert de cette information pour déterminer les dates où il est probablement le plus contagieux (deux jours avant l’apparition de symptômes ou le test) et télécharge seulement ses CET<sup id="f5">[[5]](#generation-cet)</sup> des dates pertinentes au serveur national. Si l’utilisateur n’entre pas la date d’apparition de ses symptômes ou la date d’un test, l’application téléchargera les CET à partir des dernier 14 jours.

Le but est de cerner de façon plus précise les gens qui auraient pu être en contact avec l’utilisateur dont le test est positif à la COVID-19 pendant la période où celui-ci était probablement le plus contagieux en leur envoyant une notification d’exposition. Lorsque l’utilisateur entre une date d’apparition de symptômes ou une date de test, celle-ci n’est pas transmise au serveur de clés. La date est mise en mémoire dans le téléphone jusqu’à ce que l’utilisateur ferme l’écran ou effectue le premier téléchargement de ses CET; à ce stade-là, la date n’est plus stockée nulle part.

Les CET sont générées une fois par jour et expirent après 14 jours sur l’appareil. Une CET devient une « clé de diagnostic » une fois qu’elles sont libérées pour être téléchargées sur le serveur de clés. Si l’utilisateur consent à télécharger et à transmettre les clés de diagnostic, les autres utilisateurs avec lesquels il a été en contact peuvent recevoir une notification.<sup id="f6">[[6]](#envoie-prochaines-etapes)</sup> Veuillez noter que si une personne a eu un nombre très limité de contacts au cours des 14 derniers jours, il est possible que l’utilisateur qui reçoit la notification puisse l’associer à une personne.<sup id="f7">[[7]](#petits-contextes-communautaires)</sup> 

### Comment les personnes sont-elles informées de l’exposition à une personne dont le test est positif?

Selon un calendrier prédéfini (une fois toutes les 4 à 24 heures, selon la charge de la batterie, et quand l’application est ouverte), l’application télécharge les nouvelles clés de diagnostic du serveur de clés. L’application transmet ces clés de diagnostic à la couche GAOS qui génère ensuite de nouveaux IPV à partir de chacune des clés de diagnostic fournies. Le système GAOS compare ces IPV régénérés à la liste des IPV stockés localement qui se sont rencontrés au cours des 14 derniers jours. Si la couche GAOS constate que l’un des IPV régénérés et stockés localement correspond, et que les critères de risque de notification d’exposition sont remplis (durée d’exposition, intensité du signal, etc.), la couche GAOS envoie un signal positif à l’application. Si l’application reçoit un signal positif, elle envoie une notification d’exposition à l’utilisateur final. 

La correspondance se fait sur l’appareil. Le serveur de clés n’a aucun moyen de savoir si deux appareils ont interagi. D’autres pays ont ajouté un flux volontaire pour permettre aux utilisateurs informés de télécharger ces notifications à des fins d’analyse de la santé publique, une fonction qui est conforme aux modalités de l’accord-cadre sur les notifications d’exposition – bien qu’il reste à voir si cette fonctionnalité serait ajoutée à la mise en œuvre du Canada pour appuyer les efforts des PT ou de l’autorité fédérale de santé publique. Si cette fonctionnalité était envisagée (et notez qu’elle n’est pas en vigueur), nous consulterons à nouveau le Commissariat à la protection de la vie privée (CPVP).

Lorsqu’un utilisateur de l’application est déclaré positif pour la COVID-19 dans une province ou un territoire qui a adopté l’application, il obtiendra une clé unique qui lui sera fourni par sa province ou son territoire (la façon dont cela se produit dépendra du PT). Cette clé est fourni à la province ou au territoire par le gouvernement du Canada, et le gouvernement du Canada n’a aucun moyen de savoir à qui cette clé est associé (c’est-à-dire, la personne qui recevra cette clé). Tout ce que le gouvernement du Canada sait, c’est que quelqu’un dans une province ou un territoire a été déclaré positif pour la COVID-19. Cela dit, les protocoles d’entente conclus avec les PT qui adoptent l’application comprendront des exigences visant à protéger les clés, à s’assurer qu’ils ne sont conservés que le temps nécessaire et à les supprimer une fois obtenus par l’utilisateur de l’application.

Lorsque des personnes sont avisées d’une exposition à une personne qui a obtenu un résultat positif au test, l’application fournira des renseignements stockés dans l’application qui sont transmis par les autorités de la santé provinciales (par exemple des renseignements sur les endroits où se faire tester).

## 6\. Analyse de la protection des renseignements personnels

Notre analyse de la protection de la vie privée se divise en deux parties. La première partie examine s’il existe une collecte de renseignements personnels. La deuxième partie consiste en une analyse de l’application en fonction des principes de protection de la vie privée énoncés dans la [Déclaration conjointe des commissaires fédéral, provinciaux et territoriaux à la protection de la vie privée, publiée le 7 mai 2020](https://priv.gc.ca/fr/nouvelles-du-commissariat/allocutions/2020/s-d_20200507/). 

### Des renseignements ou des données personnelles sont-ils recueillis?

Les éléments de données (voir l’annexe A) qui seront sous le contrôle du gouvernement du Canada, et stockés dans le serveur de clés du gouvernement du Canada (situé au Canada) ne contiennent aucun identifiant direct (par exemple, nom, numéros d’identification, etc.). 

On trouvera ci-après de plus amples renseignements sur les IPV et les CET, sur l’émission des clés à usage unique fournis aux utilisateurs de l’application qui reçoivent un diagnostic positif, sur l’utilisation des adresses IP pour des raisons de sécurité et sur l’identifiant de hachage. Nous apporterons également plus de précisions quant aux mesures de protection très solides qui sont en place et à la courte conservation de certains de ces éléments.

Tout d’abord, il convient de noter que, peu importe l’application, les PT recueillent des renseignements personnels sur les personnes qui ont été déclarées positives pour la COVID-19 selon leurs exigences législatives – cela se produit entièrement à l’extérieur de l’application et n’est pas recueilli par le gouvernement du Canada par l’entremise de l’application. 

#### IPV et CET

Comme décrit dans la section 5, les IPV et les CET générées par l’application sont une caractéristique de conception visant à réduire le risque de réidentification à près de zéro. Les données ne permettent pas d’identification directe, et parmi ces éléments, seules les CET sont stockées sur le serveur de clés et seulement lorsqu’une personne a été testée positive et choisit de télécharger ces renseignements. 

De plus, les IPV sont censés être publics par conception (ils sont partagés avec d’autres appareils par Bluetooth), et ne fournissent donc aucune forme de renseignements identifiables en l’absence d’autres renseignements. Même si un IPV était intercepté par un appareil exploité par un acteur malveillant, il serait un nombre insignifiant à lui seul, et ne serait pas relié à un appareil sans effort significatif. Il y a un risque très improbable qu’un acteur malveillant hautement motivé puisse tirer parti de ce qu’on appelle une « attaque de recoupement de données ». En plaçant des appareils de collecte Bluetooth à divers endroits d’une ville – par exemple, à chaque intersection – ils pourraient recueillir les IPV des passants. Si une personne a été diagnostiquée et décidait de télécharger ses clés de diagnostic, cet attaquant pourrait recréer le parcours d’un appareil dans la ville. Cela dit, pour suivre efficacement le parcours de quelqu’un, un attaquant devrait avoir de nombreux appareils de collecte déployés à une densité importante dans toute une région géographique. Une telle attaque est possible, mais nécessite des ressources et une expertise considérables pour être mise en œuvre. De plus, la probabilité de succès d’une telle attaque est encore plus faible, étant donné qu’il y a de fortes chances que l’acteur malveillant soit arrêté et que l’attaque soit évitée.

#### Clés à usage unique, adresses IP, jetons API et identifiants de hachage

##### Clés à usage unique et jetons API

Lorsqu’un utilisateur de l’application est déclaré positif pour la COVID-19 dans une province ou un territoire qui a intégré l’application, il obtiendra une clé unique qui lui sera fourni par sa province ou son territoire (la façon dont cela se produit dépendra du PT). Cette clé est fourni à la province ou au territoire par le gouvernement du Canada, et le gouvernement du Canada ne sait pas à qui cette clé est associé (c’est-à-dire, la personne qui recevra cette clé). Tout ce que le gouvernement du Canada sait, c’est que quelqu’un a été déclaré positif pour la COVID-19. Cela dit, les protocoles d’entente conclus avec les PT qui adoptent l’application comprendront des exigences visant à protéger les clés, à s’assurer qu’ils ne sont conservés que le temps nécessaire et à les supprimer une fois obtenus par l’utilisateur de l’application. De plus, chaque province protégera les renseignements conformément aux exigences qui lui sont imposées par les lois provinciales ou territoriales applicables.

Lorsqu’une province ou un territoire demande une clé à usage unique pour le fournir à l’utilisateur, le système de la province ou du territoire pour obtenir la clé doit prouver au serveur de clés qu’il est légitime – c’est-à-dire que le système de la province ou du territoire est géré par un fournisseur de soins de santé de la province ou du territoire. Pour gérer cette authentification, le serveur de clés utilise des jetons API. Chaque jeton API est une chaîne alphanumérique aléatoire d’au moins 20 caractères, générée par le SNC. Le SNC génère un jeton API pour chaque système de la province ou du territoire intégrant avec le serveur de clés afin d’obtenir des clés uniques. Le système de la province ou du territoire fournit ce jeton API au serveur de clés lorsqu’il demande une clé unique. 

Les PT peuvent également générer des clés à usage unique en utilisant un portail de soins de santé administré par le gouvernement du Canada. Dans ce cas, les professionnels de la santé qui ont été autorisés par une province ou un territoire peuvent ouvrir une séance dans un portail sécurisé administré par le SNC. Ce portail de soins de santé ne renferme aucune donnée sur les patients et est utilisé que pour générer des clés à usage unique, qui sont extraits au moyen d’un jeton API provenant du serveur de clés. Il incombe aux PT de désigner les fonctionnaires issus de leurs organisations de soins de santé qui peuvent servir comme administrateurs du portail et de gérer les comptes des utilisateurs pour leur PT respectif.<sup id="f8">[[8]](#portail-vie-privee)</sup>

Tel que décrit à la section 5, la clé unique existe pour permettre aux utilisateurs (qui reçoivent la clé par leur province) de télécharger leurs clés de diagnostic sur le serveur de clés, en agissant comme une mesure anti-pourriel pour s’assurer que les fausses clés de diagnostic ne sont pas téléchargées accidentellement ou de façon malveillante. Les clés de diagnostic ne sont pas associées au clé à usage unique ni téléchargées sur le serveur de clés avec la clé. Une fois que la clé est entré dans l'application par l'utilisateur, elle est envoyée directement de l'application au serveur de clés, et elle n'est pas conservé dans l'application. Le serveur de clés vérifie ensuite si cette clé unique est valide ou non. Si elle est valide, le serveur de clés efface son enregistrement de la clé unique et permet à l'application de télécharger les clés de diagnostic de l'appareil, avec le consentement de l'utilisateur, en échangeant une paire de clés de chiffrement avec l'application pour s'assurer que les clés de diagnostic sont chiffrées en transit. Par conséquent, comme nous l'avons noté, la clé unique n'est pas associé aux clés de diagnostic téléchargées.

Les utilisateurs ont l’option d’entrer la date de l’apparition de symptômes ou la date du test afin d’affiner le processus de notification d’exposition aux utilisateurs qui ont été en proche contact avec un cas positif durant la période de contagion. Bien que ces données ne soient pas téléversées au serveur, il est possible théoriquement de calculer le nombre des CET téléchargées par événement à partir du volume du téléchargement et, en faisant de l’ingénierie inverse, de dériver la date probable de l’apparition de symptômes ou du test au moyen de l’information et de l’horodatage des opérations informatiques. Même si une date probable est déduite par ingénierie inverse, le risque de réidentification demeure faible, car cela nécessiterait un effort et un accès de même niveau que ce qui serait nécessaire pour lier un diagnostic positif à une adresse IP particulière (on en traite plus à fond plus loin). Ajoutons que même si cela était réalisable, il est impossible de savoir de quelle date il s’agit : la date d’apparition de symptômes ou la date d’un test.

Pendant les 14 jours suivant l’entrée d’une clé de diagnostic, l’application « sait » qu’une personne a réussi à entrer un clé unique valide. Il en est ainsi qu’ils ont l’option de télécharger leurs clés de diagnostic pendant les 14 jours suivant la réception d’un diagnostic positif (ainsi que les jours précédant leur diagnostic positif; le nombre de jours dépend si un utilisateur à entrer la date d’apparition de symptômes ou la date d’un test). Dans le scénario malheureux où une personne qui a la COVID-19 ne peut pas se mettre en quarantaine, cette personne télécharge ses clés d’exposition temporaires sur le serveur de clés; ce qui les rend disponibles au téléchargement par les téléphones d’autres utilisateurs. L’application sur ces téléphones et la couche API font ensuite le rapprochement pour déterminer, en ce qui concerne chacun de ces téléphones, si le téléphone, et donc son propriétaire, a été en contact avec le téléphone de la personne qui a été déclarée positive pour la COVID-19.

##### Adresses IP

L’adresse IP accompagne toute demande faite auprès du serveur de clés (lorsqu’un utilisateur choisit de télécharger leurs codes aléatoires, ou entre leur clé unique). Cependant, l’adresse IP n’est pas intentionnellement « envoyée » par l’application. Elle accompagne naturellement la demande : les adresses IP sont des métadonnées requises dans le cadre du protocole Internet sous-jacent qui alimente la transmission de données sur l’Internet; sans cela, l’application et le serveur ne seraient pas en mesure de communiquer. En d’autres termes, les adresses IP accompagnent toutes les demandes adressées au serveur (génération de clé unique, vérification de clé unique, téléchargement de clé de diagnostic, etc.). Dans la plupart des cas, l’adresse IP n’est pas du téléphone en particulier, mais d’un routeur sans fil ou est attribuée de façon dynamique par un opérateur de réseau cellulaire. Peu de personnes ont des adresses IP statiques qui leur sont associées de façon permanente, en raison du nombre limité d’adresses statiques. En envoyant ces renseignements, l’adresse IP accompagne la demande, comme toute demande envoyée sur Internet. . 

Dans le cas où la clé unique n’est pas valide, l’adresse IP de l’utilisateur est conservée au niveau du serveur de clés pendant une [période continue de 60 minutes](https://github.com/cds-snc/covid-shield-server/blob/d2f9cf605f73437d271a801db7acb87a6ce53db4/pkg/persistence/queries.go#L12-L15) (hyperlien en anglais seulement). Après cinquante tentatives invalides consécutives à partir de la même adresse IP, l’adresse IP est bloquée pendant soixante minutes. L’adresse IP connexe est supprimée du système soixante minutes après la dernière tentative non valide pour vérifier une clé unique.

Les adresses IP sont conservées dans des registres d’accès sur le serveur services Web d’Amazon, qui est distincte du serveur de clés, pour une période de trois mois pour tous les registres, et jusqu’à 24 mois pour les ceux impliquées dans une enquête de sécurité, pour les systèmes de cybersécurité pour bien comprendre, de surveiller et de répondre à des attaques contre le système et pour le fonctionnement sécuritaire et fiable du service. De plus, les adresses IP ne sont pas utilisées par SNC pour identifier la source de quelque manière que ce soit, et elles ne sont associées à aucun autre élément de données dans le serveur. Les adresses IP sont recueillies à des fins de sécurité. Le système du SNC ne les utilise pas pour tenter d’identifier la source. Les adresses IP peuvent être divulguées pour l’application de la Loi dans le cas où un acteur malveillant a tenté de gain, ou acquis, l’accès au serveur où ils sont conservés. Ils seraient supprimés ainsi que d’autres données une fois que le système de notification d’exposition est fermé (c.-à-d., une fois que la pandémie est déclarée terminée), à moins qu’ils ne soient conservés dans le cadre d’une enquête de sécurité.

Le SNC n’a pas les moyens techniques de connecter une adresse IP ou un jeton API à un téléphone intelligent ou à une personne. Les jetons API sont uniquement associés aux systèmes des PT intégrants avec le serveur de clés afin d’obtenir des clés uniques. En ce qui concerne les adresses IP, techniquement, cela nécessiterait soit une analyse sophistiquée (au-delà des capacités du SNC), soit l’accès aux bases de données et les listes d’abonnés des fournisseurs de services Internet (pas dans la capacité de SNC d’accéder ou de contraindre). 

##### Identifiants de hachage

Ce qui suit fournit de plus amples renseignements sur l’identifiant de hachage dans le contexte de certaines PT utilisant un portail libre-service en ligne.

Lorsque le système des résultats de tests d’un PT utilisant cette fonction communique avec le serveur de clés du gouvernement du Canada pour obtenir une clé à usage unique, il passe à l’aide d’un identifiant de hachage produit par chiffrement, généré à l’aide d’une série d’algorithmes de hachage unidirectionnel. L’identifiant de hachage est généré par la province ou le territoire à partir d’éléments de données uniques sous leur contrôle, mais il est haché de telle manière que, lorsqu’il est donné au gouvernement du Canada, il est insignifiant.

Même si l’identifiant de hachage est stocké sur le serveur de clés du gouvernement du Canada, les renseignements utilisés pour le générer ne le sont pas. L’identifiant de hachage est associé à une clé unique lors de la génération de la clé.

Cette fonctionnalité a été ajoutée initialement à la demande de l’Ontario, afin d’éviter les abus du système. Le stockage de l’identifiant de hachage en même temps que la clé unique généré permet aux systèmes des PT de vérifier s’il faut ou non émettre une nouvel cclé unique. Le système des PT peut voir si une clé unique précédemment fourni avait déjà été demandé. Si une clé à usage unique fourni précédemment n’a pas encore été demandé, la génération d’une nouvelle clé à usage unique portant le même identifiant de hachage invalide automatiquement la clé à usage unique précédent. Si la clé à usage unique précédent n’a pas encore été demandé, une nouvelle clé n’est pas générée.

#### Points à considérer en matière de sécurité

En termes de risque pour la sécurité, une personne ayant un accès direct aux systèmes de soins de santé des PT au niveau des serveurs et des bases de données (professionnel de la santé, informaticien ou acteur malveillant qui s’était introduit dans ces systèmes) pourrait déterminer si une personne en particulier ayant reçu un diagnostic positif avait alors décidé de télécharger des clés de diagnostic. Ils ne pourraient pas suivre les clés de diagnostic qu’un patient a téléchargées par la suite.

On s’attend à ce que les PT utilisent des algorithmes de hachage cryptographique assez solides (la mise en œuvre de mesures de sécurité appropriées fera partie des ententes conclues avec les provinces), de sorte que le gouvernement du Canada est incapable d’identifier quelqu’un qui a l’identifiant de hachage. De plus, il ne peut être relié à aucune donnée en possession du gouvernement du Canada pour déterminer si quelqu’un a téléchargé ou non des clés de diagnostic.

#### Conclusion : Y a-t-il une collecte de renseignements ou de données personnels?

Nous reconnaissons qu’il n’y a jamais de risque zéro quand les données sont divulguées, et la seule façon de réduire le risque de divulgation des données à zéro est de ne pas divulguer de données du tout. 

Nous reconnaissons également la position adoptée par de nombreux organismes de réglementation de la vie privée qui estiment que l’évaluation du risque de la réidentification doit tenir compte non seulement des données elles-mêmes, mais aussi du contexte dans lequel les données sont partagées.

Le contexte du serveur de clés du gouvernement du Canada est celui qui présente le plus faible risque du spectre : il se caractérise par un accès restreint, des mesures de sécurité informatique solides et des ententes en place.

Dans le contexte plus vaste de l’ensemble de l’application de notification d’exposition :

*   l’adresse IP n’est pas nécessairement un identifiant direct;
*   l’accès est très restreint, tant du point de vue de la TI que de la gouvernance.

Nous tenons aussi qu’il s’agit d’une divulgation non publique avec une faible possibilité d’attaque et une faible incidence, ce qui signifie que la tolérance au risque doit être plus élevée.

Pour considérer ces données comme des renseignements personnels, il faudrait considérer automatiquement les données présentant un risque minimal de réidentification (plutôt qu’une possibilité sérieuse de réidentification, défini comme étant plus que frivole) comme des renseignements personnels, quel que soit le contexte. À notre avis, dans ce contexte, ces données demeurent en dessous du seuil de « risque sérieux de réidentification ».

De plus, la Cour fédérale dans l’affaire Sig Sauer (Canada (Commissaire à l’information) c. Canada (Sécurité publique et Protection civile Canada), 2019 FC 1279) a conclu que « Pour identifier une personne à l’aide d’un numéro de série, il faudrait accéder aux bases de données à accès restreint du gouvernement, lesquelles contiennent déjà des renseignements personnels, ou amener un responsable du gouvernement ou le fabricant à divulguer des renseignements personnels. Les éléments de preuve n’établissent pas l’existence d’une possibilité sérieuse que l’une ou l’autre de ces deux situations se produise. » Dans cette affaire, le juge McHaffie était satisfait qu’il n’y ait pas eu de renseignements personnels en cause.

Dans ce cas, les adresses IP ne révèlent pas d’identité individuelle; ils sont stockés sur un serveur sécurisé auquel seuls des employés limités du gouvernement du Canada ont accès, et ils sont tenus par des obligations de sécurité de protéger ces renseignements et de ne pas y accéder ou de les utiliser à des fins malveillantes. 

En conclusion, compte tenu de l’ensemble des circonstances, alors que les éléments de données échangés par l’application, le serveur de clés central et les serveurs des PT pourraient en théorie être utilisés pour produire des renseignements personnels identifiables, les mesures prises pour développer l’application, le serveur central de clés et les serveurs des PT, outre la manière dont ils recueillent, échangent, utilisent et conservent ces éléments de données, réduisent le risque au minimum possible. Notre évaluation globale est qu’il est si peu probable qu’une personne puisse être identifiée, que la collecte d’éléments de données (y compris les adresses IP) et leur utilisation n’arrivent pas au seuil de « possibilité sérieuse » qu’une personne puisse être identifiée<sup id="f9">[[9]](#gordon)</sup>.

Néanmoins, si l’on parvient à une conclusion différente quant à l’évaluation de la possibilité de considérer un élément de données comme des renseignements personnels, toutes les exigences de la _Loi sur la protection des renseignements personnels_ et des politiques du Conseil du Trésor sur la protection des renseignements personnels ont été respectées afin de garantir la protection des renseignements personnels des utilisateurs.

Veuillez noter que la liste des éléments de données (annexe A), et par conséquent cette évaluation, peut être modifiée à mesure que l’application est mise en œuvre et adoptée par les provinces et territoires. Le Commissariat à la protection de la vie privée sera consulté sur toute modification ou mise à jour substantielle qui pourrait avoir une incidence sur cette évaluation. 

### Principes de protection de de la vie privée 

#### _Consentement et confiance_

L’utilisation de l’application est volontaire. Si les utilisateurs ont reçu un diagnostic de COVID-19, ils devront aussi donner leur consentement pour que leurs CET soient téléchargées et mises à la disposition d’autres utilisateurs de l’application. Veuillez noter qu’aucun renseignement personnel identifiable n’est envoyé à d’autres utilisateurs ; ils sont seulement avertis qu’ils ont été exposés à la COVID-19 qu’une fois qu’ils ont téléchargé une clé de diagnostic correspondante à partir du serveur clé. La nature volontaire de l’application et les différents niveaux de consentement, associés au fait qu’il est improbable que des renseignements personnels soient recueillis par le gouvernement du Canada, visent à renforcer le niveau de confiance des Canadiens dans l’utilisation de cette application. L’efficacité de l’application dépend d’un certain niveau d’utilisation; par conséquent, la confiance est primordiale. 

#### _Autorité législative_

L’application, en tant qu’outil permettant d’améliorer les mesures existantes pour lutter contre la propagation du virus de la COVID-19, s’inscrit dans le cadre des mandats de SC et de ses exigences législatives conformément à l’article 4 de la _Loi sur le ministère de la Santé_ pour protéger la population canadienne contre les risques pour la santé et la propagation des maladies. En outre, le paragraphe 29.2 de la _Loi sur la gestion des finances publiques_ autorise le SNC à fournir des services de soutien internes (services informatiques) à SC et à remplir son rôle dans le développement de l’application, comme décrit dans la section 4 du présent document.

#### _Nécessité et proportionnalité_

##### La mesure est-elle manifestement nécessaire pour répondre à un besoin précis?

La COVID-19 est une nouvelle maladie très contagieuse dont nous savons encore très peu de choses. Il n’existe pas de vaccin ni de traitement fiable. Dans certains cas, elle peut être mortelle ou causer des dommages permanents, notamment de graves lésions pulmonaires ou des amputations de membres. Dans d’autres cas, les personnes atteintes ne présentent pas ou peu de symptômes. Les personnes asymptomatiques ou présymptomatiques peuvent infecter d’autres personnes. Il est possible qu’une personne qui a déjà eu la maladie soit à nouveau infectée.

Étant donné notre inaptitude à prévenir la maladie (faute d’un vaccin) ou à la traiter, les approches que nous avons adoptées, dont celle de demander aux Canadiens d’éviter les déplacements non essentiels à l’extérieur de leur domicile et de ne pas approcher de trop près les membres de leur famille et leurs amis, ont donné lieu à une réalité difficile à maintenir jusqu’à ce qu’un vaccin ou un traitement soit mis au point, ou que la maladie disparaisse d’elle-même de la population du simple fait que personne ne sort de son logis.

L’objectif public de cette application pancanadienne de notification d’exposition est d’assouplir en toute sécurité les restrictions à la liberté de mouvement et de permettre la réouverture prudente de l’économie tout en protégeant la vie, la santé et le bien-être de tous les Canadiens dans le contexte de la pandémie de COVID-19. 

Cet objectif pourrait être facilité davantage par la mise en place de mesures permettant une certaine forme de notification d’exposition au virus. La recherche manuelle des contacts est déjà en cours; cependant, elle prend énormément de temps et de ressources et repose par ailleurs sur la participation et la mémoire, parfois oublieuse, de chacun quant aux endroits qu’il a fréquentés au cours des 14 derniers jours. Un système automatisé pour aider à informer les personnes d’une exposition à la COVID-19 est un élément nécessaire pour assouplir les restrictions en toute sécurité et rouvrir l’économie jusqu’à ce qu’il y ait un vaccin ou un traitement efficace.

##### Est-elle susceptible de répondre efficacement à ce besoin?

L’efficacité des applications de notification d’exposition dépend fortement du niveau d’adoption; plus il y a d’utilisateurs qui téléchargent l’application, plus il y a de contacts qu’il pourra consigner. Alors que dans le passé les pays ont eu du mal à réaliser la base d’utilisateurs nécessaire, Apple et Google ont maintenant lancé une nouvelle technologie pour une approche de protection de la vie privée d’abord, afin que les citoyens puissent avoir confiance que leur gouvernement ne collecte pas de renseignements permettant d’identifier une personne. En plus d’une stratégie solide de communication et de marketing, on s’attend à ce que le nombre d’utilisateurs téléchargeant l’application augmente sensiblement par rapport à ce qui s’est produit dans les pays qui ont lancé de tels programmes dans les phases précédentes de la pandémie. Santé Canada s’attend à ce que l’application soit efficace pour atteindre les objectifs établis.

##### La perte de la vie privée est-elle proportionnelle au besoin?

Comme nous l’avons mentionné, il est peu probable que le gouvernement du Canada recueille des renseignements personnels au sujet des utilisateurs de l’application et les données recueillies sont généralement conservées pendant une courte période afin d’appuyer les mesures de sécurité. Autrement dit, tous les renseignements contenus dans l’écosystème de cette application sont conçus pour être conservés pendant la période la plus courte nécessaire pour répondre au besoin précis pour lequel cette information est fournie. Lorsqu’une personne reçoit une notification l’informant qu’elle était en contact étroit avec une personne dont le test est positif, mais que la personne qui a reçu la notification a été en contact avec très peu de personnes au cours des deux dernières semaines, il est possible qu’elle soit en mesure d’identifier cette personne. D’autres risques de réidentification sont possibles, mais ils seraient beaucoup plus difficiles à réaliser et donc beaucoup plus éloignés. Les répercussions limitées sur les renseignements personnels semblent proportionnelles au grand besoin de sauver des vies et d’alléger les restrictions imposées aux personnes, ce qui améliore également la santé mentale des Canadiens et permet de rouvrir l’économie de façon prudente et d’entreprendre le rétablissement.

##### Existe-t-il un moyen moins intrusif pour atteindre le même objectif?

Cette question vise à savoir si des mesures raisonnables ont été prises pour s’assurer que la quantité minimale de renseignements personnels requise pour atteindre l’objectif a été recueillie. Comme nous l’avons mentionné, il est peu probable que l’application comporte une collecte de renseignements personnels par le gouvernement du Canada. 

Nous notons d’ailleurs que l’autre option, une application de recherche des contacts, est plus intrusive relativement aux renseignements personnels, car elle collecte des données de géolocalisation et les communique aux autorités de santé publique. De plus, la recherche manuelle des contacts prend énormément de ressources et repose également sur la mémoire imparfaite des personnes relativement aux endroits où ils se sont rendus au cours des 14 derniers jours. Il s’agit de traceurs qui retracent les personnes directement (généralement par téléphone) pour les informer de leur risque d’exposition et les informer des prochaines étapes. Bien que la recherche manuelle des contacts continuera, la capacité supplémentaire fournie par l’application permet de notifier les personnes exposées, sans exiger la collecte de renseignements personnels qui se fait pendant la recherche manuelle. 

Pour ces raisons, l’application de notification d’exposition a été identifiée comme un complément précieux à la recherche manuelle qui exige moins de ressources et qui protège fortement les renseignements personnels des Canadiens.

#### _Principe de finalité_

L’application et les données qui y sont recueillies seront utilisées dans le but de freiner la propagation du virus de la COVID-19 au Canada. Par ailleurs, les données, qui seront évaluées pour assurer qu’elles ne constituent pas des renseignements personnels, serviront à faire un suivi du rendement de l’application et à mesurer ce rendement. De plus, toute nouvelle utilisation ou divulgation des données ne peut se faire qu’avec le consentement des personnes concernées. Veuillez noter que l’utilisation de l’API Google/Apple est conditionnelle à ce que toute utilisation ou divulgation de renseignements personnels soit fondée sur le consentement. 

#### _Dépersonnalisation_

L’application ne comprendra probablement pas la collecte de renseignements permettant d’identifier une personne. Les données collectées par le gouvernement du Canada avec l’application sont limitées et nous avons estimé qu’il n’y avait pas de possibilité sérieuse de réidentification.

#### _Durée limitée des mesures_

L’application dans son ensemble sera fermée dans un délai de 30 jours suivant la réception d’une déclaration par l’administratrice en chef de la santé publique du Canada que la pandémie sera terminée.<sup id="f10">[[10]](#criteres-pandemie)</sup> De plus, les personnes peuvent supprimer l’application en tout temps. Enfin, les CET sur l’appareil s’effacent après 14 jours. Autrement dit, tous les renseignements contenus dans l’écosystème de cette application sont conçus pour être conservés pendant la période la plus courte nécessaire pour répondre au besoin précis pour lequel cette information est fournie. 

Une fois que la décision a été prise d’arrêter le service ou programme, entre autres, l’application sera mise hors service. Cela inclut le serveur de clés et les portails à clés unique, ainsi que la possibilité de télécharger l’application dans les magasins d’applications Apple et Google.

Si des données regroupées et anonymes sont recueillies, cette collecte et la conservation des données seront évaluées pour s’assurer qu’elles répondent à toutes les exigences.

#### _Transparence_

Les utilisateurs qui téléchargent l’application devront examiner et accepter une déclaration claire et accessible qui leur fournit des renseignements sur le fonctionnement de l’application, la manière dont les renseignements sur l’exposition seront reçus par l’utilisateur et transmis aux autres utilisateurs, les données qui seront collectées à leur sujet et la manière dont ces données seront utilisées et où elles seront stockées. Notre analyse de la protection de la vie privée est accessible publiquement.

#### _Responsabilisation_

Le rendement et l’efficacité de l’application seront surveillés de près et évalués à mesure que davantage de Canadiens commenceront à l’utiliser. Le gouvernement du Canada travaille en étroite collaboration avec le Conseil consultatif pour régler les problèmes à mesure qu’ils se présentent. Le rôle du Conseil consultatif et de fournir des conseils et des avis d’experts pour s’assurer que l’application répond aux normes les plus élevées en matière de résultats de santé publique, de technologie, d’accessibilité et de respect de la vie privée.

Santé Canada est aussi en train d’élaborer un processus de surveillance/responsabilité complémentaire pour Alerte COVID. Le Commissariat à la protection de la vie privée des évaluations ayant une incidence sur la vie privée. 

#### _Mesures de sécurité_

L’application et son développement sont principalement mis en œuvre par des développeurs, des concepteurs et des chercheurs employés directement par le gouvernement du Canada, dont la cote de sécurité est proportionnelle au niveau d’accès dont ils disposent. Lorsqu’un soutien externe est apporté à titre consultatif (par exemple, BlackBerry, qui a gratuitement examiné le code source), le tiers n’a pas accès aux données du système. Le code et l’infrastructure peuvent être examinés sans donner accès aux données. Lorsqu’une aide extérieure est apportée à titre plus pratique (par exemple, des développeurs ayant des compétences spécialisées en matière d’applications mobiles ou d’infrastructure de serveurs pour assurer la sécurité et la fiabilité à l’échelle), ces personnes travailleront selon les modalités d’un contrat (soit au moyen du système d’approvisionnement ou de mécanismes comme Interchange), ce qui garantit qu’elles sont tenues aux mêmes normes que celles des employés du gouvernement du Canada. Les cotes de sécurité seront requises pour toute personne ayant accès à des infrastructures ou des données sensibles. 

De plus, l’infrastructure infonuagique sous-jacente qui hébergera le serveur de clés (fourni par les services Web d’Amazon situés au Canada) est acquis au moyen d’ententes de cadre infonuagique de Services partagés Canada, sous réserve des modalités contractuelles pour assurer que l’accès aux données et aux systèmes est restreint de façon appropriée. 

Des garanties procédurales et techniques sont mises en œuvre, conformément au processus d’évaluation de la sécurité et d’autorisation, afin de garantir que seules les personnes ayant besoin d’accéder à l’infrastructure ou aux données puissent le faire, et uniquement à des fins liées à la mise en œuvre du système de notification d’exposition. Le système est mis en œuvre selon le principe du droit d’accès minimal, c’est-à-dire que l’accès aux données est traité comme une exception et non comme la règle. Des processus sont en place, par exemple, pour garantir que le code est examiné par plusieurs développeurs avant d’être déployé, et que l’accès à l’infrastructure est à la fois contrôlé et surveillé. 

Enfin, le public sera informé de toute vulnérabilité ou menace à l’application, pour s’assurer qu’il peut prendre une décision éclairée. 

## Annexe A : Liste des données sur l’application Alerte COVID

<table>
  <tr>
   <td><strong>Composante</strong>
   </td>
   <td><strong>Élément</strong>
   </td>
   <td><strong>Certain?</strong>
   </td>
   <td><strong>Communiqué?</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Couche GA OS</strong>
   </td>
   <td><em>Clé d’exposition temporaire (CET)</em>
   </td>
   <td>Oui
   </td>
   <td>Dans <strong>l’application</strong>
   </td>
   <td>
<ul>

<li>Générée (une fois par jour) par la couche <strong>Google/Apple du système d’exploitation</strong>.

<li>Expiration après 14 jours sur l’appareil

<li>Deviennent des « <em>clés de diagnostic</em> » une fois qu’elles sont mises en ligne dans l’<strong>application</strong> pour téléchargement après un diagnostic positif et le consentement de l’utilisateur final.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Couche GA OS</strong>
   </td>
   <td><em>Identifiant de proximité variable (IPV)</em>
   </td>
   <td>Oui
   </td>
   <td>Vers la <strong>couche GA OS</strong> des autres appareils
   </td>
   <td>
<ul>

<li>Générée (toutes les 5 à 20 minutes) sur la base des <em>CET</em> (selon la <a href="https://blog.google/documents/69/Exposure_Notification_-_Cryptography_Specification_v1.2.1.pdf">spécification cryptographique</a><span style="text-decoration:underline;"> </span>(hyperlien seulement en anglais))

<li>Transmis (envoyé toutes les 250 ms) par Bluetooth vers d’autres appareils avec la <strong>couche</strong> <strong>GA OS</strong> activée 

<li>Reçu environ toutes les 5 minutes lorsque le cadre commence à rechercher rapidement des balises (mesure d’économie d’énergie)

<li>La <strong>couche OS</strong> enregistre les <em>IPV</em> avec lesquels l’appareil se trouve à proximité.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Application</strong>
   </td>
   <td><em>Clés de diagnostic</em>
   </td>
   <td>Oui
   </td>
   <td>Vers le <strong>serveur de clés</strong>
   </td>
   <td>
<ul>

<li>Les <em>CET</em> deviennent des <em>clés de diagnostic</em> lorsqu’un diagnostic positif est reçu et que l’utilisateur final consent à la diffusion des renseignements.

<li>Fournie à l’<strong>application</strong> par la <strong>couche GA OS</strong>, avec le consentement de l’utilisateur final (à la fois par l’<strong>application</strong> et par l’interface du système d’exploitation), pour être téléchargée sur le <strong>serveur de clés</strong>. 
<ul>
 
<li>Cela ne peut se produire que si l’utilisateur final a reçu un diagnostic positif.
 
<li>L’utilisateur final doit avoir reçu un <em>code</em> aléatoire <em>à usage unique</em> d’un professionnel de la santé (ou autrement distribué par le processus de notification des résultats des tests de la province ou du territoire) à télécharger sur le <strong>serveur de clés</strong>.
</li> 
</ul>

<li>Lors du premier téléchargement, la personne télécharge ses clés de diagnostic des 14 derniers jours (ou moins si l’utilisateur à entrer la date d’apparition de symptômes ou la date d’un test) sur le <strong>serveur de clés</strong>; pour chacun des 14 jours suivants, on lui demande également de consentir à télécharger la <em>clé de diagnostic</em> de chaque jour.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Application</strong>
   </td>
   <td><em>Renseignements personnels de l’utilisateur final</em>
   </td>
   <td>À déterminer
   </td>
   <td>Non
   </td>
   <td>
<ul>

<li>Les éléments potentiels comprennent : la préférence linguistique; la sélection de la province ou du territoire.

<li>Le protocole G/A stipule que la collecte de renseignements personnels doit être volontaire 

<li>À déterminer si certains renseignements seront recueillis dans l’<strong>application</strong>. 
<ul>
 
<li>Le GC préfère fortement ne pas en collecter, mais les provinces et territoires peuvent en demander (les discussions FPT se poursuivent), ou il peut être nécessaire de personnaliser l’application, par exemple sur les conseils donnés pour les prochaines étapes après avoir reçu la notification d’une exposition possible.
 
<li>L’<strong>application</strong> ne recueillerait jamais de données personnelles sur la santé.
 
<li>L’<strong>application</strong> ne transmettrait aucunement de données personnelles au <strong>serveur de clés</strong>.
</li> 
</ul>

<li>Il faut déterminer comment la collecte se fera dans l’<strong>application</strong>, le cas échéant. Par exemple, on peut demander à l’utilisateur final sa province ou son territoire chaque fois que cela est pertinent, au lieu de le stocker ou de l’enregistrer dans l’<strong>application</strong>.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Serveur</strong>
   </td>
   <td><em>Clés de diagnostic</em>
   </td>
   <td>Oui
   </td>
   <td>Dans <strong>l’application</strong>
   </td>
   <td>
<ul>

<li>Lorsqu’une personne reçoit un résultat positif, elle télécharge ses CET non expirées sur le <strong>serveur de clés</strong> sous forme de <em>clés de diagnostic</em> (les <em>CET</em> ne sont conservées sur l’appareil que pendant 14 jours) c’est-à-dire que le <strong>serveur</strong> contient les <em>CET</em> de personnes qui ont reçu un résultat positif, connu sous le nom de <em>clés de diagnostic</em>.

<li>Les <em>clés de diagnostic</em> sont effacées de la base de données du <strong>serveur</strong> après l’expiration de leur période de validité (sur le serveur clé pendant 14 jours et jusqu’à 7 jours supplémentaires dans les copies de sécurité de la base de données).

<li>L’<strong>application</strong> télécharge de nouvelles <em>clés de diagnostic</em> du <strong>serveur</strong> à intervalles réguliers (une fois toutes les 4 à 24 heures, selon la charge de la batterie, et quand l’application est ouverte; cela dépendra également de l’accès à Internet).

<li>Les <em>clés de diagnostic</em> sont regroupées en lots de 6 heures (pour toutes les <em>clés de diagnostic</em> reçues entre minuit et six heures du matin, le <strong>serveur</strong> les regroupe comme si elles avaient été reçues à minuit, de sorte que l’<strong>application</strong> ne peut pas déterminer l’heure précise à laquelle une <em>clé</em> a été téléchargée) (période de six heures à déterminer, qui passera probablement à 24 heures).

<li>Métadonnées associées : générées à l’heure (arrondie à l’heure pour réduire le risque d’atteinte à la vie privée); période de validité; niveau de risque de transmission (à déterminer comment il est défini/utilisé, le cas échéant); <em>clé API</em> qui a généré le <em>code unique</em> autorisant le téléchargement.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Serveur</strong>
   </td>
   <td><em>Clés à usage unique</em>
   </td>
   <td>Oui
   </td>
   <td>Aux utilisateurs finaux
   </td>
   <td>
<ul>

<li>Communiqué aux utilisateurs finaux au moyen des processus de notification des résultats des tests de santé des provinces et territoires (le mécanisme de distribution spécifique variera selon les provinces et territoires).

<li>Permet à l’utilisateur final de télécharger les <em>clés de diagnostic</em> sur le <strong>serveur</strong> : il s’agit essentiellement d’une mesure anti-pourriel (pour s’assurer que les <em>clés de diagnostic</em> ne sont pas téléchargées accidentellement ou par malveillance).

<li>Métadonnées associées : moment de la création, nombre de <em>clés de diagnostic</em> pouvant être téléchargées avec le clé à usage unique; clé publique cryptographique; clé privée cryptographique. 
<ul>
 
La clé à usage unique est supprimée de la base de données une fois qu’il a été « réclamé » par l’utilisateur final (c’est-à-dire saisi dans l’<strong>application</strong>).
 
<li>La <em>clé à usage unique</em> est remplacé par la clé publique cryptée et la clé privée cryptée une fois réclamée; la clé publique est communiquée à l’<strong>application</strong> pour permettre le téléchargement crypté des <em>clés de diagnostic</em>.
</li> 
</ul>
</li> 
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Serveur</strong>
   </td>
   <td><em>Clés API pour les clés à usage unique</em>
   </td>
   <td>Oui
   </td>
   <td>Aux provinces et territoires
   </td>
   <td>
<ul>

<li>Permet aux provinces et territoires d’obtenir des <em>clés à usage unique</em> du <strong>serveur</strong> pour les distribuer aux utilisateurs finaux au moyen de leurs processus de notification de résultat des tests.
</li>
</ul>
   </td>
  </tr>
</table>

## Notes de bas de page

<a name="portail">[1]</a>
     La présente analyse n’inclut pas une analyse exhaustive de la protection des renseignements personnels de la distribution des clés à usage unique pour les PT qui utilisent le portail Alerte COVID du gouvernement fédéral; cela étant dit, elle donne tout de même un aperçu du portail ainsi qu’une description des renseignements recueillis. Une analyse exhaustive de la protection des renseignements personnels pour le portail a été entreprise séparément. [↩](#f1)

<a name="jetons-api">[2]</a>
     Lorsqu’une province ou un territoire demande une clé à usage unique pour le fournir à l’utilisateur, le système de la province ou du territoire pour obtenir la clé doit prouver au serveur fédéral qu’il est légitime – c’est-à-dire que le système de la province ou du territoire est géré par un fournisseur de soins de santé de la province ou du territoire. Pour gérer cette authentification, le serveur fédéral utilise des jetons API. Chaque jeton API est une chaîne alphanumérique aléatoire d’au moins 20 caractères, générée par le SNC. Le SNC génère un jeton API pour chaque système du PT intégrant le serveur fédéral afin d’obtenir des clés à usage uniques. Le système du PT fournit ce jeton API au serveur fédéral lorsqu’il demande une clé à usage unique. Le jeton API ne peut pas être lié à d’autres renseignements pour identifier une personne, car il est destiné à authentifier un système de PT demandant une clé à usage unique. Une partie du jeton API est stockée en même temps que les entrées des clés à usage uniques et des clés de diagnostic pendant la période de 15 jours qu’ils sont conservés. En théorie, cela pourrait être utilisé pour effacer un ensemble de clés qui ont été téléchargées de manière malveillante si un jeton API donné à une province ou un territoire a été compromis. Il pourrait aussi servir à générer des mesures par région pour estimer l’absorption par rapport au nombre de cas COVID affichés. Par exemple, nous procédons actuellement à la désagrégation par province des clés à usage unique à des fins de mesure de la performance du serveur de sorte à connaître le nombre des clés à usage unique qui ont été produits par la province ou le territoire. [↩](#f2)

<a name="variation-pt">[3]</a>
     Veuillez noter que la façon dont ce processus se déroulera peut varier d’une province ou d’un territoire à l’autre. Bien que l’expérience de l’utilisateur puisse différer selon la province ou le territoire, le flux de données ne sera pas différent. [↩](#f3)

<a name="processus-envoie">[4]</a>
     De plus amples renseignements sur ce processus se trouvent à la rubrique « IPV et CET » de la section 6, Analyse de la protection de la protection de la vie privée. [↩](#f4)

<a name="generation-cet">[5]</a>
     Chaque jour, le cadriciel de notification des expositions Google/Apple génère automatiquement une CET. La CET du jour génère ensuite un nouvel identifiant aléatoire (IPV) toutes les cinq à vingt minutes. Les IPV sont partagés avec les autres appareils. [↩](#f5)

<a name="envoie-prochaines-etapes">[6]</a>
     Ils peuvent également recevoir des renseignements sur la marche à suivre concernant la notification (se faire tester, s’isoler, etc.). Ces détails relèvent des provinces et territoires. [↩](#f6)

<a name="petits-contextes-communautaires">[7]</a>
     Dans les contextes des petits communautés, il est probable que les personnes puissent être publiquement identifiées comme testées positives à la COVID par d’autres moyens (recherche manuelle des contacts ; les discussions entre les membres de la famille, les amis et les membres de la collectivité ; livraisons d’épicerie, etc.). L’application de notification d’exposition existe en tant que complément facultatif à un contexte plus large de réponses en santé publique et de discussions communautaires, dont beaucoup sont plus susceptibles d’identifier publiquement des personnes positives à la COVID que l’application elle-même. [↩](#f7)

<a name="portail-vie-privee">[8]</a>
     Pour plus d’informations sur le portail des soins de santé, voir la liste de vérification de la protection des renseignements personnels du portail Alerte COVID (à paraître). [↩](#f8)

<a name="gordon">[9]</a>
     [Gordon c. Canada (Santé), 2008 CF 258 (CanLII)](https://www.canlii.org/fr/ca/cfpi/doc/2008/2008cf258/2008cf258.html) [↩](#f9)

<a name="criteres-pandemie">[10]</a>
     Veuillez noter que les critères pour considérer la pandémie comme terminée et le processus de cette détermination sont encore à établir. [↩](#f10)
