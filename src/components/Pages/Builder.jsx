export default function Builder() {
  return (
    <section className="fade-in">
      <div className="builder-hero">
        <div className="builder-avatar"><img src="https://avatars.githubusercontent.com/u/147124774?v=4" alt="Samuel Hasan" /></div>
        <div className="builder-name">Samuel Hasan</div>
        <div className="builder-role">Software Engineering Student · AI/ML Engineer Path</div>
        <div className="builder-bio">
          Engineered this rigorous 168-session professional journey to bridge the gap between foundational
          data science and production-grade AI engineering. Targeting entry-level AI/ML roles with
          a focus on IBM watsonx, RAG pipelines, and full-stack MLOps.
        </div>
        <div className="builder-links">
          <a href="mailto:sameulhasanbd@gmail.com" className="builder-link">📧 sameulhasanbd@gmail.com</a>
          <a href="https://www.linkedin.com/in/sameulhasan/" target="_blank" rel="noopener noreferrer" className="builder-link">💼 LinkedIn</a>
          <a href="https://github.com/sameul-hasan" target="_blank" rel="noopener noreferrer" className="builder-link">🐙 GitHub</a>
        </div>
        <div className="builder-skills">
          {['Python','NumPy','Pandas','scikit-learn','PyTorch','HuggingFace','LangChain','OpenAI API','Docker','FastAPI','MLflow','ChromaDB','SQL','Git'].map(s => (
            <span key={s} className="skill-tag">{s}</span>
          ))}
        </div>
      </div>
      <h2 className="section-head">// About This Tracker</h2>
      <div className="interview-grid">
        <div className="interview-card">
          <h4>🎯 Purpose</h4>
          <p>A complete 168-session professional journey designed for beginners with a DataCamp Classroom subscription. Covers Math, ML, Deep Learning, NLP, LLMs, RAG, and MLOps — everything needed for an entry-level AI/ML Engineer role.</p>
        </div>
        <div className="interview-card">
          <h4>📋 What's Included</h4>
          <ul>
            <li>168 session-by-session study plan</li>
            <li>31 core DataCamp courses (all free with Classroom)</li>
            <li>4 DataCamp certifications</li>
            <li>4 milestone projects</li>
            <li>Interview prep with LeetCode links</li>
            <li>XP reward system with 14 badges</li>
            <li>Job market intelligence dashboard</li>
          </ul>
        </div>
        <div className="interview-card">
          <h4>💡 Target Outcome</h4>
          <p>Entry-Level AI/ML Engineer at IBM or similar company. Salary range: <strong>$120K – $181K</strong>. The curriculum builds a portfolio of 4 milestone projects including a capstone application that demonstrates production-ready AI engineering skills.</p>
        </div>
        <div className="interview-card">
          <h4>🛠️ Built With</h4>
          <ul>
            <li>React 19 + Vite</li>
            <li>Vanilla CSS (no frameworks)</li>
            <li>Premium fonts: Inter, Outfit, Space Grotesk, JetBrains Mono</li>
            <li>localStorage for progress persistence</li>
            <li>XP/Badge reward engine</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
