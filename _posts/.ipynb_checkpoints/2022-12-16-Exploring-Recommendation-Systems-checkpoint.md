---
title: "Exploration of Recommendation Systems"
description: BU's EC 503 Class Project Submission. 
keywords: svd, sklearn, matplotlib, numpy, pandas, artifical dataset 
layout: post
toc: true
comments: true
image: images/books.png
badges: true
hide: false
categories: [SVD, recommendation Systems, sparsity variation, movie recommendation dataset]
search_exclude: true

---

## ***Dataset Used***

<img src="/images/media-4/image1.png" style="width:5.02669in;height:2.86102in" />


-   Books Recommendation Dataset

-   Artificial Dataset

## ***Tools Used***

-   Python Programming language to perform experiments.

-   Used Sklearn for Modelling SVD.

-   Used Gridsearch for performing hyperparameter tuning.

-   Used matplotlib library to build various plots to analyze and showcase the results of experiments.

-   Pandas and Numpy to perform data-preprocessing

## ***Hyperparameters Used***

-   Training and Testing Split: 80%, 20%

-   num_of_components or top 'r' singular values =250

-   iterations=20

## ***Data-Preprocessing***


<img src="/images/media-4/image2.png" style="width:6.18947in;height:3.39876in" />

> * Dataset is 97% sparse.
> * Ratings: (1-10)
> * Final Shape (500, 551) --\> (Users, Books) Rating Matrix

-   Ensured the Users have at least rated more than 300 books

-   Ensured the Books had at least 50 ratings from users

-   Fill Empty/NAN(Not a Number) values with zeros.

-   Remove duplicates(ensures unique users and books)

## ***Experiments***

### ***<u>Experiment 1</u>: Finding Best Filling Method for Dealing with Missing Values in Sparse Matrix***

1\. Step 1: **Create the User-Book Sparse matrix** : Fill unknowns with:

-   zeroes

-   column mean per user

-   row mean per book

-   column median per user

-   row median per book

2\. Step 2: **Singular Value Decomposition (SVD):** Perform SVD on the sparse matrix attained from Step 1 and get a low rank Approximation by using a fraction of the components (250, acquired through cross-validation) to reconstruct the User-Book Matrix

3\. Step 3**: Evaluate Results** at every iteration Compare predicted reconstructed matrix & original matrix using RMSE, MSE, MAE, Pearson Coefficient, & Cosine Similarity

4\. Step 4: **Replace with original values :** Substitute the known non-zero values of the original sparse matrix into the output matrix and left the rest untouched.

5\. Go to Step 2 and repeat for 5 iterations.

### ***<u>Experiment 2</u>: Increasing Sparsity***

1\. Step 1: **Increase Sparsity-** Set 300 random elements in the User-Book Sparse Matrix to zero

2\. Step 2: **Predict-** Perform SVD & use a fraction of components (250 components(acquired through Cross Validation)) on the final sparse matrix from the above step to get the reconstructed matrix.

3\. Step 3: **Replace with original values-** Substitute the known elements of the original sparse matrix into output matrix, but leave the rest untouched.

4\. Step 4: **Evaluate Results-** Compare prediction matrix & original matrix using RMSE, MSE, MAE, Pearson Coefficient, & Cosine Similarity

5\. **Decreasing Sparsity Test**- Repeat all the steps 2, 3, 4, 5 by First Filling 300 unknown values with mean (column wise)

### ***<u>Experiment 3</u>: Artificial Dataset Creation***

1\. Create low-rank (250 components) reconstruction using SVD from Books-Users sparse matrix. (iterations=1)

2\. Add zero-mean gaussian random noise to every element.

3\. Round up to nearest integers in range 1-10.

4\. Randomly drop 20% of rows & columns.

5\. **Increasing the sparsity on artificial dataset-** Increase sparsity by 10% in every iteration (randomly setting elements to zero)

6\. Perform SVD and evaluate the results.

***<u>Algorithim Used :</u>***

<img src="/images/media-4/image3.png" style="width:5.63248in;height:3.17837in" />

## ***Results***
### ***<u>Experiment 1:</u> Iterative Results of SVD Recommender Prediction Algorithm using Different Filling Methods(**Iterations =5**)***

<img src="/images/media-4/image4.png" style="width:3.0625in;height:3.09202in" />

<img src="/images/media-4/image5.png" style="width:3.08694in;height:3.1167in" />

### ***<u>Experiment 2:</u> Increasing & Decreasing Sparsity on User-Books Sparse Matrix(Iterations =20)***

<img src="/images/media-4/image6.png" style="width:3.59792in;height:3.41875in" />

<img src="/images/media-4/image7.png" style="width:3.17847in;height:3.41875in" />

### ***<u>Experiment 3</u>: Increasing Sparsity on Artifical Dataset in Range 0% - 90%***

<img src="/images/media-4/image8.png" style="width:3.45903in;height:3.48403in" />

<img src="/images/media-4/image9.png" style="width:3.61042in;height:3.63681in" />

## ***What we learned?***

-   As the user-item dataset matrix becomes sparser, the recommendations become less accurate

-   Different strategies to fill in unknown values in the user-item matrix

-   Iterative SVD algorithm for recommendation

## ***References :***

1\. [Various Implementations of Collaborative Filtering.](https://towardsdatascience.com/various-implementations-of-collaborative-filtering-100385c6dfe0)

2\. [Predictive Analytics](https://d4datascience.com/category/predictive-analytics/)

3\. [SVD](https://en.wikipedia.org/wiki/Singular_value_decomposition)

4\. [Truncated SVD](https://towardsdatascience.com/recommender-system-singular-value-decomposition-svd-truncated-svd-97096338f361#:~:text=Singular%20value%20decomposition%20(SVD)%20is%20a%20collaborative%20filtering%20method%20for,factor%20model%20for%20matrix%20factorization.)

5\. [Books Recommender Systems Using ML](https://github.com/iNeuron-Pvt-Ltd/Books-Recommender-System-Using-Machine-Learning)

6\. [Book Recommendation Dataset](https://www.kaggle.com/datasets/arashnic/book-recommendation-dataset)
