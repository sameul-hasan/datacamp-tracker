import { HOW_TO_USE } from '../../data/curriculum';

export default function Guide() {
  return (
    <section className="fade-in">
      <h2 className="section-head">// How to Use This Tracker</h2>
      <div className="tip-box"><span className="tip-icon">📖</span><div>Read this page first! It explains <strong>exactly how to follow</strong> the 6-month system, what each tab does, and the daily routine you should stick to.</div></div>
      <div className="cards-grid">
        {HOW_TO_USE.map((item,i) => (
          <div key={i} className="info-card">
            <div style={{position:'absolute',top:0,left:0,right:0,height:3,background:`hsl(${i*30},70%,55%)`}} />
            <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
              <span style={{fontSize:24}}>{item.icon}</span>
              <div className="card-title" style={{marginBottom:0}}>{item.title}</div>
            </div>
            <div className="card-desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
