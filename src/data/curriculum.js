export const MONTHS = [
  { id: 1, title: 'Part I: Mathematical & Computational Bedrock', weeks: ['w1', 'w2', 'w3', 'w4'], color: '#05c3de' },
  { id: 2, title: 'Part II: Core Machine Learning & Algorithms', weeks: ['w5', 'w6', 'w7', 'w8'], color: '#9b6dff' },
  { id: 3, title: 'Part III: Deep Learning & Specialized Domains', weeks: ['w9', 'w10', 'w11', 'w12'], color: '#f4b942' },
  { id: 4, title: 'Part IV: MLOps, System Design & Capstone', weeks: ['w13', 'w14', 'w15', 'w16'], color: '#22d87a' },
  { id: 5, title: 'Part V: The Final Mile — Job Hunt & Portfolio', weeks: ['w17', 'w18', 'w19', 'w20'], color: '#ff5577' }
];

export const COURSES = [
  { id: "c1", name: "Intro to Python", url: "https://www.datacamp.com/courses/intro-to-python-for-data-science", month: 1 },
  { id: "c2", name: "OOP in Python", url: "https://www.datacamp.com/courses/object-oriented-programming-in-python", month: 1 },
  { id: "c3", name: "Introduction to SQL", url: "https://www.datacamp.com/courses/introduction-to-sql", month: 1 },
  { id: "c4", name: "Intermediate SQL", url: "https://www.datacamp.com/courses/intermediate-sql", month: 1 },
  { id: "c5", name: "Databases in Python", url: "https://www.datacamp.com/courses/introduction-to-relational-databases-in-python", month: 1 },
  { id: "c6", name: "Data Manipulation w/ Pandas", url: "https://www.datacamp.com/courses/data-manipulation-with-pandas", month: 1 },
  { id: "c7", name: "Cleaning Data in Python", url: "https://www.datacamp.com/courses/cleaning-data-in-python", month: 1 },
  { id: "c8", name: "Intro to Statistics", url: "https://www.datacamp.com/courses/introduction-to-statistics-in-python", month: 2 },
  { id: "c9", name: "Hypothesis Testing", url: "https://www.datacamp.com/courses/hypothesis-testing-in-python", month: 2 },
  { id: "c10", name: "Intro to Seaborn", url: "https://www.datacamp.com/courses/introduction-to-data-visualization-with-seaborn", month: 2 },
  { id: "c11", name: "EDA in Python", url: "https://www.datacamp.com/courses/exploratory-data-analysis-in-python", month: 2 },
  { id: "c12", name: "Linear Algebra", url: "https://www.datacamp.com/courses/linear-algebra-for-data-science-in-python", month: 2 },
  { id: "c13", name: "Preprocessing for ML", url: "https://www.datacamp.com/courses/preprocessing-for-machine-learning-in-python", month: 2 },
  { id: "c14", name: "Supervised Learning", url: "https://www.datacamp.com/courses/supervised-learning-with-scikit-learn", month: 3 },
  { id: "c15", name: "Unsupervised Learning", url: "https://www.datacamp.com/courses/unsupervised-learning-in-python", month: 3 },
  { id: "c16", name: "Tree-Based Models", url: "https://www.datacamp.com/courses/machine-learning-with-tree-based-models-in-python", month: 3 },
  { id: "c17", name: "XGBoost", url: "https://www.datacamp.com/courses/extreme-gradient-boosting-with-xgboost", month: 3 },
  { id: "c18", name: "Intro to Deep Learning (PyTorch)", url: "https://www.datacamp.com/courses/introduction-to-deep-learning-with-pytorch", month: 4 },
  { id: "c19", name: "DL for Images (PyTorch)", url: "https://www.datacamp.com/courses/deep-learning-for-images-with-pytorch", month: 4 },
  { id: "c20", name: "NLP Fundamentals", url: "https://www.datacamp.com/courses/natural-language-processing-fundamentals-in-python", month: 4 },
  { id: "c21", name: "Feature Eng for NLP", url: "https://www.datacamp.com/courses/feature-engineering-for-nlp-in-python", month: 4 },
  { id: "c22", name: "Transformers & BERT", url: "https://www.datacamp.com/courses/transformer-models-and-bert", month: 4 },
  { id: "c23", name: "Fine-Tuning HF", url: "https://www.datacamp.com/courses/fine-tuning-with-hugging-face", month: 4 },
  { id: "c24", name: "Working w/ OpenAI API", url: "https://www.datacamp.com/courses/working-with-the-openai-api", month: 4 },
  { id: "c25", name: "LLM Apps w/ LangChain", url: "https://www.datacamp.com/courses/developing-llm-applications-with-langchain", month: 5 },
  { id: "c26", name: "Streamlit Apps", url: "https://www.datacamp.com/courses/building-web-applications-in-python-with-streamlit", month: 5 },
  { id: "c27", name: "MLOps Concepts", url: "https://www.datacamp.com/courses/mlops-concepts", month: 6 },
  { id: "c28", name: "Intro to MLflow", url: "https://www.datacamp.com/courses/introduction-to-mlflow", month: 6 },
  { id: "c29", name: "Intro to Docker", url: "https://www.datacamp.com/courses/introduction-to-docker", month: 6 },
  { id: "c30", name: "CI/CD for ML", url: "https://www.datacamp.com/courses/ci-cd-for-machine-learning", month: 6 },
  { id: "c31", name: "Monitoring ML", url: "https://www.datacamp.com/courses/monitoring-machine-learning-in-python", month: 6 }
];

