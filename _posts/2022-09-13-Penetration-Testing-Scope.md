---
title: The scope of a penetration test
published: flase
tags: white grey black penetration test pentest 
---

## different types of penetration testing

There are three types of pentests which define the initial knowledge of the attacker. White-Box, Gray-Box, Black-Box. This has consequences for the duration, costs and the finding depth of the vulnerabilities. 

## Black-Box test

In a black-box test the attacker has no knowledge about the system at all. Because of that it represents the most realistic test. The drawback of this method is that it requires the most time because the attacker has to get all the information by himself. Furthermore it is likely that a lot of vulnerabilities will be overlooked. Even though it is the most realistic method it is not really comparable with a real scenario because a real attacker has no timelimits but the pentester has. 

## White-Box test

The opposite of the black-box test is the white-box test. Here are a lot if not all information about a system provided. This includes documentation, source code, credentials and much more. This circumvents that the attacker has to invest valuable time to look for those information. However, it is the most unrealistic scenario to execute a penetration test.

## Gray-Box test

The hybrid model of the black-box and the white-box test is the gray-box test. There are some information like lower-level credentials or the architecture of the system provided. This saves time for looking for these low hanging information. Furthermore it represents an attack where the attacker already gathered some information about the system.

## which one to chose?

To answer the question which type fits better you have to consider the goals and limits of the pentest. When it is a pentest on a more secure or previously tested system it could make sense to treat it as a white-box test to go more into detail. A black-box or gray-box test on the other hand could make sense if it is the first or one of the first tests on this system. In conclusion you can say that there is no one-fits-all solution and you have to look at all scenarios seperately.

## References

{% cite pentestieee %}
{% cite pentestwebieee %}


