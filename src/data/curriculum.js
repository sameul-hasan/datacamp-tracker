// ── 6-Month AI/ML Curriculum Data ──
export const COURSES = [
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
  { id:'c31', name:'Monitoring ML', url:'https://www.datacamp.com/courses/monitoring-machine-learning-in-python', month:6 },
];

export const CERTIFICATIONS = [
  { id:'cert1', name:'Python Data Associate', week:4, month:1, reqDays:28, color:'#05c3de',
    desc:'Tests Python, OOP, Data Manipulation, and SQL foundations.' },
  { id:'cert2', name:'Data Scientist Associate', week:12, month:3, reqDays:84, color:'#9b6dff',
    desc:'Tests data extraction, visualization, stats, and predictive modeling.' },
  { id:'cert3', name:'AI Engineer Associate', week:20, month:5, reqDays:140, color:'#f4b942',
    desc:'Tests AI app building (OpenAI APIs, embeddings, LangChain). ⭐ MOST IMPORTANT' },
  { id:'cert4', name:'MLOps Fundamentals Badge', week:24, month:6, reqDays:168, color:'#22d87a',
    desc:'Tests MLflow, CI/CD, Docker, and pipeline automation.' },
];

export const PROJECTS = [
  { id:'p1', name:'Titanic ML Pipeline', month:3, tag:'ML', color:'#9b6dff',
    desc:'End-to-end ML pipeline: data cleaning → EDA → feature engineering → model selection → evaluation.',
    tech:['Python','Pandas','scikit-learn','Seaborn','Matplotlib'],
    dataset:{ name:'Titanic Dataset', url:'https://www.kaggle.com/c/titanic/data' },
    outcomes:['Clean & preprocess real-world data','Build sklearn Pipelines with GridSearchCV','Evaluate with F1, AUC-ROC, confusion matrix','Version control with Git'],
    setup:['pip install pandas scikit-learn seaborn matplotlib','Download titanic.csv from Kaggle','Create project folder: mkdir titanic-ml && cd titanic-ml','python -m venv venv && source venv/bin/activate'],
    structure:['README.md','notebooks/eda.ipynb','src/preprocess.py','src/train.py','src/evaluate.py','requirements.txt'],
    resources:[
      { name:'Kaggle Titanic Guide', url:'https://www.kaggle.com/code/startupsci/titanic-data-science-solutions' },
      { name:'sklearn Pipeline Docs', url:'https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.Pipeline.html' },
    ],
    showcase:'Export notebook to HTML. Add ROC curve and confusion matrix images to README. Push to GitHub with clear commit history.',
  },
  { id:'p0a', name:'EDA & Visualization Dashboard', month:2, tag:'VIZ', color:'#05c3de',
    desc:'Interactive EDA dashboard analyzing a real-world dataset with statistical tests and publication-quality plots.',
    tech:['Python','Pandas','Seaborn','Matplotlib','Jupyter'],
    dataset:{ name:'World Happiness Report', url:'https://www.kaggle.com/datasets/unsdsn/world-happiness' },
    outcomes:['Master Seaborn advanced plotting','Perform hypothesis tests on real data','Create correlation heatmaps & pairplots','Export notebooks as shareable HTML reports'],
    setup:['pip install pandas seaborn matplotlib scipy jupyter','Download world-happiness.csv','jupyter notebook'],
    structure:['README.md','notebooks/eda_happiness.ipynb','outputs/plots/','requirements.txt'],
    resources:[
      { name:'Seaborn Gallery', url:'https://seaborn.pydata.org/examples/index.html' },
      { name:'Scipy Stats Docs', url:'https://docs.scipy.org/doc/scipy/reference/stats.html' },
    ],
    showcase:'Export 5+ publication-quality plots as PNG. Write a Medium article walking through your analysis. Push notebook + images to GitHub.',
  },
  { id:'p2', name:'PyTorch LSTM Text Classifier', month:4, tag:'DL', color:'#ff5577',
    desc:'Sentiment classifier using LSTM networks, with MLflow experiment tracking and TF-IDF baseline comparison.',
    tech:['Python','PyTorch','MLflow','NLTK','torchtext'],
    dataset:{ name:'IMDB Reviews (50K)', url:'https://ai.stanford.edu/~amaas/data/sentiment/' },
    outcomes:['Build custom PyTorch Dataset & DataLoader','Implement LSTM with embedding layer','Track experiments with MLflow','Compare DL vs TF-IDF baseline (F1, accuracy)'],
    setup:['pip install torch torchtext mlflow nltk scikit-learn','python -c "import nltk; nltk.download(\'punkt\')"','mlflow ui  # Start MLflow at localhost:5000'],
    structure:['README.md','src/dataset.py','src/model.py','src/train.py','src/baseline_tfidf.py','mlflow_runs/','requirements.txt'],
    resources:[
      { name:'PyTorch LSTM Tutorial', url:'https://pytorch.org/tutorials/beginner/nlp/sequence_models_tutorial.html' },
      { name:'MLflow Quickstart', url:'https://mlflow.org/docs/latest/quickstart.html' },
    ],
    showcase:'Add MLflow comparison screenshot to README showing LSTM vs baseline. Record 2-min demo video. Include training loss curve.',
  },
  { id:'p0b', name:'Sentiment Analysis REST API', month:4, tag:'DL', color:'#ff5577',
    desc:'Deploy your LSTM model as a production REST API with FastAPI, input validation, and Swagger docs.',
    tech:['Python','FastAPI','PyTorch','Pydantic','Uvicorn'],
    dataset:{ name:'Uses trained LSTM model from P2', url:'' },
    outcomes:['Serve PyTorch model via REST API','Add input validation with Pydantic','Auto-generate Swagger/OpenAPI docs','Handle errors and edge cases gracefully'],
    setup:['pip install fastapi uvicorn pydantic torch','Create app/ folder with main.py','uvicorn app.main:app --reload'],
    structure:['README.md','app/main.py','app/model_loader.py','app/schemas.py','models/lstm_best.pt','requirements.txt'],
    resources:[
      { name:'FastAPI Tutorial', url:'https://fastapi.tiangolo.com/tutorial/' },
      { name:'Serving PyTorch Models', url:'https://pytorch.org/tutorials/intermediate/flask_rest_api_tutorial.html' },
    ],
    showcase:'Include curl examples and Swagger screenshot in README. Add /health endpoint. Show request/response JSON examples.',
  },
  { id:'p3', name:'Domain Fine-Tuned LLM', month:5, tag:'LLM', color:'#f4b942',
    desc:'Fine-tune DistilBERT with LoRA/PEFT on domain-specific data. Publish HuggingFace model card with eval metrics.',
    tech:['Python','HuggingFace Transformers','PEFT/LoRA','Datasets','Evaluate'],
    dataset:{ name:'Financial PhraseBank', url:'https://huggingface.co/datasets/financial_phrasebank' },
    outcomes:['Fine-tune with HuggingFace Trainer API','Apply LoRA for efficient adaptation','Write professional HuggingFace Model Card','Evaluate with BLEU, ROUGE-L, BERTScore'],
    setup:['pip install transformers datasets evaluate peft accelerate','huggingface-cli login','python -c "from datasets import load_dataset; load_dataset(\'financial_phrasebank\', \'sentences_allagree\')"'],
    structure:['README.md','src/fine_tune.py','src/evaluate_model.py','model_card.md','configs/training_args.json','requirements.txt'],
    resources:[
      { name:'HuggingFace PEFT Guide', url:'https://huggingface.co/docs/peft/index' },
      { name:'Model Card Template', url:'https://huggingface.co/docs/hub/model-cards' },
      { name:'LoRA Paper', url:'https://arxiv.org/abs/2106.09685' },
    ],
    showcase:'Push model to HuggingFace Hub. Include eval metrics table in README. Write blog post comparing LoRA vs full fine-tuning.',
  },
  { id:'p5', name:'Document Q&A RAG App', month:5, tag:'HERO', color:'#05c3de', hero:true,
    desc:'Full-stack RAG: PDF upload → chunking → embeddings → ChromaDB → LangChain retrieval → streaming LLM → citation → Streamlit UI.',
    tech:['Python','LangChain','ChromaDB','OpenAI API','Streamlit','FastAPI','PyPDF2'],
    dataset:{ name:'Your own PDF documents', url:'' },
    outcomes:['Build production RAG pipeline end-to-end','Implement semantic chunking & retrieval','Add source citations to LLM responses','Create polished Streamlit UI with streaming','Design FastAPI backend with proper error handling'],
    setup:['pip install langchain chromadb openai streamlit fastapi pypdf2 tiktoken','export OPENAI_API_KEY=your_key_here','mkdir -p data/pdfs  # Add your PDF files here','streamlit run app.py'],
    structure:['README.md','app.py (Streamlit frontend)','api/main.py (FastAPI backend)','api/rag_chain.py','api/embeddings.py','api/chunker.py','data/pdfs/','chroma_db/','requirements.txt','Dockerfile','.env.example'],
    resources:[
      { name:'LangChain RAG Tutorial', url:'https://python.langchain.com/docs/tutorials/rag/' },
      { name:'ChromaDB Quickstart', url:'https://docs.trychroma.com/getting-started' },
      { name:'Streamlit Docs', url:'https://docs.streamlit.io/' },
    ],
    showcase:'Record 3-min video demo: upload PDF → ask question → show streamed answer with citations. Deploy to Streamlit Cloud or Railway. Add architecture diagram to README.',
  },
  { id:'p4', name:'Full MLOps Pipeline', month:6, tag:'OPS', color:'#22d87a',
    desc:'Production ML system: MLflow tracking → model registry → Docker → FastAPI serving → CI/CD → drift monitoring → SHAP explainability.',
    tech:['Python','MLflow','Docker','FastAPI','GitHub Actions','Evidently AI','SHAP'],
    dataset:{ name:'California Housing', url:'https://scikit-learn.org/stable/datasets/real_world.html#california-housing-dataset' },
    outcomes:['Log experiments & register models in MLflow','Containerize with Docker & docker-compose','Automate testing with GitHub Actions CI/CD','Monitor data drift with Evidently AI','Add SHAP explainability for trust'],
    setup:['pip install mlflow fastapi docker evidently shap scikit-learn','docker --version  # Ensure Docker is installed','mlflow server --host 0.0.0.0 --port 5000','docker-compose up --build'],
    structure:['README.md','src/train.py','src/predict.py','api/main.py','tests/test_api.py','monitoring/drift_report.py','Dockerfile','docker-compose.yml','.github/workflows/ci.yml','requirements.txt'],
    resources:[
      { name:'MLflow Model Registry', url:'https://mlflow.org/docs/latest/model-registry.html' },
      { name:'Evidently AI Docs', url:'https://docs.evidentlyai.com/' },
      { name:'SHAP Documentation', url:'https://shap.readthedocs.io/' },
      { name:'Docker for ML Guide', url:'https://docs.docker.com/guides/use-case/ml-model/' },
    ],
    showcase:'Create architecture diagram (draw.io). Record CI/CD pipeline running. Add Evidently drift report screenshot. Show SHAP force plot in README.',
  },
];

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

