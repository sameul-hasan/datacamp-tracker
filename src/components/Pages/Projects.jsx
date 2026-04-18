import { useState } from 'react';
import { PROJECTS } from '../../data/curriculum';

export default function Projects() {
  const [expanded, setExpanded] = useState(null);
  return (
    <section className="fade-in">
      <h2 className="section-head">// {PROJECTS.length} Portfolio Projects</h2>
      <div className="tip-box"><span className="tip-icon">💡</span><div>Click any project card to see full details: tech stack, dataset, setup commands, file structure, resources, and showcasing tips.</div></div>
      {PROJECTS.map(p => (
        <div key={p.id} style={{marginBottom:16}}>
          <div className={`info-card ${p.hero ? 'hero-card' : ''}`} style={{cursor:'pointer'}} onClick={() => setExpanded(expanded === p.id ? null : p.id)}>
            {!p.hero && <div style={{position:'absolute',top:0,left:0,right:0,height:3,background:p.color}} />}
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
              <div style={{flex:1}}>
                <div className="card-tag" style={{color:p.color}}>{p.hero ? '⭐ Hero Project' : `Month ${p.month}`} · {p.tag}</div>
                <div className="card-title">{p.name}</div>
                <div className="card-desc">{p.desc}</div>
                {p.tech && <div style={{display:'flex',flexWrap:'wrap',gap:4,marginTop:8}}>{p.tech.map(t => <span key={t} className="skill-tag" style={{fontSize:9,padding:'2px 8px'}}>{t}</span>)}</div>}
              </div>
              <span style={{color:'var(--muted)',fontSize:12,marginTop:4}}>{expanded === p.id ? '▲' : '▼'}</span>
            </div>
          </div>
          {expanded === p.id && (
            <div style={{background:'var(--bg-2)',border:'1px solid var(--border)',borderTop:'none',borderRadius:'0 0 12px 12px',padding:20}}>
              <div className="interview-grid" style={{gap:12}}>
                {p.dataset?.url && <div className="interview-card"><h4>📊 Dataset</h4><p><a href={p.dataset.url} target="_blank" rel="noopener noreferrer">{p.dataset.name}</a></p></div>}
                {p.outcomes && <div className="interview-card"><h4>🎯 Learning Outcomes</h4><ul>{p.outcomes.map((o,i) => <li key={i}>{o}</li>)}</ul></div>}
                {p.setup && <div className="interview-card"><h4>⚙️ Setup Commands</h4><pre style={{background:'var(--bg)',padding:10,borderRadius:8,fontSize:11,overflowX:'auto',color:'var(--accent)',fontFamily:'JetBrains Mono'}}>{p.setup.join('\n')}</pre></div>}
                {p.structure && <div className="interview-card"><h4>📁 File Structure</h4><pre style={{background:'var(--bg)',padding:10,borderRadius:8,fontSize:11,color:'var(--muted)',fontFamily:'JetBrains Mono'}}>{p.structure.join('\n')}</pre></div>}
                {p.resources && <div className="interview-card"><h4>📚 Resources</h4><ul>{p.resources.map((r,i) => <li key={i}><a href={r.url} target="_blank" rel="noopener noreferrer">{r.name}</a></li>)}</ul></div>}
                {p.showcase && <div className="interview-card"><h4>📣 How to Showcase</h4><p>{p.showcase}</p></div>}
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
