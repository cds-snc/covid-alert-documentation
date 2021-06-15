---
layout: 'layouts/home.html'
locale: 'en'
---

# COVID Alert documentation

This repository contains supporting documentation for [COVID Alert](https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/covid-alert.html), Canada’s exposure notification app. These documents were produced by the [Canadian Digital Service](https://digital.canada.ca/), [Health Canada](https://www.canada.ca/en/health-canada.html), [Canadian Centre for Cyber Security](https://cyber.gc.ca) and other government partners:

*   [COVID Alert Privacy Assessment](https://github.com/cds-snc/covid-alert-documentation/blob/main/COVIDAlertPrivacyAssessment.md)
*   [COVID Alert Healthcare Portal Privacy Checklist](https://github.com/cds-snc/covid-alert-documentation/blob/main/HealthcarePortalPrivacyChecklist.md)
*   [Accessibility Report](https://github.com/cds-snc/covid-alert-documentation/blob/main/AccessibilityReport.md)
*   [COVID Alert Security Assessment](https://github.com/cds-snc/covid-alert-documentation/blob/main/CCCS_SecurityAssessment.pdf)
*   [Vulnerability Disclosure Policy](https://github.com/cds-snc/covid-alert-documentation/blob/main/VulnerabilityDisclosurePolicy.md)
*   [COVID Alert Decision Framework](https://github.com/cds-snc/covid-alert-documentation/blob/main/COVIDAlertDecisionFramework.md)

Product documentation:

* [Metrics](https://github.com/cds-snc/covid-alert-documentation/blob/main/product/metrics.md)
* [QR Codes – Notifications for venue outbreaks](https://github.com/cds-snc/covid-alert-documentation/blob/main/product/qr-codes.md)

Design research documentation:

*   [How might people positive for COVID-19 react to the ‘One-time key’?](https://github.com/cds-snc/covid-alert-documentation/blob/main/research/LiteratureReview.md) (Literature review, July 28 2020)
*   [How well does the app support users when they receive a positive diagnosis (and one-time key)?](https://github.com/cds-snc/covid-alert-documentation/blob/main/research/UsabilityAug2020.md) (Usability testing, Aug 25 2020)
*   [Findings from QR Code discovery research](https://github.com/cds-snc/covid-alert-documentation/blob/main/research/QRCodeDiscoveryResearch.md) (February 15, 2021)

You may also be interested in:

*   [COVID Alert Accessibility Statement](https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/covid-alert/accessibility-statement.html)
*   [Help with COVID Alert](https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/covid-alert/help.html)
*   [COVID Alert Privacy Policy](https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/covid-alert/privacy-policy.html)
*   [Mobile app technical documentation](https://github.com/cds-snc/covid-alert-app#readme)
*   [Key server technical documentation](https://github.com/cds-snc/covid-alert-server#readme)
*   [Healthcare portal technical documentation](https://github.com/cds-snc/covid-alert-portal#readme)
*   [Healthcare portal changelog](https://github.com/cds-snc/covid-alert-portal/blob/main/CHANGELOG.md)
*   [Contributing guide](https://github.com/cds-snc/covid-alert-app/blob/master/CONTRIBUTING.md)
*   [CDS Accessibility Handbook](https://digital.canada.ca/a11y/)


## Installing and using COVID Alert

You can install COVID Alert from the [Apple App Store](https://apps.apple.com/ca/app/id1520284227) and [Google Play Store](https://play.google.com/store/apps/details?id=ca.gc.hcsc.canada.stopcovid).

For more information on how to install and use COVID Alert, see the [COVID Alert landing page](https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/covid-alert.html) or the [Help with COVID Alert page](https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/covid-alert/help.html) for more information.


## About COVID Alert

In an effort to reduce the spread of the COVID-19 virus, while also gradually easing restrictions on individuals and allowing the economy to begin to re-open, the Government of Canada has committed to launching a single national COVID-19 exposure notification app (hereinafter referred to as COVID Alert). It will be interoperable across provinces and has been designed to minimize collection and storage of personally identifiable information. As a way to minimize risks to privacy, an exposure notification app, versus contact tracing app, was determined to be the preferred approach for establishing a Pan-Canadian digital solution to support efforts to reduce the spread of the virus.

Exposure notification is considered to be a minimally intrusive approach intended to be used in combination with, and in support of, current public health measures being taken across Canada in response to the pandemic. COVID Alert takes a fully de-centralized approach in which personally identifiable information is not being collected and stored in a single central location. Instead, when a user downloads the app and consents to its various functions, their mobile device transmits random IDs that are used to record proximity to another app user’s smartphone. This differs from contact tracing apps which access a device’s location data and report it to public health authorities. More information on how the app works is provided in section 5 of this document.

The app is intended to complement existing measures to reduce the spread of the virus, including manual contact tracing. It serves to notify Canadians if they have been near someone who has been diagnosed with COVID-19 and is also using the app, and encourage them to take appropriate next steps (e.g. getting tested). If someone tests positive for COVID-19 in a Province or Territory using the app, local public health authorities may advise them on next steps and provide a one-time key to enter into the app, which will in turn notify other people using the app who have been near them within the last 14 days. This will help to reduce the overall spread of the virus.

The public health benefits of this approach include encouraging testing for those who learn they have an elevated risk of exposure, and alerting app users who receive messages of increased risk to adjust their behaviour to avoid putting others at risk, even if they are currently not experiencing symptoms. For example, if somebody receives a notification, they may decide not to visit an elderly relative or attend a social gathering. This will empower Canadians and reduce community spread of the disease.


## Contact

For questions or feedback, you can email the Canadian Digital Service at [cds-snc@tbs-sct.gc.ca](mailto:cds-snc@tbs-sct.gc.ca) or [create an issue](https://github.com/cds-snc/covid-alert-documentation/issues) in this repository.
