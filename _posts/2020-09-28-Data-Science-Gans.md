---
title: "Data Science & Gans"
description: "Hands on with Python and Pytorch"
layout: post
toc: false
comments: true
categories: [Pytorch]
image: images/gan_pf.png
hide: false
search_exclude: true

---

# Intro

|Python|Pytorch|
|-|-|
|Python is a popular platform used for research and development of production systemsIt is a vast language with number of modules, packages and libraries that provides multiple ways of achieving a task. Python and its libraries like NumPy, SciPy, Scikit-Learn, Matplotlib are used in data science and data analysis Python is a popular platform used for research and development of production systems|PyTorch is an open source machine learning library used primarily for applications such as computer vision and natural language processing.PyTorch is a strong player in the field of deep learning and artificial intelligence, and it can be considered primarily as a research-first library that heavily leverages Gpu Computation|

# Section of  Data Science



![]({{ site.baseurl }}/images/grid1.png)

- Data analysis is a process of inspecting, cleansing, transforming and modeling data with goal of discovering useful information, informing conclusions and supporting decision-making.
 
- Statistics is used to process complex problems in the real world so that Data Scientists and Analysts can look for meaningful trends and   changes in Data.
    
- Software Development is the process of conceiving, specifying, designing, documenting,texting and bugs fixing.

- Implementation of required data science algos using programming languages like Python and deep learning using  Pytorch.


# Why and When to make Machine Learn?

![]({{ site.baseurl }}/images/m2.png)

- `Lack of human expertise` - The very first scenario in which we want a machine to learn and take data-driven decisions, can be the domain where there is a lack of human expertise. The examples can be navigations in unknown territories or spatial planets. 

- `Dynamic scenarios` - There are some scenarios which are dynamic in nature i.e. they keep changing over time. In case of these scenarios and behaviours, we want a machine to learn and take data-driven decisions. Some of the examples can be network connectivity and availability of infrastructure in an organization. 

- `Difficulty in translating expertise into computational tasks` - There can be various domains in which humans have their expertise,; however, they are unable to translate this expertise into computational tasks. In such circumstances we want machine learning. The examples can be the domains of speech recognition, cognitive tasks etc. 


# Machine Learning Types:


![]({{ site.baseurl }}/images/t1.png)

# Deep Learning:

![]({{ site.baseurl }}/images/t4.png)


- Deep learning is part of a broader family of machine learning methods based on artificial neural networks with representation learning. 
- Deep learning architectures such as deep neural networks, deep belief networks, recurrent neural networks and convolutional neural networks have been applied to various fields. 
- Artificial neural networks (ANNs) were inspired by information processing and distributed communication nodes in biological systems. 


CONVULATIONAL NEURAL NETWORK


![]({{ site.baseurl }}/images/c1.png)
Convolution networks are simply neural networks that use convolution in place of general matrix multiplication in at least one of their layers. 
- LAYERS:- 
 Convolutional layer -Pooling layer 
 Fully Connected Layer 





# “Anime Faces Generation using GAN’s”

> ```What is a GAN```? 
A generative adversarial network (GAN) is a combination of a generator and a Discriminator:-
- The generator learns to generate plausible data. The generated instances become negative training examples for the discriminator.
- The discriminator learns to distinguish the generator's fake data from real data. The discriminator penalizes the generator for producing implausible results.
- When training begins, the generator produces obviously fake data, and the discriminator quickly learns to tell that it's fake.
- What do we need? Well, Since we are making this program in Pytorch  we need Pytorch and Google collab to write our program code 

Steps Involved in a GAN :-

![]({{ site.baseurl }}/images/s1.png)



## Generator
>  The generator part of a GAN learns to create fake data by incorporating feedback from the discriminator. It learns to make the discriminator classify its output as real.
- Generator training requires tighter integration between the generator and the discriminator than discriminator training requires. The portion of the `GAN that trains the generator includes`:
- random input.
- generator network, which transforms the random input into a data instance.
- discriminator network, which classifies the generated data.
- discriminator output.
- generator loss, which penalizes the generator for failing to fool the discriminator.


## DISCRIMINATOR


![]({{ site.baseurl }}/images/dloss.png "loss function for Discriminator")

> The discriminator in a GAN is simply a classifier.It tries to distinguish real data from the data created by the generator. It could use any network architecture appropriate to the type of data it's classifying.
  Discriminator training:
* The discriminator classifies both real data and fake data from the generator.
* The discriminator loss penalizes the discriminator for misclassifying a real instance as fake or a fake instance as real.
* The discriminator updates its weights through backpropagation from the discriminator loss through the discriminator network.


# Outcome of the project?

![4dud7y](https://user-images.githubusercontent.com/44031169/92255060-6c500780-eeef-11ea-8ee9-4f8ef18e7722.gif)



**This is how the output of a well trained Generator network over time  looks like that produces almost real like  images that are detected by the discriminater as Real,  who heavily penalizes generater on  producing fake images.**






