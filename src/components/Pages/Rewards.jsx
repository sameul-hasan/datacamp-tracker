import { LEVELS, BADGES } from '../../hooks/useTracker';

export default function Rewards({ tracker }) {
  const { xp, currentLevel, nextLevel, levelProgress, earnedBadges, lockedBadges } = tracker;
  return (
    <section className="fade-in">
      <h2 className="section-head">// Your Rewards & Achievements</h2>
      <div className="tip-box">
        <span className="tip-icon">⭐</span>
        <div>Earn XP by completing days (+20), courses (+50), and certifications (+200). Unlock badges for bonus XP. Reach Level 10 to become <strong>Job Ready</strong>!</div>
      </div>
      <div className="level-bar">
        <span className="level-icon" style={{fontSize:40}}>{currentLevel.level >= 8 ? '🏆' : currentLevel.level >= 5 ? '⚡' : '🌱'}</span>
        <div className="level-info">
          <div className="level-title" style={{color:currentLevel.color,fontSize:18}}>Level {currentLevel.level}: {currentLevel.title}</div>
          <div className="level-xp">{xp} XP total{nextLevel ? ` · ${nextLevel.minXP - xp} XP to Level ${nextLevel.level}` : ''}</div>
        </div>
        <div className="level-track">
          <div className="progress-bar" style={{height:10}}><div className="progress-fill" style={{width:`${levelProgress}%`,background:currentLevel.color}} /></div>
        </div>
      </div>
      <h3 style={{fontSize:12,fontFamily:'JetBrains Mono',color:'var(--gold)',margin:'24px 0 12px',letterSpacing:1,textTransform:'uppercase'}}>🏅 Earned Badges ({earnedBadges.length})</h3>
      <div className="badge-grid">
        {earnedBadges.map(b => (
          <div key={b.id} className="badge-card earned">
            <div className="badge-icon">{b.icon}</div>
            <div className="badge-name">{b.name}</div>
            <div className="badge-desc">{b.desc}</div>
            <div className="badge-xp">+{b.xp} XP</div>
          </div>
        ))}
        {earnedBadges.length === 0 && <div style={{color:'var(--muted)',fontSize:13,padding:20}}>Complete your first day to earn your first badge!</div>}
      </div>
      <h3 style={{fontSize:12,fontFamily:'JetBrains Mono',color:'var(--muted)',margin:'24px 0 12px',letterSpacing:1,textTransform:'uppercase'}}>🔒 Locked Badges ({lockedBadges.length})</h3>
      <div className="badge-grid">
        {lockedBadges.map(b => (
          <div key={b.id} className="badge-card locked">
            <div className="badge-icon">{b.icon}</div>
            <div className="badge-name">{b.name}</div>
            <div className="badge-desc">{b.desc}</div>
            <div className="badge-xp">+{b.xp} XP</div>
          </div>
        ))}
      </div>
      <h3 style={{fontSize:12,fontFamily:'JetBrains Mono',color:'var(--muted)',margin:'24px 0 12px',letterSpacing:1,textTransform:'uppercase'}}>📊 All Levels</h3>
      <div className="cards-grid">
        {LEVELS.map(l => (
          <div key={l.level} className="info-card" style={{padding:14,opacity: xp >= l.minXP ? 1 : 0.4}}>
            <div style={{position:'absolute',top:0,left:0,right:0,height:3,background:l.color}} />
            <div style={{display:'flex',alignItems:'center',gap:8}}>
              <span style={{fontSize:20}}>{xp >= l.minXP ? '✅' : '🔒'}</span>
              <div>
                <div style={{fontSize:13,fontWeight:700,color:l.color}}>Level {l.level}: {l.title}</div>
                <div style={{fontSize:10,fontFamily:'JetBrains Mono',color:'var(--muted)'}}>{l.minXP} XP required</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
