---
title: "Exploration of Recommendation Systems using matrix factorization algorithm known as SVD"
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

## **INTRODUCTION**

### Types of Recommendations:-

**Content-based recommendation**:
![](images/media-3/intro-1.png)

* Since you liked item A, you'll get recommendations of items belonging to the group Item A belongs to.

**User-based recommendation**:
![](images/media-2/intro-1.png)

* Users similar to you liked this item.

**Item-based recommendation**:
![](images/media-3/intro-2.png)

* Since you liked item A, you might like item B.

## **Dataset Used**

* Books Recommendation Dataset
* Artificial Dataset

## **Tools Used:**

- Python Programming language to perform experiments.
- Used Sklearn for Modelling SVD.
- Used Gridsearch for performing hyperparameter tuning.
- Used matplotlib library to build various plots to analyze and showcase the results of experiments.
- Pandas and Numpy to perform data-preprocessing

## **Hyperparameters Used**

- Training and Testing Split: 80%, 20%
- num_of_components or top 'r' singular values =250
- iterations=20

## **Data-Preprocessing to create Books-Users Ratings Sparse Matrix.**
![](images/media-3/Sparse-matrix.png)

> * 97% sparse
> * Ratings: (1-10)
> * Final Shape (500, 551) --> (Users, Books) Rating Matrix

* Ensured the Users have at least rated more than 300 books
* Ensured the Books had at least 50 ratings from users
* Fill Empty/NAN(Not a Number) values with zeros.
* Remove duplicates(ensures unique users and books)

## **Experiments:-**

#### **Experiment 1:** Finding Best Filling Method for Dealing with Missing Values in Sparse Matrix

1. Step 1:  Create the User-Book Sparse matrix - Fill unknowns with:
        - zeroes
        - column mean per user 
        - row mean per book
        - column median per user
        - row median per book
        
2. Step 2:  Singular Value Decomposition (SVD): Perform SVD on the sparse matrix attained from Step 1 and get a low rank Approximation by using a fraction of the components (250, acquired through cross-validation) to reconstruct the User-Book Matrix

3. Step 3: Evaluate Results at every iteration Compare the predicted reconstructed matrix & original matrix using RMSE, MSE, MAE, Pearson Coefficient, & Cosine Similarity

4. Step 4: Replace with original values. Substitute the known non-zero values of the original sparse matrix into the output matrix and leave the rest untouched.

5. Go to Step 2 and repeat for five iterations.

#### **Experiment 2:** Increasing Sparsity

1. Step 1:  **Increase Sparsity-** Set 300 random elements in the User-Book Sparse Matrix to zero

2. Step 2: **Predict-** Perform SVD & use a fraction of components (250 components(acquired through Cross Validation)) on the final sparse matrix from the above step to get the reconstructed matrix.

3. Step 3: **Replace with original values-** Substitute the known elements of the original sparse matrix into the output matrix, but leave the rest untouched. 

4. Step 4: **Evaluate Results** Compare the prediction matrix & original matrix using RMSE, MSE, MAE, Pearson Coefficient, & Cosine Similarity

5. **Decreasing Sparsity Test-** Repeat all the steps 2, 3, 4, 5 by First Filling 300 unknown values with mean (column-wise)

#### **Experiment 3:** Artificial Dataset Creation:

1. Create low-rank (250 components) reconstruction using SVD from Books-Users sparse matrix. (iterations=1)

2. Add zero-mean gaussian random noise to every element. 

3. Round up to the nearest integers from 1-10. 

4. Randomly drop 20% of rows & columns

5. **Increasing the sparsity on the artificial dataset-** Increase sparsity by 10% in every iteration (randomly setting elements to zero)

6. Perform SVD and evaluate the results. 

### **Learnings**

* As the user-item dataset matrix becomes sparser, the recommendations become less accurate

* Different strategies to fill in unknown values in the user-item matrix

* Iterative SVD algorithm for recommendation

## **References:**

1.  [<u>Various Implementations of Collaborative Filtering.</u>](https://towardsdatascience.com/various-implementations-of-collaborative-filtering-100385c6dfe0)

2.  [<u>Predictive Analytics</u>](https://d4datascience.com/category/predictive-analytics/)

3.  [<u>SVD</u>](https://en.wikipedia.org/wiki/Singular_value_decomposition)

4.  [<u>Truncated SVD</u>](https://towardsdatascience.com/recommender-system-singular-value-decomposition-svd-truncated-svd-97096338f361#:~:text=Singular%20value%20decomposition%20(SVD)%20is%20a%20collaborative%20filtering%20method%20for,factor%20model%20for%20matrix%20factorization.)

5.  [<u>Books Recommender Systems Using ML</u>](https://github.com/iNeuron-Pvt-Ltd/Books-Recommender-System-Using-Machine-Learning)

6.  [<u>Book Recommendation Dataset</u>](https://www.kaggle.com/datasets/arashnic/book-recommendation-dataset)
