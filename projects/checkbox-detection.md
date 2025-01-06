---
title: "Checkbox Detection"
date: "2023-05-31"
end_date: "2023-08-10"
label: "AI Research"
github_url: "https://github.com/LynnHaDo/Checkbox-Detection"
category: "AI/ML"
languages: "Python"
---

There was once a time when I would spend everyday trying to improve a detection model, kept on trying with different approaches/datasets and seeing little to no difference in the accuracy/recall level. Yes, this is what the whole process of this project was. 

The idea of using Copy-and-Paste was new to me. With little to no data set to start with (like people would not find it pleasant annotating each little checkbox on a single image—let alone a large data set for a data-hungry model like YOLO), it was a nice, easy-to-implement solution. With a bit of Python, and some research into image transformation using libraries like `cv2` and `albumentations`, I was able to paste a set of single checkboxes onto a set of documents in random positions, and generate a huge set of data. 

1. ![An image from the dataset](/projects/checkbox-detection/10_letter.jpg)

Perfomance-wise, as for my observations, the model may not do well on a checkbox-dense document. But with a bit of fine-tuning on a well-annotated data set, the model could perform relatively well on a specific type of document—like a bank form.

1. ![Output 1](/projects/checkbox-detection/image_1.png)

1. ![Output 2](/projects/checkbox-detection/image.png)

# What I did

I preprocessed and generated +20,000 synthetic images using matplotlib, numpy, OpenCV, PyTorch transformations for training using Copy-and-Paste method. 

Then, I trained 2 deep learning checkbox detection and classification models (with approx. 0.9 precision and recall). The classification layer helps with increasing the accuracy when returning the result out. There were 3 types that the models detect/classify: 

- Unchecked checkbox
- Checked checkbox
- A block of checkbox 

# On second thought

There were a few things I did consider but have not had enough time to explore:

(1) Sometimes, the checkboxes might be too distinctive from the rest of the document. How can I improve the pre-processing step so that they are *more difficult* to detect?

(2) `albumentations` is a great start to increase the diversity of the images. But often times, I did feel like: as the images were generated in the *same* formula, they were a bit similar. The question is about (1) finding a better algorithm for generating data, and (2) how I can fine-tune the parameters to the training process. 

(3) Technologies for loading the model to a web application for instance? I was not involved in the deployment process of the model—but there are definitely more things to it than I can imagine: containerizing, effect on performance when resizing the model weights, etc. 

(4) The model can detect (to a certain level) checkboxes on an un-scanned documents. But it was heavily affected by the **noise**. What is a possible way you can improve the accuracy for this type of document?

If you know about any of these, let's hop on a chat!

# Frameworks and Libraries

- PyTorch
- matplotlib
- numpy
- OpenCV
- albumentations

# Languages

- Python