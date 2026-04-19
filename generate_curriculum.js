const fs = require('fs');

const COURSES = [
  { id:'c1', name:'Intro to Python', url:'https://www.datacamp.com/courses/intro-to-python-for-data-science', month:1 },
  { id:'c2', name:'OOP in Python', url:'https://www.datacamp.com/courses/object-oriented-programming-in-python', month:1 },
  { id:'c3', name:'Introduction to SQL', url:'https://www.datacamp.com/courses/introduction-to-sql', month:1 },
  { id:'c4', name:'Intermediate SQL', url:'https://www.datacamp.com/courses/intermediate-sql', month:1 },
  { id:'c5', name:'Databases in Python', url:'https://www.datacamp.com/courses/introduction-to-relational-databases-in-python', month:1 },
  { id:'c6', name:'Data Manipulation w/ Pandas', url:'https://www.datacamp.com/courses/data-manipulation-with-pandas', month:1 },
  { id:'c7', name:'Cleaning Data in Python', url:'https://www.datacamp.com/courses/cleaning-data-in-python', month:1 },
  { id:'c8', name:'Intro to Statistics', url:'https://www.datacamp.com/courses/introduction-to-statistics-in-python', month:2 },
  { id:'c9', name:'Hypothesis Testing', url:'https://www.datacamp.com/courses/hypothesis-testing-in-python', month:2 },
  { id:'c10', name:'Intro to Seaborn', url:'https://www.datacamp.com/courses/introduction-to-data-visualization-with-seaborn', month:2 },
  { id:'c11', name:'EDA in Python', url:'https://www.datacamp.com/courses/exploratory-data-analysis-in-python', month:2 },
  { id:'c12', name:'Linear Algebra', url:'https://www.datacamp.com/courses/linear-algebra-for-data-science-in-python', month:2 },
  { id:'c13', name:'Preprocessing for ML', url:'https://www.datacamp.com/courses/preprocessing-for-machine-learning-in-python', month:2 },
  { id:'c14', name:'Supervised Learning', url:'https://www.datacamp.com/courses/supervised-learning-with-scikit-learn', month:3 },
  { id:'c15', name:'Unsupervised Learning', url:'https://www.datacamp.com/courses/unsupervised-learning-in-python', month:3 },
  { id:'c16', name:'Tree-Based Models', url:'https://www.datacamp.com/courses/machine-learning-with-tree-based-models-in-python', month:3 },
  { id:'c17', name:'XGBoost', url:'https://www.datacamp.com/courses/extreme-gradient-boosting-with-xgboost', month:3 },
  { id:'c18', name:'Intro to Deep Learning (PyTorch)', url:'https://www.datacamp.com/courses/introduction-to-deep-learning-with-pytorch', month:4 },
  { id:'c19', name:'DL for Images (PyTorch)', url:'https://www.datacamp.com/courses/deep-learning-for-images-with-pytorch', month:4 },
  { id:'c20', name:'NLP Fundamentals', url:'https://www.datacamp.com/courses/natural-language-processing-fundamentals-in-python', month:4 },
  { id:'c21', name:'Feature Eng for NLP', url:'https://www.datacamp.com/courses/feature-engineering-for-nlp-in-python', month:4 },
  { id:'c22', name:'Transformers & BERT', url:'https://www.datacamp.com/courses/transformer-models-and-bert', month:4 },
  { id:'c23', name:'Fine-Tuning HF', url:'https://www.datacamp.com/courses/fine-tuning-with-hugging-face', month:4 },
  { id:'c24', name:'Working w/ OpenAI API', url:'https://www.datacamp.com/courses/working-with-the-openai-api', month:4 },
  { id:'c25', name:'LLM Apps w/ LangChain', url:'https://www.datacamp.com/courses/developing-llm-applications-with-langchain', month:5 },
  { id:'c26', name:'Streamlit Apps', url:'https://www.datacamp.com/courses/building-web-applications-in-python-with-streamlit', month:5 },
  { id:'c27', name:'MLOps Concepts', url:'https://www.datacamp.com/courses/mlops-concepts', month:6 },
  { id:'c28', name:'Intro to MLflow', url:'https://www.datacamp.com/courses/introduction-to-mlflow', month:6 },
  { id:'c29', name:'Intro to Docker', url:'https://www.datacamp.com/courses/introduction-to-docker', month:6 },
  { id:'c30', name:'CI/CD for ML', url:'https://www.datacamp.com/courses/ci-cd-for-machine-learning', month:6 },
  { id:'c31', name:'Monitoring ML', url:'https://www.datacamp.com/courses/monitoring-machine-learning-in-python', month:6 }
];

