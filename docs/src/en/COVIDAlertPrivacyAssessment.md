---
  title: "COVID Alert: COVID-19 Exposure Notification Application Privacy Assessment"
  translationUrl: EvaluationViePriveeAlerteCOVID
---

_Health Canada/Public Health Agency of Canada Privacy Management Division_

February 2021 – [Version history](https://github.com/cds-snc/covid-alert-documentation/commits/main/COVIDAlertPrivacyAssessment.md) – [Also published on Canada.ca](https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/covid-alert/privacy-policy/assessment.html)

* [1. Objective](#1-objective)
* [2. Scope](#2-scope)
* [3. Background](#3-background)
* [4. Partners and Stakeholders](#4-partners-and-stakeholders)
* [5. How does the COVID Alert App work?](#5-how-does-the-covid-alert-app-work)
* [6. Privacy Analysis](#6-privacy-analysis)
* [Appendix A: List of COVID Alert App Data](#appendix-a-list-of-covid-alert-app-data)
* [Appendix B: COVID Alert App Metrics](#appendix-b-covid-alert-app-metrics)
* [Footnotes](#footnotes)

## 1\. Objective

To assess the privacy implications of implementing a single national COVID-19 exposure notification application (app) based on the Google/Apple exposure notification application programming interface (API).

## 2\. Scope

This assessment will examine the privacy implications of the app, specifically in relation to the information/data that will be under the control of the Government of Canada, including the data that will be transmitted to the Government of Canada Server (key server). It will not examine any information under the control of the Provinces/Territories (PTs), such as the mechanism through which one-time keys are distributed to individuals for PTs who distribute one-time keys themselves.<sup id="f1">[[1]](#otp-portal)</sup>

Certain processes that occur at the PT level, on a device, or to and from a device, where the Government of Canada will not have access to any of the data, are described in this assessment in order to depict the complete flow of information, even though this data is not considered to be under the control of the Government of Canada.

## 3\. Background

In an effort to reduce the spread of the COVID-19 virus, while also gradually easing restrictions on individuals and allowing the economy to begin to re-open, the Government of Canada launched a single national COVID-19 exposure notification app (hereinafter referred to as COVID Alert) on July 31, 2020. It is interoperable across provinces and has been designed to minimize collection and storage of personally identifiable information. As a way to minimize risks to privacy, an exposure notification app, versus contact tracing app, was determined to be the preferred approach for establishing a Pan-Canadian digital solution to support efforts to reduce the spread of the virus.

Exposure notification is considered to be a minimally intrusive approach intended to be used in combination with and in support of current public health measures being taken across Canada in response to the pandemic. COVID Alert takes a fully de-centralized approach in which personally identifiable information is not being collected and stored in a single central location. Instead, when a user downloads the app and consents to its various functions, their mobile device transmits random IDs that are used to record proximity to another app user’s smart phone. This differs from contact tracing apps which access a device’s location data and report it to public health authorities. More information on how the app works is provided in section 5 of this document.

The app is intended to complement existing measures to reduce the spread of the virus, including manual contact tracing. It serves to notify Canadians if they have been near someone who has been diagnosed with COVID-19 and is also using the app, and encourage them to take appropriate next steps (e.g. getting tested). If someone tests positive for COVID-19 in a PT using the app, local public health authorities may advise them on next steps and provide a one-time key to enter into the app, which will in turn notify other people using the app who have been near them. This will help to reduce the overall spread of the virus.

The public health benefits of this approach include encouraging testing for those who learn they have an elevated risk of exposure, and alerting app users who receive messages of increased risk to adjust their behaviour to avoid putting others at risk, even if they are currently not experiencing symptoms. For example, if somebody receives a notification, they may decide not to visit an elderly relative or attend a social gathering. This empowers Canadians and reduces community spread of the disease.

Each PT has the option to adopt the app for its jurisdiction. No data from any pre-existing exposure notification/contact tracing apps PTs may already have in place will be transferred to the national COVID-19 exposure notification app.

## 4\. Partners and Stakeholders

The following represents the list of partners and stakeholders involved in the development and dissemination of the app, and their respective roles and responsibilities:

### Health Canada (HC)

HC is charged with the overall implementation of the app. HC’s role involves engaging with the PTs to encourage buy-in and facilitate onboarding of the app. HC is also responsible for assessing any privacy implications and risks associated with the implementation of the app and engaging the Office of the Privacy Commissioner for meaningful consultation and feedback. Further, HC is executing a communications strategy to drive uptake of the app, supported by others.

### Treasury Board Secretariat - Canadian Digital Service (CDS)

CDS is responsible for providing internal support services (information technology services) to Health Canada. It is responsible for developing the technological components of the exposure notification app. In addition to developing the app itself, CDS operates the Government of Canada key server (located within Canada) that stores encrypted diagnosis keys that reflect positive COVID-19 cases. The key server operates on a cloud solution procured via Shared Services Canada cloud brokering service. CDS also provides support to PT partners as they integrate one-time key distribution into their result notification processes. This includes providing PTs access to one-time keys that users will enter into the app if they receive a positive diagnosis, through an API or a federally-run portal for authorized healthcare professionals.

CDS is supported by the Office of the Chief Information Officer’s (OCIO) Cyber Security Division. The Cyber Security Division is lending their security expertise to support CDS’s efforts in security assurance, threat modelling, and risk assessment.

### Industry, Science and Economic Development (ISED)

ISED is responsible for developing, implementing and supporting a governance model to support the effective roll-out of the app along with HC. Specifically, ISED played a role as a co-lead with Health Canada in setting up, and continues to play a role in providing Secretariat functions to the COVID-19 Exposure Notification App Advisory Council.

### Canadian Centre for Cyber Security (CCCS / Cyber Centre)

In line with its mandate to provide cyber security advice and guidance to federal and critical infrastructure partners, the Cyber Centre is providing expert cyber security assistance in the form of systems design and architecture review, source code analysis and review, and related security assurance activities. The app benefits from the robust security protections of federal government systems maintained by various agencies including Shared Services Canada and the Cyber Centre. The Cyber Centre is not involved in the operation of the app and will not be collecting or analyzing user information in connection with the Government's COVID-19 exposure notification initiative.

### Google/Apple

Google/Apple jointly developed the exposure notification API being adopted, subject to [Google](https://blog.google/documents/72/Exposure_Notifications_Service_Additional_Terms.pdf) and [Apple’s](https://developer.apple.com/contact/request/download/Exposure_Notification_Addendum.pdf) terms and conditions, by the Government of Canada for the COVID Alert app.  Google and Apple do not have access to the data. CDS consults Google and Apple when new operating system or framework changes are published by both companies.

### Shopify

Shopify volunteers developed [open source software code](https://github.com/CovidShield) compatible with the Google/Apple API, available to any jurisdiction attempting to develop an exposure notification system. COVID Alert was developed using this source code. At no point did or does Shopify the business, or individual volunteers from Shopify, have the ability to add any code into the CDS-managed code repository. Any staff who may be brought into the CDS team to support will be managed in accordance with Treasury Board staffing policies.

### BlackBerry

BlackBerry has provided support in an advisory capacity to review the security of the source code on a pro bono basis. They were given read-only access to CDS source code and testing infrastructure for the explicit purposes of discovering vulnerabilities and/or weaknesses in our implementation. At no point did or does BlackBerry have or require any access to data in order to conduct its security audit.

## 5\. How does the COVID Alert App work?

There are three elements to the COVID Alert App system:

1. The mobile app (at the Federal level);
2. The key server (at the Federal level); and
3. The one-time key distribution process (at the provincial level).

Users voluntarily download the app from the Google Play store or Apple IOS store onto their device and provide consent to participate in the exposure notification process. More specifically, they are required to review and accept a clear and accessible statement that provides them with information about how the app works, how information about exposure will be received by the user and transmitted to other users, what data will be collected about them and how that data will be used and where it will be stored.

Downloading and installing the app does not initiate the exposure notification process. When a user first opens the app, they are presented a walkthrough of how exposure notifications work and what data is shared. They are then asked if they wish to enable exposure notifications. A consent dialog from their device’s operating system appears. If they enable exposure notifications, the Google/Apple API exposure notification “layer” (GAOS layer) of the device is activated. This also initiates activation of the device’s Bluetooth function so that the device begins sending signals to and receiving signals from the devices of other users who have downloaded the app. This Bluetooth communication between participating users is short-range device-to-device communication; nothing is being transmitted to any server.

The design of the Google/Apple API is such that this protected layer of the operating system is isolated, so no other app on the device can access its data, and even the exposure notification app can only access the data through explicit user consent. Only one app per device can access the Google/Apple layer, and only one app per geographical region is permitted.

### What exactly is being communicated between participating users?

Each device with the app installed is sending out and listening for random codes called rolling proximity identifiers (RPIs) which are not static: On a daily basis, the GAOS layer automatically generates a random temporary exposure key (TEK). The TEK of the day then generates a new RPI every five to twenty minutes. It is these ever-changing RPIs that are shared with other devices.

The daily TEK generation and frequent RPI generation are design features with the purpose of minimizing the risk of re-identification of users. (In addition to this, they are designed to minimize data transfer to conserve bandwidth.) The RPIs are not identifiable and are not accessible to the app or transmitted to the key server. By design, the RPIs are meant to be public (they are shared to other devices via Bluetooth), and as such do not provide any form of identifying information in the absence of other information. Even if an RPI were intercepted by a device operated by a malicious actor, it would be an entirely meaningless number, and would not be linkable to a device without significant effort. TEKs are stored on the device, but may only be released to the key server in the case of a positive test result and explicit user consent.

When a user receives a positive COVID-19 test result, PT health authorities who have adopted the app will provide them a one-time key<sup id="f2">[[2]](#otp-api-tokens)</sup> and instructions on how to enter it into the app.<sup id="f3">[[3]](#otp-pt-variation)</sup> Some PTs have the capacity to retrieve one-time keys from the key server using their existing IT infrastructure (e.g. some PTs have a platform to provide COVID-19 test results to individuals online, and the same platform can be used to issue one-time keys), while other PTs do not have this capacity (e.g. some provide test results over the phone). For the PTs that don’t have the capacity to retrieve the one-time keys, CDS developed the COVID Alert Portal (the portal) that PTs can use to retrieve the keys and provide them to app users who have tested positive for COVID-19.

Although the portal will rely on retrieving one-time keys from the key server, it is not connected to the app in any way nor will it connect to any PT IT system. Only personal information about PT administrators and healthcare providers will be collected so they can create portal accounts and retrieve the one-time keys - no patient information will be collected or retained by the portal.

When a one-time key is entered into the app, it will validate the key and ask the user if they would like their TEKs to be sent to the key server.<sup id="f4">[[4]](#dk-upload-process)</sup> If the individual says yes, the app communicates with the GAOS layer. The GAOS layer asks a second time whether the individual consents to sending their TEKs to the key server. If the individual consents, the TEKs are sent to the key server, allowing other users they have come in contact with in the past 14 days to be notified, once their app has downloaded these keys. App users also have the option of uploading their diagnosis keys for the 14 days _following_ receipt of a positive diagnosis, in the unfortunate scenario where an individual who has COVID-19 cannot self-quarantine (e.g. doesn’t have sick leave; lives alone and has to buy groceries, etc.).

### Option to enter date of symptom onset / test date

After entering a one-time key, the user will be asked if they have symptoms and, if yes, the date when their symptoms started. If the user is not sure if they have symptoms or are asymptomatic, they will be asked for their test date. The user can choose not to answer any of the questions.

If a user enters the date of symptom onset or test, the app uses this information to determine what dates they were likely to have been the most infectious (two days before symptom onset or test) and only uploads their TEKs<sup id="f5">[[5]](#dk-tek-generation)</sup> from the relevant dates to the national server. If the user does not enter their date of symptom onset or test, the app will upload the TEKs from the last 14 days.

The purpose is to be more precise by sending exposure notifications to users who the COVID-19-positive user was in contact with when they were likely to have been the most infectious. When a user enters a date of symptom onset or test, it is not sent to the key server. The date is stored on the phone until the user closes the screen, or completes the first upload of their TEKs, at which point the date is no longer stored anywhere.

TEKs are generated once a day and expire after 14 days on the device. A TEK becomes a “diagnosis key” once released for upload to the key server. If the user consents to upload and transmit the diagnosis key, other users with whom they were in contact may receive a notification.<sup id="f6">[[6]](#dk-upload-next-steps)</sup> We note that if an individual has had contact with a very limited number of individuals in the past 14 days, it’s possible that the user who receives the notification may be able to associate it with an individual.<sup id="f7">[[7]](#limited-contact-scenario)</sup>

### How are individuals notified of exposure to someone who tested positive?

On a pre-defined schedule (once every 4 to 24 hours depending on battery level, and when the app is opened), the app downloads new diagnosis keys from the key server. The app passes those diagnosis keys to the GAOS layer and the GAOS layer re-generates the RPIs from each of the provided diagnosis keys. The GAOS compares those regenerated RPIs to the list of locally-stored RPIs it has encountered in the last 14 days. If the GAOS layer finds that any of the re-generated and locally-stored RPIs match, and the exposure notification risk criteria are met (length of exposure, strength of signal, etc.), the GAOS layer sends a positive signal to the app. If the app receives a positive signal, it sends an exposure notification to the end-user. The matching happens on the device. The key server has no way of knowing if two devices interacted.

When an app user tests positive for COVID-19 in a PT that has adopted the app, they will obtain a one-time key that will be provided to them by their PT (how this occurs will depend on the PT). This key is provided to the PT by the Government of Canada and the Government of Canada has no way of knowing who that key is associated with (in other words who the person is who will receive this key). All the Government of Canada knows is that someone in a given PT tested positive for COVID-19. That said, the MOUs with the PTs who adopt the app will include requirements to safeguard the keys, to ensure they are only retained as long as necessary and to delete them once obtained by the app user.

When individuals are notified of an exposure to a person who tested positive, the application will provide information, stored in the application, supplied by the provincial health authorities (e.g. information about locations to get tested).

## 6\. Privacy Analysis

Our privacy analysis is in two parts. The first part examines whether there is a collection of personal information. The second part consists of an analysis of the app based on the privacy principles outlined in the [joint statement by Federal, Provincial and Territorial Privacy Commissioners issued May 7, 2020](https://priv.gc.ca/en/opc-news/speeches/2020/s-d_20200507/).

### Is There a Collection of Personal Information/Data?

The data elements (see [Appendix A](#appendix-a-list-of-covid-alert-app-data)) that will be under the control of the Government of Canada and stored in the Government of Canada key server (located in Canada) do not contain any direct identifiers (e.g. name, identifying numbers, etc.).

The following provides further information on RPIs and TEKs, on the issuance of the one-time keys that are provided to app users who receive a positive diagnosis, on the use of IP addresses for security reasons, the HashID, and the collection of app metrics. We will also provide more clarity regarding the very strong safeguards that are in place and the short retention of some of these elements.

First, it should be noted that regardless of the app, PTs are collecting personal information about individuals who test positive for COVID-19 according to their legislative requirements – this occurs entirely outside the app and is not being collected by the Government of Canada via the app.

#### RPIs and TEKs

As described in section 5, the RPIs and TEKs generated by the app are a design feature whose purpose is to reduce the risk of re-identification to near zero. They are not directly identifiable, and of these elements, only the TEKs are stored on the key server and only when an individual has tested positive and chooses to upload this information.

To elaborate, by design RPIs are meant to be public (they are shared to other devices via Bluetooth), and as such do not provide any form of identifying information in the absence of other information. Even if an RPI were intercepted by a device operated by a malicious actor, it would be a meaningless number on its own and would not be linkable to a device without significant effort. There is a very unlikely risk that a highly motivated malicious actor could leverage something called a “linkage attack.” By placing Bluetooth collection devices at various locations throughout a city – for example, at every road intersection – they could collect the RPIs of passerby. If an individual were then diagnosed and decided to upload their diagnosis keys, this attacker could recreate a device’s path through the city. That said, to effectively track somebody’s path, an attacker would have to have numerous collection devices deployed at significant density throughout an entire geographical region. Such an attack is a possibility, but requires extensive resources and expertise to implement. Further, the chance of such an attack being successful is even lower given that there is a high likelihood of the malicious actor being caught, and the attack being prevented.

#### One-Time Keys, IP Addresses, API Tokens and HashIDs

##### One-Time Keys and API Tokens

When an app user tests positive for COVID-19 in a PT that has onboarded to the app, they will obtain a one-time key that will be provided to them by their PT (how this occurs will depend on the PT). This key is provided to the PT by the Government of Canada and the Government of Canada does not know who that key is associated with (in other words who the person is who will receive this key). All the Government of Canada knows is that someone has tested positive for COVID-19. That said, the MOUs with the PTs who onboard to the app will include requirements to safeguard the keys, to ensure they are only retained as long as necessary and to delete them once obtained by the app user. Additionally, each province will protect the information in accordance with the requirements imposed on them by applicable provincial or territorial legislation.

When a PT requests a one-time key so that it can be provided to the user, the PT system to obtain the key needs to prove to the key server that it is legitimate – i.e. that the PT system is run by a PT healthcare provider. To manage this authentication, the key server uses API tokens. Each API token is a random alphanumeric string of at least 20 characters, generated by CDS. CDS generates an API token for each PT system integrating with the key server to obtain one-time keys. The PT system provides that API token to the key server when requesting a one-time key.

PTs can also generate one-time keys using a healthcare portal operated by the Government of Canada. In this case, healthcare workers who have been authorized by the PT can log in to a secure portal, managed by CDS. This healthcare portal does not contain any patient data and is only used to generate one-time keys, which it retrieves via API from the key server. PTs are responsible for designating officials in their healthcare organizations who can serve as administrators of the portal and manage user accounts for their PT.<sup id="f8">[[8]](#healthcare-portal-privacy)</sup>

As described in section 5, the one-time key exists for the purpose of allowing users (who are provided the key by their province) to upload their diagnosis keys to the server, acting as an anti-spam measure to ensure fake diagnosis keys are not accidentally or maliciously uploaded. The diagnosis keys are not associated with the one-time key or uploaded to the server along with the key. Once the key is entered in the app by the user, it is sent directly from the app to the key server, and it’s not retained in the app. The key server then checks to see if that one-time key is valid or not. If it’s valid, the key server erases its record of the one-time key and allows the app to upload the device’s diagnosis keys, with the user’s consent, by exchanging an encryption keypair with the app to ensure the diagnosis keys are encrypted in transit. Thus, as noted, the one-time key is not associated with the uploaded diagnosis keys.

Users have the option to enter the date of symptom onset or test date in order to refine the exposure notifications to users who were in close contact with a positive case during the period they were the most infectious. Although this data is not uploaded to the server, it’s theoretically possible to calculate the number of TEKs uploaded per event based on the size of the upload, and reverse-engineer a probable date of symptom onset or test based on that information and the log timestamp. Even if a probable date were reverse-engineered, the risk of re-identification remains low, as this would require effort and access equal to what would be needed to link a positive diagnosis to a specific IP address (more on IP addresses to follow). As well, even if this could be done, it is impossible to know which date it is – date of symptom onset or test date.

For the 14 days after a diagnosis key is inputted, the app does “know” that a person successfully inputted a valid one-time key. This is so they have the option of uploading their diagnosis keys for the 14 days following receipt of a positive diagnosis (as well as the days before their positive diagnosis – number of days will depend on whether they entered the date of symptom onset or date tested). In the unfortunate scenario where an individual who has COVID-19 cannot self-quarantine, this individual uploads their temporary exposure keys to the key server, which then makes them available to be downloaded by other users’ phones, and the app on those phones and the API layer then do the match up to determine, with respect to each of those phones, whether the phone, and thus its owner, has been in contact with the phone of the individual who has tested positive for COVID-19.

##### IP Addresses

The IP address accompanies any request made to the key server (e.g., when a user chooses to upload their random codes, or enters their one-time key). However, the IP address is not intentionally “sent” by the app. It accompanies the request naturally: IP addresses are metadata required as part of the underlying internet protocol that powers data transmission over the Internet; without this, the app and the server would not be able to communicate. In other words, IP addresses accompany _all_ requests made to the server (one-time key generation, one-time key verification, diagnosis key upload, etc.). In most cases, the IP is not of the phone in particular, but of a wireless router or is dynamically assigned by a cellular network carrier. Few people have static IPs that are permanently associable to them, due to the limited number of IPv4 IP addresses. In sending that information, the IP accompanies the request, as with any request sent over the internet.

In the event the one-time key is not valid, the user’s IP address is retained at the key server level for [a rolling window of sixty minutes](https://github.com/cds-snc/covid-shield-server/blob/d2f9cf605f73437d271a801db7acb87a6ce53db4/pkg/persistence/queries.go#L12-L15). After fifty consecutive invalid attempts from the same IP, the IP is blocked for sixty minutes. The associated IP address is deleted from the system sixty minutes after the last invalid attempt to verify a one-time key.

IP addresses are stored in access logs on the AWS server, which is separate from the key server, for 3 months for all logs, and up to 24 months for those implicated in a security investigation, for cyber security systems to adequately understand, monitor, and respond to attacks against a system and for the secure and reliable operation of the service. Furthermore, IP addresses are not used by CDS to identify the source in any way, and they are not associated with any other data element in the server. The IP addresses are collected for security purposes. They are not used by the CDS-operated system to try to identify the source. IP addresses may be disclosed to law enforcement in the event a malicious actor attempted to gain, or gained, access to the server where they are stored. They would be deleted along with other data once the exposure notification system is shut down (i.e., once the pandemic is declared over), unless they are being retained for a security investigation.

CDS does not have the technical means to connect an IP address or API token to an individual smartphone and/or individual. API tokens are only associated with PT systems integrating with the key server to obtain one-time keys. Regarding IP addresses, technically, this would require either sophisticated analysis (beyond CDS’s capabilities), or access to the subscriber lists of Internet service providers (not within CDS’s ability to access or compel).

##### HashIDs

The following provides further information on the HashID in the context of some PTs using a self-serve online portal.

When the test results system of a PT using this feature reaches out to the Government of Canada key server to obtain a one-time key, it passes along a cryptographically-generated HashID, generated using a series of one-way hashing algorithms. The HashID is generated by the PT based on unique data elements under their control, but hashed in such a way that when it is given to the Government of Canada, it is meaningless.

While the HashID is stored on the Government of Canada key server, the information used to generate it is not. The HashID is associated with a one-time key when the key is generated.

This feature was initially added at the request of Ontario, to prevent abuse of the system. Storing the HashID alongside the generated one-time key allows for PT systems to verify whether to issue a new one-time key or not—the PT system can see whether or not a previously provided one-time key had already been claimed. If a previously provided one-time key has not yet been claimed, then generating a new one-time key with the same HashID automatically invalidates the previous one-time key. If the previous one-time key was already claimed, a new key is not generated.

#### App Metrics

Data is collected from COVID Alert to enable HC to better measure and encourage app uptake, and monitor its performance and effectiveness in limiting the spread of COVID-19. The data used to develop metrics are collected by creating event logs of user experiences and/or actions. These event logs are transmitted to the key server and will be accompanied by the IP address; however, the event logs and the IP address will not be linkable and will never be stored together. The data will be encrypted in transit and stored in two ways on the key server:

1. As an individual event log stored for 24 hours which contains the type of event, device type (e.g. iPhone, Android), and the date and time; and
2. As an aggregated record of all events, updated every 24 hours, stored indefinitely, which contains the date, type of event, device type, and total number of events per day.

Refer to [Appendix B](#appendix-b-covid-alert-app-metrics) for an overview and privacy analysis on the collection of app metrics.

#### Security considerations

In terms of security risk, someone with direct, server/database-level access to PT healthcare systems (healthcare worker, an IT person, or a malicious actor who’d broken into those systems) could determine whether or not a specific person who received a positive diagnosis had then decided to upload diagnosis keys. They could not track which diagnosis keys a patient subsequently uploaded.

PTs will be expected to use sufficiently strong cryptographic hashing algorithms (implementing appropriate security measures will form part of the agreements with the provinces), so that the Government of Canada is unable to identify somebody with the HashID. Furthermore, it cannot be linked with any data in Government of Canada possession to determine whether somebody had uploaded diagnosis keys or not.

#### Conclusion: Is There a Collection of Personal Information/Data?

We recognize that there is no such thing as zero risk when data is being released, and the only way to reduce the risk of releasing data to zero is to not release any data at all.

We also acknowledge the position taken by multiple leading Privacy Regulators that assessing re-identification risk should look not only at the data itself, but also at the context in which the data are shared.

The context of the Government of Canada key server is at the lowest risk end of the spectrum: it is characterized by restricted access, strong IT security measures, and agreements in place.

In the broader context of the entirety of the exposure notification app:

*   The IP address is not necessarily a direct identifier; and
*   Access is highly restricted – both from an IT perspective and a governance perspective.

We hold too that this is a non-public disclosure with a low possibility of attack and a low impact, meaning the risk tolerance should be higher.

Considering this data personal information would necessitate automatically considering data with any _de minimus_ risk of re-identification (rather than a serious risk of re-identification, defined as more than frivolous) as personal information, regardless of context. In our view, in this context, this data remains below the threshold of “serious risk of re-identification.”

Further, the Federal Court in Sig Sauer (Canada (Information Commissioner) v. Canada (Public Safety and Emergency Preparedness), 2019 FC 1279) found that “to use the serial numbers identify an individual would require either access to restricted government databases that already contain personal information, or a successful effort to trick either the government or the manufacturer into releasing personal information. The evidence does not establish a serious possibility of either occurring.” In this case, McHaffie J was satisfied that there was no personal information at issue.

Here, the IP addresses on their own do not reveal individual identities; they’re stored on a secure server that only limited Government of Canada employees have access to, and they’re bound by security obligations to protect that information and not access or use it for nefarious purposes.

In addition, the app metrics being collected by HC do not contain any direct identifiers. Individual logs will be stored for a short period, they will be compiled in the aggregate (total number of users/metric), and will not be combined with other information, including IP addresses (refer to [Appendix B](#appendix-b-covid-alert-app-metrics) for a privacy analysis of the app metrics).

In conclusion given the totality of the circumstances, while the data elements exchanged by the app, the central key server and the PT servers could be used in theory to produce personally identifiable information, the measures taken in developing the app, the central key server, and PT servers, in addition to the manner in which they collect, exchange, use and retain these data elements, reduce the risk to the lowest minimum possible. Our overall assessment is that it is so highly unlikely that an individual could be identified, that the collection of data elements (including IP addresses) and how they are used does not meet the threshold of “serious possibility” that an individual could be identified.<sup id="f9">[[9]](#gordon)</sup>

Nevertheless, should a different conclusion be reached regarding the assessment of whether any data element could be considered personal information, all requirements of the _Privacy Act_ and Treasury Board Privacy Policies have been met in order to ensure user privacy is protected.

Note that the list of data elements ([Appendix A](#appendix-a-list-of-covid-alert-app-data)), and consequently this assessment, is subject to change as the app is rolled out and adopted by provinces. The Office of the Privacy Commissioner will be consulted on any substantial modifications or updates that could impact this assessment.

### Privacy Principles

#### _Consent and Trust_

Use of the app is voluntary. If users have been diagnosed with COVID-19 they will also be required to provide consent for their TEKs to be uploaded and made available to other users of the app. Note that no personally identifiable information is sent to other users; they are only notified that they have been exposed to COVID-19 once they download a corresponding diagnosis key from the key server. The voluntary nature of the app and the various layers of consent, coupled with the fact that it is unlikely that personal information will be collected by the Government of Canada aim to enhance the level of trust of Canadians to use this app. The effectiveness of the app is dependent on a certain level of uptake; therefore, trust is paramount.

#### _Legal Authority_

The app, as a tool to enhance existing measures to address and reduce the spread of the COVID-19 virus, fits within the mandates of HC and its legislative requirements according to section 4 of the _Department of Health Act_ to protect the people of Canada against risks to health and the spreading of diseases. In addition, subsection 29.2 of the _Financial Administrative Act_ provides the authority for CDS to deliver internal support services (IT services) to HC and fulfill their role in the development of the app, as described in section 4 of this document.

#### _Necessity and Proportionality_

##### Is the measure demonstrably necessary to meet a specific need?

COVID-19 is a highly contagious disease about which we are still learning. In some, it can be fatal or cause permanent harms, including serious lung damage or limb amputations. In others, it can cause no or minimal symptoms. Asymptomatic or pre-symptomatic individuals can still infect others. It may be possible for one individual who has already had the illness to become sick again. It will take many months for vaccine roll-out to reach a point of providing a population-level solution.

Given  limitations on our ability to prevent or treat the disease, the approaches taken, including asking Canadians to avoid all non-essential trips outside of their home and to avoid close contact with family and friends is a hard reality to sustain.

The public goal of this pan-Canadian exposure notification app is to safely ease restrictions on freedom of movement and allow the economy to safely re-open while protecting the lives, health and well-being of everyone in Canada in the face of the COVID-19 pandemic.

This goal could be further facilitated by putting into place measures that allow some form of notification of exposure to the virus. Manual contact tracing is already taking place; however, it is hugely time-consuming and resource-intensive, and relies on individuals’ participation as well as their imperfect memory of where they have been for the past 14 days. An automated system to aid in informing individuals of COVID-19 exposure is a necessary element to safely easing restrictions and re-opening the economy.

##### Is it likely to be effective in meeting that need?

Effectiveness of exposure notification apps is highly contingent on level of adoption; the more users that download the app, the more contacts it will be able to capture. While in the past countries have had difficulty achieving the needed user base, Apple and Google have now launched new technology for a privacy-first approach so that citizens can have confidence that their government is not collecting personally identifiable information. Coupled with a strong communications and marketing strategy, this is expected to significantly increase the number of users downloading the app than has been the case in countries that launched such programs in earlier phases of the pandemic.

Certain metrics will be collected from COVID Alert in order to assess the effectiveness of the app from a public health and technical performance perspective. Refer to [Appendix B](#appendix-b-covid-alert-app-metrics) for more information on how this approach will enable HC to assess app effectiveness.

##### Is the loss of privacy proportional to the need?

As mentioned, it is unlikely that any personal information will be collected about app users by the Government of Canada via the app, and the data that is collected is generally retained for a short period of time to support security measures and assess app effectiveness. In other words, all the information in this app’s ecosystem is designed to be kept for the shortest timeperiod necessary to achieve the specific need that information is for. If an individual receives a notice that they were in close proximity with someone who tested positive, but the individual who was notified had been in contact with very few people in the last two weeks, it is possible they would be able to identify who that individual is. There are other re-identification risks that may be possible, but they would be much more difficult to accomplish and therefore much more remote. The limited impact on individual’s privacy seems proportional to the great need to save lives, to ease restrictions on individuals thereby ameliorating the mental health of Canadians as well, and to allow the economy to safely re-open and rebuild.

##### Is there a less privacy-invasive way of achieving the same end?

This question asks whether reasonable steps have been taken to ensure that the minimum amount of personal information required to achieve the objective has been collected. As noted, the app is unlikely to involve a collection of personal information by the Government of Canada.

We note further that the alternative option, a contact tracing app, is more privacy invasive, collecting geolocation data and reporting this to public health authorities. In addition, manual contact tracing is highly resource-intensive and relies on individuals’ imperfect memory of where they have been for the past 14 days. It involves tracers tracking down individuals directly (typically by phone) to inform them of their risk of exposure and advising them of next steps. While manual contact tracing will continue, the supplementary capacity provided through the app allows for exposed individuals to be notified, without requiring the collection of personal information that is done during manual tracing.

For these reasons, the exposure notification app has been identified as a valuable supplement to manual tracing that is less resource-intensive and highly protective of Canadians’ privacy.

#### _Purpose Limitation_

The app and the data collected therein will be used for the purpose of reducing the spread of the COVID-19 virus in Canada. In addition, data, assessed to ensure it does not constitute personal information, will be used in order to monitor and measure the performance of the app. Further, any new use or disclosure of personal information can only be done with consent. Note that use of the Google/Apple API is conditional on any uses or disclosure of personal information being based upon consent.

#### _De-identification_

The app is unlikely to involve the collection of any personally identifiable information. The data collected via the app by the Government of Canada is limited and we have assessed that there is not a serious possibility of re-identification.

#### _Time-Limitation_

The app as a whole will be shut down within 30 days of a declaration by the Chief Public Health Officer of Canada that the pandemic is over.<sup id="f10">[[10]](#pandemic-criteria)</sup> As well, individuals can delete the app at any time. Finally, the TEKs on the device delete after 14 days. In other words, all the information in this app’s ecosystem is designed to be kept for the shortest time period necessary to achieve the specific need that information is for.

Once the determination has been made to shut down the app, all components of the service will be retired. This includes the key server and one-time-key portals, as well as the ability to download the app in the Apple and Google app stores.

The collection of aggregate, de-identified data and its retention period has been assessed to ensure it meets all requirements.

#### _Transparency_

Users who download the app will be required to review and accept a clear and accessible statement that provides them with information about how the app works, how information about exposure will be received by the user and transmitted to other users, what data will be collected about them and how that data will be used and where it will be stored. Our privacy analysis is publicly available.

#### _Accountability_

The performance of the app and its effectiveness will be closely monitored and assessed as more Canadians begin to use it. The Government of Canada is working closely with the Advisory Council to address any issues as they arise. The Advisory Council’s role is to provide expert advice and guidance to ensure the app meets the highest standards with respect to public health outcomes, technology, accessibility, and privacy.

Health Canada is also developing a complementary oversight/accountability process for COVID Alert. The Office of the Privacy Commissioner is being engaged on assessments that may have impact on privacy.

#### _Safeguards_

The app and its development is being implemented primarily by developers, designers, and researchers employed directly by the Government of Canada whose security clearance level is commensurate with the level of access they have. When external support is brought in on an advisory capacity (e.g., BlackBerry reviewing source code on a pro bono basis), it is without access to the system data. The code and infrastructure can be reviewed without providing any access to the data. When external support is brought in on a more hands-on capacity (e.g., developers with specialized mobile app or server infrastructure skills to ensure security and reliability at scale), those individuals will be under contract (either through procurement or through mechanisms like Interchange) which ensure they are held to the same standards as those employed directly by the Government of Canada. Security clearances will be required for anyone with access to sensitive infrastructure or data.

In addition, the underlying cloud infrastructure that will host the key server (provided by Amazon Web Services and located in Canada) is procured through existing Shared Services Canada cloud framework agreements, subject to contractual terms to ensure access to data and systems is appropriately restricted.

Procedural and technical safeguards are implemented, in accordance with the security assessment and authorization process, to ensure that only those with a need to access infrastructure or data can do so, and only for purposes linked to the implementation of the exposure notification system. The system is implemented according to the principle of “least privilege”: access to the data is treated as the exception, not the rule. Processes are in place, for example, to ensure that code is reviewed by multiple developers before being deployed, and access to the infrastructure is both controlled and monitored.

Finally, the public will be informed of any vulnerabilities or threats to the app, to ensure they can make an informed decision.

## Appendix A: List of COVID Alert App Data

<table>
  <tr>
   <td><strong>Component</strong>
   </td>
   <td><strong>Element</strong>
   </td>
   <td><strong>Certain?</strong>
   </td>
   <td><strong>Shared?</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><strong>GA OS layer</strong>
   </td>
   <td><em>Temporary Exposure Key (TEK)</em>
   </td>
   <td>Yes
   </td>
   <td>To <strong>app</strong>
   </td>
   <td>
<ul>

<li>Generated (once daily) by the <strong>Google/Apple layer in the operating system</strong>

<li>Expire after 14 days on device

<li>Become “<em>Diagnosis Keys</em>” once released to the <strong>app</strong> for upload after positive diagnosis and end-user consent
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>GA OS layer</strong>
   </td>
   <td><em>Rolling Proximity Identifier (RPI)</em>
   </td>
   <td>Yes
   </td>
   <td>To other devices’ <strong>GA OS layer</strong>
   </td>
   <td>
<ul>

<li>Generated (every 5–20 minutes) based on the <em>TEK</em> (per <a href="https://blog.google/documents/69/Exposure_Notification_-_Cryptography_Specification_v1.2.1.pdf">cryptography specification</a>)

<li>Transmitted (sent every 250ms) via Bluetooth to other devices with the <strong>GA OS layer</strong> activated

<li>Received roughly every 5 minutes when the framework begins to scan for beacons quickly (power saving measure)

<li><strong>OS layer</strong> logs the <em>RPIs</em> the device comes into proximity with
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>App</strong>
   </td>
   <td><em>Diagnosis Keys</em>
   </td>
   <td>Yes
   </td>
   <td>To <strong>key server</strong>
   </td>
   <td>
<ul>

<li><em>TEKs</em> become <em>Diagnosis Keys</em> when a positive diagnosis is received and the end-user consents to their release

<li>Provided to the <strong>app</strong> by the <strong>GA OS layer</strong>, with end-user’s consent (both through <strong>app</strong> and through operating system interface), to upload to <strong>key server</strong>
<ul>

<li>This can only happen once the end-user has received a positive diagnosis

<li>The end-user must have received a random <em>one-time key</em> from a healthcare professional (or otherwise distributed through the PT’s test results notification process) to upload to the <strong>key server</strong>
</li>
</ul>

<li>On first upload, the person uploads their last 14 days worth (or shorter if they enter date of symptom onset or test date) of <em>Diagnosis Keys</em> to the <strong>key server</strong>; for each of subsequent 14 days, they’re also asked to consent to upload that day’s <em>Diagnosis Key</em>
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>App</strong>
   </td>
   <td><em>End-user personal information</em>
   </td>
   <td>TBD
   </td>
   <td>No
   </td>
   <td>
<ul>

<li>Potential elements include: language preference; PT selection

<li>G/A protocol mandates that collection of personal information must be voluntary

<li>TBD whether any would be collected in the <strong>app</strong>
<ul>

<li>GC strong preference is not to collect any, but PTs may request (FPT discussions continue), or may be necessary to customize, e.g., the advice given on next steps after receiving notification of possible exposure

<li><strong>App</strong> would not collect personal health data, in any case

<li><strong>App</strong> would not transmit PII to the <strong>key server</strong>, in any case
</li>
</ul>

<li>TBD how collection would occur in <strong>app</strong>, if any occurs – e.g., end-user may be asked for their PT each time it’s relevant, instead of storing/retaining it in the <strong>app</strong>
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Server</strong>
   </td>
   <td><em>Diagnosis Keys</em>
   </td>
   <td>Yes
   </td>
   <td>To <strong>app</strong>
   </td>
   <td>
<ul>

<li>When a person tests positive, they upload their non-expired <em>TEKs</em> to the <strong>key server</strong> as <em>Diagnosis Keys</em> (<em>TEKs</em> are retained on device only for 14 days) – i.e., the <strong>server</strong> holds confirmed-positive <em>TEKs</em>, known as <em>Diagnosis Keys</em>

<li><em>Diagnosis Keys</em> are wiped from <strong>server</strong> database after their validity period (on the key server for 14 days, and up to an additional 7 days in database back-ups) expires

<li><strong>App</strong> downloads new <em>Diagnosis Keys</em> from the <strong>server</strong> at a regular interval (once every 4 to 24 hours depending on battery level, and when the app is opened; will also depend on internet access)

<li><em>Diagnosis Keys</em> are grouped into 6-hour bundles (for all <em>Diagnosis Keys</em> received between midnight and six AM, the <strong>server</strong> bundles them as if they’d been received at midnight, so the <strong>app</strong> can’t determine the specific hour at which a <em>key</em> was uploaded) (TBD on 6 hour figure, likely increasing to 24 hours)

<li>Associated metadata: hour generated (rounded to hour to reduce privacy risk); validity period; transmission risk level (TBD how set/used, if at all); <em>API key</em> that generated the <em>one-time key</em> authorizing upload
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Server</strong>
   </td>
   <td><em>One-time keys</em>
   </td>
   <td>Yes
   </td>
   <td>To end-users
   </td>
   <td>
<ul>

<li>Shared with end-users through PT healthcare test result notification processes (specific distribution mechanism will vary across PTs)

<li>Allows end-user to upload <em>Diagnosis Keys</em> to <strong>server</strong>: essentially an anti-spam measure (to ensure <em>Diagnosis Keys</em> aren’t accidentally or maliciously uploaded)

<li>Associated metadata: time of creation, how many <em>Diagnosis Keys</em> can be uploaded with the one-time key; cryptographic public key; cryptographic private key
<ul>

<li><em>One-time key</em> is struck from database once “claimed” by the end-user (i.e., entered into the <strong>app</strong>)

<li><em>One-time key</em> is replaced by crypto public key and crypto private key once claimed; public key is shared with <strong>app</strong> to allow encrypted upload of <em>Diagnosis Keys</em>
</li>
</ul>
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Server</strong>
   </td>
   <td><em>API keys for one-time keys</em>
   </td>
   <td>Yes
   </td>
   <td>To PTs
   </td>
   <td>
<ul>

<li>Allows PTs to obtain <em>one-time keys</em> from the <strong>server</strong> to distribute to end-users through their test result notification processes
</li>
</ul>
   </td>
  </tr>
</table>

## Appendix B: COVID Alert App Metrics

As of the week of February 8, 2021, new app metrics are being collected from COVID Alert to enhance the Government of Canada’s ability to evaluate the effectiveness of the app.

### Before

Before this change, the app metrics were only being collected from the COVID Alert server and the Google Play and Apple app stores. Those metrics included:

*   Total number of downloads;
*   Number of provinces and territories (PTs) that have on-boarded; and
*   Number of one-time keys (OTKs) entered into the app (by PT).<sup id="f11">[[11]](#server-data)</sup>

These metrics alone were insufficient to assess the effectiveness of the app on public health outcomes. HC continues to collect these metrics from the COVID Alert server and app stores, alongside the additional app metrics from the app outlined below.

### New metrics

HC now collects the following data:

* **Number of active users per province or territory (PT):** An “active user” is a user whose app is performing background checks as intended. The app reports the PT the user selected in the app during the onboarding process, to provide an approximate number of active users per PT. The PT selection will remain voluntary for app users.

* **Number of users whose app changed to the “exposed” state:** When a user receives an exposure notification, the app status changes from “unexposed” to “exposed.” Each time this happens, the event would be logged and transmitted to the key server and aggregated to provide a total number of app users who received an exposure notification and the approximate number of exposure notifications sent. In addition, a separate event would be logged to provide a total number of users who received additional exposure notifications while their app was already in the “exposed” state. This data would also be cross-referenced with the selected PT to estimate the number of notifications received in each PT.

* **Number of app users who enter a one-time key (OTK) after receiving an exposure notification:** If a user tests positive for COVID-19 and enters an OTK in the app while the app is in the “exposed” state, this would provide metrics on the approximate number of users who tested positive after receiving an exposure notification. This data would be cross-referenced with the selected PT to estimate the number of users who tested positive after receiving an exposure notification in each PT.

* **Technical performance metrics:**

     *   The number of new installs, which reports each time a user hits the first screen shown when the app is opened for the first time. This indicates that a new user has downloaded and opened COVID Alert.
     *   The number of “date of symptom onset” or “test date” submitted when uploading Temporary Exposure Keys (TEKs). The dates themselves are not shared.
     *   Number of app users who have completed onboarding and have agreed to the following three permissions:
          *   COVID Alert is on
          *   Google/Apple Exposure Notification Framework is enabled
          *   Push notifications enabled for COVID Alert
     *   Number of devices performing background checks, and number of background checks performed per day, by type of device (iOS or Android)<sup id="f12">[[12]](#daily-background-checks)</sup>
     *   Number of times the app was turned off or on<sup id="f13">[[13]](#ppe-app-on-off)</sup>
     *   Amount of time between exposure notification and the user clearing the “exposed” state<sup id="f14">[[14]](#clear-exposed-state)</sup>

### Data Collection Method

Data is collected from COVID Alert to develop the app metrics that enable HC to assess app effectiveness and performance. The data used to develop the app metrics are collected by creating event logs of user experiences and/or actions. These event logs are transmitted to the key server and will be accompanied by the IP address; however, the event logs and the IP address will not be linkable and will never be stored together. The data will be encrypted in transit and stored in two ways on the key server:

1. As an individual event log stored for 24 hours, which contains the type of event, device type (e.g. iPhone, Android), and the date and time; and
2. As an aggregated record of all events, updated every 24 hours, stored indefinitely, which contains the date, type of event, device type, and total number of events per day.

### Public Health Rationale

The app metrics collected from COVID Alert will provide information on:

*   The approximate level of app uptake in each PT;
*   The approximate number of exposure notifications sent per PT;
*   The approximate number of users who test positive for COVID-19 after they received an exposure notification;
*   Whether the various functions of the app are working correctly and if they are useful; and
*   The technical performance of the app, specifically,
    *   proportion of users who submit OTKs who also submit a symptom onset/test date;
    *   proportion of users enabling permissions required for the app to work;
    *   whether necessary background checks are being conducted; and
    *   whether two new features - ability to turn off the app, and ability to clear the exposed state - are being utilized as intended.

These metrics will enable HC to assess the app’s effectiveness in influencing positive public health outcomes, which aligns with the OPC’s recommendation. The metrics will inform the evaluation that will take place in partnership with their office.

If the metrics demonstrate the app’s effectiveness, it may encourage individuals to download COVID Alert and encourage new PTs to onboard.

They will also provide an approximate measure of whether individuals use the app to notify other individuals of potential exposure. This would enable HC to determine whether the app is having tangible impact on reducing the spread of the pandemic (i.e. whether individuals are being notified of potential exposures and whether they are taking action as a result). Collecting these metrics by PT will also enable HC to target its communications to the areas where there is less engagement with the app.

### Privacy Analysis

The metrics being proposed above do not contain any direct identifiers. Individual logs will be stored for a short period, they will be compiled in the aggregate (total number of users/metric), and will not be combined with other information, including IP addresses. In addition, metrics will not be reported publicly if the counts are less than twenty.

Given these circumstances, and the measures taken to protect the data (e.g., limiting the retention of individual event logs, aggregating event logs, storing the data separate from IP addresses, and storing the data on a secure server with limited access), the data are unlikely to constitute personal information. In other words, there is a less than frivolous chance that an individual could be identified alone, or in combination with other available information. Therefore, it is unlikely that the _Privacy Act_ would be engaged on the collection of these metrics.

The primary risk is that the public _perceives_ the collection of the app metrics to be contrary to the privacy-protective approach taken in the design of the app. This will be mitigated by ensuring clear and transparent messaging about the additional data collection, the need for this data, and the privacy protections in place to reduce the risk of re-identification to near zero.

### Other Considerations

The metrics will be used primarily for internal analysis and performance measurement. However, certain metrics, such as the number of installs in each PT and the number of exposure notifications sent, may be released publicly in aggregate form to demonstrate the effectiveness of the app and encourage app adoption. This data may also be released by individual PTs. A privacy assessment will be conducted to ensure that when any metrics are made publicly available, it is done in such a way that reduces the risk of re-identification to near zero.

Health Canada will also consult with the OPC and the Advisory Council prior to the public release of app metrics data. In addition, the OPC, Advisory Council, and the Federal, Provincial, Territorial Working Group will continue to be consulted on the data collection prior to decisions being made and before implementation. Additional feedback will be considered to ensure that the data collection maintains the app’s privacy-protective approach.

## Footnotes

<a name="otp-portal">[1]</a>
     This analysis does not include a full privacy analysis of the distribution of one-time keys for PTs using the federal COVID Alert portal; however, it does provide a brief overview of the portal as well as a description of the information collected. The full privacy analysis for the portal was undertaken separately. [↩](#f1)

<a name="otp-api-tokens">[2]</a>
     When a PT requests a one-time key so that it can be provided to the user, the PT system to obtain the key needs to prove to the key server that it is legitimate – i.e. that the PT system is run by a PT healthcare provider. To manage this authentication, the key server uses API tokens. Each API token is a random alphanumeric string of at least 20 characters, generated by CDS. CDS generates an API token for each PT system integrating with the key server to obtain one-time keys. The PT system provides that API token to the key server when requesting a one-time key. The API token cannot be linked to other information to identify an individual as it is meant to authenticate a PT system requesting a one-time key. A portion of the API token is stored alongside both one-time key entries and diagnosis keys during the 15-day period they are kept. In theory, this could be used to erase a set of keys that were uploaded maliciously if an API token given to a PT were compromised. It could also be used to help generate metrics per region to estimate uptake versus the number of published COVID cases. For example, we are currently disaggregating the one-time keys by province for server metrics, to know the number of one-time keys that were submitted by the province or territory. [↩](#f2)

<a name="otp-pt-variation">[3]</a>
     Note that how this process will occur may vary from PT to PT. While the user experience may differ by PT, the data flow will not. [↩](#f3)

<a name="dk-upload-process">[4]</a>
     More details on this process can be found in Section 6, Privacy Analysis, under “RPIs and TEKs.” [↩](#f4)

<a name="dk-tek-generation">[5]</a>
     On a daily basis, the Google/Apple exposure notification framework generates a random TEK. The TEK then generates a new random code (RPI) every five to 20 minutes. The RPIs are shared with other devices. [↩](#f5)

<a name="dk-upload-next-steps">[6]</a>
     They may also be provided with info on what to do regarding the notification (get tested, self-isolate, etc.). These details are up to the PT. [↩](#f6)

<a name="limited-contact-scenario">[7]</a>
     In small community contexts, it’s likely that individuals may be publicly identified as COVID-positive through other means (manual contact tracing; discussions among family members, friends, and community members; grocery deliveries, etc.). The exposure notification app exists as an optional add-on to a broader context of public health responses and community discussions, many of which may be more likely to publicly identify COVID-positive individuals than the app itself. [↩](#f7)

<a name="healthcare-portal-privacy">[8]</a>
     For further details on the healthcare portal, see the COVID Alert Portal privacy checklist (forthcoming). [↩](#f8)

<a name="gordon">[9]</a>
     [Gordon v. Canada (Health), 2008 FC 258 (CANLII)](https://www.canlii.org/en/ca/fct/doc/2008/2008fc258/2008fc258.html) [↩](#f9)

<a name="pandemic-criteria">[10]</a>
     Note that the criteria for the pandemic to be considered over, and the process for this determination to be made, have yet to be established. [↩](#f10)

<a name="server-data">[11]</a>
     The exhaustive data being collected by the Government of Canada from the server is:

*   number of OTKs generated, by PT
*   number of OTKs entered into the app, by PT
*   duration length of an OTK, per PT (i.e. how long it took an OTK to be claimed)
*   number of unclaimed encryption keys, by PT (an encryption key is what you get in return for claiming an OTK, so this metric represents number of unclaimed OTKs)
*   number of expired claimed encryption keys, by PT
*   number of expired claimed encryption keys with no uploads, by PT
*   number of exhausted encryption keys by PT
*   number of TEKs uploaded per user in their initial upload (i.e. right after OTK submission)
*   number of TEKs uploaded after an initial upload (number of keys uploaded in a batch, not connected to any device or user)

The Government also monitors the following metrics via the Google Play and Apple App Stores, for performance purposes:

*   number of downloads
*   number of downloads by device type
*   user loss (i.e. number of uninstalls)
*   crashes
*   reviews (qualitative data) [↩](#f11)

<a name="daily-background-checks">[12]</a>
     The app performs daily background checks to make sure it is functioning properly. [↩](#f12)

<a name="ppe-app-on-off">[13]</a>
     This feature was added so that app users can turn off the app while they are wearing full personal protective equipment (e.g. nurses and doctors who are treating COVID-19 patients), so they do not receive exposure notifications during times when they are fully protected from exposure. [↩](#f13)

<a name="clear-exposed-state">[14]</a>
     This feature was added so that users who receive an exposure notification, get tested and receive a negative test result can clear their ‘exposed’ status. However, it is also possible for individuals to clear their exposed status immediately, with no negative test result. [↩](#f14)