export const CERTIFICATIONS = [
  { id: "cert1", name: "Python Data Associate", week: 4, month: 1, reqDays: 28, color: "#05c3de", desc: "Tests Python, OOP, Data Manipulation, and SQL foundations." },
  { id: "cert2", name: "Data Scientist Associate", week: 8, month: 2, reqDays: 56, color: "#9b6dff", desc: "Tests data extraction, visualization, stats, and predictive modeling." },
  { id: "cert3", name: "AI Engineer Associate", week: 12, month: 3, reqDays: 84, color: "#f4b942", desc: "Tests AI app building (OpenAI APIs, embeddings, LangChain). ⭐ MOST IMPORTANT" },
  { id: "cert4", name: "MLOps Fundamentals Badge", week: 16, month: 4, reqDays: 112, color: "#22d87a", desc: "Tests MLflow, CI/CD, Docker, and pipeline automation." }
];

const W = (id, title, days) => ({ id, title, days });
const D = (day, dow, topic, task, tag, courseId) => ({ day, dow, topic, task, tag, courseId });

export const WEEKS = [
  W('w1', 'Linear Algebra & Vector Calculus for ML', [
    D(1, 'MON', 'Linear Algebra', 'Vector Spaces, Subspaces, and Basis', 'ML', 'c12'),
    D(2, 'TUE', 'Linear Algebra', 'Transformations, Matrices, Systems of Equations', 'ML', 'c12'),
    D(3, 'WED', 'Linear Algebra', 'Eigenvalues, Eigenvectors, Eigendecomposition', 'ML', 'c12'),
    D(4, 'THU', 'Linear Algebra', 'Singular Value Decomposition (SVD)', 'ML', 'c12'),
    D(5, 'FRI', 'Calculus', 'Multivariable Calculus: Partial Derivatives', 'ML', null),
    D(6, 'SAT', 'Calculus', 'Jacobian and Hessian Matrices', 'ML', null),
    D(7, 'SUN', 'Calculus', 'Matrix Calculus & Backprop Foundations', 'REST', null)
  ]),
  W('w2', 'Probability, Statistics & Inference', [
    D(8, 'MON', 'Probability', 'Axioms, Conditional Probability, Bayes Theorem', 'PY', 'c8'),
    D(9, 'TUE', 'Probability', 'Discrete vs. Continuous Distributions', 'PY', 'c8'),
    D(10, 'WED', 'Probability', 'Expectation, Variance, and Moments', 'PY', 'c8'),
    D(11, 'THU', 'Statistics', 'Central Limit Theorem & Sampling', 'PY', 'c8'),
    D(12, 'FRI', 'Hypothesis Test', 'P-values, Type I/II Errors, Z/T-tests', 'PY', 'c9'),
    D(13, 'SAT', 'Estimation', 'MLE vs MAP', 'PY', 'c9'),
    D(14, 'SUN', 'A/B Testing', 'Statistical Significance for Product DS', 'REST', 'c9')
  ]),
  W('w3', 'Optimization & Linear Models', [
    D(15, 'MON', 'Optimization', 'Convex Optimization, KKT Conditions', 'ML', null),
    D(16, 'TUE', 'Linear Models', 'Simple Linear Regression & OLS', 'ML', null),
    D(17, 'WED', 'Linear Models', 'Multiple Linear Regression & Collinearity', 'ML', null),
    D(18, 'THU', 'Optimization', 'Gradient Descent Variants (Batch, SGD)', 'ML', null),
    D(19, 'FRI', 'Linear Models', 'Regularization: Ridge (L2) & Lasso (L1)', 'ML', null),
    D(20, 'SAT', 'Linear Models', 'Logistic Regression & Cross-Entropy', 'ML', null),
    D(21, 'SUN', 'Coding', 'Build Regression from Scratch in NumPy', 'REST', null)
  ]),
  W('w4', 'Python for High-Performance DS', [
    D(22, 'MON', 'Python', 'Generators, Decorators, Context Managers', 'PY', 'c1'),
    D(23, 'TUE', 'NumPy', 'Vectorization & Broadcasting', 'PY', 'c1'),
    D(24, 'WED', 'Pandas', 'Multi-indexing & GroupBy', 'PY', 'c6'),
    D(25, 'THU', 'EDA', 'Outliers and Distribution Shifts', 'VIZ', 'c11'),
    D(26, 'FRI', 'Visualization', 'Matplotlib, Seaborn, and Plotly', 'VIZ', 'c10'),
    D(27, 'SAT', 'Data Cleaning', 'Missingness Mechanisms & Encoding', 'PY', 'c7'),
    D(28, 'SUN', 'Project', 'Milestone Project 01: EDA & Stats Report', 'REST', null)
  ]),
  W('w5', 'Supervised Learning I', [
    D(29, 'MON', 'Classification', 'K-Nearest Neighbors & Dimensionality', 'ML', 'c14'),
    D(30, 'TUE', 'Trees', 'Decision Trees: Information Gain & Entropy', 'ML', 'c14'),
    D(31, 'WED', 'Trees', 'Tree Pruning & Handling Overfitting', 'ML', 'c14'),
    D(32, 'THU', 'SVM', 'Support Vector Machines & Kernel Trick', 'ML', 'c14'),
    D(33, 'FRI', 'Classification', 'Naive Bayes: Geometric vs. Probabilistic', 'ML', 'c14'),
    D(34, 'SAT', 'Evaluation', 'Precision, Recall, F1, ROC-AUC', 'ML', 'c14'),
    D(35, 'SUN', 'Imbalanced Data', 'SMOTE, Weighted Loss, PR-Curves', 'REST', 'c14')
  ]),
  W('w6', 'Supervised Learning II', [
    D(36, 'MON', 'Ensemble', 'Wisdom of the Crowd', 'ML', 'c16'),
    D(37, 'TUE', 'Ensemble', 'Bagging & Random Forests', 'ML', 'c16'),
    D(38, 'WED', 'Ensemble', 'Boosting Theory: AdaBoost', 'ML', 'c16'),
    D(39, 'THU', 'GBM', 'Gradient Boosting Machines & XGBoost', 'ML', 'c17'),
    D(40, 'FRI', 'GBM', 'LightGBM and CatBoost', 'ML', 'c17'),
    D(41, 'SAT', 'XAI', 'SHAP Values & Local Interpretability', 'ML', 'c17'),
    D(42, 'SUN', 'Hyperparams', 'GridSearch & Bayesian Opt', 'REST', 'c16')
  ]),
  W('w7', 'Unsupervised Learning', [
    D(43, 'MON', 'Clustering', 'K-Means, K-Medoids, Silhouette Score', 'ML', 'c15'),
    D(44, 'TUE', 'Clustering', 'Hierarchical Clustering & Dendrograms', 'ML', 'c15'),
    D(45, 'WED', 'Clustering', 'DBSCAN & Anomaly Detection', 'ML', 'c15'),
    D(46, 'THU', 'Dim Reduction', 'PCA Deep Dive', 'ML', 'c15'),
    D(47, 'FRI', 'Dim Reduction', 't-SNE and UMAP', 'ML', 'c15'),
    D(48, 'SAT', 'Association', 'Apriori and FP-Growth', 'ML', 'c15'),
    D(49, 'SUN', 'Project', 'Milestone 02: Customer Segmentation', 'REST', null)
  ]),
  W('w8', 'SQL, Big Data & Feature Eng', [
    D(50, 'MON', 'SQL', 'Joins, Subqueries, CTEs', 'SQL', 'c3'),
    D(51, 'TUE', 'SQL', 'Window Functions: RANK, LEAD/LAG', 'SQL', 'c4'),
    D(52, 'WED', 'Feature Eng', 'Polynomial Features & Binning', 'SQL', 'c4'),
    D(53, 'THU', 'Scaling', 'StandardScaler, RobustScaler', 'SQL', 'c13'),
    D(54, 'FRI', 'Big Data', 'NoSQL & Spark Basics', 'SQL', 'c5'),
    D(55, 'SAT', 'Feature Eng', 'RFE & VIF', 'SQL', 'c13'),
    D(56, 'SUN', 'Feature Eng', 'Data Leakage Prevention', 'REST', 'c13')
  ]),
  W('w9', 'Neural Network Foundations', [
    D(57, 'MON', 'Deep Learning', 'Biological Neuron vs Perceptron', 'DL', 'c18'),
    D(58, 'TUE', 'Deep Learning', 'MLP & Architecture Design', 'DL', 'c18'),
    D(59, 'WED', 'Deep Learning', 'Activation: ReLU, Softmax, Swish', 'DL', 'c18'),
    D(60, 'THU', 'Deep Learning', 'Backpropagation & Chain Rule', 'DL', 'c18'),
    D(61, 'FRI', 'Deep Learning', 'Adam, RMSProp, Momentum', 'DL', 'c18'),
    D(62, 'SAT', 'Deep Learning', 'Dropout & Batch Normalization', 'DL', 'c18'),
    D(63, 'SUN', 'PyTorch', 'PyTorch Basics & Distributed ML', 'REST', 'c18')
  ]),
  W('w10', 'Computer Vision (CV)', [
    D(64, 'MON', 'CV', 'CNN Architectures', 'DL', 'c19'),
    D(65, 'TUE', 'CV', 'Pooling, Strides, Padding', 'DL', 'c19'),
    D(66, 'WED', 'CV', 'LeNet, AlexNet, VGG', 'DL', 'c19'),
    D(67, 'THU', 'CV', 'ResNet & Inception', 'DL', 'c19'),
    D(68, 'FRI', 'CV', 'Transfer Learning (ImageNet)', 'DL', 'c19'),
    D(69, 'SAT', 'CV', 'Object Detection: YOLO & R-CNN', 'DL', 'c19'),
    D(70, 'SUN', 'CV', 'Image Augmentation', 'REST', 'c19')
  ]),
  W('w11', 'NLP & GenAI', [
    D(71, 'MON', 'NLP', 'Tokenization & Stemming', 'LLM', 'c20'),
    D(72, 'TUE', 'NLP', 'Word2Vec, GloVe, FastText', 'LLM', 'c21'),
    D(73, 'WED', 'Transformers', 'Attention is All You Need', 'LLM', 'c22'),
    D(74, 'THU', 'Transformers', 'BERT, GPT, Encoder-Decoder', 'LLM', 'c22'),
    D(75, 'FRI', 'LLMs', 'Prompt Engineering Basics', 'LLM', 'c24'),
    D(76, 'SAT', 'PEFT', 'LoRA and QLoRA', 'LLM', 'c23'),
    D(77, 'SUN', 'RAG', 'Retrieval-Augmented Generation & Vector DBs', 'REST', 'c25')
  ]),
  W('w12', 'Time Series & RecSys', [
    D(78, 'MON', 'Time Series', 'Trend, Seasonality, Noise', 'DL', null),
    D(79, 'TUE', 'Time Series', 'ARIMA & SARIMA', 'DL', null),
    D(80, 'WED', 'Time Series', 'Facebook Prophet & DeepAR', 'DL', null),
    D(81, 'THU', 'RecSys', 'Collaborative Filtering', 'DL', null),
    D(82, 'FRI', 'RecSys', 'Matrix Factorization (ALS, SVD)', 'DL', null),
    D(83, 'SAT', 'RecSys', 'Content-Based & Hybrid Systems', 'DL', null),
    D(84, 'SUN', 'Project', 'Milestone 03: Recommender System', 'REST', null)
  ]),
  W('w13', 'MLOps & Deployment', [
    D(85, 'MON', 'MLOps', 'ML Lifecycle & Experiment Tracking', 'OPS', 'c27'),
    D(86, 'TUE', 'Docker', 'Containerization for DS', 'OPS', 'c29'),
    D(87, 'WED', 'APIs', 'Building REST APIs with FastAPI', 'OPS', 'c28'),
    D(88, 'THU', 'Cloud', 'AWS SageMaker & Cloud Costs', 'OPS', 'c27'),
    D(89, 'FRI', 'CI/CD', 'GitHub Actions & Automations', 'OPS', 'c30'),
    D(90, 'SAT', 'Monitoring', 'Detecting Data & Concept Drift', 'OPS', 'c31'),
    D(91, 'SUN', 'Serving', 'Kubernetes & TorchServe', 'REST', 'c31')
  ]),
  W('w14', 'System Design & Algorithms', [
    D(92, 'MON', 'Algorithms', 'Big O & Complexity', 'INT', null),
    D(93, 'TUE', 'Algorithms', 'Arrays & Hash Maps', 'INT', null),
    D(94, 'WED', 'Algorithms', 'Trees & Queues', 'INT', null),
    D(95, 'THU', 'Algorithms', 'Sorting & Binary Search', 'INT', null),
    D(96, 'FRI', 'System Design', 'Load Balancers & Latency', 'INT', null),
    D(97, 'SAT', 'System Design', 'ML Architecture Case Studies', 'INT', null),
    D(98, 'SUN', 'Mock Interview', 'LeetCode Easy/Medium', 'REST', null)
  ]),
  W('w15', 'Capstone Project', [
    D(99, 'MON', 'Capstone', 'Project Ideation', 'HERO', null),
    D(100, 'TUE', 'Capstone', 'Data Acquisition', 'HERO', null),
    D(101, 'WED', 'Capstone', 'Pipeline & Feature Store', 'HERO', null),
    D(102, 'THU', 'Capstone', 'Training & SHAP', 'HERO', null),
    D(103, 'FRI', 'Capstone', 'Streamlit Dashboard/API', 'HERO', 'c26'),
    D(104, 'SAT', 'Capstone', 'README & Technical Blog', 'HERO', null),
    D(105, 'SUN', 'Capstone', '5-Minute Technical Demo', 'REST', null)
  ]),
  W('w16', 'The Job Hunt Basics', [
    D(106, 'MON', 'Job Hunt', 'Resume Surgery', 'INT', null),
    D(107, 'TUE', 'Job Hunt', 'LinkedIn Branding', 'INT', null),
    D(108, 'WED', 'Job Hunt', 'Behavioral Interviews (STAR)', 'INT', null),
    D(109, 'THU', 'Job Hunt', 'Technical Case Studies', 'INT', null),
    D(110, 'FRI', 'Job Hunt', 'Mock Technical Interview', 'INT', null),
    D(111, 'SAT', 'Job Hunt', 'Negotiation Skills', 'INT', null),
    D(112, 'SUN', 'Job Hunt', 'Final Math Review', 'REST', null)
  ]),
  W('w17', 'Portfolio Polishing', [
    D(113, 'MON', 'Polish', 'Audit GitHub Repos & READMEs', 'INT', null),
    D(114, 'TUE', 'Polish', 'Record Demo Videos (Loom)', 'INT', null),
    D(115, 'WED', 'Polish', 'Write Medium/Dev.to Article', 'INT', null),
    D(116, 'THU', 'Polish', 'Deploy Streamlit/FastAPI Apps', 'INT', null),
    D(117, 'FRI', 'Polish', 'Refactor Code (Pylint, Typing)', 'INT', null),
    D(118, 'SAT', 'Polish', 'Create Personal Portfolio Site', 'INT', null),
    D(119, 'SUN', 'Polish', 'Rest & Recover', 'REST', null)
  ]),
  W('w18', 'Mock Interviews & Design', [
    D(120, 'MON', 'Mocks', 'Pramp/interviewing.io Session', 'INT', null),
    D(121, 'TUE', 'Design', 'Architect Fraud Detection System', 'INT', null),
    D(122, 'WED', 'LeetCode', 'Solve 5 Medium questions', 'INT', null),
    D(123, 'THU', 'Mocks', 'Mock Interview: ML Theory', 'INT', null),
    D(124, 'FRI', 'Behavioral', 'Master 5 Core STAR Stories', 'INT', null),
    D(125, 'SAT', 'SQL', 'SQL Whiteboarding (CTEs, Window)', 'INT', null),
    D(126, 'SUN', 'Mocks', 'Review Feedback', 'REST', null)
  ]),
  W('w19', 'Applications & Branding', [
    D(127, 'MON', 'Apply', 'Update LinkedIn "Open to Work"', 'INT', null),
    D(128, 'TUE', 'Network', 'Cold Outreach to Managers', 'INT', null),
    D(129, 'WED', 'Apply', 'Apply to 15 Targeted Roles', 'INT', null),
    D(130, 'THU', 'Research', 'Study Target Company Tech Stacks', 'INT', null),
    D(131, 'FRI', 'Network', 'Follow up on Applications', 'INT', null),
    D(132, 'SAT', 'Network', 'Join AI Discords & Meetups', 'INT', null),
    D(133, 'SUN', 'Apply', 'Track Applications Spreadsheet', 'REST', null)
  ]),
  W('w20', 'The Final Gauntlet', [
    D(134, 'MON', 'Gauntlet', 'Practice 4-hour ML Pipeline Take-home', 'INT', null),
    D(135, 'TUE', 'Gauntlet', 'Cloud Review (AWS/GCP)', 'INT', null),
    D(136, 'WED', 'Gauntlet', 'Culture Fit Prep', 'INT', null),
    D(137, 'THU', 'Gauntlet', 'Salary Negotiation Prep (levels.fyi)', 'INT', null),
    D(138, 'FRI', 'Gauntlet', 'Fix Bugs in Live Deployments', 'INT', null),
    D(139, 'SAT', 'Gauntlet', 'Review Mathematics Theory', 'INT', null),
    D(140, 'SUN', 'Graduation', 'You are ready.', 'REST', null)
  ])
];

