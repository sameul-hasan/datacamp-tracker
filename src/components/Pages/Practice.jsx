import { useState } from 'react';
import { PRACTICE_PROBLEMS } from '../../data/curriculum';

export default function Practice() {
  const cats = Object.keys(PRACTICE_PROBLEMS);
  const [cat, setCat] = useState(cats[0]);
  const diffColors = { Easy:'#22d87a', Medium:'#f4b942', Hard:'#ff5577', Concept:'#9b6dff' };
  
  return (
    <section className="fade-in">
      <h2 className="section-head">// Practice Problems</h2>
      <div className="tip-box"><span className="tip-icon">🧪</span><div>Practice these problems to reinforce what you learn each month. Try solving them <strong>without looking at solutions first</strong>.</div></div>
      <div className="tracker-actions">
        {cats.map(c => <button key={c} className={`btn ${cat === c ? '' : 'danger'}`} style={cat === c ? {} : {borderColor:'var(--border)',color:'var(--muted)',background:'transparent'}} onClick={() => setCat(c)}>{c}</button>)}
      </div>
      {PRACTICE_PROBLEMS[cat].map((p,i) => (
        <div key={i} className="interview-card" style={{marginBottom:10}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:6}}>
            <span className="tag" style={{background:`${diffColors[p.difficulty]}20`,color:diffColors[p.difficulty]}}>{p.difficulty}</span>
            <span style={{fontSize:10,color:'var(--muted)',fontFamily:'JetBrains Mono'}}>{p.topic}</span>
          </div>
          <p style={{fontSize:13,color:'var(--text)',lineHeight:1.6}}>{p.q}</p>
        </div>
      ))}
    </section>
  );
}
