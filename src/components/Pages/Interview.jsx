import { INTERVIEW_RESOURCES } from '../../data/curriculum';

export default function Interview() {
  const diffColors = { Easy:'#22d87a', Medium:'#f4b942', Hard:'#ff5577' };
  return (
    <section className="fade-in">
      <h2 className="section-head">// IBM Interview Prep (Glassdoor-Verified)</h2>

      <div className="interview-grid">
        <div className="interview-card">
          <h4>Stage 1: Online Assessment</h4>
          <p>2 LeetCode questions (Python). 1 Array/Heap + 1 SQL JOIN. Easy–Medium difficulty.</p>
        </div>
        <div className="interview-card">
          <h4>Stage 2: HireVue (~5 Questions)</h4>
          <p>ONE attempt each, no retakes. Behavioral + light technical. Record yourself first!</p>
          <ul style={{marginTop:8}}>
            <li>Tell me about a time you learned something fast</li>
            <li>Explain AI to a non-technical person</li>
            <li>Describe a failed experiment and what you learned</li>
            <li>Cross-team collaboration example</li>
            <li>How do you think about responsible AI?</li>
          </ul>
        </div>
        <div className="interview-card">
          <h4>Stage 3: Technical Deep-Dive</h4>
          <p>Project walkthrough + RAG/LLM concepts + algorithms. Demo your hero project!</p>
          <ul style={{marginTop:8}}>
            <li>Transformer vs RNN/LSTM (self-attention, parallelism)</li>
            <li>RAG vs Fine-tuning vs Prompt Engineering</li>
            <li>ROC-AUC curve explanation</li>
            <li>Model drift detection (KS test, Evidently AI)</li>
            <li>CNN architecture (Conv→ReLU→Pool→FC)</li>
          </ul>
        </div>
        <div className="interview-card">
          <h4>Stage 4: Management Rounds</h4>
          <p>3 rounds, different levels, similar questions.</p>
          <ul style={{marginTop:8}}>
            <li>"Why IBM?" — scale + ethics + watsonx.ai</li>
            <li>Hero project in STAR format</li>
            <li>LLM metrics: ROUGE-L, BERTScore, FM-Eval</li>
            <li>Data governance: Great Expectations + DVC</li>
          </ul>
        </div>
        <div className="interview-card">
          <h4>💰 Salary: $120K – $181K</h4>
          <p>IBM Entry-Level AI/ML Engineer. Hybrid/Remote.</p>
          <p style={{marginTop:8}}>GenAI/LLM +10-60% premium. MLOps +15-25%.</p>
        </div>
      </div>

      <h2 className="section-head">// LeetCode Must-Solve ({INTERVIEW_RESOURCES.leetcode.length} Problems)</h2>
      <div className="course-grid">
        {INTERVIEW_RESOURCES.leetcode.map((p,i) => (
          <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="course-pill" style={{textDecoration:'none'}}>
            <div style={{flex:1}}>
              <div className="course-name" style={{color:'var(--text)'}}>{p.name}</div>
              <div style={{fontSize:9,color:'var(--muted)',fontFamily:'JetBrains Mono'}}>{p.tag}</div>
            </div>
            <span className="tag" style={{background:`${diffColors[p.diff]}20`,color:diffColors[p.diff]}}>{p.diff}</span>
          </a>
        ))}
      </div>

      <h2 className="section-head">// SQL LeetCode</h2>
      <div className="course-grid">
        {INTERVIEW_RESOURCES.sql.map((p,i) => (
          <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="course-pill" style={{textDecoration:'none'}}>
            <span className="course-name" style={{color:'var(--text)'}}>{p.name}</span>
            <span className="tag" style={{background:`${diffColors[p.diff]}20`,color:diffColors[p.diff]}}>{p.diff}</span>
          </a>
        ))}
      </div>

      <h2 className="section-head">// Essential Reading & Courses</h2>
      <div className="course-grid">
        {INTERVIEW_RESOURCES.reading.map((r,i) => (
          <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" className="course-pill" style={{textDecoration:'none'}}>
            <span className="course-name">{r.name}</span>
            <span style={{fontSize:9,color:'var(--muted)',fontFamily:'JetBrains Mono'}}>{r.type}</span>
          </a>
        ))}
      </div>

      <h2 className="section-head">// IBM-Specific Prep</h2>
      <div className="course-grid">
        {INTERVIEW_RESOURCES.ibm.map((r,i) => (
          <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" className="course-pill" style={{textDecoration:'none'}}>
            <span className="course-name">{r.name}</span>
            <span style={{fontSize:9,color:'var(--muted)',fontFamily:'JetBrains Mono'}}>{r.type}</span>
          </a>
        ))}
      </div>

      <h2 className="section-head">// Mock Interview Platforms</h2>
      <div className="course-grid">
        {INTERVIEW_RESOURCES.mock.map((r,i) => (
          <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" className="course-pill" style={{textDecoration:'none'}}>
            <span className="course-name">{r.name}</span>
            <span style={{fontSize:9,color:'var(--muted)',fontFamily:'JetBrains Mono'}}>{r.type}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