const W = (id,title,days) => ({ id, title, days });
const D = (day,dow,topic,task,tag,courseId) => ({ day,dow,topic,task,tag,courseId });

export const WEEKS = [
  W('w1','Python Software Engineering',[
    D(1,'MON','Data Structures','Master lists, dicts, set comprehensions','PY','c1'),
    D(2,'TUE','Vectorization','Replace for loops with NumPy broadcasting','PY','c1'),
    D(3,'WED','OOP Basics','Define classes, __init__, instantiation','PY','c2'),
    D(4,'THU','Inheritance','Build child classes for error handling','PY','c2'),
    D(5,'FRI','Local Env Setup','Install VS Code, Python 3.10+, venv','OPS',null),
    D(6,'SAT','Practice Day','Write OOP script to parse log files','PY',null),
    D(7,'SUN','Buffer Day','Rest and review OOP concepts','REST',null),
  ]),
  W('w2','SQL Data Engineering',[
    D(8,'MON','SQL Queries','SELECT, WHERE, HAVING, aggregates','SQL','c3'),
    D(9,'TUE','Relational Joins','INNER JOIN, LEFT JOIN, schemas','SQL','c4'),
    D(10,'WED','Set Theory','UNION, INTERSECT, subqueries','SQL','c4'),
    D(11,'THU','Python + SQL','SQLAlchemy to connect to DB','SQL','c5'),
    D(12,'FRI','Data Extraction','ETL script: SQL tables → Pandas','SQL','c5'),
    D(13,'SAT','DB Setup','Create SQLite DB, load JSON data','PY',null),
    D(14,'SUN','Buffer Day','Buffer Day','REST',null),
  ]),
  W('w3','Pandas & Data Cleaning',[
    D(15,'MON','DataFrames','Subsetting, filtering, dropping cols','PY','c6'),
    D(16,'TUE','Grouping Data','groupby, aggregations, sorting','PY','c6'),
    D(17,'WED','Missing Data','Impute nulls, drop dupes, validate','PY','c7'),
    D(18,'THU','String Parsing','Regex in pandas (str.extract)','PY','c7'),
    D(19,'FRI','Pipeline Design','Combine SQL + Pandas into OOP class','PY',null),
    D(20,'SAT','Project Build','Clean dataset, save to new tables','PY',null),
    D(21,'SUN','GitHub Push','Push pipeline to GitHub','OPS',null),
  ]),
  W('w4','Data Associate Cert Prep',[
    D(22,'MON','SQL Drill','Review complex joins for exam','SQL',null),
    D(23,'TUE','Pandas Drill','Review missing values and merging','PY',null),
    D(24,'WED','Mock Exam','DC readiness quizzes, target 80%+','CERT',null),
    D(25,'THU','🏆 Timed Exam','Take Python/SQL timed component','CERT',null),
    D(26,'FRI','🏆 Practical','Complete hands-on data project exam','CERT',null),
    D(27,'SAT','LinkedIn Post','Post your first credential!','OPS',null),
    D(28,'SUN','Buffer Day','End of Month 1. Foundations solid.','REST',null),
  ]),
  W('w5','Statistical Foundations',[
    D(29,'MON','Probability Axioms','Conditional Probability & Bayes Theorem','PY','c8'),
    D(30,'TUE','Random Variables','Discrete vs Continuous Distributions','PY','c8'),
    D(31,'WED','Moments','Expectation, Variance, and Moments','PY','c8'),
    D(32,'THU','Hypothesis Test','P-values, Type I/II Errors, T-tests','PY','c9'),
    D(33,'FRI','MLE vs MAP','Maximum Likelihood vs A Posteriori','PY','c9'),
    D(34,'SAT','Practice','Run statistical tests on real data','PY',null),
    D(35,'SUN','Buffer Day','Buffer Day','REST',null),
  ]),
  W('w6','Data Visualization & EDA',[
    D(36,'MON','Seaborn Basics','Scatter, line, bar plots','VIZ','c10'),
    D(37,'TUE','Categorical Viz','Box plots, violin, count plots','VIZ','c10'),
    D(38,'WED','Advanced Viz','Heatmaps and pairplots','VIZ','c10'),
    D(39,'THU','EDA Logic','Find outliers and patterns','VIZ','c11'),
    D(40,'FRI','Feature Eng','Create columns from visual insights','VIZ','c11'),
    D(41,'SAT','EDA Project','Add Seaborn visualizations to project','PY',null),
    D(42,'SUN','Push Docs','Export notebook to HTML, push to GH','OPS',null),
  ]),
  W('w7','Math for ML',[
    D(43,'MON','Vector Spaces','Subspaces, Basis, and the Geometry of Data','ML','c12'),
    D(44,'TUE','Eigendecomposition','Eigenvalues and Eigenvectors','ML','c12'),
    D(45,'WED','SVD & PCA','Singular Value Decomposition foundations','ML',null),
    D(46,'THU','Multivariable Calculus','Partial Derivatives and Gradient Vectors','SQL',null),
    D(47,'FRI','Prep ML Env','Install scikit-learn, lock deps','OPS',null),
    D(48,'SAT','Assessments','Take Python & Stats skill quizzes','ML',null),
    D(49,'SUN','Buffer Day','Rest before ML starts','REST',null),
  ]),
  W('w8','Data Preprocessing for ML',[
    D(50,'MON','Scaling','StandardScaler, MinMaxScaler','ML','c13'),
    D(51,'TUE','Encoding','LabelEncoder vs OneHotEncoder','ML','c13'),
    D(52,'WED','Imputing','SimpleImputer vs KNNImputer','ML','c13'),
    D(53,'THU','Feature Selection','Variance thresholds','ML','c13'),
    D(54,'FRI','Practice Pipeline','Build preprocessing for Titanic','ML',null),
    D(55,'SAT','Push Setup','Commit preprocessing scripts','OPS',null),
    D(56,'SUN','Buffer Day','End of Month 2','REST',null),
  ]),
  W('w9','Supervised Learning',[
    D(57,'MON','Convex Optimization','Global vs Local Minima, KKT Conditions','ML','c14'),
    D(58,'TUE','Gradient Descent','Batch, Stochastic (SGD), Mini-batch','ML','c14'),
    D(59,'WED','Regularization','Ridge (L2), Lasso (L1), Elastic Net','ML','c14'),
    D(60,'THU','Logistic Regression','Sigmoid Function & Cross-Entropy Loss','ML','c14'),
    D(61,'FRI','Unsupervised','K-Means clustering, PCA','ML','c15'),
    D(62,'SAT','Project Build','Baseline Logistic Regression','ML',null),
    D(63,'SUN','Buffer Day','Review metrics formulas','REST',null),
  ]),
  W('w10','Tree Models & XGBoost',[
    D(64,'MON','Decision Trees','Build CART, visualize nodes','ML','c16'),
    D(65,'TUE','Random Forests','Bagging, OOB error','ML','c16'),
    D(66,'WED','Boosting (XGB)','Gradient boosting logic','ML','c17'),
    D(67,'THU','Tuning','GridSearchCV, RandomizedSearchCV','ML','c17'),
    D(68,'FRI','Kaggle Workflows','Model stacking, feature eng','ML',null),
    D(69,'SAT','Project Upgrade','Upgrade Titanic to XGBoost','ML',null),
    D(70,'SUN','GitHub Push','Push ML code to GitHub','OPS',null),
  ]),
  W('w11','Data Scientist Cert Prep',[
    D(71,'MON','DS101: EDA Prep','Review Seaborn + anomalies','CERT',null),
    D(72,'TUE','DS101: Stats Prep','Review hypothesis tests','CERT',null),
    D(73,'WED','DS102: Data Quality','Cleaning & validation','CERT',null),
    D(74,'THU','DS102: Modeling','Pipeline & GridSearchCV','CERT',null),
    D(75,'FRI','Readiness Quizzes','DC readiness for DS Assoc','CERT',null),
    D(76,'SAT','Focus Study','Target weak areas','CERT',null),
    D(77,'SUN','Buffer Day','Get ready for cert week','REST',null),
  ]),
  W('w12','Data Scientist Cert Week',[
    D(78,'MON','🏆 DS101 Exam','2-hour EDA/Stats timed exam','CERT',null),
    D(79,'TUE','🏆 DS102 Exam','2-hour Data/Modeling exam','CERT',null),
    D(80,'WED','🏆 Practical Prep','Read guidelines, set up env','CERT',null),
    D(81,'THU','🏆 Practical Exam','Solve real business problem','CERT',null),
    D(82,'FRI','LinkedIn Update','Add Cert #2','OPS',null),
    D(83,'SAT','PyTorch Preview','Skim PyTorch tensor docs','DL',null),
    D(84,'SUN','Buffer Day','End of Month 3. Two certs down!','REST',null),
  ]),
  W('w13','PyTorch Fundamentals',[
    D(85,'MON','Tensors & Autograd','Backprop mechanics','DL','c18'),
    D(86,'TUE','Neural Networks','nn.Sequential for tabular','DL','c18'),
    D(87,'WED','Training Loops','Custom loops with Adam','DL','c18'),
    D(88,'THU','CNNs Basics','Convolutions, pooling, filters','DL','c18'),
    D(89,'FRI','Advanced CNNs','Image classification nets','DL','c19'),
    D(90,'SAT','Transfer Learning','Fine-tune ResNet','DL','c19'),
    D(91,'SUN','CV Project Start','Start building CV model','DL',null),
  ]),
  W('w14','NLP Fundamentals',[
    D(92,'MON','Regex & NLP','Advanced regex, tokenization','DL','c20'),
    D(93,'TUE','TF-IDF','Bag of Words, TF-IDF pipeline','DL','c21'),
    D(94,'WED','Word Embeddings','Word2Vec, dense vectors','DL','c21'),
    D(95,'THU','NER','Extract entities with spaCy','DL','c20'),
    D(96,'FRI','NLP Pipeline','Text → TF-IDF → Classifier','DL',null),
    D(97,'SAT','Transformers Prep','Read Attention Is All You Need','DL',null),
    D(98,'SUN','CV Project Push','Push CV project to GitHub','DL',null),
  ]),
  W('w15','HuggingFace & Fine-Tuning',[
    D(99,'MON','Hugging Face','Load pipeline, tokenizer, BERT','LLM','c22'),
    D(100,'TUE','Fine-tuning Logic','Trainer API basics','LLM','c23'),
    D(101,'WED','Domain Adaptation','Fine-tune DistilBERT','LLM','c23'),
    D(102,'THU','Evaluation','Perplexity, accuracy on test','LLM','c23'),
    D(103,'FRI','LLM Project Push','Push fine-tuned model to GH','LLM',null),
    D(104,'SAT','Documentation','Write HuggingFace Model Cards','LLM',null),
    D(105,'SUN','Buffer Day','Rest before GenAI week','REST',null),
  ]),
  W('w16','Generative AI APIs',[
    D(106,'MON','LLM Concepts','Large Language Model concepts','LLM','c24'),
    D(107,'TUE','OpenAI API','Auth & basic completions','LLM','c24'),
    D(108,'WED','Prompt Eng','Zero-shot, few-shot, system','LLM','c24'),
    D(109,'THU','Embeddings API','Generate embeddings via API','LLM','c24'),
    D(110,'FRI','Vector Search','Cosine similarity on outputs','LLM','c24'),
    D(111,'SAT','Vector DBs','Set up local ChromaDB','LLM',null),
    D(112,'SUN','Buffer Day','End of Month 4','REST',null),
  ]),
  W('w17','LangChain & RAG',[
    D(113,'MON','Chains','LLMChains & PromptTemplates','LLM','c25'),
    D(114,'TUE','Memory','Conversational memory buffers','LLM','c25'),
    D(115,'WED','Doc Loaders','Chunk PDFs for indexing','LLM','c25'),
    D(116,'THU','RAG Architecture','Retriever + QA chain','LLM','c25'),
    D(117,'FRI','Agents & Tools','Give agent search & math tools','LLM','c25'),
    D(118,'SAT','Hero Backend','FastAPI backend for hero app','LLM',null),
    D(119,'SUN','Buffer Day','Buffer Day','REST',null),
  ]),
  W('w18','Hero Project Frontend',[
    D(120,'MON','Streamlit Intro','Rapid prototyping UI','OPS','c26'),
    D(121,'TUE','React Setup','Scaffold Vite + React','OPS',null),
    D(122,'WED','API Integration','Fetch from FastAPI endpoint','OPS',null),
    D(123,'THU','Streaming UI','LLM text streaming in React','OPS',null),
    D(124,'FRI','Push Full Stack','Push React+FastAPI, write README','OPS',null),
    D(125,'SAT','Write Blog','Medium post on architecture','OPS',null),
    D(126,'SUN','Buffer Day','All projects built. Prep for Cert #3','REST',null),
  ]),
  W('w19','AI Engineer Cert Prep',[
    D(127,'MON','System Design','LLM scaling, token limits','CERT',null),
    D(128,'TUE','Governance','Enterprise data governance','CERT',null),
    D(129,'WED','Readiness Mock','AI Engineer readiness quiz','CERT',null),
    D(130,'THU','API Error Handling','Retry/rate limit logic','CERT',null),
    D(131,'FRI','Weakness Drill','Target lowest scoring areas','CERT',null),
    D(132,'SAT','Buffer Day','Clear mind before exam','REST',null),
    D(133,'SUN','Env Setup','Prepare local env for testing','REST',null),
  ]),
  W('w20','AI Engineer Cert Week',[
    D(134,'MON','🏆 AI Eng Exam','Timed AI Engineer exam','CERT',null),
    D(135,'TUE','🏆 Practical','Hands-on AI project exam','CERT',null),
    D(136,'WED','LinkedIn Update','Add AI Engineering Cert #3','OPS',null),
    D(137,'THU','MLOps Preview','Read Docker & MLflow docs','OPS',null),
    D(138,'FRI','Repo Audits','Add badges, GIFs to repos','OPS',null),
    D(139,'SAT','Buffer Day','Relax','REST',null),
    D(140,'SUN','Buffer Day','End of Month 5. Three certs!','REST',null),
  ]),
  W('w21','MLOps & Docker',[
    D(141,'MON','MLOps Concepts','Model lifecycle management','OPS','c27'),
    D(142,'TUE','MLflow Tracking','Log metrics/params','OPS','c28'),
    D(143,'WED','MLflow Registry','Version, stage, production','OPS','c28'),
    D(144,'THU','Intro to Docker','Containerize Python script','OPS','c29'),
    D(145,'FRI','Docker-Compose','FastAPI + MLflow compose','OPS','c29'),
    D(146,'SAT','Dockerize App','Dockerize hero project','OPS',null),
    D(147,'SUN','Buffer Day','Buffer Day','REST',null),
  ]),
  W('w22','CI/CD & Monitoring',[
    D(148,'MON','CI/CD for ML','Pytest + GitHub Actions','OPS','c30'),
    D(149,'TUE','Auto Retrain','Trigger on data updates','OPS','c30'),
    D(150,'WED','Model Drift','Detect concept & data drift','OPS','c31'),
    D(151,'THU','Evidently AI','Drift monitoring in pipeline','OPS','c31'),
    D(152,'FRI','🏆 MLOps Badge','Finish track. Cert #4!','CERT',null),
    D(153,'SAT','Resume Polish','Match JD keywords','INT',null),
    D(154,'SUN','Apply','Apply to target roles','INT',null),
  ]),
  W('w23','Technical Interview Prep',[
    D(155,'MON','Python Interview','DC Python interview Qs','INT',null),
    D(156,'TUE','ML Theory','DC ML interview Qs','INT',null),
    D(157,'WED','System Design','Whiteboard ML pipeline','INT',null),
    D(158,'THU','Transformer Theory','Explain Attention aloud','INT',null),
    D(159,'FRI','LeetCode','Array/Hashmap problems','INT',null),
    D(160,'SAT','Behavioral','5 STAR stories, record delivery','INT',null),
    D(161,'SUN','Networking','Message 5 engineers on LinkedIn','INT',null),
  ]),
  W('w24','Game Day',[
    D(162,'MON','Mock Interview','90-min mock via Pramp','INT',null),
    D(163,'TUE','Review','Patch mock feedback','INT',null),
    D(164,'WED','Intro Pitch','Perfect "Tell me about yourself"','INT',null),
    D(165,'THU','Project Demo','5-min live hero app walkthrough','INT',null),
    D(166,'FRI','Light Review','1 hour max, no hard studying','INT',null),
    D(167,'SAT','Buffer Day','Confidence and sleep','REST',null),
    D(168,'SUN','🎯 Target','Trust the 6 months. You are ready.','INT',null),
  ]),
];

