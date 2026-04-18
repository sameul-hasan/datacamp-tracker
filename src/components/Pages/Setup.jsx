import { SETUP_GUIDE } from '../../data/curriculum';

export default function Setup() {
  return (
    <section className="fade-in">
      <h2 className="section-head">// {SETUP_GUIDE.title}</h2>
      <div className="tip-box"><span className="tip-icon">⚙️</span><div>Complete this setup on <strong>Day 5</strong> of your roadmap. This is your foundation for all 7 projects.</div></div>
      {SETUP_GUIDE.steps.map((s,i) => (
        <div key={i} className="interview-card" style={{marginBottom:12}}>
          <h4>Step {i+1}: {s.title}</h4>
          <pre style={{background:'var(--bg)',padding:12,borderRadius:8,fontSize:11,overflowX:'auto',color:'var(--accent)',fontFamily:'JetBrains Mono',margin:'8px 0'}}>{s.cmd}</pre>
          <p style={{fontSize:12,color:'var(--muted)'}}>💡 {s.note}</p>
        </div>
      ))}
    </section>
  );
}
