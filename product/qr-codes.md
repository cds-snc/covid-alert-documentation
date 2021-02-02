[Français](https://github.com/cds-snc/covid-alert-documentation/blob/main/produit/codes-qr.md)

# QR Codes - Notifications for venue outbreaks

COVID Alert aims to notify people when they may have been exposed to positive COVID-19 cases. Exposure to COVID-19 can happen via close contact with a COVID-positive individual or through aerosol or fomite transmission at venues where there is an outbreak, and the app currently only notifies people of close contact exposures. COVID Alert can support notifying people of outbreaks at places they’ve visited through scanning QR codes placed at participating venues while maintaining COVID Alert’s privacy-first principle. This work is based on venue outbreak capabilities in the UK and New Zealand’s exposure notification apps.

## How does it work?
Participating venues (restaurants, retail stores, events, etc) print out a COVID Alert QR code and post it at their entrance. App users visiting the venue can use COVID Alert to scan the QR code as they enter, and the code will be stored securely on their device. Users do not need to give their information to the venue for contact tracing if they scan the QR code. 

If an outbreak occurs at a venue, a public health official can mark that that venue has had an outbreak, and users who scanned that venue’s QR code during the time of the outbreak receive a notification warning them of the outbreak. Users can then follow public health guidance to help limit the spread of COVID-19. 

## This sounds like COVID Alert is tracking people’s movements.
It’s not. This feature works in much the same privacy-protecting way that the rest of COVID Alert does. The list of locations where a user “scanned in” is saved only on their phone, and is never uploaded to a server. The phone regularly downloads the list of all locations flagged as “outbreaks” by public health authorities, and checks for any matches. If there is a match, the user receives a notification. The Government of Canada never has access to app users’ scan history. 

## What’s the value?

* QR codes provide the ability to send outbreak notifications to people who have been in a location at the time of an outbreak, allowing people to take appropriate measures to protect themselves and others. This can happen more quickly than calling every person.
* The service could alleviate some contact tracing burden from businesses and tracers.
* Privacy is protected. No geolocation or other personally identifiable information of the app users will be shared with the Government of Canada, and users who scan QR codes don’t have to give their personal information to the venue.
* Introducing QR codes can increase app uptake, making the app’s primary service more effective. In the UK, where posting QR codes is mandatory for venues, adoption has risen significantly.
* Addressing additional types of COVID-19 transmission including: fomite (surface based contamination) and aerosol (indoor, crowded, inadequately vented areas).

## What’s next?
The COVID Alert teams are starting to research, design, and build the technical pieces of the service. Over the coming weeks we’ll post more detailed documentation on the functionality and flows. The work is happening in these repositories:

* https://github.com/cds-snc/covid-alert-app
* https://github.com/cds-snc/covid-alert-qr-codes