export const MONTHS = [
  { id:1, title:'Python & SQL Foundations', weeks:['w1','w2','w3','w4'], color:'#05c3de' },
  { id:2, title:'Statistics & EDA', weeks:['w5','w6','w7','w8'], color:'#9b6dff' },
  { id:3, title:'Machine Learning & Cert 2', weeks:['w9','w10','w11','w12'], color:'#f4b942' },
  { id:4, title:'Deep Learning & PyTorch', weeks:['w13','w14','w15','w16'], color:'#ff5577' },
  { id:5, title:'GenAI, LangChain & Cert 3', weeks:['w17','w18','w19','w20'], color:'#22d87a' },
  { id:6, title:'MLOps & Interview Blitz', weeks:['w21','w22','w23','w24'], color:'#05c3de' },
];

export const TAG_COLORS = {
  PY:'#05c3de', SQL:'#f4b942', ML:'#9b6dff', DL:'#ff5577',
  LLM:'#f4b942', OPS:'#22d87a', VIZ:'#05c3de', CERT:'#ff5577',
  INT:'#9b6dff', REST:'#52647d', HERO:'#05c3de',
};

// Math & Theory supplements mapped by day number
export const DAILY_THEORY = {
  "1": {
    "math": "Big-O notation: O(1) vs O(n) vs O(n²). Why list.append() is O(1) but list.insert(0,x) is O(n).",
    "resource": "https://www.bigocheatsheet.com/"
  },
  "2": {
    "math": "NumPy broadcasting rules: shapes (3,1)+(1,4)→(3,4). Element-wise vs matrix multiplication.",
    "resource": "https://numpy.org/doc/stable/user/basics.broadcasting.html"
  },
  "3": {
    "math": "Encapsulation: public vs private attributes. Memory layout of Python objects.",
    "resource": "https://docs.python.org/3/tutorial/classes.html"
  },
  "4": {
    "math": "Method Resolution Order (MRO) via C3 Linearization in multiple inheritance.",
    "resource": "https://www.python.org/download/releases/2.3/mro/"
  },
  "5": {
    "math": "Virtual Environments isolate site-packages. sys.path determines module resolution order.",
    "resource": "https://docs.python.org/3/tutorial/venv.html"
  },
  "6": {
    "math": "Parsing complexity: O(n) scan vs O(n log n) sorting. Hash maps for O(1) lookups.",
    "resource": "https://en.wikipedia.org/wiki/Hash_table"
  },
  "7": {
    "math": "REST Protocol: Sleep consolidates memory by replaying neural firing patterns in the hippocampus.",
    "resource": "https://www.nih.gov/news-events/nih-research-matters/how-sleep-clears-brain"
  },
  "8": {
    "math": "Set theory: UNION = A∪B, INTERSECT = A∩B. Relational algebra behind SQL joins.",
    "resource": "https://en.wikipedia.org/wiki/Relational_algebra"
  },
  "9": {
    "math": "Cartesian Product: Cross join creates N×M rows. Inner join filters this via predicate logic.",
    "resource": "https://www.sqlitetutorial.net/sqlite-cross-join/"
  },
  "10": {
    "math": "De Morgan’s Laws: NOT (A OR B) = (NOT A) AND (NOT B). Useful for complex WHERE clauses.",
    "resource": "https://en.wikipedia.org/wiki/De_Morgan%27s_laws"
  },
  "11": {
    "math": "Connection Pools reduce the overhead of TCP handshakes when talking to a database.",
    "resource": "https://en.wikipedia.org/wiki/Connection_pool"
  },
  "12": {
    "math": "ETL complexity: network bandwidth is usually the bottleneck over CPU.",
    "resource": "https://aws.amazon.com/what-is/etl/"
  },
  "13": {
    "math": "B-Trees: SQL indexes use balanced trees allowing O(log n) lookups instead of O(n) scans.",
    "resource": "https://use-the-index-luke.com/sql/anatomy"
  },
  "14": {
    "math": "REST Protocol: Spaced repetition strengthens synapses. Rest helps prevent retroactive interference.",
    "resource": "https://en.wikipedia.org/wiki/Spaced_repetition"
  },
  "15": {
    "math": "Pandas indexing: .loc (label) vs .iloc (integer). Column-major memory layout optimizes columnar math.",
    "resource": "https://pandas.pydata.org/docs/user_guide/indexing.html"
  },
  "16": {
    "math": "Split-Apply-Combine: Hash-based grouping operates in O(N) time expected.",
    "resource": "https://pandas.pydata.org/docs/user_guide/groupby.html"
  },
  "17": {
    "math": "Missing Data Mechanisms: MCAR vs MAR vs MNAR. Mean imputation reduces natural variance.",
    "resource": "https://en.wikipedia.org/wiki/Missing_data"
  },
  "18": {
    "math": "Regex Finite Automata: regular expressions compile to NDFA/DFAs for O(N) matching.",
    "resource": "https://swtch.com/~rsc/regexp/regexp1.html"
  },
  "19": {
    "math": "Pipeline DAGs: Directed Acyclic Graphs represent execution order of transformations.",
    "resource": "https://en.wikipedia.org/wiki/Directed_acyclic_graph"
  },
  "20": {
    "math": "Data engineering: Time complexity of dropping duplicates is O(N) using a hash table.",
    "resource": "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.drop_duplicates.html"
  },
  "21": {
    "math": "Git uses Merkle Trees (Directed Acyclic Graphs) to track history efficiently.",
    "resource": "https://git-scm.com/book/en/v2/Git-Internals-Git-Objects"
  },
  "22": {
    "math": "Window Functions calculate over partitions without collapsing rows. O(N log N) due to sorting.",
    "resource": "https://www.postgresql.org/docs/current/tutorial-window.html"
  },
  "23": {
    "math": "Vectorization in Pandas uses C-level contiguous arrays to bypass Python’s Global Interpreter Lock (GIL).",
    "resource": "https://realpython.com/numpy-array-programming/"
  },
  "24": {
    "math": "Test-taking strategy: Eliminate obviously wrong answers to improve expected value of guessing.",
    "resource": "https://en.wikipedia.org/wiki/Expected_value"
  },
  "25": {
    "math": "Timed pressure affects working memory. Breathe to reduce cortisol levels.",
    "resource": "https://hbr.org/2015/12/calm-your-brain-during-an-anxious-moment"
  },
  "26": {
    "math": "Practical exams test applied knowledge. Think in functions to keep scope clean.",
    "resource": "https://en.wikipedia.org/wiki/Pure_function"
  },
  "27": {
    "math": "Network effect: Value of a network is proportional to the square of the number of users (Metcalfe’s Law).",
    "resource": "https://en.wikipedia.org/wiki/Metcalfe%27s_law"
  },
  "28": {
    "math": "REST Protocol: Taking a full day off resets dopamine baseline, increasing motivation.",
    "resource": "https://hubermanlab.com/controlling-your-dopamine-for-motivation-focus-and-satisfaction/"
  },
  "29": {
    "math": "Probability: P(A|B) = P(B|A)·P(A)/P(B). Bayes theorem is the foundation of ML.",
    "resource": "https://seeing-theory.brown.edu/bayesian-inference/index.html"
  },
  "30": {
    "math": "Variance = E[(X-μ)²]. Standard deviation = √Variance. Z-score = (X-μ)/σ.",
    "resource": "https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data"
  },
  "31": {
    "math": "Pearson r = cov(X,Y)/(σ_X·σ_Y). Range [-1,1]. Correlation ≠ causation!",
    "resource": "https://en.wikipedia.org/wiki/Pearson_correlation_coefficient"
  },
  "32": {
    "math": "p-value: probability of observing data as extreme as yours, given H₀ is true. α=0.05 threshold.",
    "resource": "https://www.nature.com/articles/nmeth.3288"
  },
  "33": {
    "math": "F-statistic = between-group variance / within-group variance. Higher F → more significant.",
    "resource": "https://en.wikipedia.org/wiki/F-test"
  },
  "34": {
    "math": "Statistical Power (1-β) is the probability of rejecting a false null hypothesis.",
    "resource": "https://en.wikipedia.org/wiki/Power_of_a_test"
  },
  "35": {
    "math": "REST Protocol: Deep sleep promotes the glymphatic system to clear brain neurotoxins.",
    "resource": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4636982/"
  },
  "36": {
    "math": "Color theory: HSL vs RGB. Perceptual uniformity in sequential colormaps.",
    "resource": "https://matplotlib.org/stable/tutorials/colors/colormaps.html"
  },
  "37": {
    "math": "Interquartile Range (IQR) = Q3 - Q1. Robust to outliers compared to standard deviation.",
    "resource": "https://en.wikipedia.org/wiki/Interquartile_range"
  },
  "38": {
    "math": "Curse of Dimensionality: Volume of space increases exponentially, making data sparse.",
    "resource": "https://en.wikipedia.org/wiki/Curse_of_dimensionality"
  },
  "39": {
    "math": "Anscombe’s Quartet: Four datasets with identical summary statistics but drastically different graphs.",
    "resource": "https://en.wikipedia.org/wiki/Anscombe%27s_quartet"
  },
  "40": {
    "math": "Feature Engineering: Log transform normalizes right-skewed data distributions.",
    "resource": "https://scikit-learn.org/stable/modules/preprocessing.html#mapping-to-a-gaussian-distribution"
  },
  "41": {
    "math": "Simpson’s Paradox: A trend appears in several groups but disappears when combined.",
    "resource": "https://en.wikipedia.org/wiki/Simpson%27s_paradox"
  },
  "42": {
    "math": "Documentation reduces technical debt, which compounds like financial interest.",
    "resource": "https://en.wikipedia.org/wiki/Technical_debt"
  },
  "43": {
    "math": "Vectors: dot product a·b = |a||b|cosθ. Orthogonal when dot product = 0.",
    "resource": "https://www.3blue1brown.com/topics/linear-algebra"
  },
  "44": {
    "math": "Eigenvalues λ: Av = λv. PCA finds eigenvectors of covariance matrix for dimensionality reduction.",
    "resource": "https://setosa.io/ev/principal-component-analysis/"
  },
  "45": {
    "math": "SVD: A = UΣVᵀ. Generalizes eigendecomposition to non-square matrices.",
    "resource": "https://en.wikipedia.org/wiki/Singular_value_decomposition"
  },
  "46": {
    "math": "Gradient: Vector of partial derivatives points in direction of steepest ascent.",
    "resource": "https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/gradient-and-directional-derivatives/v/gradient"
  },
  "47": {
    "math": "Dependency resolution is an NP-hard problem. Package managers use SAT solvers.",
    "resource": "https://research.swtch.com/vgo-principles"
  },
  "48": {
    "math": "Formative assessment provides active recall, which is 3x more effective than re-reading.",
    "resource": "https://en.wikipedia.org/wiki/Testing_effect"
  },
  "49": {
    "math": "REST Protocol: Diffuse mode thinking (walking, resting) solves complex problems better than focused mode.",
    "resource": "https://www.coursera.org/learn/learning-how-to-learn"
  },
  "50": {
    "math": "StandardScaler: z = (x-μ)/σ. MinMaxScaler: x_norm = (x-min)/(max-min). When to use which.",
    "resource": "https://scikit-learn.org/stable/auto_examples/preprocessing/plot_all_scaling.html"
  },
  "51": {
    "math": "One-hot encoding creates orthogonal binary vectors. Label encoding assumes ordinal relationship.",
    "resource": "https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.OneHotEncoder.html"
  },
  "52": {
    "math": "KNN Imputation: Uses Euclidean distance √(Σ(pᵢ-qᵢ)²) to find similar rows.",
    "resource": "https://scikit-learn.org/stable/modules/impute.html#knnimpute"
  },
  "53": {
    "math": "Variance Threshold: Var(X) = p(1-p) for boolean features. Low variance features add noise.",
    "resource": "https://scikit-learn.org/stable/modules/feature_selection.html#variance-threshold"
  },
  "54": {
    "math": "Data Leakage: Fitting a scaler on the whole dataset before train/test split biases results.",
    "resource": "https://scikit-learn.org/stable/common_pitfalls.html#data-leakage"
  },
  "55": {
    "math": "Commit atomic changes. A git commit is an immutable snapshot of the working tree.",
    "resource": "https://www.conventionalcommits.org/en/v1.0.0/"
  },
  "56": {
    "math": "REST Protocol: Consistency over intensity. 1 hour a day beats 7 hours on Sunday.",
    "resource": "https://jamesclear.com/marginal-gains"
  },
  "57": {
    "math": "Linear regression: y = Xβ + ε. OLS minimizes Σ(yᵢ - ŷᵢ)². Gradient: ∂L/∂β = -2Xᵀ(y-Xβ).",
    "resource": "https://www.statquest.org/video-index/"
  },
  "58": {
    "math": "SVM: maximize margin 2/||w||. Kernel trick: K(x,y) = φ(x)·φ(y). RBF kernel for non-linear.",
    "resource": "https://en.wikipedia.org/wiki/Support-vector_machine"
  },
  "59": {
    "math": "Regularization: L1 (Lasso) uses absolute values |w|, leading to sparse weights (feature selection).",
    "resource": "https://developers.google.com/machine-learning/crash-course/regularization-for-sparsity/l1-regularization"
  },
  "60": {
    "math": "Precision = TP/(TP+FP). Recall = TP/(TP+FN). F1 = 2·P·R/(P+R). AUC = area under ROC curve.",
    "resource": "https://developers.google.com/machine-learning/crash-course/classification/precision-and-recall"
  },
  "61": {
    "math": "K-Means minimizes within-cluster sum of squares. It is NP-hard, solved via Lloyd’s heuristic.",
    "resource": "https://en.wikipedia.org/wiki/K-means_clustering"
  },
  "62": {
    "math": "Log-loss (Cross-Entropy): H(p,q) = -Σ p(x)log q(x). Strongly penalizes confident wrong predictions.",
    "resource": "https://ml-cheatsheet.readthedocs.io/en/latest/loss_functions.html"
  },
  "63": {
    "math": "REST Protocol: Active recovery. Read something completely unrelated to AI today.",
    "resource": "https://en.wikipedia.org/wiki/Active_recovery"
  },
  "64": {
    "math": "Information Gain = H(parent) - Σ(wᵢ·H(childᵢ)). Entropy H = -Σpᵢ·log₂(pᵢ). Gini = 1-Σpᵢ².",
    "resource": "https://en.wikipedia.org/wiki/Decision_tree_learning"
  },
  "65": {
    "math": "Random Forests use Bagging (Bootstrap Aggregating) to reduce variance of single trees.",
    "resource": "https://en.wikipedia.org/wiki/Random_forest"
  },
  "66": {
    "math": "Gradient Boosting: F_m(x) = F_{m-1}(x) + η·h_m(x). Learning rate η controls step size.",
    "resource": "https://xgboost.readthedocs.io/en/stable/tutorials/model.html"
  },
  "67": {
    "math": "Cross-validation: K-Fold splits data K ways. Bias-variance tradeoff in model selection.",
    "resource": "https://scikit-learn.org/stable/modules/cross_validation.html"
  },
  "68": {
    "math": "Model Stacking: A meta-model learns how to best combine the predictions of base models.",
    "resource": "https://scikit-learn.org/stable/modules/ensemble.html#stacking"
  },
  "69": {
    "math": "XGBoost uses 2nd order Taylor expansion (Hessian) of the loss function for better splits.",
    "resource": "https://arxiv.org/abs/1603.02754"
  },
  "70": {
    "math": "Continuous Integration runs automated tests on push, preventing broken code in main.",
    "resource": "https://docs.github.com/en/actions"
  },
  "71": {
    "math": "Anomaly Detection: Isolation Forest isolates anomalies closer to the root of the tree.",
    "resource": "https://scikit-learn.org/stable/modules/outlier_detection.html#isolation-forest"
  },
  "72": {
    "math": "Central Limit Theorem: The sum of independent random variables tends toward a normal distribution.",
    "resource": "https://en.wikipedia.org/wiki/Central_limit_theorem"
  },
  "73": {
    "math": "Data Validation checks constraints (e.g. x > 0). If not, downstream math is garbage.",
    "resource": "https://pandera.readthedocs.io/en/stable/"
  },
  "74": {
    "math": "GridSearchCV tests Cartesian product of parameters. RandomizedSearchCV tests a random sample.",
    "resource": "https://scikit-learn.org/stable/modules/grid_search.html"
  },
  "75": {
    "math": "Confidence intervals provide a range of plausible values for an unknown parameter.",
    "resource": "https://en.wikipedia.org/wiki/Confidence_interval"
  },
  "76": {
    "math": "The Dunning-Kruger effect: Confidence dips as you learn more. Trust your preparation.",
    "resource": "https://en.wikipedia.org/wiki/Dunning%E2%80%93Kruger_effect"
  },
  "77": {
    "math": "REST Protocol: Hydration affects cognitive performance. Drink water!",
    "resource": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2908954/"
  },
  "78": {
    "math": "Time management is an optimization problem (Knapsack). Maximize points within time limit.",
    "resource": "https://en.wikipedia.org/wiki/Knapsack_problem"
  },
  "79": {
    "math": "A confusion matrix mathematically summarizes Type I (FP) and Type II (FN) errors.",
    "resource": "https://en.wikipedia.org/wiki/Confusion_matrix"
  },
  "80": {
    "math": "Read the problem statement twice. Misunderstanding requirements causes 100% loss.",
    "resource": "https://en.wikipedia.org/wiki/Reading_comprehension"
  },
  "81": {
    "math": "Heuristics vs Optimization: A good heuristic is faster than a perfect optimization during an exam.",
    "resource": "https://en.wikipedia.org/wiki/Heuristic_(computer_science)"
  },
  "82": {
    "math": "Social Proof: Displaying credentials mathematically increases response rate from recruiters.",
    "resource": "https://en.wikipedia.org/wiki/Social_proof"
  },
  "83": {
    "math": "Tensors are n-dimensional arrays. A scalar is 0D, vector 1D, matrix 2D.",
    "resource": "https://pytorch.org/tutorials/beginner/blitz/tensor_tutorial.html"
  },
  "84": {
    "math": "REST Protocol: Celebrate wins. Dopamine reinforcement ensures you continue the habit.",
    "resource": "https://hubermanlab.com/dopamine-mindset-and-drive/"
  },
  "85": {
    "math": "Backpropagation: chain rule ∂L/∂w = ∂L/∂a · ∂a/∂z · ∂z/∂w. Autograd computes this automatically.",
    "resource": "https://karpathy.github.io/neuralnets/"
  },
  "86": {
    "math": "Universal Approximation Theorem: a NN with 1 hidden layer can approximate any continuous function.",
    "resource": "https://en.wikipedia.org/wiki/Universal_approximation_theorem"
  },
  "87": {
    "math": "Adam Optimizer uses momentum (moving average of gradients) to escape local minima.",
    "resource": "https://arxiv.org/abs/1412.6980"
  },
  "88": {
    "math": "Convolution: (f*g)(t) = ∫f(τ)g(t-τ)dτ. In CNNs: output[i,j] = Σ kernel[m,n]·input[i+m,j+n].",
    "resource": "https://cs231n.github.io/convolutional-networks/"
  },
  "89": {
    "math": "Max Pooling introduces translation invariance and reduces spatial dimensions exponentially.",
    "resource": "https://paperswithcode.com/method/max-pooling"
  },
  "90": {
    "math": "Transfer Learning works because early layers learn universal features (edges, colors).",
    "resource": "https://cs231n.github.io/transfer-learning/"
  },
  "91": {
    "math": "Data Augmentation mathematically acts as a regularizer by expanding the training manifold.",
    "resource": "https://pytorch.org/vision/stable/transforms.html"
  },
  "92": {
    "math": "Tokenization converts string manifolds into discrete integer spaces.",
    "resource": "https://huggingface.co/docs/transformers/tokenizer_summary"
  },
  "93": {
    "math": "TF-IDF: tf(t,d)·log(N/df(t)). High value = term is frequent in doc but rare across corpus.",
    "resource": "https://en.wikipedia.org/wiki/Tf%E2%80%93idf"
  },
  "94": {
    "math": "Word2Vec: skip-gram predicts context from center word. Embedding space: king-man+woman≈queen.",
    "resource": "https://jalammar.github.io/illustrated-word2vec/"
  },
  "95": {
    "math": "Named Entity Recognition is often modeled as a sequence tagging problem (CRFs or LSTMs).",
    "resource": "https://paperswithcode.com/task/named-entity-recognition-ner"
  },
  "96": {
    "math": "Softmax function squashes vector to [0,1] probabilities summing to 1.",
    "resource": "https://en.wikipedia.org/wiki/Softmax_function"
  },
  "97": {
    "math": "Attention Is All You Need paper introduced parallelizable attention, replacing sequential LSTMs.",
    "resource": "https://arxiv.org/abs/1706.03762"
  },
  "98": {
    "math": "A successful project deployment requires reproducible environments (Dockerfile/requirements.txt).",
    "resource": "https://12factor.net/dependencies"
  },
  "99": {
    "math": "Transformer: Attention(Q,K,V) = softmax(QKᵀ/√d_k)V. Self-attention captures long-range dependencies.",
    "resource": "https://jalammar.github.io/illustrated-transformer/"
  },
  "100": {
    "math": "LoRA injects low-rank matrices A and B into frozen weights W. W = W + AB. Saves 90% memory.",
    "resource": "https://arxiv.org/abs/2106.09685"
  },
  "101": {
    "math": "Catastrophic Forgetting: fine-tuning on new data can erase previously learned weights.",
    "resource": "https://en.wikipedia.org/wiki/Catastrophic_interference"
  },
  "102": {
    "math": "BLEU measures precision of n-grams against reference. ROUGE measures recall.",
    "resource": "https://huggingface.co/spaces/evaluate-metric/bleu"
  },
  "103": {
    "math": "HuggingFace Hub uses Git LFS (Large File Storage) for multi-GB model weights.",
    "resource": "https://huggingface.co/docs/hub/models-the-hub"
  },
  "104": {
    "math": "Model Cards provide transparency, documenting bias and expected F1 metrics.",
    "resource": "https://arxiv.org/abs/1810.03993"
  },
  "105": {
    "math": "REST Protocol: Step away from screens. Eye strain reduces long-term focus.",
    "resource": "https://www.aao.org/eye-health/tips-prevention/computer-usage"
  },
  "106": {
    "math": "Perplexity = exp(-1/N · Σlog P(wᵢ)). Lower = better language model. Used to evaluate LLMs.",
    "resource": "https://huggingface.co/docs/transformers/perplexity"
  },
  "107": {
    "math": "Temperature T in softmax: P(xᵢ) = exp(xᵢ/T)/Σexp(xⱼ/T). Low T → confident, High T → creative.",
    "resource": "https://lukesalamone.github.io/posts/what-is-temperature/"
  },
  "108": {
    "math": "Few-shot prompting provides priors to the LLM, shifting its internal probability distribution.",
    "resource": "https://www.promptingguide.ai/techniques/fewshot"
  },
  "109": {
    "math": "Cosine similarity: cos(θ) = (A·B)/(||A||·||B||). Used for semantic search in embedding space.",
    "resource": "https://en.wikipedia.org/wiki/Cosine_similarity"
  },
  "110": {
    "math": "Approximate Nearest Neighbors (ANN) uses graphs (HNSW) to search vectors in O(log N) time.",
    "resource": "https://arxiv.org/abs/1603.09320"
  },
  "111": {
    "math": "Vector Databases store dense vectors and use inverted file index (IVF) to accelerate queries.",
    "resource": "https://milvus.io/docs/index.md"
  },
  "112": {
    "math": "REST Protocol: Growth happens during rest, not during the workout.",
    "resource": "https://en.wikipedia.org/wiki/Supercompensation"
  },
  "113": {
    "math": "LangChain chains link input variables sequentially to LLM calls.",
    "resource": "https://python.langchain.com/docs/get_started/introduction"
  },
  "114": {
    "math": "Conversational Memory grows context linearly O(N), which quadratically O(N²) slows down Transformers.",
    "resource": "https://arxiv.org/abs/2304.11062"
  },
  "115": {
    "math": "Text chunking strategy: overlap chunks to prevent cutting semantic context exactly at borders.",
    "resource": "https://www.pinecone.io/learn/chunking-strategies/"
  },
  "116": {
    "math": "RAG retrieval: top-k nearest neighbors in embedding space mitigates LLM hallucinations.",
    "resource": "https://arxiv.org/abs/2005.11401"
  },
  "117": {
    "math": "ReAct (Reasoning and Acting) loops let LLMs use tools until a termination condition is met.",
    "resource": "https://arxiv.org/abs/2210.03629"
  },
  "118": {
    "math": "FastAPI uses Starlette and Pydantic for asynchronous IO and data validation.",
    "resource": "https://fastapi.tiangolo.com/"
  },
  "119": {
    "math": "REST Protocol: Sleep deprivation mathematically decreases working memory capacity by 40%.",
    "resource": "https://www.nih.gov/news-events/nih-research-matters/sleep-deprivation-affects-memory"
  },
  "120": {
    "math": "Streamlit runs the entire script top-to-bottom on every interaction.",
    "resource": "https://docs.streamlit.io/library/get-started/main-concepts"
  },
  "121": {
    "math": "React Virtual DOM calculates minimal DOM diffs in O(n) using heuristic tree traversal.",
    "resource": "https://react.dev/learn/preserving-and-resetting-state"
  },
  "122": {
    "math": "REST APIs use HTTP verbs (GET, POST). JSON parsing is O(N) where N is string length.",
    "resource": "https://restfulapi.net/"
  },
  "123": {
    "math": "Server-Sent Events (SSE) allows unidirectional streaming of LLM tokens over one HTTP connection.",
    "resource": "https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events"
  },
  "124": {
    "math": "CORS (Cross-Origin Resource Sharing) prevents malicious sites from calling your API.",
    "resource": "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"
  },
  "125": {
    "math": "Feynman Technique: If you can write a simple blog post about it, you understand it.",
    "resource": "https://fs.blog/feynman-technique/"
  },
  "126": {
    "math": "REST Protocol: The brain physically restructures synapses during downtime.",
    "resource": "https://en.wikipedia.org/wiki/Neuroplasticity"
  },
  "127": {
    "math": "Scaling Laws: LLM performance scales predictably as a power law of parameters and dataset size.",
    "resource": "https://arxiv.org/abs/2001.08361"
  },
  "128": {
    "math": "Data Privacy: PII redaction models use NER to mask sensitive tokens.",
    "resource": "https://presidio.microsoft.com/"
  },
  "129": {
    "math": "Recall is more important than Precision when trying to ensure you cover all exam topics.",
    "resource": "https://towardsdatascience.com/precision-vs-recall-386cf9f89488"
  },
  "130": {
    "math": "Exponential Backoff: Retry failed requests at intervals 2^c to avoid overwhelming the API.",
    "resource": "https://en.wikipedia.org/wiki/Exponential_backoff"
  },
  "131": {
    "math": "Targeted review: Focusing on lowest scoring areas provides the highest marginal return on time.",
    "resource": "https://en.wikipedia.org/wiki/Marginal_utility"
  },
  "132": {
    "math": "REST Protocol: Lowering cortisol levels the day before an exam improves recall.",
    "resource": "https://www.apa.org/news/press/releases/stress/"
  },
  "133": {
    "math": "Environmental consistency: Testing in the same environment you study in improves recall.",
    "resource": "https://en.wikipedia.org/wiki/Context-dependent_memory"
  },
  "134": {
    "math": "Pacing = Total Time / Total Questions. If pacing drops, guess and move on.",
    "resource": "https://blog.prepscholar.com/time-management-strategies-for-the-sat"
  },
  "135": {
    "math": "Edge cases in practicals: check for nulls, divide-by-zero, and out-of-bounds indices.",
    "resource": "https://en.wikipedia.org/wiki/Edge_case"
  },
  "136": {
    "math": "Algorithms power LinkedIn feeds. Posting with images/video gets higher engagement weight.",
    "resource": "https://engineering.linkedin.com/blog"
  },
  "137": {
    "math": "Docker uses Linux cgroups to limit CPU/RAM, and namespaces to isolate processes.",
    "resource": "https://docs.docker.com/get-started/overview/"
  },
  "138": {
    "math": "Readme quality correlates highly with GitHub repo stars and recruiter callbacks.",
    "resource": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
  },
  "139": {
    "math": "REST Protocol: Complete detachment from work reduces burnout probability.",
    "resource": "https://hbr.org/2017/12/to-recover-from-burnout-you-need-to-detach"
  },
  "140": {
    "math": "REST Protocol: Month 5 completed. The compound interest of daily learning is immense.",
    "resource": "https://jamesclear.com/continuous-improvement"
  },
  "141": {
    "math": "MLOps Lifecycle: Data prep → Model training → Registry → Serving → Monitoring.",
    "resource": "https://ml-ops.org/"
  },
  "142": {
    "math": "Hyperparameter tuning spaces grow exponentially. MLflow tracks this high-dimensional search.",
    "resource": "https://mlflow.org/docs/latest/tracking.html"
  },
  "143": {
    "math": "Model Registry acts as the source of truth, tracking transitions (Staging → Production).",
    "resource": "https://mlflow.org/docs/latest/model-registry.html"
  },
  "144": {
    "math": "Docker Images are built from layered file systems (UnionFS). Order of Dockerfile matters!",
    "resource": "https://docs.docker.com/build/cache/"
  },
  "145": {
    "math": "Docker Compose networking automatically creates a DNS namespace for inter-container routing.",
    "resource": "https://docs.docker.com/compose/networking/"
  },
  "146": {
    "math": "Gunicorn/Uvicorn: WSGI/ASGI servers manage concurrent worker processes for throughput.",
    "resource": "https://www.uvicorn.org/"
  },
  "147": {
    "math": "REST Protocol: Visualizing success primes the brain’s reticular activating system.",
    "resource": "https://en.wikipedia.org/wiki/Reticular_activating_system"
  },
  "148": {
    "math": "CI/CD DAGs: Jobs run in parallel unless defined sequentially to minimize total build time.",
    "resource": "https://docs.gitlab.com/ee/ci/pipelines/pipeline_architectures.html"
  },
  "149": {
    "math": "Automated retraining reduces manual toil (O(1) human effort vs O(N) model updates).",
    "resource": "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning"
  },
  "150": {
    "math": "KS test: D = max|F₁(x)-F₂(x)|. Detects distribution shift between training and production data.",
    "resource": "https://en.wikipedia.org/wiki/Kolmogorov%E2%80%93Smirnov_test"
  },
  "151": {
    "math": "Population Stability Index (PSI) measures how much a variable has shifted over time.",
    "resource": "https://mwouts.github.io/itables/psi.html"
  },
  "152": {
    "math": "Completing a program puts you in the top 5% of starters. Execution is everything.",
    "resource": "https://fourminutebooks.com/execution-is-everything/"
  },
  "153": {
    "math": "ATS (Applicant Tracking Systems) use TF-IDF or vector embeddings to match resumes to JDs.",
    "resource": "https://en.wikipedia.org/wiki/Applicant_tracking_system"
  },
  "154": {
    "math": "Job hunting is a numbers game. Law of Large Numbers dictates eventual success.",
    "resource": "https://en.wikipedia.org/wiki/Law_of_large_numbers"
  },
  "155": {
    "math": "Python `dict` lookup is O(1) on average. Under the hood, it uses an open-addressing hash table.",
    "resource": "https://docs.python.org/3/tutorial/datastructures.html#dictionaries"
  },
  "156": {
    "math": "ML Interview: Be able to derive linear regression OLS on a whiteboard.",
    "resource": "https://web.stanford.edu/~mrosenfe/soc_meth_proj3/matrix_OLS_NYU_notes.pdf"
  },
  "157": {
    "math": "System Design: Estimate QPS, bandwidth, and storage limits. (e.g. 100M users * 1MB = 100TB).",
    "resource": "https://github.com/donnemartin/system-design-primer"
  },
  "158": {
    "math": "Explain concepts in 3 levels: to a 5-year old, to a peer, and to a senior engineer.",
    "resource": "https://en.wikipedia.org/wiki/The_Feynman_Technique"
  },
  "159": {
    "math": "Two Pointers technique solves array sequence problems in O(N) time with O(1) space.",
    "resource": "https://leetcode.com/articles/two-pointer-technique/"
  },
  "160": {
    "math": "STAR Method: Situation, Task, Action, Result. Keeps answers concise and impact-driven.",
    "resource": "https://en.wikipedia.org/wiki/Situation,_task,_action,_result"
  },
  "161": {
    "math": "Warm intros convert 10x higher than cold applications. Network graph density matters.",
    "resource": "https://en.wikipedia.org/wiki/Social_network_analysis"
  },
  "162": {
    "math": "Mock interviews desensitize the amygdala to the stress response of live coding.",
    "resource": "https://en.wikipedia.org/wiki/Systematic_desensitization"
  },
  "163": {
    "math": "Feedback loops: receiving external critique fixes blind spots in your knowledge graph.",
    "resource": "https://fs.blog/feedback-loops/"
  },
  "164": {
    "math": "First impressions anchor the interviewer’s perception (Anchoring Bias). Nail the intro.",
    "resource": "https://en.wikipedia.org/wiki/Anchoring_(cognitive_bias)"
  },
  "165": {
    "math": "A live demo proves execution capability, bypassing traditional signaling (degrees).",
    "resource": "https://en.wikipedia.org/wiki/Signalling_(economics)"
  },
  "166": {
    "math": "Cramming uses short-term memory buffers which decay rapidly and cause fatigue.",
    "resource": "https://en.wikipedia.org/wiki/Forgetting_curve"
  },
  "167": {
    "math": "REST Protocol: Maximum cognitive performance requires minimal stress and high sleep.",
    "resource": "https://www.sleepfoundation.org/how-sleep-works/memory-and-sleep"
  },
  "168": {
    "math": "The journey from day 1 to 168 represents exponential growth. Go get the job.",
    "resource": "https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html"
  }
};