const CERTIFICATIONS = [
  { id:'cert1', name:'Python Data Associate', week:4, month:1, reqDays:28, color:'#05c3de',
    desc:'Tests Python, OOP, Data Manipulation, and SQL foundations.' },
  { id:'cert2', name:'Data Scientist Associate', week:8, month:2, reqDays:56, color:'#9b6dff',
    desc:'Tests data extraction, visualization, stats, and predictive modeling.' },
  { id:'cert3', name:'AI Engineer Associate', week:12, month:3, reqDays:84, color:'#f4b942',
    desc:'Tests AI app building (OpenAI APIs, embeddings, LangChain). ⭐ MOST IMPORTANT' },
  { id:'cert4', name:'MLOps Fundamentals Badge', week:16, month:4, reqDays:112, color:'#22d87a',
    desc:'Tests MLflow, CI/CD, Docker, and pipeline automation.' },
];

const MONTHS = [
  { id: 1, name: 'Part I: Mathematical & Computational Bedrock', weeks: [1, 2, 3, 4], color: '#05c3de' },
  { id: 2, name: 'Part II: Core Machine Learning & Algorithms', weeks: [5, 6, 7, 8], color: '#9b6dff' },
  { id: 3, name: 'Part III: Deep Learning & Specialized Domains', weeks: [9, 10, 11, 12], color: '#f4b942' },
  { id: 4, name: 'Part IV: MLOps, System Design & Capstone', weeks: [13, 14, 15, 16], color: '#22d87a' },
  { id: 5, name: 'Part V: The Final Mile — Job Hunt & Portfolio', weeks: [17, 18, 19, 20], color: '#ff5577' }
];

