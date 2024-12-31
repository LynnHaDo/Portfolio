---
title: "ValetBike"
date: "2024-10-20"
end_date: "2024-12-05"
label: "full-stack development"
github_url: "https://github.com/LynnHaDo/valetbike"
---

ValetBike is a full-stack bike rental web application using Ruby on Rails. With an interactive map, users can select any stations nearby their current location (of course, with their permission to access the location), and we will assign them any available bike. 

1. ![Home](/projects/valetbike/1.png)
2. ![Map](/projects/valetbike/2.png)

But users cannot proceed without selecting a payment plan (sad). We will charge users on 3 different pricing plans: On-the-go, Student, and Regular. The subscripion payment is processed using Stripe APIs. 

1. ![Payment](/projects/valetbike/3.png)

Once the user is enrolled, they are good to continue the trip booking process.

1. ![Book a trip](/projects/valetbike/book-trip.png)
2. ![Confirm a trip](/projects/valetbike/confirm-trip.png)

As the user ends the trip, they can select the end station they will return their bike at! We update the bikes registered at each station, and calculate the usage duration to send a payment intent to Stripe. After a few minutes, an invoice will be available on the account page. Users can view the history of usage on the trips page.

1. ![Trip history](/projects/valetbike/trip-history.png)

The app is hosted on Heroku at [https://valetbike-by-divas-2c66adac9bf4.herokuapp.com](https://valetbike-by-divas-2c66adac9bf4.herokuapp.com/).

# Some thoughts on the whole process

This is a collaborative effort (kudos to the Divas team)! Rails was a new framework to me—but after using it for a while, I realized how convenient it is since it is an all-in-one framework (i.e. I can manage the databases, set up RESTful APIs, manage the views, etc. all in one place). I feel like in every new project, I got to discover new frameworks and tools that have their own pluses and minuses for each use case. But I think Rails is a nice framework for full-stack development since it streamlined a lot of processes. 

The process gave me extra hands-on experience with the Agile development process (sprint/scrum/backlog), MVC architecture, database design, user research, and iterative prototyping. Extra full-stack development experience!

# What I did 

I was in charge of a couple of things in this project: 

## Authentication 

I developed a registration system using `bycrypt` that supported logging in/out, signing up a new account, and resetting password via email. 

1. ![Log in](/projects/valetbike/log-in.png)

On the profile page, users can edit their information (i.e. name, phone number), view details about their upcoming invoice, and cancel their subscription. Once enrolled, users will be assigned a Stripe subscription ID that lets them shop a product by Stripe later. 

1. ![Profile detail](/projects/valetbike/profile-detail.png)
2. ![Profile detail](/projects/valetbike/profile-picture.png)

## Payment processing

I set up subscription products with Stripe and store them into the database. Each user can only have at max 1 payment plan (they can cancel a plan and switch to another plan).

1. ![Unavailable selection](/projects/valetbike/plan-select-blocked.png)
2. ![Confirm](/projects/valetbike/subscription-confirm.png)
3. ![Payment](/projects/valetbike/subscription-payment.png)

As a trip ends, I set up a payment intent and send it to Stripe APIs via Rails controllers. 

## Database design

I brainstormed the relational database architecture and optimized the entitied to ensure better scalability and performance. 

## Project planning and UI/UX design

I was in charge of the UI/UX design process, from analyzing users' needs, prototyping, to the actual front-end development processing. With a foundation in human-computer interaction, we have delivered a user-friendly app that is intuitive to users of a wide age range. 

# Tools

- Rails
- MySQL 
- Stripe API [for payment processing]
- Heroku [for deployment]
- Agile methodology

# Languages

- Ruby