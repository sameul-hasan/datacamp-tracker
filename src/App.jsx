import { useState } from 'react';
import { WEEKS, MONTHS, COURSES, CERTIFICATIONS, PROJECTS, TAG_COLORS, SETUP_GUIDE, PRACTICE_PROBLEMS, SHOWCASE_GUIDE, DAILY_THEORY, HOW_TO_USE, INTERVIEW_RESOURCES } from './data/curriculum';
import { useTracker, BADGES, LEVELS } from './hooks/useTracker';
import './index.css';

const TABS = [
  { id:'dashboard', label:'🏠 Home' },
  { id:'roadmap', label:'🗺️ Roadmap' },
  { id:'courses', label:'📚 Courses' },
  { id:'certs', label:'🏆 Certs' },
  { id:'rewards', label:'⭐ Rewards' },
  { id:'projects', label:'📁 Projects' },
  { id:'interview', label:'🎯 Interview' },
  { id:'setup', label:'⚙️ Setup' },
  { id:'practice', label:'🧪 Practice' },
  { id:'showcase', label:'📣 Showcase' },
  { id:'guide', label:'📖 Guide' },
];

function App() {
  const [tab, setTab] = useState('dashboard');
  const tracker = useTracker();

  return (
    <>
      {tracker.newBadge && (
        <div className="badge-toast">
          <span className="badge-toast-icon confetti">{tracker.newBadge.icon}</span>
          <div className="badge-toast-text">
            <h4>Badge Unlocked!</h4>
            <p>{tracker.newBadge.name} — {tracker.newBadge.desc}</p>
            <span className="badge-toast-xp">+{tracker.newBadge.xp} XP</span>
          </div>
        </div>
      )}

      <div className="dc-banner">
        <span className="dot" /><span>DataCamp Classroom Tracker</span>
        <span className="dot" /><span>Level {tracker.currentLevel.level}: {tracker.currentLevel.title}</span>
        <span className="dot" /><span>{tracker.xp} XP</span>
        <span className="dot" />
      </div>

      <nav className="nav-wrap">
        <div className="nav-inner">
          {TABS.map(t => (
            <button key={t.id} className={`nav-btn ${tab === t.id ? 'active' : ''}`}
              onClick={() => setTab(t.id)}>{t.label}</button>
          ))}
          <span className="nav-sep">|</span>
          <button className={`nav-btn ${tab === 'market' ? 'active' : ''}`} onClick={() => setTab('market')}>📊 Market</button>
          <button className={`nav-btn ${tab === 'builder' ? 'active' : ''}`} onClick={() => setTab('builder')}>👤 Builder</button>
        </div>
      </nav>

      <div className="app-container">
        <Hero tracker={tracker} />

        {tab === 'dashboard' && <Dashboard tracker={tracker} />}
        {tab === 'roadmap' && <Roadmap tracker={tracker} />}
        {tab === 'courses' && <CoursesSection tracker={tracker} />}
        {tab === 'certs' && <CertsSection tracker={tracker} />}
        {tab === 'rewards' && <RewardsSection tracker={tracker} />}
        {tab === 'projects' && <ProjectsSection />}
        {tab === 'interview' && <InterviewSection />}
        {tab === 'setup' && <SetupSection />}
        {tab === 'practice' && <PracticeSection />}
        {tab === 'showcase' && <ShowcaseSection />}
        {tab === 'guide' && <GuideSection />}
        {tab === 'market' && <MarketSection />}
        {tab === 'builder' && <BuilderSection />}
      </div>

      <footer className="app-footer">
        Built by Samuel Hasan · 168 Days · 31 Courses · 4 Certs · 5 Projects
      </footer>
    </>
  );
}