const WEEKS = [
  { id: 'w1', title: 'Linear Algebra & Vector Calculus for ML', month: 1, days: [
    { day: 1, desc: 'Vector Spaces, Subspaces, and Basis: The Geometry of Data.', courseId: 'c12' },
    { day: 2, desc: 'Linear Transformations, Matrices, and Systems of Equations.', courseId: 'c12' },
    { day: 3, desc: 'Eigenvalues, Eigenvectors, and Eigendecomposition.', courseId: 'c12' },
    { day: 4, desc: 'Singular Value Decomposition (SVD) and Principal Component Analysis Foundations.', courseId: 'c12' },
    { day: 5, desc: 'Multivariable Calculus: Partial Derivatives and the Gradient Vector.', courseId: null },
    { day: 6, desc: 'The Jacobian and Hessian Matrices: Understanding Curvature in Optimization.', courseId: null },
    { day: 7, desc: 'Matrix Calculus Notation Rigor & Backpropagation Foundations.', courseId: null },
  ]},
  { id: 'w2', title: 'Probability, Statistics & Bayesian Inference', month: 1, days: [
    { day: 8, desc: 'Probability Theory: Axioms, Conditional Probability, and Bayes Theorem.', courseId: 'c8' },
    { day: 9, desc: 'Random Variables: Discrete vs. Continuous Distributions.', courseId: 'c8' },
    { day: 10, desc: 'Expectation, Variance, and Moments of a Distribution.', courseId: 'c8' },
    { day: 11, desc: 'Inferential Statistics: Central Limit Theorem and Sampling Distributions.', courseId: 'c8' },
    { day: 12, desc: 'Hypothesis Testing: P-values, Type I/II Errors, and Z/T-tests.', courseId: 'c9' },
    { day: 13, desc: 'Maximum Likelihood Estimation (MLE) vs. Maximum A Posteriori (MAP).', courseId: 'c9' },
    { day: 14, desc: 'Statistical Significance in A/B Testing for Product Data Science.', courseId: 'c9' },
  ]},
  { id: 'w3', title: 'Optimization & Linear Models', month: 1, days: [
    { day: 15, desc: 'Convex Optimization: Global vs. Local Minima and KKT Conditions.', courseId: null },
    { day: 16, desc: 'Simple Linear Regression: OLS Derivation & The Bias-Variance Decomposition Proof.', courseId: null },
    { day: 17, desc: 'Multiple Linear Regression and Multi-collinearity Diagnostics.', courseId: null },
    { day: 18, desc: 'Gradient Descent Variants: Batch, Stochastic (SGD), and Mini-batch.', courseId: null },
    { day: 19, desc: 'Regularization: Ridge (L2), Lasso (L1), and Elastic Net.', courseId: null },
    { day: 20, desc: 'Logistic Regression: The Sigmoid Function and Cross-Entropy Loss.', courseId: null },
    { day: 21, desc: 'Coding Workshop: Building Regression Models from Scratch in NumPy.', courseId: null },
  ]},
  { id: 'w4', title: 'Python for High-Performance Data Science', month: 1, days: [
    { day: 22, desc: 'Advanced Python: Generators, Decorators, and Context Managers.', courseId: 'c1' },
    { day: 23, desc: 'NumPy Mastery: Vectorization, Broadcasting, and Memory Efficiency.', courseId: 'c1' },
    { day: 24, desc: 'Pandas Deep Dive: Multi-indexing, GroupBy Mechanics, and Pivot Tables.', courseId: 'c6' },
    { day: 25, desc: 'Exploratory Data Analysis (EDA): Outliers and Distribution Shifts.', courseId: 'c11' },
    { day: 26, desc: 'Data Visualization Theory: Matplotlib, Seaborn, and Plotly.', courseId: 'c10' },
    { day: 27, desc: 'Data Cleaning Pipelines: Missingness Mechanisms and Categorical Encoding.', courseId: 'c7' },
    { day: 28, desc: 'Milestone Project 01: End-to-End EDA and Statistical Report on a Real-World Dataset.', courseId: null },
  ]},
  { id: 'w5', title: 'Supervised Learning I (Classification & Trees)', month: 2, days: [
    { day: 29, desc: 'K-Nearest Neighbors (KNN) and the Curse of Dimensionality.', courseId: 'c14' },
    { day: 30, desc: 'Decision Trees: Information Gain, Gini Impurity, and Entropy.', courseId: 'c14' },
    { day: 31, desc: 'Tree Pruning and Handling Overfitting.', courseId: 'c14' },
    { day: 32, desc: 'Support Vector Machines (SVM): Hyperplanes and the Kernel Trick.', courseId: 'c14' },
    { day: 33, desc: 'Naive Bayes: Geometric vs. Probabilistic Classification.', courseId: 'c14' },
    { day: 34, desc: 'Evaluation Metrics: Precision, Recall, F1-Score, ROC-AUC.', courseId: 'c14' },
    { day: 35, desc: 'Imbalanced Data Techniques: SMOTE, Weighted Loss, and Precision-Recall Curves.', courseId: 'c14' },
  ]},
  { id: 'w6', title: 'Supervised Learning II (Ensemble & Interpretability)', month: 2, days: [
    { day: 36, desc: 'Introduction to Ensemble Thinking: Wisdom of the Crowd.', courseId: 'c16' },
    { day: 37, desc: 'Bagging: Bootstrapping and Random Forests.', courseId: 'c16' },
    { day: 38, desc: 'Boosting Theory: AdaBoost and Weighted Weak Learners.', courseId: 'c16' },
    { day: 39, desc: 'Gradient Boosting Machines (GBM) and XGBoost Architecture.', courseId: 'c17' },
    { day: 40, desc: 'LightGBM and CatBoost: Handling Categorical Data and Execution Speed.', courseId: 'c17' },
    { day: 41, desc: 'Explainable AI (XAI): SHAP Values, LIME, and Global vs. Local Interpretability.', courseId: 'c17' },
    { day: 42, desc: 'Hyperparameter Tuning: GridSearch, RandomSearch, and Bayesian Optimization (Optuna).', courseId: 'c16' },
  ]},
  { id: 'w7', title: 'Unsupervised Learning & Dimensionality Reduction', month: 2, days: [
    { day: 43, desc: 'Clustering: K-Means, K-Medoids, and the Silhouette Score.', courseId: 'c15' },
    { day: 44, desc: 'Hierarchical Clustering and Dendrograms.', courseId: 'c15' },
    { day: 45, desc: 'Density-Based Clustering (DBSCAN) and Anomaly Detection.', courseId: 'c15' },
    { day: 46, desc: 'Dimensionality Reduction: PCA (Principal Component Analysis) Deep Dive.', courseId: 'c15' },
    { day: 47, desc: 't-SNE and UMAP for High-Dimensional Visualization.', courseId: 'c15' },
    { day: 48, desc: 'Association Rule Learning: Apriori and FP-Growth.', courseId: 'c15' },
    { day: 49, desc: 'Milestone Project 02: Customer Segmentation and Fraud Detection Pipeline.', courseId: null },
  ]},
  { id: 'w8', title: 'SQL, Big Data & Feature Engineering', month: 2, days: [
    { day: 50, desc: 'Advanced SQL: Joins, Subqueries, and CTEs (Common Table Expressions).', courseId: 'c3' },
    { day: 51, desc: 'Window Functions: RANK, LEAD/LAG, and Partitioning.', courseId: 'c4' },
    { day: 52, desc: 'Feature Engineering: Polynomial Features, Binning, and Interaction Terms.', courseId: 'c4' },
    { day: 53, desc: 'Scaling Data: StandardScaler vs. RobustScaler vs. MinMaxScaler.', courseId: 'c13' },
    { day: 54, desc: 'Working with NoSQL (MongoDB) and Large Scale Data (Spark Basics).', courseId: 'c5' },
    { day: 55, desc: 'Feature Selection: Recursive Feature Elimination (RFE) and Variance Inflation Factor (VIF).', courseId: 'c13' },
    { day: 56, desc: 'Data Leakage: How to Identify and Prevent It in Production Environments.', courseId: 'c13' },
  ]},
  { id: 'w9', title: 'Neural Network Foundations & Scale', month: 3, days: [
    { day: 57, desc: 'The Biological Neuron vs. Artificial Perceptron.', courseId: 'c18' },
    { day: 58, desc: 'Multi-Layer Perceptron (MLP) and Architecture Design.', courseId: 'c18' },
    { day: 59, desc: 'Activation Functions: ReLU, Tanh, Softmax, and Swish.', courseId: 'c18' },
    { day: 60, desc: 'Deep Dive: Backpropagation and the Chain Rule in Code.', courseId: 'c18' },
    { day: 61, desc: 'Optimization for DL: Adam, RMSProp, and Momentum.', courseId: 'c18' },
    { day: 62, desc: 'Overfitting in DL: Dropout, Batch Normalization, and Early Stopping.', courseId: 'c18' },
    { day: 63, desc: 'PyTorch Basics & Distributed Machine Learning.', courseId: 'c18' },
  ]},
  { id: 'w10', title: 'Computer Vision (CV)', month: 3, days: [
    { day: 64, desc: 'Convolutional Neural Networks (CNN) Architecture.', courseId: 'c19' },
    { day: 65, desc: 'Pooling, Strides, and Padding Mechanics.', courseId: 'c19' },
    { day: 66, desc: 'Classic Architectures: LeNet, AlexNet, VGG.', courseId: 'c19' },
    { day: 67, desc: 'Modern CV: ResNet (Residual Connections) and Inception.', courseId: 'c19' },
    { day: 68, desc: 'Transfer Learning: Fine-tuning ImageNet Models.', courseId: 'c19' },
    { day: 69, desc: 'Object Detection: YOLO and R-CNN Concepts.', courseId: 'c19' },
    { day: 70, desc: 'Image Augmentation Strategies for Small Datasets.', courseId: 'c19' },
  ]},
  { id: 'w11', title: 'Natural Language Processing (NLP) & GenAI', month: 3, days: [
    { day: 71, desc: 'Text Preprocessing: Tokenization, Stemming, and Lemmatization.', courseId: 'c20' },
    { day: 72, desc: 'Word Embeddings: Word2Vec, GloVe, and FastText.', courseId: 'c20' },
    { day: 73, desc: 'Sequence Modeling & Attention Mechanism: Why "Attention is All You Need."', courseId: 'c22' },
    { day: 74, desc: 'Transformers: BERT, GPT, and Encoder-Decoder Architectures.', courseId: 'c22' },
    { day: 75, desc: 'Large Language Models (LLMs) & Prompt Engineering Basics.', courseId: 'c24' },
    { day: 76, desc: 'Parameter-Efficient Fine-Tuning (PEFT): LoRA and QLoRA for LLMs.', courseId: 'c23' },
    { day: 77, desc: 'Retrieval-Augmented Generation (RAG) & Vector Databases (Pinecone/Milvus).', courseId: 'c25' },
  ]},
  { id: 'w12', title: 'Time Series & Recommendation Systems', month: 3, days: [
    { day: 78, desc: 'Time Series Basics: Trend, Seasonality, and Noise.', courseId: null },
    { day: 79, desc: 'Classical Models: AR, MA, ARIMA, and SARIMA.', courseId: null },
    { day: 80, desc: 'Modern Forecasting: Facebook Prophet and DeepAR.', courseId: null },
    { day: 81, desc: 'Recommendation Systems: Collaborative Filtering (User/Item-based).', courseId: null },
    { day: 82, desc: 'Matrix Factorization: ALS and SVD for Recommendations.', courseId: null },
    { day: 83, desc: 'Content-Based Filtering and Hybrid Systems.', courseId: null },
    { day: 84, desc: 'Milestone Project 03: Build a Movie Recommender or Stock Price Predictor.', courseId: null },
  ]},
  { id: 'w13', title: 'MLOps & Model Deployment', month: 4, days: [
    { day: 85, desc: 'The ML Lifecycle: Experiment Tracking with MLflow or W&B.', courseId: 'c27' },
    { day: 86, desc: 'Containerization: Docker for Data Scientists.', courseId: 'c29' },
    { day: 87, desc: 'Model APIs: Building REST APIs with FastAPI.', courseId: 'c28' },
    { day: 88, desc: 'Cloud Deployment: AWS (SageMaker) or GCP (Vertex AI) + Cloud Cost Optimization.', courseId: 'c27' },
    { day: 89, desc: 'CI/CD for ML: GitHub Actions and Automated Testing.', courseId: 'c30' },
    { day: 90, desc: 'Model Monitoring: Detecting Data Drift, Concept Drift, and System Failures.', courseId: 'c31' },
    { day: 91, desc: 'Scalable Serving: Kubernetes and TorchServe Basics.', courseId: 'c31' },
  ]},
  { id: 'w14', title: 'Data Structures, Algorithms & ML System Design', month: 4, days: [
    { day: 92, desc: 'Big O Notation and Time/Space Complexity.', courseId: null },
    { day: 93, desc: 'Arrays, Strings, and Hash Maps (Interview Essentials).', courseId: null },
    { day: 94, desc: 'Linked Lists, Stacks, Trees, and Queues.', courseId: null },
    { day: 95, desc: 'Sorting and Searching (Binary Search).', courseId: null },
    { day: 96, desc: 'Scalable System Architecture: Load Balancers, Latency vs. Throughput.', courseId: null },
    { day: 97, desc: 'ML System Design Case Studies: Netflix Recommendation Engine & Uber ETA Prediction.', courseId: null },
    { day: 98, desc: 'Coding Mock Interview: LeetCode Easy/Medium for Data Science.', courseId: null },
  ]},
  { id: 'w15', title: 'Capstone Project - The "Job-Winner" Portfolio', month: 4, days: [
    { day: 99, desc: 'Project Ideation: Solving a Real Business Problem (or tackling a live Kaggle competition).', courseId: null },
    { day: 100, desc: 'Data Acquisition: Web Scraping or API Data Extraction.', courseId: null },
    { day: 101, desc: 'Robust Data Pipeline and Feature Store Creation.', courseId: null },
    { day: 102, desc: 'Model Training, Tuning, Experimentation, and SHAP Interpretation.', courseId: null },
    { day: 103, desc: 'Deployment: Creating a Live Dashboard (Streamlit) or API.', courseId: 'c26' },
    { day: 104, desc: 'Documentation: Writing a Professional README and Technical Blog Post.', courseId: null },
    { day: 105, desc: 'Project Presentation: Recording a 5-Minute Technical Demo.', courseId: null },
  ]},
  { id: 'w16', title: 'The Job Hunt - Cracking the Interview', month: 4, days: [
    { day: 106, desc: 'Resume Surgery: Keyword Optimization for ATS.', courseId: null },
    { day: 107, desc: 'LinkedIn Branding: Networking and Cold Outreach Strategies.', courseId: null },
    { day: 108, desc: 'Behavioral Interviews: STAR Method for "Tell me about a time..."', courseId: null },
    { day: 109, desc: 'Technical Case Studies: Translating Business Problems to ML Metrics.', courseId: null },
    { day: 110, desc: 'Mock Technical Interview: ML Theory, Math, and Model Trade-offs.', courseId: null },
    { day: 111, desc: 'Negotiation Skills: Salary, Benefits, and Equity.', courseId: null },
    { day: 112, desc: 'Final Review: Revisit Week 01-03 Math (The most common trap).', courseId: null },
  ]},
  { id: 'w17', title: 'Portfolio Polishing & Showcasing', month: 5, days: [
    { day: 113, desc: 'Audit GitHub Repos: Ensure all 4 milestone projects have perfect READMEs.', courseId: null },
    { day: 114, desc: 'Record Demo Videos: Create 2-minute Loom walkthroughs for your capstone.', courseId: null },
    { day: 115, desc: 'Write Technical Blog: Publish a Medium/Dev.to article about your Capstone.', courseId: null },
    { day: 116, desc: 'Deploy Projects: Ensure Streamlit and FastAPI endpoints are live and accessible.', courseId: null },
    { day: 117, desc: 'Refactor Code: Run Pylint, add typing, and organize imports.', courseId: null },
    { day: 118, desc: 'Create Personal Website/Portfolio: Highlight your skills and live demos.', courseId: null },
    { day: 119, desc: 'Rest & Recover: Month 5 is a marathon.', courseId: null },
  ]},
  { id: 'w18', title: 'Mock Interviews & Advanced System Design', month: 5, days: [
    { day: 120, desc: 'Live Mock Interview: Do a session on Pramp or interviewing.io.', courseId: null },
    { day: 121, desc: 'Advanced System Design: Architect a real-time fraud detection system.', courseId: null },
    { day: 122, desc: 'LeetCode Sprint: Solve 5 Medium arrays/hashmap questions.', courseId: null },
    { day: 123, desc: 'Live Mock Interview #2: Focus on ML Theory and model tradeoffs.', courseId: null },
    { day: 124, desc: 'Behavioral Deep Dive: Master 5 core STAR stories.', courseId: null },
    { day: 125, desc: 'SQL Whiteboarding: Complex window functions and CTEs.', courseId: null },
    { day: 126, desc: 'Rest & Synthesize Feedback.', courseId: null },
  ]},
  { id: 'w19', title: 'Targeted Applications & Personal Branding', month: 5, days: [
    { day: 127, desc: 'Update LinkedIn: Add certs, projects, and enable "Open to Work".', courseId: null },
    { day: 128, desc: 'Cold Outreach: Send 10 messages to recruiters or engineering managers.', courseId: null },
    { day: 129, desc: 'Application Sprint: Apply to 15 targeted entry/mid-level AI roles.', courseId: null },
    { day: 130, desc: 'Company Deep Dive: Study the tech stack of your top 3 target companies.', courseId: null },
    { day: 131, desc: 'Follow-ups: Check in on Monday applications.', courseId: null },
    { day: 132, desc: 'Expand Network: Join AI Discord communities and local meetups.', courseId: null },
    { day: 133, desc: 'Rest & Track Applications.', courseId: null },
  ]},
  { id: 'w20', title: 'The Gauntlet - Take-homes & Final Readiness', month: 5, days: [
    { day: 134, desc: 'Take-home Assignment Prep: Practice building a rapid 4-hour ML pipeline.', courseId: null },
    { day: 135, desc: 'Cloud Review: Ensure you can discuss AWS/GCP services for ML.', courseId: null },
    { day: 136, desc: 'Culture Fit Prep: Review common non-technical interview questions.', courseId: null },
    { day: 137, desc: 'Salary Negotiation: Study levels.fyi and practice the negotiation script.', courseId: null },
    { day: 138, desc: 'Final Project Polish: Address any bugs discovered in live deployments.', courseId: null },
    { day: 139, desc: 'Review Mathematics: Re-read Week 1-3 theory.', courseId: null },
    { day: 140, desc: 'Graduation: You are now a fully prepared, job-ready AI Engineer.', courseId: null },
  ]}
];

