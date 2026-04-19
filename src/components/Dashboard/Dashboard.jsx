import { WEEKS, MONTHS } from '../../data/curriculum';
import { BADGES } from '../../hooks/useTracker';
import MetricCard from './MetricCard';
import LevelBar from './LevelBar';
import Heatmap from './Heatmap';

function findDayData(dayNum) {
  for (const w of WEEKS) {
    const d = w.days.find(d => d.day === dayNum);
    if (d) return d;
  }
  return null;
}

function Hero({ tracker }) {
  return (
    <header className="hero">
      <div className="hero-eyebrow">DataCamp Classroom · Free Subscription</div>
      <h1>
        <span className="gradient">Zero to Job Ready</span><br />
        AI/ML Engineering Path
      </h1>
      <p className="hero-sub">
        A 4-month day-by-day challenge from Python basics to production RAG apps.
        All courses free with DataCamp Classroom subscription.
      </p>
      <div className="hero-stats">
        <div className="stat-box"><span className="stat-num">112</span><span className="stat-label">Days</span></div>
        <div className="stat-box"><span className="stat-num">5</span><span className="stat-label">Courses</span></div>
        <div className="stat-box"><span className="stat-num">4</span><span className="stat-label">Certs</span></div>
        <div className="stat-box"><span className="stat-num">4</span><span className="stat-label">Projects</span></div>
        <div className="stat-box">
          <span className="stat-num" style={{color:'var(--green)'}}>{tracker.streak}</span>
          <span className="stat-label">Day Streak</span>
        </div>
      </div>
    </header>
  );
}

export default function Dashboard({ tracker }) {
  const { daysComplete, coursesComplete, totalCourses, nextDay, resetAll, xp, currentLevel, nextLevel, levelProgress, motivation, earnedBadges } = tracker;
  const totalDays = 112;
  const totalCerts = 4;
  const certsComplete = tracker.certsComplete;
  const nextDayData = nextDay ? findDayData(nextDay) : null;

  return (
    <div className="container">
      <Hero tracker={tracker} />
      <section className="fade-in">
        {daysComplete === 0 && (
          <div className="tip-box">
            <div><strong>Welcome, future AI/ML Engineer!</strong> This tracker follows a 4-month path from Python beginner to job-ready. Start by clicking the ✓ circle next to Day 1 in the Roadmap tab. Each day you complete earns <strong>20 XP</strong>!</div>
          </div>
        )}

        <LevelBar xp={xp} currentLevel={currentLevel} nextLevel={nextLevel} levelProgress={levelProgress} />

        <div className="motivation">{motivation}</div>

        <h2 className="section-head">// Progress Dashboard</h2>
        <div className="dash-grid">
          <MetricCard label="Days Complete" value={`${daysComplete}/${totalDays}`} pct={daysComplete/totalDays*100} />
          <MetricCard label="Weeks" value={`${Math.floor(daysComplete/7)}/${totalDays/7}`} pct={Math.floor(daysComplete/7)/(totalDays/7)*100} color="purple" />
          <MetricCard label="Courses" value={`${coursesComplete}/${totalCourses}`} pct={coursesComplete/totalCourses*100} color="gold" />
          <MetricCard label="Certifications" value={`${certsComplete}/${totalCerts}`} pct={certsComplete/totalCerts*100} color="green" />
          <MetricCard label="Total XP" value={xp} pct={Math.min(xp/7000*100,100)} />
          <MetricCard label="Badges" value={`${earnedBadges.length}/${BADGES.length}`} pct={earnedBadges.length/BADGES.length*100} color="gold" />
        </div>

        <Heatmap tracker={tracker} />

        {nextDayData && (
          <div className="next-action">
            <div className="next-action-label pulse">▸ Your Next Action — Day {nextDay}</div>
            <div className="next-action-title">{nextDayData.title}</div>
            <div className="next-action-desc">{nextDayData.desc}</div>
            <div className="day-xp" style={{marginTop:6}}>+20 XP on completion</div>
          </div>
        )}

        <div className="tracker-actions">
          <button className="btn danger" onClick={() => { if(confirm('Reset all progress? This cannot be undone.')) resetAll(); }}>Reset All</button>
        </div>

        <h2 className="section-head">// Month Overview</h2>
        <div className="cards-grid">
          {MONTHS.map(m => {
            const wks = WEEKS.filter(w => m.weeks.includes(w.id));
            const allDays = wks.flatMap(w => w.days);
            const done = allDays.filter(d => tracker.state.completedDays[d.day]).length;
            const pct = Math.round(done / allDays.length * 100);
            return (
              <div className="info-card" key={m.id}>
                <div style={{position:'absolute',top:0,left:0,right:0,height:3,background:m.color}} />
                <div className="card-tag">Part {m.id}</div>
                <div className="card-title">{m.name}</div>
                <div className="card-desc">{wks.length} weeks · {allDays.length} days</div>
                <div className="card-action">
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:4}}>
                    <span style={{fontFamily:'JetBrains Mono',fontSize:11,color:m.color,fontWeight:700}}>{pct}%</span>
                    <span style={{fontFamily:'JetBrains Mono',fontSize:10,color:'var(--muted)'}}>{done}/{allDays.length}</span>
                  </div>
                  <div className="progress-bar"><div className="progress-fill" style={{width:`${pct}%`,background:m.color}} /></div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
