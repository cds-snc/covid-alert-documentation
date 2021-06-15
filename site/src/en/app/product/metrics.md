---
  title: Metrics
  translationUrl: app/produit/mesures-de-performance
  displayOrder: 1
---

The COVID Alert app will soon start collecting metrics to help learn if the app is functioning as intended and about its impact on the pandemic. These metrics are aggregated and not tied to individual devices. The Office of the Privacy Commissioner of Canada and the COVID Alert Advisory Council were consulted on the metrics and the collection method. COVID Alert continues to protect people&#39;s privacy.

**What the COVID Alert app will be collecting**

To help understand the impact of COVID Alert on the pandemic, the app will collect the following metrics:

| Metric                                                                                       | Collection method                                                                                                                                                                      | Outcome                                                                                                                                                       |
|----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Number of active users, by province or territory                                             | Event is triggered when a device performs a background check                                                                                                                           | Understand the adoption and persistent usage of the app                                                                                                       |
| Number of users whose app changes to the exposed state, by province or territory             | Event is triggered when a device switches from monitoring to the exposed state, and an event that is triggered when a device switches from exposed to exposed (for multiple exposures) | Understand how many people are receiving exposure notifications from the app                                                                                  |
| Number of users who enter a one-time key when in the exposed state, by province or territory | Event is triggered when a user enters an OTK and exposed state is `true`                                                                                                               | Understand how many people receive an exposure notification and then test positive for COVID-19 -- effectively, understand how the app is limiting the spread |

To help understand how COVID Alert is performing and how people are using it, the app will collect the following metrics:

| Metric                                                                                                      | Collection method                                                                                                                                                            | Outcome                                                                                                        |
|-------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| Number of new installs                                                                                      | Captured by "installed" event, which is triggered when a user hits the language selection                                                                                    | Understand app uptake and adoption                                                                             |
| Number of "date of symptom onset" or "test date" submitted when sharing exposures, by province or territory | Event is triggered when Temporary Exposure Keys are uploaded and "date of symptom onset" or "test date" = `true`                                                             | Understand how many positive cases are sharing exposures within a modified contagious period                   |
| Number of users who complete or drop off onboarding at different stages, by province or territory           | Events are triggered when the different stages of onboarding are `true`: "completed onboarding", "COVID Alert on", "GAEN framework authorized", "push notifications enabled" | Understand app uptake and adoption, and understand where people may be dropping out of this process            |
| Number of times the app was turned off or on, by province or territory                                      | Event is triggered when the app is turned on or off                                                                                                                          | Understand usage of on/off functionality, and understand how many apps are turned off and left off             |
| Amount of time between a user receiving an exposure notification and the user clearing the notification     | Event that captures time between an exposure detected, and an event triggered when user presses "clear"                                                                      | Understand how many notifications are cleared, and an indicator of how people react to receiving notifications |
| Number of background checks per app, per day, by type of device (iOS or Android)                            | A counter within the app which sends a daily total to the server                                                                                                             | Detect when issues occur with background checks                                                                |


Most metrics are gathered by province or territory. Province or territory breakdowns are only included when app users have selected their province or territory from within the app, which remains voluntary. The app does not use any other information to determine people&#39;s province or territory.

**Collection method**

The data used to develop metrics will be collected by creating event logs of user experiences and/or actions. These event logs will be transmitted to the key server and will be accompanied by the IP address; however, the event logs and the IP address will not be linkable and will never be stored together. The data will be encrypted in transit.

In addition, these metrics will not contain any direct identifiers. Individual logs will be stored for a short period, they will be compiled in the aggregate (total number of users/metric), and will not be combined with other information, including IP addresses.

More technical details will be available in the coming days.

**Letting people know**

An app notification will notify COVID Alert users of a change to the [privacy notice](https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/covid-alert/privacy-policy.html), which will outline the new metrics the app is collecting upon launch. Full details will be found in the [COVID Alert Privacy Assessment](https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/covid-alert/privacy-policy/assessment.html) upon launch.