export const DAILY_THEORY = {
  1:{math:'Big-O notation: O(1) vs O(n) vs O(n²).',resource:'https://www.bigocheatsheet.com/'},
  29:{math:'Probability: P(A|B) = P(B|A)·P(A)/P(B).',resource:'https://seeing-theory.brown.edu/'},
  57:{math:'Linear regression: y = Xβ + ε. OLS minimizes Σ(yᵢ - ŷᵢ)²',resource:''},
  85:{math:'Backpropagation: chain rule ∂L/∂w = ∂L/∂a · ∂a/∂z · ∂z/∂w.',resource:'https://karpathy.github.io/neuralnets/'},
  113:{math:'Attention: Attention(Q,K,V) = softmax(QKᵀ/√d_k)V.',resource:'https://jalammar.github.io/illustrated-transformer/'}
};

export const HOW_TO_USE = [
  { icon:'📅', title:'Daily Routine (2-3 hours/day)', desc:'Study the concept (1-1.5 hrs), complete any linked DataCamp course, then practice. Mark the day complete when done.' },
  { icon:'✅', title:'Marking Progress', desc:'Click the ✓ circle next to each day in the Roadmap tab. This earns you 20 XP and updates your streak.' },
  { icon:'📚', title:'Course Links', desc:'Days with a 📘 badge link directly to a specific DataCamp course. All 31 courses map exactly to your daily progress.' },
  { icon:'🏆', title:'Certifications', desc:'Certs auto-unlock when you complete enough days. Go to the Certs tab to take the exam once unlocked.' },
  { icon:'📁', title:'Projects', desc:'Build your portfolio as you progress. The final month (Month 5) is dedicated to polishing these projects.' },
  { icon:'🎯', title:'The Final Mile (Month 5)', desc:'Month 5 is all about applying, mock interviews, and system design. You transition from learning to earning.' }
];

