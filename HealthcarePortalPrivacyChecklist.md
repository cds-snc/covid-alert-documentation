[Français](https://github.com/cds-snc/covid-alert-documentation/blob/main/ListeVerificationProtectionRenseignementsPersonnelsPortailSoinsSante.md)

# Privacy Checklist for COVID-19 Initiatives: COVID Alert Healthcare Portal

_Health Canada/Public Health Agency of Canada Privacy Management Division – PP-2020-000075_

## Background

As organizations subject to the _Privacy Act_, Health Canada (HC) and the Public Health Agency of Canada (PHAC) have an obligation to protect their personal information holdings.

The purpose of this document is to ensure that HC/PHAC programs handling personal information are meeting their _Privacy Act_ and Treasury Board requirements.

<table>
  <tr>
   <th><strong>Institution</strong>
   </th>
   <td>Lead institution: Health Canada (HC) 
<br/>
Internal Support Services: Treasury Board Secretariat Canadian Digital Services (CDS)
   </td>
  </tr>
  <tr>
   <th><strong>Branch</strong>
   </th>
   <td>Health Canada COVID-19 Task Force 
   </td>
  </tr>
  <tr>
   <th><strong>Contact person name and title</strong>
   </th>
   <td>Marc Fortin, Assistant Deputy Minister, COVID-19 Task Force 
   </td>
  </tr>
  <tr>
   <th><strong>PMD Analyst</strong>
   </th>
   <td>Melissa Toutloff, Senior Policy Analyst 
   </td>
  </tr>
</table>

## Rationale for Completing a Privacy Checklist for COVID-19 Initiatives 

The personal information collected as part of this initiative includes information about COVID Alert Portal (the portal) administrators (first name and surname, email address, telephone, number, province/territory, login credentials and account activities) and healthcare providers (email address, telephone number, province/territory, login credentials, and account activities). The personal information will be used to create the portal administrator role in the province/territory (PT) who will provide access to healthcare providers. The Government of Canada will not require any personal information from users of the healthcare portal in order to verify their credentials and provide access to the system as this will remain the responsibility of the PT. More information on the portal is provided in section 3 of this document. 

The collection of the personal information is for non-administrative purposes, is non-sensitive, and does not fit within the requirements of the _Interim Directive on Privacy Impact Assessment_ to complete a PIA. Under normal circumstances, the HC/PHAC Privacy Checklist would be used to assess the privacy implications of an initiative such as this one. However, given the nature of this activity, and the importance of assessing COVID-19 related initiatives according to the Office of the Privacy Commissioner (OPC) [Framework for the Government of Canada to Assess Privacy-Impactful Initiatives in Response to COVID-19](https://www.priv.gc.ca/en/privacy-topics/health-genetic-and-other-body-information/health-emergencies/fw_covid/), HC is relying on the Privacy Checklist for COVID-19 Initiatives, which also incorporates the principles outlined in OPC Framework. 

## Engagement

<table>
  <tr>
   <th>
   </th>
   <th><strong>Yes</strong>
   </th>
   <th><strong>No</strong>
   </th>
   <th><strong>N/A</strong>
   </th>
  </tr>
  <tr>
   <td>The HC/PHAC Privacy Management Division (PMD) has been engaged in the development of this Privacy Checklist? 
   </td>
   <td>☒
   </td>
   <td>☐
   </td>
   <td>☐
   </td>
  </tr>
  <tr>
   <td>The OPC has been notified of this initiative.
   </td>
   <td>☒
   </td>
   <td>☐
   </td>
   <td>☐
   </td>
  </tr>
</table>

CDS, as the institution responsible for providing internal support services to HC on the initiative, engaged HC PMD early in the process in order to complete a Privacy Checklist. 

The OPC was notified that CDS will be developing a healthcare portal through consultations with their office on the _COVID-19 Exposure Notification Application Privacy Assessment_ (PP-2020-000062). 

## General Information

<table>
  <tr>
   <td colspan="3" ><strong>Institution and initiative</strong>
   </td>
  </tr>
  <tr>
   <td>Health Canada (HC)
   </td>
   <td colspan="2" >COVID Alert Portal 
   </td>
  </tr>
  <tr>
   <td colspan="3" ><strong>Officials responsible for completion of the Privacy Checklist</strong>
   </td>
  </tr>
  <tr>
   <td>Executive responsible for program area
   </td>
   <td colspan="2" >Marc Fortin, Assistant Deputy Minister
   </td>
  </tr>
  <tr>
   <td>Delegated Privacy Official
   </td>
   <td colspan="2" >Andréa Rousseau, Director, Health Canada/Public Health Agency of Canada Privacy Management Division
   </td>
  </tr>
  <tr>
   <td colspan="3" ><strong>Multi-institutional initiative (if applicable) For multi-institutional initiatives, appoint a lead institution with overall responsibility for privacy considerations to help reduce gaps and inconsistencies.</strong>
   </td>
  </tr>
  <tr>
   <td colspan="2" >Canadian Digital Service 
   </td>
   <td>John Millons, Head of Policy
   </td>
  </tr>
</table>

## Overview

<table>
  <tr>
   <td>About the initiative, program or activity provide a short overview of the initiative, program, or activity. Briefly describe the purpose that the initiative, program or activity will serve. Include a description of the activities that involve personal information and a high-level description of the personal information concerned. 
   </td>
  </tr>
</table>

In an effort to reduce the spread of the COVID-19 virus, while also gradually easing restrictions on individuals and allowing the economy to begin to re-open, the Government of Canada has launched a single national COVID-19 exposure notification app (hereinafter referred to as COVID Alert). Each PT will have the option to adopt the app for its jurisdiction. Some PTs will require support from the Government of Canada on implementing a healthcare portal (COVID Alert Portal) to obtain the one-time keys that app users will require in order for the app to notify other users of potential COVID-19 exposure.  For a full Privacy Assessment of the COVID Alert app, please refer to the [COVID Alert: Exposure notification application privacy assessment](https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/covid-alert/privacy-policy/assessment.html).

### About the COVID Alert Portal:

When app users download the COVID Alert app and consent to its various functions, their device transmits random IDs (temporary exposure keys (TEKs)) that are used to record proximity to another app user’s device. When a user receives a positive COVID-19 test result, the health authorities (healthcare providers) in PTs that have adopted the app will provide them a one-time key and instructions on how to enter it into the app. The app will validate the one-time keys and ask the user if they would like their past 14 days of TEKs to be sent to the Government of Canada server (key server) so that other users can be notified if they were exposed to the user that was diagnosed with COVID-19. One-time keys are created and housed in the key server that also houses other data collected via the app. 

Some PTs have the capacity to retrieve one-time keys from the key server using their existing IT infrastructure (e.g. some PTs have a platform to provide COVID-19 test results to individuals online, and the same platform can be used to issue one-time keys), while other PTS do not have this capacity (e.g. some provide test results over the phone). For the PTs that don’t have the capacity to retrieve the one-time keys, CDS is developing the COVID Alert Portal (the portal) that the PTs can use to retrieve the keys and provide them to app users who have tested positive for COVID-19. Although the portal will rely on retrieving one-time keys from the key server, it is not connected to the app in any way nor will it connect to any PT IT system. 

### How the Portal works:  

PTs that will rely on the portal to issue one-time keys to app users will be required to provide CDS with officials in their organizations who can serve as administrators of the portal. The administrators will be responsible for sending account invitations to healthcare providers who will require access to the portal to obtain the one-time keys. For PTs unable to take on this administrator role, CDS will serve as the portal administrators and send account invitations to healthcare providers.

When an app user tests positive for COVID-19, the healthcare provider will log into the portal to generate a one-time key. The request will be submitted to the key server and the one-time key will be sent back to the healthcare provider so they may provide it to the app user, along with instructions on entering the key into the app. The portal displays the one-time key to the healthcare provider, no other validation of the newly-generated key is needed. The rest of the one-time key processes takes place between the app and the key server, when and if initiated by the app user as described in the COVID Alert App Privacy Assessment.

The mechanism by which the one-time key is provided to the user will be up to the PT – this responsibility lies with their jurisdiction – and they will be required to transmit it in a secure manner. 

#### PT administrator and healthcare provider information

The personal information collected and used in order for CDS to administer the portal is the following: information about PT administrators (first name and surname, email address, telephone number, province/territory, login credentials and account activities) and healthcare providers (email address, telephone number, province/territory, login credentials, and account activities). 

This information will be stored on the key server. 

#### Security audit logging

In order to maintain the integrity of the portal, and to reduce the likelihood of fraudulent one-time keys being generated, a number of audit logging features are included in COVID Alert Portal. This includes activities such as, logging in, inviting new users, account creation, getting a one-time key, etc. These activities would be associated with the user account that initiated them, and with the timestamp at which they took place.

### Roles and Responsibilities: 

#### Health Canada (HC)

HC is charged with the overall implementation of the app and portal. HC’s role involves engaging with the PTs to encourage buy-in and facilitate onboarding of the app. HC is also responsible for assessing any privacy implications and risks associated with the implementation of the app and portal, and engaging the Office of the Privacy Commissioner for meaningful consultation and feedback. 

#### Canadian Digital Services (CDS) 

CDS is responsible for providing internal support services (information technology services) to Health Canada. It is responsible for developing the technological components of the COVID Alert app and the portal. In addition to developing the app itself, CDS will operate the key server (located within Canada) that will store encrypted, de-identified keys that reflect positive COVID-19 cases, including the one-time keys that PTs will obtain from the portal. 

#### Provinces/Territories (PT)

PTs are responsible for testing and diagnosing individuals with COVID-19. For PTs that have adopted the app, they will also be responsible for providing app users who test positive for COVID-19 with the one-time key (to be uploaded into the app) so other users can be notified of potential exposure. For PTs that do not have the technical capacity to obtain one-time keys through their own existing IT infrastructure, CDS has developed a web portal where PT healthcare providers will be able to login in order to obtain a one-time key. PTs administrators will be responsible for providing login credentials to healthcare providers who require access to the portal. 

PTs that adopt the app and use the portal will enter into a legal agreement with the Government of Canada, which sets out the terms of use for the portal. 

## Legal Authority, Collection and Notification

<table>
  <tr>
   <th>
   </th>
   <th><strong>Yes</strong>
   </th>
   <th><strong>No</strong>
   </th>
   <th><strong>N/A</strong>
   </th>
  </tr>
  <tr>
   <td>Is there a legal authority for the proposed collection of personal information? 
   </td>
   <td>☒
   </td>
   <td>☐
   </td>
   <td>☐
   </td>
  </tr>
</table>

The COVID Alert app, and its administration, including the creation of the portal, as a tool to enhance existing measures to address and reduce the spread of the COVID-19 virus, fits within the mandates of HC and its legislative requirements according to section 4 of the _Department of Health Act_ to protect the people of Canada against risks to health and the spreading of diseases. 

In addition, subsection 29.2 of the _Financial Administrative Act_ (FAA) provides the authority for CDS to deliver internal support services (IT services) to HC and fulfill their role in the development of the app and portal, as described in section 3 of this document.

<table>
  <tr>
   <th>
   </th>
   <th><strong>Yes</strong>
   </th>
   <th><strong>No</strong>
   </th>
   <th><strong>N/A</strong>
   </th>
  </tr>
  <tr>
   <td>Does the collection of personal information directly relate to a program or activity?
   </td>
   <td>☒
   </td>
   <td>☐
   </td>
   <td>☐
   </td>
  </tr>
</table>

To provide the largest benefit to Canadians in terms of protecting against risks to health and the spreading of disease, a pan-Canadian exposure notification app is preferable to a patchwork of PT solutions. One of the primary functions of the COVID Alert Task Force is to engage with all PTs to encourage buy-in and facilitate onboarding. Different supports may be needed for different PTs to allow the COVID Alert app to launch in that jurisdiction. A lack of technological infrastructure to distribute one-time keys has been identified as a barrier to some PTs onboarding, and it is this reality that provided the impetus for the creation of a federal portal, available to PTs on an optional, as-needed basis.

The personal information collected as part of this activity relates directly to CDS’s responsibility to provide this internal support service to HC. CDS is responsible for developing the technological components of the portal. It will house the key server that will create and store the one-time keys that PTs will access by logging into the portal. They will set up the administrator user accounts so that these users can provide healthcare workers access to the portal. 

CDS will also be responsible for portal support. For example, if someone is locked out of their account or requires a new one at a new email address, they will have to do this manually.

<table>
  <tr>
   <th>
   </th>
   <th><strong>Yes</strong>
   </th>
   <th><strong>No</strong>
   </th>
   <th><strong>N/A</strong>
   </th>
  </tr>
  <tr>
   <td>Does the initiative/program/activity collect personal information directly from the individual?
   </td>
   <td colspan="2" >Partially 
   </td>
   <td>☐
   </td>
  </tr>
</table>

Personal information about the PT administrators, who will be providing health care providers the login credentials for the healthcare portal, will be collected by CDS from the PT health authority teams responsible for COVID Alert onboarding. When healthcare provider accounts are created, their username and password, and account logging information will be automatically stored in the CDS key server.  

<table>
  <tr>
   <th>
   </th>
   <th><strong>Yes</strong>
   </th>
   <th><strong>No</strong>
   </th>
   <th><strong>N/A</strong>
   </th>
  </tr>
  <tr>
   <td>Is the personal information for this initiative/program/activity collected by another government institution or entity and then disclosed to the initiative/program/activity?
   </td>
   <td>☒
   </td>
   <td>☐
   </td>
   <td>☐
   </td>
  </tr>
  <tr>
   <td>Was the legal authority for collection by other entities verified?
   </td>
   <td>☒
   </td>
   <td>☐
   </td>
   <td>☐
   </td>
  </tr>
</table>

The personal information about PT administrators and healthcare providers is collected by CDS on behalf of HC. However, HC does not require access to this information in order to fulfill their responsibilities in this initiative. 

CDS super-admin users will have access to the data in the key server and will be able to view all users, and their personal information, with the exception of their passwords. CDS will be implementing logging for various actions (logging in, inviting new users, account creation, obtaining a one-time keys, etc.). This will allow them to trace back anomalous or suspicious behaviour. Only authorized CDS staff will be granted super-admin accounts and the data will only be accessed on a need-to-know basis. These functions are in line with CDS’s role to deliver internal support services to HC under the authority of the FAA.

<table>
  <tr>
   <th>
   </th>
   <th><strong>Yes</strong>
   </th>
   <th><strong>No</strong>
   </th>
   <th><strong>N/A</strong>
   </th>
  </tr>
  <tr>
   <td>When collection is directly from individuals, will the individuals receive a Privacy Notice before their personal information is collected, setting out the purpose of the collection, and how the personal information will be used, disclosed or shared?
   </td>
   <td>☒
   </td>
   <td>☐
   </td>
   <td>☐
   </td>
  </tr>
  <tr>
   <td>Does one or more Personal Information Banks (PIB) exist for this activity?
   </td>
   <td>☐
   </td>
   <td>☒
   </td>
   <td>☐
   </td>
  </tr>
</table>

A privacy notice will be included on the portal website. 

The personal information for this initiative is not being used for an administrative purpose, however, it is organized or intended to be retrieved by personal identifier, and therefore, a PIB is required. A PIB will be drafted and included Health Canada’s Info Source chapter. 

<table>
  <tr>
   <th>
   </th>
   <th><strong>Yes</strong>
   </th>
   <th><strong>No</strong>
   </th>
   <th><strong>N/A</strong>
   </th>
  </tr>
  <tr>
   <td>Does a PIB need to be modified or created for this activity?
   </td>
   <td>☒
   </td>
   <td>☐
   </td>
   <td>☐
   </td>
  </tr>
  <tr>
   <td>Does the personal information relate to individuals who may have greater sensitivities or belong to vulnerable populations who experience disproportionate levels of discrimination (e.g., information related to race, disability, illicit drug use, gender, gender identify and expression)?
   </td>
   <td>☐
   </td>
   <td>☒
   </td>
   <td>☐
   </td>
  </tr>
</table>

The personal information being collected is limited to the name, contact information, username, and account activities for PT administrators and healthcare providers in order to provide access to the healthcare portal. This information is considered to be of low sensitivity (unlikely to cause harm or prejudice) and in many jurisdictions, names and contact information of PT employees and other information about their position is publicly available. 

The personal information does not directly reveal information about whether the individual belongs to a vulnerable population.

## Data Flow – Collection, Use, Disclosure, Retention and Disposal of Personal Information

This section should describe the “life cycle” of personal information (collection, use, disclosure, retention and disposal).  It should also include the identification of partners that handle the personal information during the administration of a program or an activity.  The following is intended to assist in mapping the flow of personal information throughout its life cycle.

<table>
  <tr>
   <td><strong>Personal Information</strong>
   </td>
   <td><strong>Method of collection</strong>
   </td>
   <td><strong>Initially collected by</strong>
   </td>
   <td><strong>Type of format/file type</strong>
   </td>
   <td><strong>Transmission method</strong>
   </td>
   <td><strong>Purpose and necessity of collection</strong>
   </td>
   <td><strong>Used by</strong>
   </td>
   <td><strong>Disclosed to</strong>
   </td>
   <td><strong>Access</strong>
   </td>
   <td><strong>Retention and disposal details</strong>
   </td>
  </tr>
  <tr>
   <td>
<p>   
<strong>PT Administrator</strong>
</p>
<ul>

<li>First name and surname

<li>Email address

<li>Telephone number

<li>Province/territory

<li>Login credentials (email address and password) 

<li>Account activities (logging in, creating accounts, etc.)

</ul>

<p>
<strong>Healthcare provider</strong>
</p>
<ul>

<li>Email address

<li>Telephone number 

<li>Province/territory

<li>Login credentials (email address and password) 

<li>Account activities (logging in, retrieving one-time keys, etc.)
</li>
</ul>
</li>
</ul>
   </td>
   <td>
<p>
The personal information about PT administrators is sent by email to CDS by the PT health authority teams responsible for COVID Alert onboarding, in order to create PT administrator accounts. 
</p>
<p>
The personal information about health care providers is collected directly by the PT Administrator who will create the account for the healthcare provider via a secure interface within the portal software, with access limited to only administrator accounts. CDS indirectly collects this information when the healthcare provider’s account is created and their information is stored on the key server.  
</p>
   </td>
   <td>CDS security/
<p>
operational staff responsible for managing the portal. 
</p>
<p>
PT Administrator 
</p>
   </td>
   <td>Electronic format 
   </td>
   <td>Regular email
   </td>
   <td>
<p>
The personal information about PT Administrators is collected by CDS in order to establish an administrator account in order to create accounts for healthcare providers so they can obtain the one-time keys. 
</p>
<p>
The personal information about healthcare providers is collected so they can obtain an account to the portal to access the one-time keys. 
</p>
<p>
Telephone numbers are collected so that a two-factor authentication code can be sent to PT administrators and healthcare providers as a security measure which is required for creating their portal account.  
</p>
<p>
CDS maintains an audit log of activities of both PT administrators and the healthcare providers for activities such as: logging in, inviting new users, account creation, getting a one-time key, etc. The purpose of the audit log is to reduce likelihood of fraudulently generating one-time keys and to trace back anomalous or suspicious behaviour.  
</p>
   </td>
   <td>CDS security/operational staff responsible for managing the portal. 
   </td>
   <td>
<p>
There are no disclosures of the PT administrator or healthcare provider personal information to any third parties. 
</p>
<p>
In the event that fraudulent or illegal activity is discovered, information from the audit log could be provided to law enforcement. Any such disclosures would be done in accordance with subsection 8(2) of the <em>Privacy Act.</em>
</p>
   </td>
   <td>CDS superadmin accounts can see all users and all their information, with the exception of their passwords. Only authorized CDS staff would be granted superadmin accounts
   </td>
   <td>
<p>
The personal information about the PT administrators and healthcare provider name, email address, telephone number, province/territory, and login credentials, will be retained for up to 30 days after the pandemic is declared over, at which point the portal will be de-commissioned and the information it stores will be deleted.  
</p>
<p>
PT administrators are responsible for deactivating accounts when they are no longer needed. When an account is deactivated, a record of the account is retained in the audit logs until the portal is de-commissioned in order to maintain a record of deleted accounts (e.g. so that CDS can know if a deleted account is re-created, and can flag if it is suspicious); except for audit logs implicated in a security investigation (if any), which could be retained for an additional 24 months. Access to these audit logs is restricted to CDS security/operational staff.
</p>
   </td>
  </tr>
</table>

## Risks, mitigation and safeguards

<table>
  <tr>
   <th>
   </th>
   <th><strong>Yes</strong>
   </th>
   <th><strong>No</strong>
   </th>
   <th><strong>N/A</strong>
   </th>
  </tr>
  <tr>
   <td>Are staff is appropriately trained on privacy requirements?
   </td>
   <td colspan="2" >Partially 
   </td>
   <td>☐
   </td>
  </tr>
  <tr>
   <td>Has the appropriate <a href="http://mysource.hc-sc.gc.ca/eng/ss/programs-services/information-management-information-technology/it-security/care-and-custody">security classification</a> been applied to the personal information?
   </td>
   <td>☒
   </td>
   <td>☐
   </td>
   <td>☐
   </td>
  </tr>
</table>

CDS staff handling the personal information are trained on the GC policy-based incident response plans and, therefore, are aware of what to do in the event of a privacy or security breach. However, they have not undergone general privacy awareness training. 

The personal information about the PT administrator and the healthcare providers is considered to be protected A. The key server where this information is stored is assessed as protected B. 

<table>
  <tr>
   <th>
   </th>
   <th><strong>Yes</strong>
   </th>
   <th><strong>No</strong>
   </th>
   <th><strong>N/A</strong>
   </th>
  </tr>
  <tr>
   <td>Is the personal information protected in a manner that is commensurate with its <a href="http://mysource.hc-sc.gc.ca/sites/default/files/care_and_custody_of_information_flyer_eng.pdf">security classification</a>?
   </td>
   <td>☒
   </td>
   <td>☐
   </td>
   <td>☐
   </td>
  </tr>
</table>

The underlying cloud infrastructure that will host the server (provided by Amazon Web Services (AWS) and located in Canada) is protected B and procured through existing Shared Services Canada cloud framework agreements, subject to contractual terms to ensure access to data and systems is appropriately restricted. 

Procedural and technical safeguards are implemented, in accordance with the security assessment and authorization process, to ensure that only those with a need to access infrastructure or data can do so, and only for purposes linked to the implementation of the exposure notification system. The system is implemented according to the principle of “least privilege”: access to the data is treated as the exception, not the rule. 

<table>
  <tr>
   <th>
   </th>
   <th><strong>Yes</strong>
   </th>
   <th><strong>No</strong>
   </th>
   <th><strong>N/A</strong>
   </th>
  </tr>
  <tr>
   <td>Is there a Privacy Breach Plan in place?
   </td>
   <td>☒
   </td>
   <td>☐
   </td>
   <td>☐
   </td>
  </tr>
  <tr>
   <td>Have all individuals responsible for handling the personal information been informed of the steps to take in the event of a <a href="http://mysource.hc-sc.gc.ca/eng/ss/programs-services/information-management-information-technology/access-information-and-privacy-0">privacy breach</a>? 
   </td>
   <td>☒
   </td>
   <td>☐
   </td>
   <td>☐
   </td>
  </tr>
</table>

CDS has a Cyber event management plan in place for responding to cybersecurity incidents, which includes steps to address breaches.

HC has a process in place to respond to privacy breaches that aligns with the Treasury Board Secretariat Privacy Breach Management Toolkit. Information about the process for responding to privacy breaches is available to all Health Canada employees on the departmental intranet website. 

<table>
  <tr>
   <th>
   </th>
   <th><strong>Yes</strong>
   </th>
   <th><strong>No</strong>
   </th>
   <th><strong>N/A</strong>
   </th>
  </tr>
  <tr>
   <td>Has a security assessment has been conducted? 
   </td>
   <td>☐
   </td>
   <td>☒
   </td>
   <td>☐
   </td>
  </tr>
  <tr>
   <td>Are physical and technical controls are in place to safeguard against unauthorized access to the personal information?
   </td>
   <td>☒
   </td>
   <td>☐
   </td>
   <td>☐
   </td>
  </tr>
</table>

A security assessment is in the process of being completed in partnership with the Office of the Chief Information Officer’s Cybersecurity Division. This checklist will be updated once the security assessment is completed to reflect risks that may impact privacy. 

CDS is implementing various controls around account creation and login in order to mitigate bad outcomes:

*   Passwords can’t be common phrases, or related to the username
*   All logins require a two-factor authentication code to be sent via a phone, email, or other applicable process
*   Multiple bad attempts to log in will lock out the account for a period of time

Comprehensive security controls are in place on the underlying AWS infrastructure as per the [Government of Canada Protected B confidentiality, Medium Integrity, Medium Availability Cloud Profile](https://cyber.gc.ca/en/guidance/annex-4a-profile-1-protected-b-medium-integrity-medium-availability-itsg-33).

<table>
  <tr>
   <th>
   </th>
   <th><strong>Yes</strong>
   </th>
   <th><strong>No</strong>
   </th>
   <th><strong>N/A</strong>
   </th>
  </tr>
  <tr>
   <td>Is de-identified or aggregate information used when possible?
   </td>
   <td>☐
   </td>
   <td>☐
   </td>
   <td>☒
   </td>
  </tr>
</table>

## Privacy Compliance Assessment

In order to support PTs that are onboarding to the COVID Alert app, CDS has developed a portal to enable healthcare providers to login and obtain the one-time keys so they can be provided COVID Alert App users who have tested positive for COVID-19. PTs that adopt the app and use the portal will enter into a legal agreement with the Government of Canada, which sets out the terms of use for the portal. 

The personal information collected by CDS is related to the PT administrators who will be responsible for creating the portal accounts for the healthcare providers. CDS will also be collecting the personal information of the healthcare providers when their portal account is created and their personal information is stored on the key server. 

The personal information about the PT administrator and healthcare providers is limited to non-sensitive information (i.e. contact information, login credentials and account activities) and is used for the purpose of creating portal accounts. Their activity on the portal will be logged for security purposes. In addition, the one-time keys will not be connected to the portal users and will not be associated to the app user who receives it. 

Given the low sensitivity of the personal information and how the information will be used, PMD has assessed the overall privacy risks of the portal as low. Nonetheless, PMD has made the following recommendations that should be implemented in order to mitigate risks and ensure compliance with the _Privacy Act_ and Treasury Board (TB) privacy policies:

*   The legal agreement with the PTs who are using the portal should indicate that the PT administrators are responsible for deactivating user accounts when they are no longer required and that PT administrators should review account access on a regular basis in order to ensure there are no inactive accounts. 
*   Although CDS has developed a generic notice on the portal website which provides information on the organization’s privacy policies, a specific notice should be created and made available on the portal website which provides notice according to the requirements set out in section 6.2.9 of the TB _Directive on Privacy Practices_.
*   HC, in collaboration with CDS, should create a PIB in order to describe the collection of personal information. HC should endeavor to publish the PIB in the next iteration of its Info Source chapter, assuming the initiative continues beyond the date set out in s.6.4.6 of the Interim Directive on Privacy Impact Assessment for submitting PIBs for urgent COVID-19 initiatives. 
*   Although CDS is trained on the GC policy-based incident response plans and, therefore, are aware of what to do in the event of a privacy or security breach, they have not undergone general privacy awareness training. It’s recommended that they consult the Treasury Board Secretariat Access to Information and Privacy Division in order to obtain privacy training. 
*   It’s recommended that CDS complete the Security Assessment prior to portal launch and keep PMD informed of any security risks that could impact the protection of personal information. 

## Transparency

<table>
  <tr>
   <th>
   </th>
   <th><strong>Yes</strong>
   </th>
   <th><strong>No</strong>
   </th>
   <th><strong>N/A</strong>
   </th>
  </tr>
  <tr>
   <td>Does the institution have a process to receive and respond to privacy-related complaints and inquiries?
   </td>
   <td>☒
   </td>
   <td>☐
   </td>
   <td>☐
   </td>
  </tr>
  <tr>
   <td>Will a summary of this Privacy Checklist be published online?
   </td>
   <td>☒
   </td>
   <td>☐
   </td>
   <td>☐
   </td>
  </tr>
</table>

The COVID-19 Exposure Notification Application Privacy Assessment, which is currently posted on Canada.ca, will be updated to include information on the COVID Alert Portal. 

## Approval

I attest that the information contained in this report accurately describes the handling of personal information by Health Canada and I commit to the completion of the recommendations.

Marc Fortin \
Assistant Deputy Minister, COVID-19 Task Force \
Health Canada

As the Health Canada / PHAC Delegate responsible for section 10 of the Privacy Act, I endorse this report and am satisfied that the privacy analysis and risk identification has been completed in accordance with the TBS requirements.

Andréa Rousseau \
Director, Privacy Management Division \
Health Canada / Public Health Agency of Canada

_Note: Responsibility for compliance with the requirements of sections 4 to 8 of the [Privacy Act](https://laws-lois.justice.gc.ca/eng/acts/p-21/page-2.html) rests with all employees of government institutions that handle personal information.  Officials who manage programs and activities are responsible for ensuring that privacy requirements are implemented as part of the administration of the program or activity._

## Definitions

**“Direct collection”** is the collection of personal information from the individual to whom the information relates.

**“Indirect collection”** is the collection of personal information from a source other than the individual to whom the information relates.

**“Non-administrative purpose”** is the use of personal information for a purpose that is not related to any decision-making process that directly affects an individual.  This includes the use of personal information for research, statistical, audit and evaluation purposes.

**“Personal information”** is information about an identifiable individual that is recorded in any form. See section 3 of the Privacy Act for additional information.

**“Privacy breach”** is the loss, improper or unauthorized creation, collection, use, disclosure, retention or disposition of personal information.

**“Privacy notice”** is a verbal or written notice informing an individual of the purpose of a collection of personal information and of the government institution's authority for collecting, including creating, using and disclosing the information.
