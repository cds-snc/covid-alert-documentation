- Start Date: 2021-02-16
- RFC PR: (leave this empty)
- COVID Alert Issue: (leave this empty)

# Summary

This document attempts to set out a more structured way of ‘working in the open’, such that we can illustrate more of the decision making process that goes into work on the COVID Alert system, as well as attempting to set a standard of practice for future projects both within the Canadian Digital Service, and the broader Government of Canada.

This by no means will be a perfect solution, and it is therefore not presented as such. We welcome all feedback, questions, and comments on our practices, and ask that you simply respect that working in the open is a challenging process, especially while working on such a high profile project, and during these challenging times.

In the interest of full transparency, delivery of service will take priority over these practices, but we will do our best to balance both needs and improve our processes as we continue.

For the purposes of this document, ‘we’ refers to members of the COVID Alert teams within the Canadian Digital Service.

For those not familiar with ‘Request For Comments’ (RFC), we will *loosely* follow the principles as described here, https://en.wikipedia.org/wiki/Request_for_Comments

# Motivation

*Why are we doing this? What use cases does it support? What is the expected outcome?*

We work in the open because we value transparency, rapid cycles of testing, collaboration and sharing explicitly oriented toward building trust and confidence in the  services we work on. This means all the source code for what we build is available in an open repo on GitHub, that our code can be forked by other organizations (provinces, countries, etc) and that we offer a level of timely transparency into bugs or issues that require user action as a part of their fix. 

We build on the work of others --  ‘Make things open: it makes them better’.

# Detailed design

*This is the bulk of the RFC. Explain the design in enough detail for somebody familiar with the framework to understand, and for somebody familiar with the implementation to implement. This should get into specifics and corner-cases, and include examples of how the feature is used.*

Our teams currently use a mixture of public and private tools in order to track their daily activities, which while ideal for their needs, presents several challenges to easily working in the open.

We intend to use GitHub (“projects”, “discussions”, “issues”) as a way to move more of this information into the open by default, and adjust our teams ways of working accordingly.

We will use our ‘Docs’ repo, https://github.com/cds-snc/covid-alert-documentation , as our source of truth for top-level project activities and discussions.

- ‘Projects’ - High level roadmap information (‘Investigating’, ‘Implementing’, ‘Testing’, ‘Done’)
- ‘Discussions’ - Community based input/feedback on high level issues.
- ‘Issues’ - Specific changes our team requires for this repository.

Individual teams will continue to use their specific repositories ‘-app’, ‘-server’, ‘-portal’ to track their existing practices, with issue boards either restricted to the teams, or open, but with issues redirected to the ‘-documentation’ discussions board.

All (major) product related decisions (product, dev, design, research, security, policy, etc), from this point forward, will adhere to our new RFC decision record standard (where possible), and will be stored in the ‘-documentation’ repo under a common RFC folder, until it is proven to not be effective.

We encourage our team members to work in the language of their choice, and to ensure that they respond to community members in the language of their choosing. High level items such as roadmaps, product features, and documentation should be available in both languages. If you notice areas that are not, feel free to raise them with us and we will do our best to resolve that as quickly as possible.

# Drawbacks

*Why should we *not* do this?*

[insert noisy crickets here] 

# Alternatives

*What other designs have been considered?*

We are open to alternative suggestions, but in the interim, we believe this is a good short term measure.

*What is the impact of not doing this?*

We lose opportunities to build further trust and confidence with Canadians, and we also miss out on opportunities to demonstrate to other public servants how we are approaching the challenges of service delivery.

# Unresolved questions

*What parts of the design are still TBD?*

<List of unresolved questions / issues to be appended to this RFC over time through comments from others>

