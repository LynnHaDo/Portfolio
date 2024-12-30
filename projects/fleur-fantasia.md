---
title: "Fleur Fantasia"
date: "2023-11-20"
end_date: "2024-01-10"
label: "Full-stack Development"
github_url: "https://github.com/LynnHaDo/Fleur-Fantasia"
---

Fleur Fantasia is a full-stack e-commerce web app that allows users to browse and purchase different flower/plant options. As a solo effort, this project gave me full-stack ownership, from prototyping, system design to the actual deployment. I was familiar with Angular, and so it was an easy choice for me. For the server side, I noticed that Spring Boot can greatly streamline a lot of database manipulation steps, which is great for building RESTful APIs. 

This is my first ever full-stack application development project—there are definitely a lot of things that can be improved. However, through this project, I learned a lot about server-client communication, building efficient RESTful APIs, authorization/authentication process, what data latency even is. As I also deployed the app to AWS (but currently taken down due to service cost (sad)), I learned about how I can deploy each part of the app individually, and set up so that they can successfully communicate. 

# Demo

Like other common e-commerce applications, it supports filtering items, adding items to cart, checking out, user registration, etc with secure HTTPS communication. 

1. [![Demo](https://cdn.loom.com/sessions/thumbnails/306696632cf64ad886aec0a073bc11ec-with-play.gif)](https://www.loom.com/share/306696632cf64ad886aec0a073bc11ec)

The app also supports credit card payment processing using Stripe API, and an integrated log-in/out system with the help of Okta's Auth0. For this, I needed to set up the security chain in Spring Boot for any request attempts. This was also my first time learning about tokens stuff. 

1. [![Payment](https://cdn.loom.com/sessions/thumbnails/3e03e5b7618143c0828fe01f2712c223-with-play.gif)](https://www.loom.com/share/3e03e5b7618143c0828fe01f2712c223)

# What I did

I developed and designed the app using Angular for the client, Spring Boot for the server, and MySQL databases for database management. After that, I integrated Auth0 for user registration and authentication with fully secured HTTPS communication, and Stripe API into the payment process.

1. ![Home page](/projects/fleur-fantasia/1.png)

2. ![Product details](/projects/fleur-fantasia/2.png)

3. ![Cart](/projects/fleur-fantasia/3.png)

4. ![Check out](/projects/fleur-fantasia/4.png)

5. ![Payment details](/projects/fleur-fantasia/5.png)

6. ![Log in](/projects/fleur-fantasia/6.png)


# Frameworks and Libraries

- Angular 
- Spring Boot 
- MySQL 
- Stripe API [payment processing]
- Okta's Auth0 [authentication/authorization]
- AWS Elastic Beanstalk [deployment]
- AWS S3 [deployment]

# Languages

- TypeScript
- Java
- HTML/CSS
- SQL