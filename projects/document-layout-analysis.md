---
title: "Document Layout Analysis"
date: "2023-05-31"
end_date: "2023-07-24"
label: "AI Research"
github_url: "https://github.com/LynnHaDo/Document-Layout-Analysis"
category: "AI/ML"
---

This is my first attempt at learning about training a model—specifically, a detection model on scanned documents. Using [YOLOv8](https://docs.ultralytics.com/models/yolov8/), I was able to achieve surprisingly accurate detections on 11 document classes, based on a small subset (< 700 images) of the [Doclaynet](https://github.com/DS4SD/DocLayNet) dataset. 

1. ![Output 1](/projects/document-layout-analysis/screenshot.png)

2. ![Output 2](/projects/document-layout-analysis/screenshot1.png)

This model was actually useful in my other project, [Checkbox Detection](/projects/checkbox-detection). Specifically, I used the document analysis model to detect text regions on the document. What I wanted to do was avoiding those regions when choosing the random locations to paste the checkboxes—the checkboxes are not totally *random* actually. With that, I *partially* solved the issue of checkboxes lying too distinctively from the rest of the document. 

# What I did

I trained a deep learning document layout detection model that led to improved detection accuracy in post-training analysis and fine-tuning results of form analysis task. 

By leveraging state-of-the-art detection networks of YOLO, I have detected 11 classes in a document with approx. 0.7 mean Average Precision at 0.5 IOU for all classes with a small dataset. The classes that the model can detect better include: 

- Page-footers
- Page-headers
- Tables
- Caption
- Text 

With greater computational resources, I can train this model on a larger subset of Doclaynet (or all of them) and enhance the limitations of this model. But this is a pretty cool exercise that lets me understand better how detection and neural networks work, as well as how I can set up a simple training process for object detection. 

# Frameworks and Libraries

- PyTorch
- matplotlib
- numpy
- OpenCV
- albumentations

# Languages

- Python