export const PROJECTS = [
  { id:'p1', name:'End-to-End EDA Report', month:1, tag:'VIZ', color:'#05c3de',
    desc:'Interactive EDA dashboard analyzing a real-world dataset with statistical tests.',
    tech:['Python','Pandas','Seaborn','Matplotlib'],
    dataset:{ name:'World Happiness Report', url:'https://www.kaggle.com/datasets/unsdsn/world-happiness' },
    outcomes:['Perform hypothesis tests','Create correlation heatmaps','Export notebooks'],
    setup:['pip install pandas seaborn scipy jupyter'],
    structure:['README.md','notebooks/eda_happiness.ipynb'],
    resources:[],
    showcase:'Export 5+ plots. Push notebook.'
  },
  { id:'p2', name:'Customer Segmentation', month:2, tag:'ML', color:'#9b6dff',
    desc:'K-Means clustering and PCA for customer behavioral segmentation.',
    tech:['Python','scikit-learn','PCA','K-Means'],
    dataset:{ name:'Mall Customers', url:'' },
    outcomes:['Build pipelines','Scale data','Find optimal K via Elbow method'],
    setup:['pip install scikit-learn'],
    structure:['src/train.py'],
    resources:[],
    showcase:'Showcase PCA scatter plot in 2D/3D.'
  },
  { id:'p3', name:'Time Series Recommender', month:3, tag:'DL', color:'#f4b942',
    desc:'Deep learning recommender system or time series predictor.',
    tech:['PyTorch','Transformers'],
    dataset:{ name:'MovieLens', url:'' },
    outcomes:['Build embeddings','Train PyTorch Model'],
    setup:['pip install torch'],
    structure:['src/model.py'],
    resources:[],
    showcase:'Show architecture diagram.'
  },
  { id:'p4', name:'MLOps Capstone', month:4, tag:'OPS', color:'#22d87a',
    desc:'End-to-end MLOps pipeline with FastAPI, MLflow, and Streamlit.',
    tech:['MLflow','Docker','FastAPI','Streamlit'],
    dataset:{ name:'Custom Dataset', url:'' },
    outcomes:['Dockerize app','Log with MLflow','Serve API'],
    setup:['docker-compose up'],
    structure:['Dockerfile','docker-compose.yml'],
    resources:[],
    showcase:'Record live demo of the Streamlit app connecting to FastAPI.'
  }
];

