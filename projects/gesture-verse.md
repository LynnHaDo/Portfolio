---
title: "Gesture-Verse"
date: "2024-06-23"
end_date: "2024-09-23"
label: "interactive game development"
github_url: "https://github.com/LynnHaDo/GestureVerse"
category: "Web"
languages: "TypeScript"
---

Gesture-Verse is web application that guides users through a **choose-your-own-adventure** game using Windrift, a JavaScript framework for writing interactive stories. The application was developed using NextJS, a React framework. 

The application is hosted at [https://gesture-verse.vercel.app](https://gesture-verse.vercel.app).

# But what is **choose-your-own-adventure**?

According to Wikipedia, it is a type of story where the reader assumes the role of a protagonist and makes choices that determine the main character’s actions and the plot’s outcome. Many stories of this kind have been developed on the web platform, some of which can be found [here](https://itch.io/games/html5/tag-twine).

# How is GestureVerse different from the others?

Instead of using hyperlinks to navigate the story to different branches, users engage in this game using hand gestures through the devices’ web camera to respond to questions prompted on the screen. Also, users can select the background music they want as they follow the journey. It took a bit of time to code it up—but the end result was worth it!

1. ![Home page](/projects/gesture-verse/1.png)
2. ![Story page](/projects/gesture-verse/2.png)
3. ![Music page](/projects/gesture-verse/3.png)

# Why I made this app

This project is part of an interactive series of applications using computer vision that were set up to be displayed on the second floor of Clapp, our science building @ Mount Holyoke College. We wanted to create a place where people would find out about cool applications from CS students and connect with each other by interacting with these apps. 

There was only one restriction—this web app needs to be fully self-contained (since they are monitors). This means no mouses or clicks are possible. For a link-densed choose-your-own-adventure app, it's pretty tricky, right?

# How I made it

The web camera is required for the games to proceed since all of the navigation system is decided based on the web camera’s input. 

After the web camera is allowed, the application will render a video element to capture the user’s gestures. The application will fetch the source of the video and start the object detection phase using the gesture detection model from the MediaPipe Task Vision API.

The gesture detection model is used to detect and classify hand gestures in real-time. 

After a hand is detected, it will return a `results` object that contains the following information:

- gesture type 

(`results.gestures[0][0].categoryName`): can be 1 of the following: `None`, `Closed_Fist`, `Open_Palm`, `Pointing_Up`, `Thumb_Down`, `Thumb_Up`, `Victory`, `ILoveYou`

- confidence score 

(`results.gestures[0][0].score`): from 0 to 1

- handedness 

(`results.handedness[0][0].displayName`): a string that is either ‘Left’ or ‘Right’

The application uses this result to dispatch/trigger any methods that update the state of the story to the content provider. The stories' bookmarks are stored in `LocalStorage`. 

# What I did 

I engineered an innovative game experience using NextJS and MediaPipe APIs, enabling users to navigate and interact with the game through natural hand movements captured in real time. 

In addition, I added several features to the original Windrift framework, like a variable management system that allows keeping track of variables (such as score) within the story, or an audio component that plays supplementary audio/music for each story.

Finally, after incorporating feedback from my advisor and users, I made iterative integrations across multiple version releases for optimized user experience. 

# Frameworks and Libraries

- NextJS
- MediaPipe

# Languages

- TypeScript