const DAILY_THEORY = {
  1:{math:'Big-O notation: O(1) vs O(n) vs O(n²).',resource:'https://www.bigocheatsheet.com/'},
  29:{math:'Probability: P(A|B) = P(B|A)·P(A)/P(B).',resource:'https://seeing-theory.brown.edu/'},
  57:{math:'Linear regression: y = Xβ + ε. OLS minimizes Σ(yᵢ - ŷᵢ)²',resource:''},
  85:{math:'Backpropagation: chain rule ∂L/∂w = ∂L/∂a · ∂a/∂z · ∂z/∂w.',resource:'https://karpathy.github.io/neuralnets/'},
  113:{math:'Attention: Attention(Q,K,V) = softmax(QKᵀ/√d_k)V.',resource:'https://jalammar.github.io/illustrated-transformer/'}
};

const HOW_TO_USE = [
  { icon:'📅', title:'Daily Routine (2-3 hours/day)', desc:'Study the concept (1-1.5 hrs), complete any linked DataCamp course, then practice. Mark the day complete when done.' },
  { icon:'✅', title:'Marking Progress', desc:'Click the ✓ circle next to each day in the Roadmap tab. This earns you 20 XP and updates your streak.' },
  { icon:'📚', title:'Course Links', desc:'Days with a 📘 badge link directly to a specific DataCamp course. All 31 courses map exactly to your daily progress.' },
  { icon:'🏆', title:'Certifications', desc:'Certs auto-unlock when you complete enough days. Go to the Certs tab to take the exam once unlocked.' },
  { icon:'📁', title:'Projects', desc:'Build your portfolio as you progress. The final month (Month 5) is dedicated to polishing these projects.' },
  { icon:'🎯', title:'The Final Mile (Month 5)', desc:'Month 5 is all about applying, mock interviews, and system design. You transition from learning to earning.' }
];

let out = `export const MONTHS = ${JSON.stringify(MONTHS, null, 2)};\n\n`;
out += `export const COURSES = ${JSON.stringify(COURSES, null, 2)};\n\n`;
out += `export const CERTIFICATIONS = ${JSON.stringify(CERTIFICATIONS, null, 2)};\n\n`;
out += `export const WEEKS = ${JSON.stringify(WEEKS, null, 2)};\n\n`;
out += `export const DAILY_THEORY = ${JSON.stringify(DAILY_THEORY, null, 2)};\n\n`;
out += `export const HOW_TO_USE = ${JSON.stringify(HOW_TO_USE, null, 2)};\n\n`;

fs.writeFileSync('src/data/curriculum.js', out);
console.log('Curriculum rebuilt successfully!');
