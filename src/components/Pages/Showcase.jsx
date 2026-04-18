import { SHOWCASE_GUIDE } from '../../data/curriculum';

export default function Showcase() {
  return (
    <section className="fade-in">
      <h2 className="section-head">// Showcasing Your Work</h2>
      <div className="tip-box"><span className="tip-icon">📣</span><div>Your portfolio is what gets you hired. Follow these guides to present your projects like a <strong>senior engineer</strong>.</div></div>
      <div className="cards-grid">
        {SHOWCASE_GUIDE.map((g,i) => (
          <div key={i} className="info-card">
            <div style={{position:'absolute',top:0,left:0,right:0,height:3,background:`hsl(${i*60},70%,55%)`}} />
            <div className="card-title">{g.title}</div>
            <ul style={{paddingLeft:16,marginTop:8}}>{g.steps.map((s,j) => <li key={j} style={{fontSize:12,color:'var(--muted)',lineHeight:1.8}}>{s}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}
