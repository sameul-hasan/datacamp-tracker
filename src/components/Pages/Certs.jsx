import { CERTIFICATIONS } from '../../data/curriculum';

export default function Certs({ tracker }) {
  return (
    <section className="fade-in">
      <h2 className="section-head">// 4 DataCamp Certifications</h2>
      <div className="cards-grid">
        {CERTIFICATIONS.map(cert => {
          const unlocked = tracker.isCertUnlocked(cert.id);
          const earned = tracker.state.certifications[cert.id];
          return (
            <div key={cert.id} className="info-card">
              <div style={{position:'absolute',top:0,left:0,right:0,height:3,background:cert.color}} />
              <div className="card-tag">Month {cert.month} · Week {cert.week}</div>
              <div className="card-title">{cert.name}</div>
              <div className="card-desc">{cert.desc}</div>
              <div className="card-action" style={{display:'flex',alignItems:'center',gap:8}}>
                <span className={`cert-status ${earned ? 'earned' : unlocked ? 'unlocked' : 'locked'}`}>
                  {earned ? '🏆 Earned' : unlocked ? '🔓 Unlocked' : '🔒 Locked'}
                </span>
                {unlocked && (
                  <button className="btn" onClick={() => tracker.toggleCert(cert.id)}>
                    {earned ? 'Unmark' : 'Mark Earned'}
                  </button>
                )}
              </div>
              <div style={{marginTop:8}}>
                <div style={{fontFamily:'JetBrains Mono',fontSize:10,color:'var(--muted)',marginBottom:4}}>
                  Requires: {cert.reqDays} days complete · You: {tracker.daysComplete}
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width:`${Math.min(tracker.daysComplete/cert.reqDays*100,100)}%`,background:cert.color}} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
