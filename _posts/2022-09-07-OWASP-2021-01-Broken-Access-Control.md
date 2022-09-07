---
title: OWASP Broken Access Control
published: true
tags: OWASP Top 10 Web Broken Access Control 
---

## importance

> A01:2021-Broken Access Control moves up from the fifth position; 94% of applications were tested for some form of broken access control. The 34 Common Weakness Enumerations (CWEs) mapped to Broken Access Control had more occurrences in applications than any other category.

## description

Access control should ensure that users can only act in thier intended scope. If this access control is broken a user can operate outside the box. 
These broken access controls can comprise:

1. absence of role/access management where every user can act in every scope
2. bypassing access control checks by modifiying the URL, HTML page, API requests
3. insecure direct object reference (IDOR)
4. absence of HTTP method checks (POST, PUT, DELETE)
5. acting as a user without being logged in or acting as admin when loggen in as user
6. replaying or tampering metadata i.e. JWT, cookie, hidden field
7. cross-origin resource sharing (CORS) misconfiguration allows access from unauthorized/untrusted origins
8. browsing to authenticated pages as unauthenticated user

## how to find 

Using the burp suite extension [autorize](https://github.com/PortSwigger/autorize). Therefore a higher and lower user is needed. 
Goal of this test is to try if a lower privileged user can access funcions only intended for higher privileged users.
Take the session cookie and write it in the cookie field in the autorize tab. Start autorize and browse with the higher privileged user.
Watch the output provided in the autorize tab. This will send the request with the cookie of the higher privileged user and the lower privileged user and compares the response lenth of the original, the modified and the case where no cookie is provided. When the original and the modified lengths are identical it indicates that the lower privileged user can use the same function like the higher privileged user which is an indication for a broken access control.


## references 

[1](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)
[2](https://www.packetlabs.net/posts/broken-access-control/)


