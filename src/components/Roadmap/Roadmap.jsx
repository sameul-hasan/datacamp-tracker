import { useState } from 'react';
import { MONTHS, WEEKS, COURSES, DAILY_THEORY, TAG_COLORS, SETUP_GUIDE, PRACTICE_PROBLEMS, DAY_INSTRUCTIONS } from '../../data/curriculum';

export default function Roadmap({ tracker, setTab }) {
  const [expandAll, setExpandAll] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section className="fade-in">
      <h2 className="section-head">// Session-by-Session Roadmap</h2>
      <div className="tracker-actions">
        <button className="btn" onClick={() => setExpandAll(prev => !prev)}>
          {expandAll ? 'Collapse All' : 'Expand All'}
        </button>
      </div>

      {MONTHS.map(month => {
        const monthWeeks = WEEKS.filter(w => month.weeks.includes(w.id));
        return (
          <div key={month.id}>
            <div className="phase-header" style={{'--phase-color': month.color}}>
              <div style={{position:'absolute',top:0,left:0,right:0,height:3,background:month.color}} />
              <div className="phase-num">Part {month.id} / 05</div>
              <div className="phase-title">{month.name}</div>
            </div>
            {monthWeeks.map(week => (
              <WeekCard key={week.id} week={week} tracker={tracker} forceOpen={expandAll} setTab={setTab} setActiveModal={setActiveModal} />
            ))}
          </div>
        );
      })}

      {activeModal && <DayModal modalData={activeModal} onClose={() => setActiveModal(null)} />}
    </section>
  );
}