export const TAG_COLORS = {
  PY:'#05c3de', SQL:'#f4b942', ML:'#9b6dff', DL:'#ff5577',
  LLM:'#f4b942', OPS:'#22d87a', VIZ:'#05c3de', CERT:'#ff5577',
  INT:'#9b6dff', REST:'#52647d', HERO:'#05c3de',
};

export const SETUP_GUIDE = {
  title:'Local Environment Setup (Day 5)',
  steps:[
    { title:'Install Python 3.10+', cmd:'brew install python@3.11  # macOS\nsudo apt install python3.11  # Ubuntu', note:'Verify: python3 --version' },
    { title:'Install VS Code', cmd:'# Download from https://code.visualstudio.com/\n# Install Python extension by Microsoft', note:'Add Jupyter, GitLens, and Pylint extensions' },
    { title:'Create Project Folder', cmd:'mkdir -p ~/Documents/AIML/projects\ncd ~/Documents/AIML/projects', note:'This is your workspace for all 7 projects' },
    { title:'Set Up Virtual Environment', cmd:'python3 -m venv venv\nsource venv/bin/activate  # macOS/Linux\n# venv\\Scripts\\activate  # Windows', note:'Always activate venv before installing packages' },
    { title:'Install Core Libraries', cmd:'pip install numpy pandas matplotlib seaborn scikit-learn jupyter', note:'These cover Months 1-3' },
    { title:'Set Up Git', cmd:'git config --global user.name "Samuel Hasan"\ngit config --global user.email "sameulhasanbd@gmail.com"\ngit init', note:'Create .gitignore with venv/, __pycache__, .env' },
    { title:'Create GitHub Repos', cmd:'# Create repos on github.com:\n# 1. titanic-ml-pipeline\n# 2. eda-dashboard\n# 3. lstm-text-classifier\n# 4. sentiment-api\n# 5. fine-tuned-llm\n# 6. rag-qa-app (HERO)\n# 7. mlops-pipeline', note:'Add README.md with project description to each' },
  ],
};


