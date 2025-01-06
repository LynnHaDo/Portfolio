---
title: "ConvoBot"
date: "2024-06-23"
end_date: "2024-09-23"
label: "mobile development"
github_url: "https://github.com/LynnHaDo/ConvoBot"
category: "Mobile"
languages: "TypeScript,JavaScript"
---

This is a fun and quick project that I did on the side when I was a bit bored with the Chat-GPT interface and wanted to make an app on my own. The biggest challenge for me is mastering React Native, since it was a new framework for me. Fortunately, as I had some exposure to NextJS in [the previous project](/projects/gesture-verse), everything went smoothly at the end.

I was fascinated by the product design and prompt engineering tasks when doing this project. 

Regarding product design, I was always interested in UI/UX design in general (but did not get much chance to do it), so it was an interesting process trying it on an app on my own. Kudos to Figma.

About prompt engineering—this is my first time working with using LLM in my development project. With just a few changes in the tone and words, the responses the model gave were totally different! Knowing this, I let users select from different roles, and adjust any parameters to customize the experience. 

[Android Demo](https://www.loom.com/share/0251287798f547528f06437493ef136b)

[iOS Demo](https://www.loom.com/share/2429e16e59c1463e8342e0dd21b4bee4)

# What I did

I developed a mobile (iOS and Android) chat app with integrated chatting and image generation services, leveraging ChatGPT and DALL·E APIs. Users can directly mutate the parameters and adjust the output by the models, which ensure better customized and contextual conversational experiences. 

## Android: Pixel 5

1. ![Android 1](/projects/convobot/Android_1.png)
2. ![Android 2](/projects/convobot/Android_2.png)
3. ![Android 3](/projects/convobot/Android_3.png)
4. ![Android 4](/projects/convobot/Android_4.png)
5. ![Android 5](/projects/convobot/Android_5.png)

## iOS: iPhone 16 Pro

1. ![iOS 1](/projects/convobot/iOS_1.png)
2. ![iOS 2](/projects/convobot/iOS_2.png)
3. ![iOS 3](/projects/convobot/iOS_3.png)
4. ![iOS 4](/projects/convobot/iOS_4.png)
5. ![iOS 5](/projects/convobot/iOS_5.png)
6. ![iOS 6](/projects/convobot/iOS_6.png)

Previously, I set up the calls to the models directly on the client side. But by making calls to the Chat-GPT and DALL-E models from [a separate server app](https://github.com/LynnHaDo/ConvoBot-Server) deployed to Heroku, I can ensure better security and scalability to the app. The APIs endpoints are set up in Express.js. 

# Frameworks and Libraries

- React Native
- Express.js

# Languages

- TypeScript
- JavaScript