/* ═══ HERO ═══ */
function Hero({ tracker }) {
  return (
    <header className="hero">
      <div className="hero-eyebrow">DataCamp Classroom · Free Subscription</div>
      <h1>
        <span className="gradient-text">Zero to Job Ready</span><br />
        AI/ML Engineering Path
      </h1>
      <p className="hero-sub">
        A 6-month day-by-day curriculum from Python basics to production RAG apps.
        All courses free with DataCamp Classroom subscription.
      </p>
      <div className="hero-stats">
        <div className="stat-box"><span className="stat-num">168</span><span className="stat-label">Days</span></div>
        <div className="stat-box"><span className="stat-num">31</span><span className="stat-label">Courses</span></div>
        <div className="stat-box"><span className="stat-num">4</span><span className="stat-label">Certs</span></div>
        <div className="stat-box"><span className="stat-num">5</span><span className="stat-label">Projects</span></div>
        <div className="stat-box">
          <span className="stat-num" style={{color:'var(--green)'}}>{tracker.streak}</span>
          <span className="stat-label">Day Streak</span>
        </div>
      </div>
    </header>
  );
}

/* ═══ DASHBOARD ═══ */
function Dashboard({ tracker }) {
  const { daysComplete, totalDays, coursesComplete, totalCourses, certsComplete, totalCerts, nextDay, resetAll, xp, currentLevel, nextLevel, levelProgress, motivation, earnedBadges } = tracker;
  const nextDayData = nextDay ? findDayData(nextDay) : null;

  return (
    <section className="fade-in">
      {daysComplete === 0 && (
        <div className="tip-box">
          <span className="tip-icon">💡</span>
          <div><strong>Welcome, future AI/ML Engineer!</strong> This tracker follows a 6-month path from Python beginner to job-ready. Start by clicking the ✓ circle next to Day 1 in the Roadmap tab. Each day you complete earns <strong>20 XP</strong>!</div>
        </div>
      )}

      <div className="level-bar">
        <span className="level-icon">{currentLevel.level >= 8 ? '🏆' : currentLevel.level >= 5 ? '⚡' : '🌱'}</span>
        <div className="level-info">
          <div className="level-title" style={{color:currentLevel.color}}>Lvl {currentLevel.level}: {currentLevel.title}</div>
          <div className="level-xp">{xp} XP{nextLevel ? ` · ${nextLevel.minXP - xp} XP to next level` : ' · MAX LEVEL!'}</div>
        </div>
        <div className="level-track">
          <div className="progress-bar"><div className="progress-fill" style={{width:`${levelProgress}%`,background:currentLevel.color}} /></div>
        </div>
      </div>

      <div className="motivation-card">{motivation}</div>

      <h2 className="section-head">// Progress Dashboard</h2>
      <div className="dash-grid">
        <MetricCard label="Days Complete" value={`${daysComplete}/${totalDays}`} pct={daysComplete/totalDays*100} />
        <MetricCard label="Weeks" value={`${Math.floor(daysComplete/7)}/${totalDays/7}`} pct={Math.floor(daysComplete/7)/(totalDays/7)*100} color="purple" />
        <MetricCard label="Courses" value={`${coursesComplete}/${totalCourses}`} pct={coursesComplete/totalCourses*100} color="gold" />
        <MetricCard label="Certifications" value={`${certsComplete}/${totalCerts}`} pct={certsComplete/totalCerts*100} color="green" />
        <MetricCard label="Total XP" value={xp} pct={Math.min(xp/7000*100,100)} />
        <MetricCard label="Badges" value={`${earnedBadges.length}/${BADGES.length}`} pct={earnedBadges.length/BADGES.length*100} color="gold" />
      </div>

      {nextDayData && (
        <div className="next-action">
          <div className="next-action-label pulse">▸ Your Next Action — Day {nextDay}</div>
          <div className="next-action-title">{nextDayData.topic}</div>
          <div className="next-action-desc">{nextDayData.task}</div>
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
              <div className="card-tag">Month {m.id}</div>
              <div className="card-title">{m.title}</div>
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
  );
}

function MetricCard({ label, value, pct, color = '' }) {
  return (
    <div className="metric-card">
      <div className="metric-label">{label}</div>
      <div className="metric-value">{value}</div>
      <div className="progress-bar">
        <div className={`progress-fill ${color}`} style={{width:`${Math.min(pct,100)}%`}} />
      </div>
    </div>
  );
}

/* ═══ ROADMAP ═══ */
function Roadmap({ tracker }) {
  const [expandAll, setExpandAll] = useState(false);

  return (
    <section className="fade-in">
      <h2 className="section-head">// Day-by-Day Roadmap</h2>
      <div className="tracker-actions">
        <button className="btn" onClick={() => setExpandAll(prev => !prev)}>
          {expandAll ? 'Collapse All' : 'Expand All'}
        </button>
      </div>

      {MONTHS.map(month => (
        <div key={month.id}>
          <div className="phase-header" style={{'--phase-color': month.color}}>
            <div style={{position:'absolute',top:0,left:0,right:0,height:3,background:month.color}} />
            <div className="phase-num">Month {month.id} / 06</div>
            <div className="phase-title">{month.title}</div>
          </div>
          {WEEKS.filter(w => month.weeks.includes(w.id)).map(week => (
            <WeekCard key={week.id} week={week} tracker={tracker} forceOpen={expandAll} />
          ))}
        </div>
      ))}
    </section>
  );
}

function WeekCard({ week, tracker, forceOpen }) {
  const [open, setOpen] = useState(false);
  const isOpen = forceOpen || open;
  const progress = tracker.weekProgress(week.id);
  const isComplete = progress === 100;
  const weekNum = parseInt(week.id.replace('w',''));

  return (
    <div className={`week-card ${isOpen ? 'open' : ''} ${isComplete ? 'complete' : ''}`}>
      <div className="week-header" onClick={() => setOpen(p => !p)}>
        <div className="week-left">
          <span className="week-num">W{String(weekNum).padStart(2,'0')}</span>
          <span className="week-title">{week.title}</span>
        </div>
        <div className="week-right">
          <span className="week-progress">{progress}%</span>
          <button className="btn" style={{padding:'4px 10px',fontSize:9}} onClick={e => { e.stopPropagation(); tracker.toggleWeek(week.id); }}>
            {isComplete ? '✓ Done' : 'Mark All'}
          </button>
          <span className="week-chevron">▼</span>
        </div>
      </div>
      <div className="week-body">
        {week.days.map(day => {
          const isDone = tracker.state.completedDays[day.day];
          const isTarget = tracker.nextDay === day.day;
          const isWeekend = day.dow === 'SAT' || day.dow === 'SUN';
          const course = day.courseId ? COURSES.find(c => c.id === day.courseId) : null;
          const tagColor = TAG_COLORS[day.tag] || 'var(--muted)';
          return (
            <div key={day.day}
              className={`day-row ${isDone ? 'completed' : ''} ${isTarget ? 'target' : ''} ${isWeekend ? 'weekend' : ''}`}>
              <div className="day-num-col">
                <div className="day-dow">{day.dow}</div>
                <div className="day-label">D{day.day}</div>
                <button className={`day-toggle ${isDone ? 'done' : ''}`}
                  onClick={() => tracker.toggleDay(day.day)}>{isDone ? '✓' : ''}</button>
              </div>
              <div className="day-content">
                <div className="day-top">
                  <span className="day-topic">{day.topic}</span>
                  <span className="tag" style={{background:`${tagColor}20`,color:tagColor}}>{day.tag}</span>
                </div>
                <div className="day-task">{day.task}</div>
                {DAILY_THEORY[day.day] && (
                  <div style={{fontSize:11,color:'var(--purple)',marginTop:4,lineHeight:1.5,background:'rgba(155,109,255,0.06)',padding:'6px 10px',borderRadius:6,border:'1px solid rgba(155,109,255,0.15)'}}>
                    🧮 {DAILY_THEORY[day.day].math}
                    {DAILY_THEORY[day.day].resource && <> · <a href={DAILY_THEORY[day.day].resource} target="_blank" rel="noopener noreferrer" style={{fontSize:10}}>📎 Resource</a></>}
                  </div>
                )}
                {course && (
                  <a href={course.url} target="_blank" rel="noopener noreferrer" className="day-course-link">
                    📘 {course.name}
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ═══ COURSES ═══ */
function CoursesSection({ tracker }) {
  return (
    <section className="fade-in">
      <h2 className="section-head">// 31 DataCamp Courses (All Free with Classroom)</h2>
      {MONTHS.map(month => {
        const monthCourses = COURSES.filter(c => c.month === month.id);
        if (!monthCourses.length) return null;
        return (
          <div key={month.id}>
            <h3 style={{fontSize:13,fontWeight:700,color:month.color,margin:'20px 0 10px',fontFamily:'JetBrains Mono',letterSpacing:1,textTransform:'uppercase'}}>
              Month {month.id}: {month.title}
            </h3>
            <div className="course-grid">
              {monthCourses.map(c => {
                const isDone = tracker.state.completedCourses[c.id];
                return (
                  <div key={c.id} className={`course-pill ${isDone ? 'done' : ''}`}>
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className="course-name">{c.name}</a>
                    <button className={`course-check ${isDone ? 'done' : ''}`}
                      onClick={() => tracker.toggleCourse(c.id)}>{isDone ? '✓' : ''}</button>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}

/* ═══ CERTS ═══ */
function CertsSection({ tracker }) {
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

/* ═══ PROJECTS ═══ */
function ProjectsSection() {
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
            <div style={{background:'var(--bg2)',border:'1px solid var(--border)',borderTop:'none',borderRadius:'0 0 12px 12px',padding:20}}>
              <div className="interview-grid" style={{gap:12}}>
                {p.dataset?.url && <div className="interview-card"><h4>📊 Dataset</h4><p><a href={p.dataset.url} target="_blank" rel="noopener noreferrer">{p.dataset.name}</a></p></div>}
                {p.outcomes && <div className="interview-card"><h4>🎯 Learning Outcomes</h4><ul>{p.outcomes.map((o,i) => <li key={i}>{o}</li>)}</ul></div>}
                {p.setup && <div className="interview-card"><h4>⚙️ Setup Commands</h4><pre style={{background:'var(--bg)',padding:10,borderRadius:8,fontSize:11,overflowX:'auto',color:'var(--dc)',fontFamily:'JetBrains Mono'}}>{p.setup.join('\n')}</pre></div>}
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

/* ═══ SETUP ═══ */
function SetupSection() {
  return (
    <section className="fade-in">
      <h2 className="section-head">// {SETUP_GUIDE.title}</h2>
      <div className="tip-box"><span className="tip-icon">⚙️</span><div>Complete this setup on <strong>Day 5</strong> of your roadmap. This is your foundation for all 7 projects.</div></div>
      {SETUP_GUIDE.steps.map((s,i) => (
        <div key={i} className="interview-card" style={{marginBottom:12}}>
          <h4>Step {i+1}: {s.title}</h4>
          <pre style={{background:'var(--bg)',padding:12,borderRadius:8,fontSize:11,overflowX:'auto',color:'var(--dc)',fontFamily:'JetBrains Mono',margin:'8px 0'}}>{s.cmd}</pre>
          <p style={{fontSize:12,color:'var(--muted)'}}>💡 {s.note}</p>
        </div>
      ))}
    </section>
  );
}

/* ═══ PRACTICE ═══ */
function PracticeSection() {
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

/* ═══ SHOWCASE ═══ */
function ShowcaseSection() {
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

/* ═══ INTERVIEW ═══ */
function InterviewSection() {
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

/* ═══ GUIDE ═══ */
function GuideSection() {
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

/* ═══ MARKET ═══ */
function MarketSection() {
  return (
    <section className="fade-in">
      <h2 className="section-head">// Job Market Intelligence (2026)</h2>
      <div className="interview-grid">
        <div className="interview-card">
          <h4>🏢 Top Employers Hiring</h4>
          <ul>
            <li><strong>IBM</strong> — 3x entry-level hiring in 2026. watsonx focus.</li>
            <li><strong>Google</strong> — L3/L4 ML roles. Heavy LeetCode.</li>
            <li><strong>Meta</strong> — Recommendation systems. Strong equity.</li>
            <li><strong>Amazon/AWS</strong> — Applied Scientist, SDE-ML.</li>
            <li><strong>Microsoft</strong> — Azure AI, Copilot ecosystem.</li>
            <li><strong>NVIDIA</strong> — GPU-native AI engineering.</li>
          </ul>
        </div>
        <div className="interview-card">
          <h4>💵 Salary Ranges (Entry-Level)</h4>
          <ul>
            <li><strong>IBM:</strong> $120K – $181K base</li>
            <li><strong>Google:</strong> $130K – $165K base ($180K–$280K TC)</li>
            <li><strong>Meta:</strong> $125K – $155K base ($170K–$250K TC)</li>
            <li><strong>Amazon:</strong> $115K – $145K base</li>
            <li><strong>Microsoft:</strong> $115K – $140K base</li>
            <li><strong>Startups:</strong> $100K – $135K + equity</li>
          </ul>
        </div>
        <div className="interview-card">
          <h4>🔍 Job Titles to Search</h4>
          <ul>
            <li>AI/ML Engineer (Entry Level)</li>
            <li>Junior Machine Learning Engineer</li>
            <li>ML Engineer I / Associate</li>
            <li>Applied AI Engineer</li>
            <li>Junior Data Scientist</li>
            <li>MLOps Engineer (Junior)</li>
            <li>NLP Engineer</li>
            <li>Software Engineer (AI/ML focus)</li>
          </ul>
        </div>
        <div className="interview-card">
          <h4>✅ Must-Have Skills</h4>
          <ul>
            <li><strong>Python</strong> — Non-negotiable</li>
            <li><strong>PyTorch / TensorFlow</strong> — Framework fluency</li>
            <li><strong>SQL</strong> — Data pipeline fundamentals</li>
            <li><strong>GenAI</strong> — RAG, LLMs, fine-tuning</li>
            <li><strong>MLOps</strong> — Docker, CI/CD, monitoring</li>
            <li><strong>Git/GitHub</strong> — Version control + portfolio</li>
            <li><strong>Cloud</strong> — AWS/GCP/IBM Cloud</li>
          </ul>
        </div>
        <div className="interview-card">
          <h4>⚠️ What Job Posts Don't Say</h4>
          <ul>
            <li>"Entry-level" expects internships or project work</li>
            <li>Portfolio beats certifications every time</li>
            <li>You compete against MS/PhD holders</li>
            <li>System design thinking {'>'} memorizing algorithms</li>
            <li>Communication is explicitly tested (HireVue)</li>
          </ul>
        </div>
        <div className="interview-card">
          <h4>📜 Certification Value</h4>
          <ul>
            <li><strong>DataCamp certs:</strong> Good signal, pass HR filters</li>
            <li><strong>Cloud certs (AWS/GCP):</strong> Highly valued for production roles</li>
            <li><strong>University degree:</strong> Still the gold standard</li>
            <li><strong>Key insight:</strong> Certs open doors, projects close deals</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ═══ REWARDS ═══ */
function RewardsSection({ tracker }) {
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

/* ═══ BUILDER ═══ */
function BuilderSection() {
  return (
    <section className="fade-in">
      <div className="builder-hero">
        <div className="builder-avatar"><img src="https://avatars.githubusercontent.com/u/147124774?v=4" alt="Samuel Hasan" /></div>
        <div className="builder-name">Samuel Hasan</div>
        <div className="builder-role">Software Engineering Student · AI/ML Engineer Path</div>
        <div className="builder-bio">
          Engineered this 6-month zero-to-job-ready curriculum to bridge the gap between foundational
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
          <p>A complete 6-month learning tracker designed for beginners with a DataCamp Classroom subscription. Covers Python, SQL, ML, Deep Learning, LLMs, RAG, and MLOps — everything needed for an entry-level AI/ML Engineer role.</p>
        </div>
        <div className="interview-card">
          <h4>📋 What's Included</h4>
          <ul>
            <li>168 day-by-day study plan</li>
            <li>31 DataCamp courses (all free with Classroom)</li>
            <li>4 DataCamp certifications</li>
            <li>5 portfolio projects</li>
            <li>IBM interview prep with LeetCode links</li>
            <li>XP reward system with 14 badges</li>
            <li>Job market intelligence dashboard</li>
          </ul>
        </div>
        <div className="interview-card">
          <h4>💡 Target Outcome</h4>
          <p>Entry-Level AI/ML Engineer at IBM or similar company. Salary range: <strong>$120K – $181K</strong>. The curriculum builds a portfolio of 5 projects including a hero RAG application that demonstrates production-ready AI engineering skills.</p>
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

/* ═══ HELPERS ═══ */
function findDayData(dayNum) {
  for (const w of WEEKS) {
    const d = w.days.find(d => d.day === dayNum);
    if (d) return d;
  }
  return null;
}

export default App;