export const PRACTICE_PROBLEMS = {
  PY:[
    { q:'Write a function that returns the nth Fibonacci number using memoization.', difficulty:'Easy', topic:'Recursion' },
    { q:'Build a class `DataPipeline` with methods: load_csv(), clean(), transform(), save(). Chain them.', difficulty:'Medium', topic:'OOP' },
    { q:'Use list comprehension to flatten a nested list of arbitrary depth.', difficulty:'Medium', topic:'Data Structures' },
    { q:'Write a decorator that logs function execution time.', difficulty:'Easy', topic:'Decorators' },
    { q:'Implement a context manager for database connections using __enter__ and __exit__.', difficulty:'Hard', topic:'Context Managers' },
  ],
  SQL:[
    { q:'Find the top 3 departments by average salary using a subquery.', difficulty:'Easy', topic:'Aggregation' },
    { q:'Write a query using WINDOW functions to rank employees within each department.', difficulty:'Medium', topic:'Window Functions' },
    { q:'Find customers who made purchases in every month of 2024 (no gaps).', difficulty:'Hard', topic:'Set Theory' },
    { q:'Write a self-join to find all employee-manager pairs.', difficulty:'Medium', topic:'Joins' },
  ],
  ML:[
    { q:'Explain the bias-variance tradeoff. When is a model underfitting vs overfitting?', difficulty:'Concept', topic:'Theory' },
    { q:'Build a pipeline: StandardScaler → PCA(n=5) → LogisticRegression. Use GridSearchCV.', difficulty:'Medium', topic:'Pipelines' },
    { q:'Implement K-Fold cross-validation from scratch (no sklearn).', difficulty:'Hard', topic:'Evaluation' },
    { q:'Compare Random Forest vs XGBoost on the same dataset. Plot feature importances.', difficulty:'Medium', topic:'Models' },
  ],
  DL:[
    { q:'Implement a simple neural network with 2 hidden layers in PyTorch. Train on MNIST.', difficulty:'Medium', topic:'Neural Networks' },
    { q:'Explain the vanishing gradient problem. How do LSTMs solve it?', difficulty:'Concept', topic:'Theory' },
    { q:'Build a text classifier: tokenize → embed → LSTM → Linear → softmax.', difficulty:'Hard', topic:'NLP' },
  ],
  LLM:[
    { q:'Explain RAG vs Fine-tuning: when would you use each? Give 3 examples.', difficulty:'Concept', topic:'Architecture' },
    { q:'Build a simple RAG chain: load PDF → chunk → embed → retrieve → answer.', difficulty:'Medium', topic:'RAG' },
    { q:'Explain the Transformer attention mechanism. What are Q, K, V?', difficulty:'Concept', topic:'Transformers' },
    { q:'Design a prompt template with system message, few-shot examples, and output format.', difficulty:'Easy', topic:'Prompt Engineering' },
  ],
};


