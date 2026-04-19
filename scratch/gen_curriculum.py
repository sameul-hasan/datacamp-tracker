import json

with open('scratch/weeks.json') as f:
    weeks = json.load(f)

# Hardcode the other arrays based on the new 4-month plan

js_code = """export const MONTHS = [
  { id: 1, name: 'Part I: Mathematical & Computational Bedrock', weeks: [1, 2, 3, 4], color: '#05c3de' },
  { id: 2, name: 'Part II: Core Machine Learning & Algorithms', weeks: [5, 6, 7, 8], color: '#9b6dff' },
  { id: 3, name: 'Part III: Deep Learning & Specialized Domains', weeks: [9, 10, 11, 12], color: '#f4b942' },
  { id: 4, name: 'Part IV: MLOps, System Design & Career Cracking', weeks: [13, 14, 15, 16], color: '#22d87a' }
];

export const COURSES = [
  { id:'c1', name:'Python Foundations', url:'https://www.datacamp.com', month:1 },
  { id:'c2', name:'Math & Stats for ML', url:'https://www.datacamp.com', month:1 },
  { id:'c3', name:'Machine Learning Scientist Track', url:'https://www.datacamp.com', month:2 },
  { id:'c4', name:'Deep Learning in Python', url:'https://www.datacamp.com', month:3 },
  { id:'c5', name:'MLOps Concepts', url:'https://www.datacamp.com', month:4 }
];

export const CERTIFICATIONS = [
  { id:'cert1', name:'Python Data Associate', week:4, month:1, reqDays:28, color:'#05c3de',
    desc:'Foundational Python, Data Manipulation, and Mathematics.' },
  { id:'cert2', name:'Data Scientist Associate', week:8, month:2, reqDays:56, color:'#9b6dff',
    desc:'Core Machine Learning, Trees, Ensembles, and SQL.' },
  { id:'cert3', name:'AI Engineer Associate', week:12, month:3, reqDays:84, color:'#f4b942',
    desc:'Deep Learning, CV, NLP, and LLMs. ⭐ MOST IMPORTANT' },
  { id:'cert4', name:'MLOps Fundamentals Badge', week:16, month:4, reqDays:112, color:'#22d87a',
    desc:'MLflow, CI/CD, Docker, and System Design.' },
];

export const PROJECTS = [
  { id:'p1', name:'EDA & Statistical Report', month:1, tag:'EDA', color:'#05c3de',
    desc:'End-to-End EDA and Statistical Report on a Real-World Dataset.',
    tech:['Python','Pandas','Matplotlib','SciPy'],
    source:'Kaggle Dataset / Real Estate Data',
    learn:'Master distributions, outlier handling, and statistical significance.' },
  { id:'p2', name:'Customer Segmentation & Fraud', month:2, tag:'ML', color:'#9b6dff',
    desc:'Customer Segmentation and Fraud Detection Pipeline using Unsupervised & Supervised learning.',
    tech:['scikit-learn','XGBoost','K-Means','SMOTE'],
    source:'Credit Card Fraud Dataset',
    learn:'Handle imbalanced data, build ensemble models, and interpret with SHAP.' },
  { id:'p3', name:'Movie Recommender / Stock Predictor', month:3, tag:'DL', color:'#f4b942',
    desc:'Build a deep learning recommendation engine or a time-series stock predictor.',
    tech:['PyTorch','Transformers','Prophet'],
    source:'MovieLens / Yahoo Finance',
    learn:'Implement neural networks, embeddings, and time-series forecasting.' },
  { id:'p4', name:'The "Job-Winner" Capstone', month:4, tag:'MLOps', color:'#22d87a',
    desc:'End-to-end full-stack AI application solving a real business problem.',
    tech:['FastAPI','Docker','MLflow','Streamlit','GitHub Actions'],
    source:'Custom/Scraped Data',
    learn:'Deploy models to the cloud, set up CI/CD, and create a portfolio-ready dashboard.' }
];

"""

js_code += "export const WEEKS = [\n"
for w in weeks:
    js_code += f"  {{ id: '{w['id']}', title: '{w['title']}', month: {w['month']}, days: [\n"
    for d in w['days']:
        title = d['title'].replace("'", "\\'")
        desc = d['desc'].replace("'", "\\'")
        theory = d['theory'].replace("'", "\\'")
        js_code += f"    {{ day: {d['day']}, title: '{title}', desc: '{desc}', theory: '{theory}' }},\n"
    js_code += "  ]},\n"
js_code += "];\n"

with open('scratch/new_curriculum.js', 'w') as f:
    f.write(js_code)
