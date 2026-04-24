export interface Question {
  id: number;
  text: string;
  options: string[];
  answerIndex: number;
}

export const quizData: Record<number, Question[]> = {
  1: [
    {
      id: 1,
      text: "What is the key assumption behind the Naive Bayes classifier?",
      options: ["Attributes are linearly related", "Attributes are conditionally independent given the class", "All attributes have equal importance", "Class labels are numeric", "None of these"],
      answerIndex: 1
    },
    {
      id: 2,
      text: "Which probability is estimated directly from the training data in Naive Bayes?",
      options: ["Posterior probability", "Likelihood probability", "Conditional entropy", "Information gain", "None of these"],
      answerIndex: 1
    },
    {
      id: 3,
      text: "Why is Laplace smoothing used in Naive Bayes classification?",
      options: ["To normalize numeric attributes", "To increase model accuracy always", "To avoid zero probability for unseen attribute values", "To remove missing values", "None of these"],
      answerIndex: 2
    },
    {
      id: 4,
      text: "Which probability is called the prior probability in Naive Bayes?",
      options: ["P(A | C)", "P(C | A)", "P(C)", "P(A)", "None of these"],
      answerIndex: 2
    },
    {
      id: 5,
      text: "Which of the following correctly represents Bayes' theorem?",
      options: ["P(A | B) = P(A)P(B)", "P(A | B) = P(B | A) / P(B)", "P(A | B) = P(B | A)P(A) / P(B)", "P(A | B) = P(A ∩ B)"],
      answerIndex: 2
    },
    {
      id: 6,
      text: "How are numeric attributes commonly handled in Naive Bayes?",
      options: ["Ignored during classification", "Converted to categorical only", "Modeled using probability density functions", "Assigned equal probability", "None of these"],
      answerIndex: 2
    },
    {
      id: 7,
      text: "In Naive Bayes, which probability is maximized to assign a class label?",
      options: ["Likelihood", "Prior", "Posterior", "Conditional entropy", "None of these"],
      answerIndex: 2
    },
    {
      id: 8,
      text: "If an attribute value never appears with a class in training data, Naive Bayes will assign:",
      options: ["Maximum probability", "Zero probability", "Equal probability", "Random probability", "None of these"],
      answerIndex: 1
    },
    {
      id: 9,
      text: "Which of the following is an example of a categorical attribute?",
      options: ["Age", "Salary", "Temperature", "Outlook", "None of these"],
      answerIndex: 3
    },
    {
      id: 10,
      text: "A decision list is best described as:",
      options: ["A tree of decisions", "A set of unordered rules", "An ordered sequence of IF-THEN rules", "A probabilistic model", "None of these"],
      answerIndex: 2
    },
    {
      id: 11,
      text: "Which of the following best defines data mining?",
      options: ["Storing large datasets", "Manual data analysis", "Discovering patterns and knowledge from data", "Data visualization only", "None of these"],
      answerIndex: 2
    },
    {
      id: 12,
      text: "Which task is NOT a data mining task?",
      options: ["Classification", "Clustering", "Regression", "Data storage", "None of these"],
      answerIndex: 3
    },
    {
      id: 13,
      text: "Which attribute type requires probability density estimation in Naive Bayes?",
      options: ["Boolean", "Nominal", "Numeric", "Ordinal", "None of these"],
      answerIndex: 2
    },
    {
      id: 14,
      text: "Which symbol is used to declare a relation in an ARFF file?",
      options: ["#", "@RELATION", "@DATA", "@ATTRIBUTE", "None of these"],
      answerIndex: 1
    },
    {
      id: 15,
      text: "Which section of an ARFF file contains the actual dataset values?",
      options: ["@RELATION", "@ATTRIBUTE", "@DATA", "@VALUES", "None of these"],
      answerIndex: 2
    },
    {
      id: 16,
      text: "Consider an attribute Eats with values {Baked, Fried, Roasted}. If for Students: Baked=3, Fried=2, Roasted=0 and total Students=5, using Laplace smoothing, P(Eats=Baked | Student) equals:",
      options: ["0.25", "0.40", "0.50", "0.60", "None of these"],
      answerIndex: 2
    },
    {
      id: 17,
      text: "How are missing values typically treated in Naive Bayes?",
      options: ["Records are removed", "Replaced with zero", "Ignored in probability calculation", "Always replaced by mean", "None of these"],
      answerIndex: 2
    },
    {
      id: 18,
      text: "Which of the following is an example of a numeric attribute?",
      options: ["Gender", "Class label", "Age", "Color", "None of these"],
      answerIndex: 2
    },
    {
      id: 19,
      text: "Which component of Naive Bayes represents evidence from attributes?",
      options: ["Prior", "Likelihood", "Posterior", "Entropy", "None of these"],
      answerIndex: 1
    },
    {
      id: 20,
      text: "Why is Naive Bayes computationally efficient?",
      options: ["Uses decision trees", "Requires no training data", "Assumes attribute independence", "Uses clustering", "None of these"],
      answerIndex: 2
    }
  ],
  2: [
    {
      id: 1,
      text: "In a Student–Professor dataset with 6 Students and 2 Professors, the entropy at the root is closest to:",
      options: ["0.81", "0.95", "1.00", "0.72", "None of these"],
      answerIndex: 0
    },
    {
      id: 2,
      text: "What is the primary goal of constructing a decision tree?",
      options: ["Data compression", "Generating if–then classification rules", "Feature normalization", "Density estimation", "None of these"],
      answerIndex: 1
    },
    {
      id: 3,
      text: "If all samples at a node belong to the same class, the node entropy is:",
      options: ["1", "0.5", "Maximum", "0", "None of these"],
      answerIndex: 3
    },
    {
      id: 4,
      text: "Which quantity is minimized when selecting the best attribute for a split in a decision tree?",
      options: ["Root entropy", "Weighted entropy after split", "Number of branches", "Dataset size", "None of these"],
      answerIndex: 1
    },
    {
      id: 5,
      text: "At a node in a decision tree, the entropy is 0.94. After splitting on attribute Habit, the weighted entropy becomes 0.30. What is the Information Gain obtained by splitting on Habit?",
      options: ["0.30", "0.64", "0.94", "1.24", "None of these"],
      answerIndex: 1
    },
    {
      id: 6,
      text: "Which dataset is used to decide the optimal attribute ordering in a decision tree?",
      options: ["Test set", "Validation set", "Training set", "Unlabeled set", "None of these"],
      answerIndex: 2
    },
    {
      id: 7,
      text: "When an attribute value is missing in a decision tree, a common strategy is to:",
      options: ["Discard the record", "Assign it randomly", "Distribute the instance fractionally among branches", "Always choose left branch", "None of these"],
      answerIndex: 2
    },
    {
      id: 8,
      text: "Information Gain of an attribute is computed as:",
      options: ["Difference between split entropy and root entropy", "Root entropy minus weighted split entropy", "Product of probabilities", "Ratio of entropies", "None of these"],
      answerIndex: 1
    },
    {
      id: 9,
      text: "If splitting on an attribute does not change entropy, the Information Gain is:",
      options: ["1", "-1", "Maximum", "0", "None of these"],
      answerIndex: 3
    },
    {
      id: 10,
      text: "Production rules generated from a decision tree correspond to:",
      options: ["Root node only", "Random paths", "Leaf-to-root paths", "Root-to-leaf paths", "None of these"],
      answerIndex: 3
    },
    {
      id: 11,
      text: "The perceptron learning rule updates weights using:",
      options: ["Δw = β(y - z)x", "Δw = β(z - y)x", "Δw = β(y + z)x", "Δw = (z - y)/x", "None of these"],
      answerIndex: 1
    },
    {
      id: 12,
      text: "What does the learning rate β control in a neural network?",
      options: ["Number of hidden layers", "Speed of weight updates", "Activation function shape", "Output threshold", "None of these"],
      answerIndex: 1
    },
    {
      id: 13,
      text: "A single-layer perceptron can correctly model which logic gate?",
      options: ["XOR", "XNOR", "AND", "Half-adder", "None of these"],
      answerIndex: 2
    },
    {
      id: 14,
      text: "Why can XOR not be modeled by a single perceptron?",
      options: ["Too many inputs", "Requires sigmoid activation", "Not linearly separable", "Output is binary", "None of these"],
      answerIndex: 2
    },
    {
      id: 15,
      text: "Input x = [1, 0], weights w = [0.4, -0.2], bias = -0.1. Using step activation, output is:",
      options: ["0", "1", "-1", "2", "None of these"],
      answerIndex: 1
    },
    {
      id: 16,
      text: "Which activation function outputs values in the range (0,1)?",
      options: ["Step", "Linear", "Sigmoid", "Tanh", "None of these"],
      answerIndex: 2
    },
    {
      id: 17,
      text: "Which activation function outputs values between -1 and +1?",
      options: ["Sigmoid", "Linear", "Step", "Hyperbolic tangent", "None of these"],
      answerIndex: 3
    },
    {
      id: 18,
      text: "Backpropagation is mainly used to:",
      options: ["Initialize weights", "Reduce classification labels", "Adjust weights to minimize error", "Increase learning rate"],
      answerIndex: 2
    },
    {
      id: 19,
      text: "In case-based updating, weights are updated:",
      options: ["After all training samples", "After each training sample", "Only once", "Randomly", "None of these"],
      answerIndex: 1
    },
    {
      id: 20,
      text: "A two-layer neural network is required to model:",
      options: ["AND gate", "OR gate", "NAND gate", "XOR gate", "None of these"],
      answerIndex: 3
    }
  ],
  3: [
    {
      id: 1,
      text: "What type of learning method is clustering?",
      options: ["Supervised learning", "Reinforcement learning", "Unsupervised learning", "Semi-supervised learning", "None of the above"],
      answerIndex: 2
    },
    {
      id: 2,
      text: "In agglomerative hierarchical clustering, how does the algorithm start?",
      options: ["With all points in one cluster", "With randomly chosen centroids", "With each pattern in its own cluster", "With predefined labels", "None of the above"],
      answerIndex: 2
    },
    {
      id: 3,
      text: "Single-linkage clustering defines distance between two clusters as:",
      options: ["Maximum distance between points", "Average distance between points", "Distance between centroids", "Minimum distance between any pair of points", "None of the above"],
      answerIndex: 3
    },
    {
      id: 4,
      text: "Which linkage method is most likely to produce \"chained\" clusters?",
      options: ["Complete linkage", "Average linkage", "Single linkage", "Centroid linkage", "None of the above"],
      answerIndex: 2
    },
    {
      id: 5,
      text: "Complete-linkage clustering measures cluster distance using:",
      options: ["Minimum pairwise distance", "Maximum pairwise distance", "Mean of centroids", "Median distance", "None of the above"],
      answerIndex: 1
    },
    {
      id: 6,
      text: "Which clustering method is non-hierarchical?",
      options: ["Single linkage", "Complete linkage", "Average linkage", "K-means clustering", "None of the above"],
      answerIndex: 3
    },
    {
      id: 7,
      text: "In K-means clustering, each cluster is represented by:",
      options: ["A boundary line", "A medoid", "A centroid", "A random data point", "None of the above"],
      answerIndex: 2
    },
    {
      id: 8,
      text: "What is the first step in the K-means algorithm?",
      options: ["Assign points to nearest centroid", "Compute covariance matrix", "Choose the number of clusters k", "Merge closest clusters", "None of the above"],
      answerIndex: 2
    },
    {
      id: 9,
      text: "K-means clustering stops iterating when:",
      options: ["All points change clusters", "Centroids stabilize", "SSE becomes zero", "Clusters become hierarchical", "None of the above"],
      answerIndex: 1
    },
    {
      id: 10,
      text: "PCA is primarily used for:",
      options: ["Classification", "Dimensionality reduction", "Clustering", "Hypothesis testing", "None of the above"],
      answerIndex: 1
    },
    {
      id: 11,
      text: "Principal components are:",
      options: ["Original input features", "Random projections", "Orthogonal directions capturing variance", "Cluster centroids", "None of the above"],
      answerIndex: 2
    },
    {
      id: 12,
      text: "Before computing the covariance matrix in PCA, the data must be:",
      options: ["Normalized", "Mean-centered", "Clustered", "Sorted", "None of the above"],
      answerIndex: 1
    },
    {
      id: 13,
      text: "In PCA, eigenvalues indicate:",
      options: ["Direction of principal components", "Number of features", "Amount of variance captured", "Correlation strength", "None of the above"],
      answerIndex: 2
    },
    {
      id: 14,
      text: "Keeping only the first principal component mainly results in:",
      options: ["Perfect reconstruction", "Increased dimensionality", "Maximum variance retention", "Loss of all information", "None of the above"],
      answerIndex: 2
    },
    {
      id: 15,
      text: "A logistic regression model is given by: p(y = 1 | x) = 1 / (1 + exp(-(β0 + β1x1 + β2x2))). Given: β0 = -2, β1 = 0.8, β2 = 0.6. For point x = (x1, x2) = (3, 1), using 0.5 threshold, predicted class is:",
      options: ["Positive (class 1)", "Negative (class 0)", "Exactly on the decision boundary", "Cannot be determined without standardization", "None of these"],
      answerIndex: 0
    },
    {
      id: 16,
      text: "In the linear regression equation Y=β0+β1X+ε, β1 represents:",
      options: ["The intercept", "The error term", "The slope", "The variance", "None of the above"],
      answerIndex: 2
    },
    {
      id: 17,
      text: "Residuals in linear regression are:",
      options: ["Predicted values", "Squared errors", "Differences between actual and predicted values", "Mean of Y", "None of the above"],
      answerIndex: 2
    },
    {
      id: 18,
      text: "Given SStot = 160, SSres = 40. The coefficient of determination R² is:",
      options: ["0.25", "0.50", "0.75", "1.25", "None of these"],
      answerIndex: 2
    },
    {
      id: 19,
      text: "An R² value of 0.82 means:",
      options: ["82% of errors are eliminated", "Model is perfect", "82% of variance in Y is explained", "82% of predictions are correct", "None of the above"],
      answerIndex: 2
    },
    {
      id: 20,
      text: "Linear regression is unsuitable for classification because:",
      options: ["It requires too much data", "It cannot compute errors", "Predictions can fall outside valid probability range", "It does not use parameters", "None of the above"],
      answerIndex: 2
    }
  ],
  4: [
    {
      id: 1,
      text: "What is the main objective of a hard-margin SVM?",
      options: ["Minimize classification error", "Maximize likelihood", "Maximize the margin between classes", "Reduce dimensionality", "None of the above"],
      answerIndex: 2
    },
    {
      id: 2,
      text: "Which data points define the SVM decision boundary?",
      options: ["All training samples", "Cluster centroids", "Support vectors", "Mean vectors", "None of the above"],
      answerIndex: 2
    },
    {
      id: 3,
      text: "Soft-margin SVM is used when:",
      options: ["Data is perfectly separable", "Data is unlabeled", "Data is non-linear", "Data is overlapping", "None of the above"],
      answerIndex: 3
    },
    {
      id: 4,
      text: "In soft-margin SVM, the parameter C controls:",
      options: ["Kernel type", "Margin width only", "Trade-off between margin and error", "Distance metric", "None of the above"],
      answerIndex: 2
    },
    {
      id: 5,
      text: "The kernel trick helps SVM to:",
      options: ["Reduce training time", "Handle missing data", "Separate non-linear data", "Remove noise", "None of the above"],
      answerIndex: 2
    },
    {
      id: 6,
      text: "LDA assumes that data follows which distribution?",
      options: ["Uniform", "Exponential", "Multivariate normal", "Poisson", "None of the above"],
      answerIndex: 2
    },
    {
      id: 7,
      text: "LDA assigns an object to the class with:",
      options: ["Minimum Euclidean distance", "Maximum likelihood", "Maximum posterior probability", "Minimum variance", "None of the above"],
      answerIndex: 2
    },
    {
      id: 8,
      text: "When covariance matrices of all groups are equal, the discriminant function becomes:",
      options: ["Quadratic", "Non-linear", "Linear", "Exponential", "None of the above"],
      answerIndex: 2
    },
    {
      id: 9,
      text: "Mahalanobis distance differs from Euclidean distance because it:",
      options: ["Ignores variance", "Accounts for feature correlation", "Uses absolute differences", "Works only in 1D", "None of the above"],
      answerIndex: 1
    },
    {
      id: 10,
      text: "Given two points A(2, 3) and B(5, 7), what is the Euclidean distance?",
      options: ["4", "5", "√25", "√32", "None of the above"],
      answerIndex: 1
    },
    {
      id: 11,
      text: "Increasing the value of K generally:",
      options: ["Increases variance", "Decreases bias", "Smooths decision boundary", "Causes overfitting", "None of the above"],
      answerIndex: 2
    },
    {
      id: 12,
      text: "Hamming distance is used for:",
      options: ["Continuous variables", "Ordinal data", "Non-numeric categorical attributes", "Probability distributions", "None of the above"],
      answerIndex: 2
    },
    {
      id: 13,
      text: "Association rule X → Y means:",
      options: ["X and Y never occur together", "X causes Y", "If X occurs, Y is likely to occur", "Y occurs before X", "None of the above"],
      answerIndex: 2
    },
    {
      id: 14,
      text: "Support of an itemset measures:",
      options: ["Rule strength", "Conditional probability", "Frequency in transactions", "Correlation", "None of the above"],
      answerIndex: 2
    },
    {
      id: 15,
      text: "In a database of 10 transactions, the itemset {Milk, Bread} appears in 4 transactions. What is the support?",
      options: ["0.2", "0.3", "0.4", "0.5", "None of the above"],
      answerIndex: 2
    },
    {
      id: 16,
      text: "G² (deviance) is minimized to:",
      options: ["Increase likelihood", "Reduce error variance", "Improve model fit", "Increase complexity", "None of the above"],
      answerIndex: 2
    },
    {
      id: 17,
      text: "AIC penalizes models for:",
      options: ["Low accuracy", "High bias", "High variance", "Number of parameters", "None of the above"],
      answerIndex: 3
    },
    {
      id: 18,
      text: "Compared to AIC, BIC:",
      options: ["Penalizes complexity less", "Ignores sample size", "Penalizes complexity more", "Maximizes likelihood", "None of the above"],
      answerIndex: 2
    },
    {
      id: 19,
      text: "Likelihood in model comparison represents:",
      options: ["Model complexity", "Prediction accuracy", "Probability of observed data given the model", "Classification error", "None of the above"],
      answerIndex: 2
    },
    {
      id: 20,
      text: "Best practice in model selection is to:",
      options: ["Use only accuracy", "Use only AIC", "Use multiple metrics and theory", "Select most complex model", "None of the above"],
      answerIndex: 2
    }
  ]
};
