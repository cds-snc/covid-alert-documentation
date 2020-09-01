[Français](https://github.com/cds-snc/covid-alert-documentation/blob/main/recherche/RevueLitterature.md)

# How might people positive for COVID-19 react to the ‘One-time key’?

Date: July 28, 2020

Authors: Jeana Frost, Adrianne Lee


## Goal

A service to deliver exposure notifications can be an effective tool to slow the spread of COVID-19. For the COVID Alert service to work, people diagnosed with the virus have to enter a ‘one-time key’ into the mobile application to send out exposure notifications. Contact tracers at regional health authorities, and other select healthcare workers, can generate the keys on the COVID Alert portal and distribute them to people when they inform them about their positive diagnosis. For the service to work, we need to ensure the successful handoff of this key from the healthcare workers to the people who test positive. In this document, we summarize some existing research relevant to making the key handoff work for people.

We looked at research related to the key handoff based on three sources:



1. Public health and behavioral economics/insights research
2. Lessons learned from other countries who have developed a similar app-based service
3. Lessons learned so far in Ontario and the Canadian Digital Service’s COVID Alert beta testing


## Challenges


### Patients are likely to be stressed and unable to work with information

At this time, the service relies on the healthcare workers sharing the one-time key when they inform the individual of a positive test for COVID-19. Research suggests that in such a possibly emotional situation, the patient may not be able to follow instructions in order to enter the key into the app.

When delivering bad news, patients are known to need time to process it. Healthcare workers should be ready for emotional reactions including [shock and distress](https://www.cmpa-acpm.ca/en/advice-publications/browse-articles/2015/after-the-diagnosis-how-to-communicate-with-terminally-ill-patients). Behavioral Insights research shows that when people are in these types of emotional states they are not able to [process information](https://www.frontiersin.org/articles/10.3389/fpsyg.2015.01727/full). Patient information booklets etc. are used in other contexts to [reinforce the information](https://onlinelibrary.wiley.com/doi/full/10.1111/hex.12487) from the clinical consult. In this app, we need to supply analogous patient information.


### Contact tracers navigating difficult conversations

Doctors (not contact tracers, but similar fears may exist), [fear the following when delivering bad news](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4677873/):



*   Being blamed
*   Evoking a reaction
*   Expressing emotion
*   Not knowing all the answers
*   Fear of the unknown and untaught
*   Personal fear of illness and death

The successful adherence to health guidance can be [impaired by inadequate or insensitive communication](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4677873/). A large part of successful contact tracing seems to be related to building trust with the patient. 

In addition to the difficult task of delivering bad news, contact tracers are at times asking patients to make a hard decision for public health. Examples of situations that [contact tracers](https://www.thelily.com/a-day-in-the-life-of-a-contract-tracer/) in the US have come across:



*   People who are working a new job and have several financial dependents.
*   Undocumented immigrants who are reluctant to give information about where they’ve been and their recent contacts

Not only are patients being asked to understand stressful information, the contact tracers are responsible for navigating various situations where asking about an app may be strange/inappropriate.


### App-specific lexicon

One other concern is that distinguishing between different types of keys/codes can be difficult. ODS and [Dutch usability studies](https://corona.sticktailapp.com/share/view/099d845b35b3b68/wJEdnvsNTHDA/ex-patienten-stuurden-zelf-hun-contacten-een-bericht/) uncovered confusion between the codes traded between users and the code verifying a positive diagnosis. Content must try to clarify this difference as well as possible.


### No ability to paste the key

People are used to cutting and pasting keys from one place to another on their devices. In our beta test, testers expressed some frustration that they could not paste the key into the app after copying the key on their device. This issue was fixed on the app, but important to consider as small things like pasting in the key will be helpful in stressful situations.


## Things that helped


### Phonetic alphabet

One encouraging finding that this handoff can be successful comes from the Netherlands. Usability testing there showed that people were able to enter the code smoothly. One way the app users ensured the key was accurate was [using the phonetic alphabet](https://corona.sticktailapp.com/share/view/e1733fb74d0b64c/VC0JRwP3PCAg/aangeven-dat-je-positief-getest-bent-gaat-relatief-soepel-maar-er-is-nog-wel-verwarring-over-controlecode-en-codes-uploaden/) in order to confirm the letters over the phone (“Alpha” for “A”, “Bravo” for “B”, but the Dutch version). 


### Willingness to contribute to community

The Dutch COVID app team conducted interviews with ex-COVID patients from earlier in the pandemic and found that [they took it on themselves to warn people they had come in contact with and share their stories online](https://corona.sticktailapp.com/share/view/099d845b35b3b68/wJEdnvsNTHDA/ex-patienten-stuurden-zelf-hun-contacten-een-bericht/). They assumed it as their responsibility because they were not receiving information from their regional health authorities.


## Recommendations



1. Provide patients adequate time to process the news and avoid short expiry time for the key. 
2. Healthcare workers can let patients know near the beginning of the call that they will follow up with more information, so that patients worry less about needing to remember what was said during the call.
3. Follow up after the initial call to lessen the burden on the healthcare workers to convey lots of information on the phone and increase the likelihood of success.
    *   Healthcare workers follow up on the initial call to check in with patients and discuss the key and other relevant information.
    *   And/or follow up the initial call with other automated communications that include the one-time key in a written format (e.g. SMS). 
4. Consider how messages around helping the community could be embedded into the healthcare workers ‘script’.
5. Investigate how stressful delivering the key is for healthcare workers.
6. As we’re already working on, use the phonetic alphabet to distinguish letters when sharing a key over the phone.
7. Continue using language that does not use the same term for different things (‘codes’).
