---
title: "Q&A"
date: "2024-03-01"
end_date: "2024-04-30"
label: "full-stack development"
github_url: "https://github.com/LynnHaDo/QnA-Website"
---

Q&A (Question-and-Answer) is a full-stack feedback management app for Brown students. During our first meeting, my advisor, Professor Malte, told me about this itchy problem of teaching assistants/professors @ Brown when answering a large set of questions: having to go through each question manually, even though most of them share the same topic. Coming from a liberal arts education, this is not an issue that I was aware of 😃.

So he proposed this idea of using K-Means clustering to cluster the questions into different groups. I used this idea to implement a system that lets users do that! That's the origin of this project.

I chose Angular since it is a front-end framework that I had experience with. For the server, I chose a framework that uses Python because of its robust support for data models, and Django was an ideal selection at that time. I can easily set up Django to work on MySQL databases, and use their ORM support to implement RESTful APIs. 

# What this app is capable of

Q&A helps streamline the grading process by clustering the questions asked at the end of lectures and let teaching assistants/professors: 

(1) Select the ones they want to answer. Questions are claimed on a first-come-first-serve basis.

(2) Answer similar questions in bulk

(3) Pinpoint similar topics that students are most unsure about

(4) View grading/feedback progress

(5) Format feedback using a built-in text-editor

(6) Import `.csv` data (courses, assignments, questions, users—students, staff) into the database using Python scripts (administrators can access the Django administration board to do this).

Even though this project is labelled a "research" project, it gave me hands-on full-stack ownership experience and a chance to work on an app that has a large audience. In May 2024, I presented this project as part of Computer Systems research at 9th Annual Brown CS Undergrad Research Symposium.

# What I did 

In summary, I have developed a scalable grading web app using Angular and Django, ensuring reliable service while reducing administrative workload for teaching assistants and professors. Thanks to 
• Implemented K-Means clustering algorithm to automate the classification and assignment of student queries to teaching assistants, improving system reliability and reducing grading time by 50%.
• Optimized Django RESTful APIs with serializers, improving data validation and reducing data access latency by 30%.

# On second thought

Since this project is a solo endeavor and it ran during the semester, there were definitely areas that I can improve but cannot due to lack of time. For instance:

## User interface for loading data

I can set up RESTful APIs to execute Python scripts in the background that are importing the data into the database, and implement an interface to communicate with that. I would envision this task to be not too challenging, given the existing system.

## Role distinction between professors and teaching assistants

Currently, professors and teaching assistants are granted similar privileges, since teaching assistants are allowed to select the questions themselves. But for scaling this app, it's better to separate these 2 user groups (for example, let professors/head teaching assistant assign the questions as well). 

## K-Means model selection and parameters tuning

I always have this question about whether a model is the best I can do. There are definitely more advanced algorithms that did better in clustering out there that I may not have known about. But given the current model, I can still do better by adjusting the parameters to the clustering process. One of them is the count of clusters, which me and my advisor were still debating about. Too many clusters would result in relatively similar groups, while too few clusters would not bring us the specificity we need. I can use several algorithms to choose the optimal K for that. In general, there were various concerns when it comes to the quality of the clusters. 

To evaluate the quality of the clusters, I can use several metrics to assess the performance and adjust the model accordingly. This is an area I need to explore further. 

Anyways, LLM is an area I have not experienced before, but it's a more and more powerful tool that can be integrated to any existing apps and bring about greater user experience. This project demonstrated one use case of it, and I'm proud of the progress I have made! 

# Tools

- Angular
- Django
- MySQL

# Languages

- TypeScript
- Python
- HTML/CSS