## Space Data Standard - 7 - SDS-7-Data-Provider-Message-(DPM)

## Description

This message describes a data provider and associated contacts.

## PERSON

| PREDICATE      | DESCRIPTION                                              |
| -------------- | -------------------------------------------------------- |
| ID             | A unique identifier for the person.                      |
| NAME           | The name of the person.                                  |
| ALTERNATE\_NAME | An alternate name for the person.                        |
| DESCRIPTION    | A short description of the person.                       |
| IMAGE          | An image of the person.                                  |
| SAME\_AS        | A link to a page about the person with more information. |
| URL            | A URL for the person's website.                          |
| TELEPHONE      | The person's telephone number.                           |
| EMAIL          | The person's email address.                              |
| CONTACT\_POINT  | A contact point for the person.                          |
| ADDRESS        | The person's postal address.                             |
| JOB\_TITLE      | The person's job title.                                  |
| WORKS\_FOR      | The organization the person works for.                   |

## CONTACT\_POINT

| PREDICATE          | DESCRIPTION                                                    |
| ------------------ | -------------------------------------------------------------- |
| ID                 | A unique identifier for the contact point.                     |
| CONTACT\_TYPE       | The type of contact point (e.g. "customer service").           |
| EMAIL              | The contact point's email address.                             |
| TELEPHONE          | The contact point's telephone number.                          |
| CONTACT\_OPTION     | A contact option (e.g. "TollFree").                            |
| AREA\_SERVED        | The geographic area served by this contact point.              |
| AVAILABLE\_LANGUAGE | The language(s) that can be used to contact the contact point. |

## POSTAL\_ADDRESS

| PREDICATE        | DESCRIPTION                                 |
| ---------------- | ------------------------------------------- |
| ID               | A unique identifier for the postal address. |
| ADDRESS\_COUNTRY  | The country of the postal address.          |
| ADDRESS\_REGION   | The region of the postal address.           |
| ADDRESS\_LOCALITY | The locality of the postal address.         |
| POSTAL\_CODE      | The postal code of the postal address.      |
| STREET\_ADDRESS   | The street address of the postal address.   |

## DPM

| PREDICATE   | DESCRIPTION                                           |
| ----------- | ----------------------------------------------------- |
| ID          | A unique identifier for the DPM.                      |
| NAME        | The name of the DPM.                                  |
| SAME\_AS     | A link to a page about the DPM with more information. |
| URL         | A URL for the DPM's website.                          |
| DESCRIPTION | A short description of the DPM.                       |
| CONTACTS    | A list of contacts associated with the DPM.           |