function WeekCard({ week, tracker, forceOpen, setTab, setActiveModal }) {
  const [open, setOpen] = useState(() => week.days.some(d => d.day === tracker.nextDay));
  const progress = tracker.weekProgress(week.id);
  const isComplete = progress === 100;
  const weekNum = parseInt(week.id.replace('w',''));

  const isOpen = forceOpen || open;

  return (
    <div className={`week-card ${isOpen ? 'open' : ''} ${isComplete ? 'complete' : ''}`}>
      <div className="week-header" onClick={() => setOpen(p => !p)}>
        <div className="week-left">
          <span className="week-num">W{String(weekNum).padStart(2,'0')}</span>
          <span className="week-title">{week.title}</span>
        </div>
        <div className="week-right">
          <div className="week-progress-container">
            <span style={{fontFamily:'JetBrains Mono',fontSize:9,color:'var(--muted)'}}>{progress}%</span>
            <div className="week-progress-bar"><div className="week-progress-fill" style={{width:`${progress}%`}} /></div>
          </div>
          <button className="btn" style={{padding:'4px 10px',fontSize:9}} onClick={e => { e.stopPropagation(); tracker.toggleWeek(week.id); }}>
            {isComplete ? '✓ Done' : 'Mark All'}
          </button>
          <span className="week-chevron">▼</span>
        </div>
      </div>
      <div className="week-body-wrapper">
        <div className="week-body">
          {week.days.map(day => {
          const isDone = tracker.state.completedDays[day.day];
          const isTarget = tracker.nextDay === day.day;
          return (
            <div key={day.day}
              className={`day-row ${isDone ? 'completed' : ''} ${isTarget ? 'target' : ''}`}>
              <div className="day-num-col">
                <div className="day-label">D{String(day.day).padStart(2,'0')}</div>
                <button className={`day-toggle ${isDone ? 'done' : ''}`}
                  onClick={() => tracker.toggleDay(day.day)}>{isDone ? '✓' : ''}</button>
              </div>
              <div className="day-content">
                <div className="day-top">
                  <span className="day-topic">
                    {day.topic}
                    {day.tag && <span className="day-topic-tag" style={{color: TAG_COLORS[day.tag]}}>{day.tag}</span>}
                  </span>
                  {day.courseId && COURSES.find(c => c.id === day.courseId) && (
                    <a href={COURSES.find(c => c.id === day.courseId).url} target="_blank" rel="noopener noreferrer" className="course-pill">
                      📘 {COURSES.find(c => c.id === day.courseId).name}
                    </a>
                  )}
                </div>
                {day.task && <div className="day-task">{day.task}</div>}
                
                {/* Smart Navigation Pills */}
                {day.tag === 'CERT' && (
                  <div className="smart-pill cert" onClick={() => setTab('certs')}>🏆 View Certifications</div>
                )}
                {(day.tag === 'HERO' || day.topic.toLowerCase().includes('project') || day.task.toLowerCase().includes('project')) && (
                  <div className="smart-pill project" onClick={() => setTab('projects')}>📁 View Projects</div>
                )}
                {day.tag === 'INT' && (
                  <div className="smart-pill interview" onClick={() => setTab('interview')}>🎯 Interview Prep</div>
                )}

                {/* Detailed Instruction Modals */}
                {(() => {
                  const isSetup = day.topic.includes('Setup');
                  const isPractice = day.topic.includes('Practice') || day.task.includes('Practice');
                  const isRest = day.tag === 'REST';
                  if (isSetup || isPractice || isRest) {
                    return (
                      <div className="smart-pill" style={{background:'rgba(255,255,255,0.1)', color:'var(--text)', border:'1px solid rgba(255,255,255,0.2)'}} onClick={() => setActiveModal(day)}>
                        📖 View Instructions
                      </div>
                    );
                  }
                  return null;
                })()}

                {day.theory && day.theory !== 'Focus on implementation and deep understanding.' && (
                  <div className="day-theory">
                    🧮 {day.theory}
                  </div>
                )}
                {DAILY_THEORY[day.day] && (
                  <div className="day-theory">
                    <div style={{fontWeight:700,color:'var(--accent)',marginBottom:4}}>🧮 Daily Math & Theory</div>
                    <div style={{fontSize:12,lineHeight:1.4}}>{DAILY_THEORY[day.day].math}</div>
                    {DAILY_THEORY[day.day].resource && (
                      <div style={{marginTop:6}}>
                        <a href={DAILY_THEORY[day.day].resource} target="_blank" rel="noopener noreferrer" className="theory-link" style={{fontSize:11, background:'rgba(255,255,255,0.05)', padding:'4px 8px', borderRadius:4, textDecoration:'none', color:'var(--text)'}}>
                          📎 View Resource
                        </a>
                      </div>
                    )}
                  </div>
                )}
                {isDone && <div className="day-xp" style={{marginTop:4}}>+20 XP earned</div>}
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}

function DayModal({ modalData, onClose }) {
  let title = '';
  let content = null;

  const ctx = DAY_INSTRUCTIONS[modalData.day];

  if (ctx) {
    title = ctx.title;
    if (ctx.type === 'setup') {
      content = (
        <div>
          <p style={{color:'var(--text-2)',marginBottom:16}}>Context-Aware Setup Instructions for Day {modalData.day}</p>
          {ctx.content.map((s, i) => (
            <div key={i} style={{marginBottom:16}}>
              <div style={{fontWeight:700, fontSize:14, color:'var(--accent)'}}>{i+1}. {s.title}</div>
              <pre>{s.cmd}</pre>
              <div style={{fontSize:11, color:'var(--muted)', marginTop:4}}>💡 {s.note}</div>
            </div>
          ))}
        </div>
      );
    } else if (ctx.type === 'practice') {
      content = (
        <div>
          <p style={{color:'var(--text-2)',marginBottom:16}}>Test your knowledge with these challenges specifically designed for what you learned this week.</p>
          {ctx.content.map((p, i) => (
            <div key={i} style={{marginBottom:16, background:'rgba(255,255,255,0.02)', padding:12, borderRadius:8, border:'1px solid var(--border)'}}>
              <div style={{display:'flex', justifyContent:'space-between', marginBottom:6}}>
                <span style={{fontSize:11, fontWeight:700, color:'var(--accent)', textTransform:'uppercase'}}>{p.topic}</span>
                <span style={{fontSize:10, padding:'2px 6px', borderRadius:4, background: p.difficulty==='Easy'?'rgba(34,216,122,0.15)':p.difficulty==='Medium'?'rgba(244,185,66,0.15)':'rgba(255,85,119,0.15)', color: p.difficulty==='Easy'?'var(--green)':p.difficulty==='Medium'?'var(--gold)':'#ff5577'}}>{p.difficulty}</span>
              </div>
              <div style={{fontSize:13, lineHeight:1.5}}>{p.q}</div>
            </div>
          ))}
        </div>
      );
    } else if (ctx.type === 'rest') {
      content = (
        <div>
          <p style={{color:'var(--text-2)',marginBottom:16, lineHeight:1.6}}>
            {ctx.content}
          </p>
          <ul style={{background:'rgba(255,255,255,0.03)', padding:'16px 16px 16px 36px', borderRadius:8}}>
            <li><strong>Step away from the screen:</strong> Give your eyes and posture a break.</li>
            <li><strong>Light review only:</strong> Skim over this week's theory notes, but do not start new topics.</li>
            <li><strong>Hydrate & Move:</strong> Physical activity boosts blood flow to the hippocampus.</li>
            <li><strong>Celebrate wins:</strong> Be proud of your consistency.</li>
          </ul>
        </div>
      );
    }
  } else {
    // Fallback logic
    if (modalData.topic.includes('Setup')) {
      title = SETUP_GUIDE.title;
      content = (
        <div>
          <p style={{color:'var(--text-2)',marginBottom:16}}>Follow these commands in your terminal to set up your environment properly.</p>
          {SETUP_GUIDE.steps.map((s, i) => (
            <div key={i} style={{marginBottom:16}}>
              <div style={{fontWeight:700, fontSize:14, color:'var(--accent)'}}>{i+1}. {s.title}</div>
              <pre>{s.cmd}</pre>
              <div style={{fontSize:11, color:'var(--muted)', marginTop:4}}>💡 {s.note}</div>
            </div>
          ))}
        </div>
      );
    } else if (modalData.tag === 'REST') {
      title = 'Rest Protocol Active';
      content = (
        <div>
          <p style={{color:'var(--text-2)',marginBottom:16, lineHeight:1.6}}>
            Rest is not optional; it is a biological requirement for neuroplasticity. Memory consolidation happens during sleep and diffuse-mode thinking.
          </p>
        </div>
      );
    } else {
      const tag = modalData.tag || 'PY';
      const problems = PRACTICE_PROBLEMS[tag] || [];
      title = `${modalData.topic} - Challenges`;
      content = (
        <div>
          <p style={{color:'var(--text-2)',marginBottom:16}}>Test your knowledge with these {tag} challenges.</p>
          {problems.map((p, i) => (
            <div key={i} style={{marginBottom:16, background:'rgba(255,255,255,0.02)', padding:12, borderRadius:8, border:'1px solid var(--border)'}}>
              <div style={{display:'flex', justifyContent:'space-between', marginBottom:6}}>
                <span style={{fontSize:11, fontWeight:700, color:'var(--accent)', textTransform:'uppercase'}}>{p.topic}</span>
                <span style={{fontSize:10, padding:'2px 6px', borderRadius:4, background: p.difficulty==='Easy'?'rgba(34,216,122,0.15)':p.difficulty==='Medium'?'rgba(244,185,66,0.15)':'rgba(255,85,119,0.15)', color: p.difficulty==='Easy'?'var(--green)':p.difficulty==='Medium'?'var(--gold)':'#ff5577'}}>{p.difficulty}</span>
              </div>
              <div style={{fontSize:13, lineHeight:1.5}}>{p.q}</div>
            </div>
          ))}
          {problems.length === 0 && <p>No specific practice problems found. Review your previous code!</p>}
        </div>
      );
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">{title}</div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          {content}
        </div>
      </div>
    </div>
  );
}
