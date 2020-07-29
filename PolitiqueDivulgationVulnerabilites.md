[English](https://github.com/cds-snc/covid-alert-documentation/blob/main/VulnerabilityDisclosurePolicy.md)

# Politique de divulgation des vulnérabilités pour l’application COVID Alerte

_Service numérique canadien & Bureau du dirigeant principal de l’information_ \
_Date: 2020-07-31_

Le gouvernement du Canada s’est engagé à protéger les renseignements des gens. L’application COVID Alerte a été construite ouvertement pour que tout le monde puisse voir la base de codes. Nous apprécions le temps et les efforts des chercheurs en sécurité et de tous ceux qui voudraient participer au projet. Cependant, nous n’offrons aucune récompense monétaire pour la divulgation des vulnérabilités.

Cette politique donne aux chercheurs en sécurité des lignes directrices claires pour mener des activités de détection de vulnérabilité et nous soumettre les vulnérabilités découvertes. Elle inclut ce qui suit :

*   **Quels sont les systèmes et les types de recherche** visés par cette politique? 
*   **La façon de nous envoyer des rapports de vulnérabilité.** 
*   **Combien de temps** nous demandons aux chercheurs en sécurité d’attendre avant de révéler publiquement les vulnérabilités.

Nous voulons que les chercheurs en sécurité se sentent à l’aise de signaler les vulnérabilités qu’ils ont découvertes afin que nous puissions les corriger et garder nos utilisateurs en sécurité. 

## Portée 	

Cette politique s’applique aux systèmes et services suivants :

*   [https://retrieval.covid-notification.alpha.canada.ca/](https://retrieval.covid-notification.alpha.canada.ca/services/version.json)
*   [https://submission.covid-notification.alpha.canada.ca/](https://submission.covid-notification.alpha.canada.ca/services/version.json)
*   Code de source 
    *   [https://github.com/cds-snc/covid-alert-server](https://github.com/cds-snc/covid-alert-server) 
    *   [https://github.com/cds-snc/covid-alert-app](https://github.com/cds-snc/covid-alert-app)
    *   [https://github.com/cds-snc/covid-alert-portal](https://github.com/cds-snc/covid-alert-portal) 

**Tout service non expressément mentionné ci-dessus, comme les services interreliés, est exclu du champ d’application** et n’est pas autorisé à être testé. De plus, les vulnérabilités trouvées dans les systèmes non gouvernementaux du Canada ne relèvent pas de la portée de la présente politique et devraient être signalées directement, conformément à la politique de divulgation en vigueur (le cas échéant). Si vous ne savez pas si un système ou un point terminal fait partie de la portée ou non, communiquez avec nous à [securite@cds-snc.ca](mailto:securite@cds-snc.ca) avant de commencer votre recherche.

Bien que nous soyons responsables du développement et de la tenue à jour d’autres systèmes ou services accessibles par Internet, veuillez vous assurer que vos _recherches actives et vos tests_ dans les systèmes et services font partie de la portée. S’il existe un système particulier qui ne fait pas partie de la portée et qui, selon vous, mérite d’être testé, veuillez communiquer avec nous pour en discuter d’abord. 

## Recherche de vulnérabilités

**Ne pas effectuer les tests suivants :**

*   Tests du déni de service ou déni de service distribué (DOS/DDOS) (par exemple, submerger un service au moyen d’un volume élevé de demandes)
*   Tests physiques (par exemple, accès au bureau, portes ouvertes, passage en double)
*   Ingénierie sociale (par exemple, hameçonnage)
*   Tout autre test de vulnérabilité non technique, y compris l’utilisation d’outils d’analyse invasive ou destructive de haute intensité pour détecter les vulnérabilités

**Au moment de rechercher des vulnérabilités :**

*   respectez toujours les règles de protection des données et n’enfreignez aucune loi ou réglementation applicable. Ne violez pas la vie privée des utilisateurs, du personnel, des entrepreneurs, des services ou des systèmes du gouvernement du Canada (GC). Par exemple, vous ne devez pas échanger, redistribuer ou modifier les données extraites des systèmes ou des services ou omettre de les sécuriser correctement;
*   n’utilisez les exploits que dans la mesure nécessaire pour confirmer la présence d’une vulnérabilité. Ne pas utiliser un exploit pour compromettre ou exfiltrer des données, établir l’accès à la ligne de commande et/ou la persistance, ou utiliser l’exploit pour faire « pivoter » ou perturber d’autres systèmes ou services;
*   une fois que vous avez établi qu’une vulnérabilité existe ou que vous rencontrez des données de nature sensible (y compris des renseignements personnels, des renseignements financiers, des renseignements exclusifs ou des secrets commerciaux d’une partie), **vous devez arrêter votre test, nous en aviser immédiatement et ne pas divulguer ces données à quiconque;**
*   supprimez en toute sécurité toutes les données récupérées au cours de votre recherche dès qu’elles ne sont plus nécessaires ou dans un délai d’un mois après la résolution de la vulnérabilité, selon la première éventualité (ou selon les exigences de la loi sur la protection des données).

## Soumettre une vulnérabilité que vous avez trouvée

Les renseignements que vous soumettez en vertu de cette politique sont utilisés uniquement pour atténuer ou corriger les vulnérabilités.

Si vous pensez avoir trouvé une vulnérabilité de la sécurité, avertissez-nous dès que possible après avoir découvert un problème de sécurité réel ou possible. Veuillez nous faire parvenir votre rapport **par courriel à [securite@cds-snc.ca](mailto:securite@cds-snc.ca)**. Vous pouvez envoyer des rapports de façon anonyme. Nous n’appuyons pas les courriels chiffrés PGP pour le moment. 


### Ce que nous aimerions voir 

**Dans votre rapport :**

*   Écrivez en anglais ou en français.
*   Décrivez la vulnérabilité, l’endroit où elle a été découverte, et les répercussions éventuelles de l’exploitation. 
*   Offrez une description détaillée des étapes à suivre pour reproduire la vulnérabilité (des scénarios de démonstration de faisabilité ou des captures d’écran sont utiles). Il s’agit de démonstrations de faisabilité bénignes, non destructives, afin que nous puissions trier votre rapport rapidement et précisément. 
*   Ne soumettez pas des rapports détaillant les vulnérabilités non exploitables ni des rapports indiquant que les services ne sont pas entièrement conformes aux « pratiques exemplaires », par exemple les en-têtes de sécurité manquants, ou un volume élevé de rapports de faible qualité (par exemple, à partir d’un scanneur automatisé).
*   Ne communiquez pas d’autres vulnérabilités ou de renseignements connexes autres que ceux décrits dans le fichier security.md publié.
*   N’exigez aucune compensation financière pour révéler des vulnérabilités.


### À quoi s’attendre 

Lorsque vous choisissez de communiquer vos coordonnées avec nous, nous nous engageons à assurer une coordination avec vous le plus ouvertement et le plus rapidement possible.

*   Dans les 3 jours ouvrables, nous confirmerons la réception de votre rapport. 
*   Au mieux de nos capacités, nous confirmerons l’existence de la vulnérabilité à votre égard et nous serons aussi transparents que possible sur les mesures que nous prenons durant le processus de remédiation, y compris sur les questions ou les défis qui peuvent retarder la résolution. 
*   Nous établirons des priorités pour résoudre la vulnérabilité en examinant les conséquences, la gravité et l’exploitation de la complexité. Les rapports de vulnérabilité peuvent prendre un certain temps à trier ou à traiter. Nous vous invitons à demander le statut, mais nous vous prions de ne pas le faire plus d’une fois tous les 14 jours. De cette façon, nos équipes peuvent se concentrer sur la remédiation.
*   Nous maintiendrons un dialogue ouvert avec vous pour discuter des questions et nous travaillerons avec vous pour déterminer si le défaut signalé sera rendu public et la façon de le faire.
*   Nous traiterons votre rapport conformément à la _Loi sur l’accès à l’information_ et la _Loi sur la protection des renseignements personnels_. Nous ne communiquons pas vos données personnelles avec des tiers sans votre autorisation.
*   Nous vous informerons lorsque la vulnérabilité signalée sera corrigée et vous serez peut-être invité à confirmer que la solution couvre la vulnérabilité de manière adéquate.

## Autorisation 

Si vous faites un effort de bonne foi pour vous conformer à cette politique pendant votre recherche sur la sécurité, nous considérerons que votre recherche est autorisée, nous travaillerons avec vous pour comprendre et résoudre rapidement la question, et le _gouvernement du Canada_ ne recommandera pas ou n’engagera pas une action en justice concernant votre recherche.

Dans le cas d’une action civile ou d’application de la loi intentée par une autre personne que le GC, le GC prendra les mesures nécessaires pour faire savoir que vos activités ont été menées conformément à la présente politique et en conformité avec celle-ci.

## Considérations juridiques 

Vous êtes le seul responsable de votre propre respect de la loi. Cette politique ne vous autorise pas à agir de manière illégale et ne vous protège pas si vous enfreignez la loi. Toutefois, si un tiers engage une action en justice contre vous et que vous vous êtes conformé à cette politique, nous pouvons vous faire savoir que vous avez agi conformément à cette politique.
