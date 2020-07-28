[Français](https://github.com/cds-snc/covid-alert-documentation/blob/main/RapportAccessibilite.md)

# Accessibility report for COVID Alert (exposure notification mobile app)

_Canadian Digital Service_

This report describes the conformance of the COVID Alert mobile app with the [W3C’s Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/). This review process is based on the evaluation process described in [Accessibility Evaluation Resources](https://www.w3.org/WAI/eval/).

Based on this evaluation, the COVID Alert mobile app is close to meeting WCAG 2.1, Conformance Level AA. Detailed review results will be available shortly. Feedback on this evaluation is welcome.

Conformance evaluation of this mobile app’s accessibility incorporated a combination of semi-automated evaluation tools and manual evaluation by an experienced team of accessibility testers. It was also informed by accessibility related feedback from people with disabilities using both informal and formal methods. Inclusive design reviews were conducted with the product team to ensure best practices were being followed, and that insights from research were iterated on and presented within the app. The evaluation results in this report are based on evaluation conducted prior to launch. The app may have changed since that time. This document will be updated frequently to reflect the current status of the app.

Read our [Accessibility Statement](https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/covid-alert/accessibility-statement.html) for the current accessibility status and known issues of COVID Alert, as well as our approach to accessibility. 

## WCAG 2.1 AA Evaluation

COVID Alert is 95% compliant with WCAG 2.1 AA. Some screens of the app do not yet meet the following success criteria:

*   1.4.11 Non-Text Contrast (AA) 
*   1.4.3 Contrast (Minimum) (Level AA) 
*   2.4.3 Focus Order (Level A) 

### Disability Considerations

We considered the following kinds of disabilities in ensuring the accessibility of COVID Alert:

*   **Vision:** Complete or partial blindness, color blindness, or other issues related to vision.
*   **Hearing disabilities:** Auditory problems that lead to complete or partial deafness or other hearing impairments.
*   **Physical:** Difficulty using a keyboard, mouse, or other physical tools commonly used to use a computer or mobile.
*   **Cognitive:** Learning or memory difficulties
*   **Literacy:** Reading or comprehension difficulties

### Testing process and tools

We used the following testing processes to improve the accessibility of COVID Alert:

*   **Manual testing:** Using Android accessibility services.
*   **Testing with analysis tools:** To discover opportunities to improve your app's accessibility.
*   **Automated testing:** in Espresso and Robolectric.
*   **Testing with users:** We got feedback from real people who interact with the app.

We used the following tools for testing accessibility:

*   Android Accessibility Scanner 
*   Accessibility Inspector 
*   Testflight 
*   Google Firebase
*   Cross platform testing with multiple Android and iPhone device

### Outcomes

*   More than 70 Issues opened in [GitHub repo](https://github.com/cds-snc/covid-alert-app/issues?q=label%3Aa11y+) and fixed.
*   2 Inclusive Design reviews.
*   Accessibility statement with community feedback.
*   Working to integrate accessibility and usability related feedback from beta.

### Resources that supported our testing process

*   [Mobile testing guide – Android & iOS](https://developer.paciellogroup.com/downloads/TPG_Mobile_Testing_Guide.pdf)
*   [Mobile accessibility: How WCAG 2.0 and other W3C/WAI guidelines apply to mobile](https://www.w3.org/TR/mobile-accessibility-mapping/)
*   [Run apps on the Android Emulator](https://developer.android.com/studio/run/emulator)
*   [Mozilla’s mobile accessibility checklist](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Mobile_accessibility_checklist)

## Tell us how we’re doing

We’re grateful for your feedback and insights. To tell us about accessibility issues in COVID Alert, please do one of the following:

*   [Create an issue on our public GitHub repository](https://github.com/cds-snc/covid-alert-app/issues).
*   Email us at [a11y@cds-snc.ca](mailto:a11y@cds-snc.ca).