export const SHOWCASE_GUIDE = [
  { title:'Professional README Template', steps:['Add project title + one-line description','Include architecture diagram (use draw.io or Mermaid)','List tech stack with badges (shields.io)','Add installation & usage instructions','Include screenshots/GIFs of the app','Add evaluation metrics table','Link to live demo if deployed'] },
  { title:'GitHub Profile Optimization', steps:['Pin your top 5 projects','Add a profile README with skills chart','Use GitHub Actions for green commit history','Add topics/tags to each repo','Include a contribution graph'] },
  { title:'LinkedIn Strategy', steps:['Post weekly about your learning journey','Share project milestones with screenshots','Engage with AI/ML engineering posts','Connect with IBM/AI engineers (5/week)','Add DataCamp certifications as they are earned'] },
  { title:'Video Demo Best Practices', steps:['Keep demos under 3 minutes','Show the problem → solution → result flow','Use screen recording (OBS or Loom)','Add voiceover explaining decisions','Upload to YouTube, link in README'] },
  { title:'Blog Writing (Medium/Dev.to)', steps:['Write 1 article per project minimum','Structure: Problem → Approach → Code → Results','Include code snippets and diagrams','Cross-post to Hashnode for SEO','Add to your resume under "Publications"'] },
];


export const INTERVIEW_RESOURCES = {
  leetcode:[
    { name:'Two Sum', url:'https://leetcode.com/problems/two-sum/', diff:'Easy', tag:'Array/HashMap' },
    { name:'Valid Parentheses', url:'https://leetcode.com/problems/valid-parentheses/', diff:'Easy', tag:'Stack' },
    { name:'Merge Two Sorted Lists', url:'https://leetcode.com/problems/merge-two-sorted-lists/', diff:'Easy', tag:'Linked List' },
    { name:'Best Time to Buy/Sell Stock', url:'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', diff:'Easy', tag:'Array' },
    { name:'Kth Largest Element', url:'https://leetcode.com/problems/kth-largest-element-in-an-array/', diff:'Medium', tag:'Heap' },
    { name:'Top K Frequent Elements', url:'https://leetcode.com/problems/top-k-frequent-elements/', diff:'Medium', tag:'Heap/Bucket' },
    { name:'Sliding Window Maximum', url:'https://leetcode.com/problems/sliding-window-maximum/', diff:'Hard', tag:'Deque' },
    { name:'Product of Array Except Self', url:'https://leetcode.com/problems/product-of-array-except-self/', diff:'Medium', tag:'Array' },
    { name:'Group Anagrams', url:'https://leetcode.com/problems/group-anagrams/', diff:'Medium', tag:'HashMap' },
    { name:'LRU Cache', url:'https://leetcode.com/problems/lru-cache/', diff:'Medium', tag:'Design' },
  ],
  sql:[
    { name:'Department Highest Salary', url:'https://leetcode.com/problems/department-highest-salary/', diff:'Medium' },
    { name:'Rank Scores', url:'https://leetcode.com/problems/rank-scores/', diff:'Medium' },
    { name:'Consecutive Numbers', url:'https://leetcode.com/problems/consecutive-numbers/', diff:'Medium' },
    { name:'Employees Earning More Than Managers', url:'https://leetcode.com/problems/employees-earning-more-than-their-managers/', diff:'Easy' },
  ],
  reading:[
    { name:'Attention Is All You Need (paper)', url:'https://arxiv.org/abs/1706.03762', type:'Paper' },
    { name:'Illustrated Transformer', url:'https://jalammar.github.io/illustrated-transformer/', type:'Visual Guide' },
    { name:'Karpathy: Let\'s Build GPT', url:'https://youtu.be/kCc8FmEb1nY', type:'Video (2hr)' },
    { name:'3Blue1Brown: Neural Networks', url:'https://www.3blue1brown.com/topics/neural-networks', type:'Video Series' },
    { name:'3Blue1Brown: Linear Algebra', url:'https://www.3blue1brown.com/topics/linear-algebra', type:'Video Series' },
    { name:'Stanford CS229 Notes', url:'https://cs229.stanford.edu/main_notes.pdf', type:'Course Notes' },
    { name:'fast.ai Practical DL', url:'https://course.fast.ai/', type:'Free Course' },
    { name:'HuggingFace NLP Course', url:'https://huggingface.co/learn/nlp-course', type:'Free Course' },
    { name:'Full Stack Deep Learning', url:'https://fullstackdeeplearning.com/', type:'Free Course' },
    { name:'MLOps Zoomcamp', url:'https://github.com/DataTalksClub/mlops-zoomcamp', type:'Free Course' },
  ],
  ibm:[
    { name:'IBM watsonx.ai Free Trial', url:'https://www.ibm.com/products/watsonx-ai', type:'Hands-on' },
    { name:'IBM FM-Eval (GitHub)', url:'https://github.com/IBM/fm-eval', type:'Open Source' },
    { name:'IBM AI Ethics', url:'https://www.ibm.com/artificial-intelligence/ethics', type:'Culture Prep' },
    { name:'IBM Careers Portal', url:'https://www.ibm.com/careers', type:'Apply Here' },
    { name:'IBM Granite Models', url:'https://www.ibm.com/granite', type:'Study' },
    { name:'IBM Research Blog', url:'https://research.ibm.com/blog', type:'Stay Updated' },
  ],
  mock:[
    { name:'Pramp (Free)', url:'https://www.pramp.com/', type:'Live Mock' },
    { name:'interviewing.io', url:'https://interviewing.io/', type:'Anonymous Mock' },
    { name:'Exponent ML Interview', url:'https://www.tryexponent.com/practice/ml', type:'ML-Specific' },
    { name:'DataCamp Interview Qs', url:'https://www.datacamp.com/blog/top-machine-learning-interview-questions', type:'Question Bank' },
  ],
};

