capitalist-pigs
===============

An app and supporting backend infrastructure for handling personal financial accounts information.

#Backend
Spring based backend services, that both provide a REST api for clients to use and periodic operations to perform
on schedule.
The application is deployed to a Tomcat server, so Jersey libraries are used for the REST service

#Frontend

----
npm install ionic@1.3.0
ionic setup sass
ionic browser add crosswalk
ionic run android
----

#Infrastructure
The whole thing is designed to run on Amazon WS, in EC2 instances. This implies that most of the apps are stateless so as to
get the maximum scalability and realiability.