export const HOW_TO_USE = [
  { icon:'📅', title:'Daily Routine (2-3 hours/day)', desc:'Each day has ONE focused topic. Complete the DataCamp lesson first (1-1.5 hrs), then read the theory note, then practice. Mark the day complete when done.' },
  { icon:'✅', title:'Marking Progress', desc:'Click the ✓ circle next to each day in the Roadmap tab. This earns you 20 XP and updates your streak. Use "Mark All" on a week header for bulk completion.' },
  { icon:'📚', title:'Course Links', desc:'Each day links to a specific DataCamp course. Click the blue course pill to open it directly. All courses are FREE with your DataCamp Classroom subscription.' },
  { icon:'🧮', title:'Math & Theory Notes', desc:'Many days include a math/theory supplement (shown with a 🧮 icon). These are the concepts that come up in interviews. Review them even on rest days.' },
  { icon:'🏆', title:'Certifications', desc:'Certs auto-unlock when you complete enough days. Go to the Certs tab to take the exam once unlocked. Post each cert on LinkedIn immediately.' },
  { icon:'📁', title:'Projects', desc:'Each project has full details: dataset, setup commands, file structure, and showcase tips. Click to expand. Start building from Month 2 onwards.' },
  { icon:'⭐', title:'XP & Rewards', desc:'Earn XP from days (+20), courses (+50), certs (+200), and badges. Your goal: reach Level 10 (Job Ready). Check the Rewards tab for all 14 badges.' },
  { icon:'🧪', title:'Practice Problems', desc:'Use the Practice tab to test yourself after each section. Problems are categorized by topic (PY, SQL, ML, DL, LLM) and difficulty (Easy/Medium/Hard).' },
  { icon:'📣', title:'Showcasing Work', desc:'The Showcase tab has guides for README writing, GitHub optimization, LinkedIn strategy, video demos, and blog writing. Follow these from Day 1.' },
  { icon:'🔁', title:'Weekly Cycle', desc:'MON-FRI: Learn new topics with DataCamp. SAT: Build/practice. SUN: Rest or light review. Never skip rest days — burnout kills progress.' },
  { icon:'🎯', title:'Interview Prep', desc:'Months 5-6 focus on interview prep. The Interview tab has IBM-specific stages, LeetCode must-solves, and behavioral Q&A. Start mock interviews at Month 5.' },
  { icon:'💾', title:'Your Data', desc:'All progress is saved in your browser (localStorage). It persists across sessions. If you clear browser data, your progress resets. Use the same browser consistently.' },
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

export const DAY_INSTRUCTIONS = {
  "5": {
    "type": "setup",
    "title": "Local Environment Setup",
    "content": [
      {
        "title": "Install Python 3.10+",
        "cmd": "brew install python",
        "note": "Ensure Python is added to your PATH."
      },
      {
        "title": "Create Virtual Environment",
        "cmd": "python -m venv venv",
        "note": "Keeps project dependencies isolated."
      },
      {
        "title": "Activate Virtual Environment",
        "cmd": "source venv/bin/activate",
        "note": "Run this every time you open a new terminal."
      },
      {
        "title": "Install Requirements",
        "cmd": "pip install -r requirements.txt",
        "note": "Or install pandas, numpy, etc. manually."
      }
    ]
  },
  "6": {
    "type": "practice",
    "title": "Python Basics - Challenges",
    "content": [
      {
        "topic": "Data Types",
        "difficulty": "Easy",
        "q": "Write a function that takes a string and returns a dictionary with the frequency of each character."
      },
      {
        "topic": "Control Flow",
        "difficulty": "Medium",
        "q": "Implement a list comprehension that returns all prime numbers between 1 and 100."
      }
    ]
  },
  "7": {
    "type": "rest",
    "title": "Week 1 Complete: Buffer / Integration Day",
    "content": "You have conquered Python Basics! Take today to step away from the IDE. Go for a walk and let the syntax structures consolidate in your memory."
  },
  "13": {
    "type": "setup",
    "title": "SQLite Database Setup",
    "content": [
      {
        "title": "Install SQLite3",
        "cmd": "brew install sqlite",
        "note": "Mac usually comes with it, but good to ensure latest."
      },
      {
        "title": "Create Database File",
        "cmd": "sqlite3 mydatabase.db",
        "note": "This opens the sqlite prompt and creates the file."
      },
      {
        "title": "Python sqlite3 Module",
        "cmd": "import sqlite3\nconn = sqlite3.connect(\"mydatabase.db\")",
        "note": "Use this in your Python scripts to connect."
      }
    ]
  },
  "14": {
    "type": "rest",
    "title": "Week 2 Complete: Buffer / Integration Day",
    "content": "Object-Oriented Programming fundamentally changes how you model problems. Close the laptop today; your brain is actively rewiring itself to think in objects."
  },
  "28": {
    "type": "rest",
    "title": "Month 1 Complete: Buffer / Integration Day",
    "content": "You can now visually tell stories with data using Pandas and Matplotlib. Give your visual cortex a rest today by listening to a podcast instead of looking at screens."
  },
  "34": {
    "type": "practice",
    "title": "Data Manipulation - Challenges",
    "content": [
      {
        "topic": "Pandas",
        "difficulty": "Medium",
        "q": "Given a DataFrame, use groupby and agg to find the sum and mean of \"sales\" per \"region\"."
      },
      {
        "topic": "SQL",
        "difficulty": "Hard",
        "q": "Write an INNER JOIN query that filters out any rows where the customer account is inactive."
      }
    ]
  },
  "35": {
    "type": "rest",
    "title": "Week 5 Complete: Buffer / Integration Day",
    "content": "Relational algebra is heavy on working memory. You have finished your first month! Take a full 24 hours off. No coding allowed."
  },
  "49": {
    "type": "rest",
    "title": "Week 7 Complete: Buffer / Integration Day",
    "content": "Version control and terminal mastery separate juniors from mid-level engineers. You are leveling up. Relax your posture today."
  },
  "54": {
    "type": "practice",
    "title": "ML Pipeline - Challenges",
    "content": [
      {
        "topic": "Scikit-Learn",
        "difficulty": "Medium",
        "q": "Build a Pipeline that applies StandardScaler then a LogisticRegression model."
      },
      {
        "topic": "Metrics",
        "difficulty": "Hard",
        "q": "Write the code to plot an ROC curve and calculate the AUC score."
      }
    ]
  },
  "55": {
    "type": "setup",
    "title": "Git & GitHub Setup",
    "content": [
      {
        "title": "Initialize Git",
        "cmd": "git init",
        "note": "Turns your current directory into a repository."
      },
      {
        "title": "Add Remote Origin",
        "cmd": "git remote add origin https://github.com/username/repo.git",
        "note": "Links your local repo to GitHub."
      },
      {
        "title": "Commit & Push",
        "cmd": "git add .\ngit commit -m \"initial commit\"\ngit push -u origin main",
        "note": "Pushes your code to the cloud."
      }
    ]
  },
  "56": {
    "type": "rest",
    "title": "Week 8 Complete: Buffer / Integration Day",
    "content": "Welcome to Machine Learning. You have built your first predictive model. Let the math settle. Sleep is paramount tonight."
  },
  "63": {
    "type": "rest",
    "title": "Week 9 Complete: Buffer / Integration Day",
    "content": "Ensemble methods are the workhorses of industry ML. Your foundational knowledge is solidifying. Take a complete mental break today."
  },
  "77": {
    "type": "rest",
    "title": "Week 11 Complete: Buffer / Integration Day",
    "content": "Dimensionality reduction is conceptually difficult. You made it through. Hydrate, stretch, and step away from the keyboard."
  },
  "84": {
    "type": "rest",
    "title": "Week 12 Complete: Buffer / Integration Day",
    "content": "You are exactly halfway through the 6-month roadmap, and you just entered Deep Learning! Massive congratulations. Enjoy this milestone rest day."
  },
  "105": {
    "type": "rest",
    "title": "Week 15 Complete: Buffer / Integration Day",
    "content": "Fine-tuning LLMs is a highly sought-after skill. Your market value is rapidly increasing. Relax and let the dopamine hit."
  },
  "112": {
    "type": "rest",
    "title": "Week 16 Complete: Buffer / Integration Day",
    "content": "RAG is the most deployed enterprise AI architecture today. You are learning highly practical skills. Disconnect for 24 hours."
  },
  "119": {
    "type": "rest",
    "title": "Week 17 Complete: Buffer / Integration Day",
    "content": "Agentic workflows represent the cutting edge of AI capabilities. Your mind has expanded this week. Rest is mandatory."
  },
  "121": {
    "type": "setup",
    "title": "React & Node Setup",
    "content": [
      {
        "title": "Install Node.js",
        "cmd": "nvm install 20",
        "note": "Use Node Version Manager to get Node 20."
      },
      {
        "title": "Create Vite App",
        "cmd": "npm create vite@latest frontend -- --template react",
        "note": "Scaffolds a blazing fast React app."
      },
      {
        "title": "Run Dev Server",
        "cmd": "cd frontend\nnpm install\nnpm run dev",
        "note": "Starts your local UI environment."
      }
    ]
  },
  "126": {
    "type": "rest",
    "title": "Week 18 Complete: Buffer / Integration Day",
    "content": "Deploying models turns theory into products. You are now a builder, not just a researcher. Enjoy your rest."
  },
  "132": {
    "type": "rest",
    "title": "Exam Prep Phase: Buffer / Integration Day",
    "content": "Exam prep is stressful. Lowering your cortisol levels is scientifically proven to improve test performance. Chill out."
  },
  "133": {
    "type": "setup",
    "title": "Final Project Environment Setup",
    "content": [
      {
        "title": "Clone Boilerplate",
        "cmd": "git clone https://github.com/your-repo/boilerplate.git",
        "note": "Get your starting files."
      },
      {
        "title": "Docker Compose",
        "cmd": "docker-compose up -d",
        "note": "Spins up your Postgres DB and Redis cache locally."
      },
      {
        "title": "Environment Variables",
        "cmd": "cp .env.example .env",
        "note": "Fill in your OpenAI keys and DB credentials."
      }
    ]
  },
  "139": {
    "type": "rest",
    "title": "Week 20 Complete: Buffer / Integration Day",
    "content": "Month 5 is complete. You have passed the theoretical and practical exams. The final month is pure portfolio and interview prep. Breathe."
  },
  "140": {
    "type": "rest",
    "title": "Month 5 Complete: Buffer / Integration Day",
    "content": "The compound interest of daily learning is immense. You are almost there."
  },
  "147": {
    "type": "rest",
    "title": "Week 21 Complete: Buffer / Integration Day",
    "content": "MLOps bridges the gap between data science and software engineering. Rest your mind to prepare for your final capstone."
  },
  "167": {
    "type": "rest",
    "title": "Week 24 Complete: Buffer / Integration Day",
    "content": "You have done it. 168 days of relentless consistency. You are fully prepared. Rest today, and go crush those interviews tomorrow."
  }
};
